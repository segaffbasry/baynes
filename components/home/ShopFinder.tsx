"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FIND } from "@/components/home/Hero";
import { Button, Icon } from "@/components/ui";
import { finder } from "@/lib/content";
import { shops, type Shop } from "@/lib/shops";

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

/* Match a query against a shop. A postcode narrows from the full code down to its district and area
   ("KY5 8NR" finds Ballingry first, then the rest of KY5, then KY); anything else is matched as words against the
   name, street and town. Lower score sorts first. */
function score(shop: Shop, q: string): number | null {
  const query = q.trim().toLowerCase();
  if (!query) return 0;
  const pc = norm(shop.postcode), nq = norm(query);
  const district = shop.postcode.toLowerCase().split(" ")[0];
  const looksLikePostcode = /^[a-z]{1,2}\d/.test(nq);
  if (looksLikePostcode) {
    if (pc.startsWith(nq)) return 0;
    const qDistrict = query.split(/\s+/)[0];
    if (district === qDistrict) return 1;
    const area = (s: string) => s.match(/^[a-z]+/)?.[0];
    if (area(district) === area(qDistrict)) return 2;
    return null;
  }
  const hay = `${shop.name} ${shop.street} ${shop.town}`.toLowerCase();
  const words = query.split(/\s+/).filter(Boolean);
  return words.every((w) => hay.includes(w)) ? (shop.town.toLowerCase().startsWith(words[0]) ? 0 : 1) : null;
}

/* The Olly lists its five shops as a grid of cards on red, each with address, phone and opening hours. Bayne's has
   73, so the grid sits under the live site's postcode search and filters as you type. Before any search it shows
   the shop nearest the bakery and its neighbours, Lochore first. */
export function ShopFinder() {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(6);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const on = (e: Event) => { const q = (e as CustomEvent<string>).detail ?? ""; setQuery(q); setLimit(6); if (!q) input.current?.focus({ preventScroll: true }); };
    window.addEventListener(FIND, on);
    return () => window.removeEventListener(FIND, on);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) {
      const home = ["Lochore", "Ballingry", "Lochgelly", "Cowdenbeath", "Kelty", "Kinross"];
      return home.flatMap((t) => shops.filter((s) => s.town === t)).concat(shops.filter((s) => !home.includes(s.town)));
    }
    return shops.map((s) => ({ s, k: score(s, query) })).filter((r) => r.k !== null)
      .sort((a, b) => (a.k as number) - (b.k as number)).map((r) => r.s);
  }, [query]);

  const shown = results.slice(0, limit);
  const towns = useMemo(() => Array.from(new Set(shops.map((s) => s.town))), []);

  return (
    <section className="shops" id="shops" aria-labelledby="shops-title">
      <div className="shops-line" data-draw aria-hidden="true" />
      <div className="wrap">
        <div className="shops-head">
          <h2 id="shops-title" className="h-display" data-reveal>{finder.title}</h2>
          <form className="shops-search" role="search" onSubmit={(e) => e.preventDefault()} data-reveal>
            <label htmlFor="shop-query" className="sr-only">{finder.placeholder}</label>
            <div className="finder-field finder-field-light">
              <Icon name="pin" />
              <input id="shop-query" ref={input} value={query} onChange={(e) => { setQuery(e.target.value); setLimit(6); }} placeholder={finder.placeholder} autoComplete="postal-code" />
              {query && <button type="button" className="finder-clear" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
              <span className="finder-go" aria-hidden="true"><Icon name="search" /></span>
            </div>
            <p className="shops-hint" aria-live="polite">{query.trim() ? (results.length ? `${results.length} ${results.length === 1 ? "shop" : "shops"}` : finder.empty) : finder.hint}</p>
          </form>
        </div>

        <ul className="shop-grid">
          {shown.map((s) => (
            <li key={s.name} className="shop-card">
              <h3>{s.name}</h3>
              {s.note && <p className="shop-note">{s.note}</p>}
              <address>{s.street}, {s.town}, {s.postcode}</address>
              <a className="shop-phone" href={`tel:${s.phone.replace(/\s/g, "")}`}><Icon name="phone" />{s.phone}</a>
              <dl className="shop-hours">
                {s.hours.map(([d, h]) => <div key={d}><dt>{d}</dt><dd>{h}</dd></div>)}
              </dl>
              <a className="shop-dir" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`Bayne's ${s.street} ${s.postcode}`)}`}>{finder.directions}<Icon name="arrow" /></a>
            </li>
          ))}
        </ul>

        <div className="shops-foot">
          {results.length > limit && <button className="btn btn-cream" onClick={() => setLimit((l) => l + 9)}><span className="btn-label"><span>Show more shops</span></span></button>}
          <Button href={finder.cta.href} tone="line">{finder.cta.label}</Button>
        </div>
      </div>

      <div className="towns" aria-label="Towns with a Bayne’s shop">
        <div className="marquee-track">{[0, 1].map((k) => <span key={k} aria-hidden={k === 1}>{towns.map((t) => <button key={t} type="button" tabIndex={k ? -1 : 0} onClick={() => { setQuery(t); setLimit(6); }}>{t}</button>)}</span>)}</div>
      </div>
    </section>
  );
}
