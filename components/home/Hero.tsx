"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { INTRO_DONE, introDone, reducedMotion } from "@/components/Motion";
import { Icon } from "@/components/ui";
import { hero } from "@/lib/content";
import { getLenis } from "@/lib/scroll";

export const FIND = "baynes:find";

/* Asks the shop finder further down to search, then scrolls there. */
export function findShops(query: string) {
  window.dispatchEvent(new CustomEvent(FIND, { detail: query }));
  const target = document.getElementById("shops");
  if (!target) return;
  const lenis = getLenis();
  if (lenis) lenis.scrollTo(target, { duration: 1.6 }); else target.scrollIntoView();
}

/* Full-bleed film of the Lochore bakery and shops (cuts from Bayne's own 2024 film), headline bottom-left, the live
   site's postcode finder as a glass panel bottom-right. The welcome line rises word by word once the intro hands
   over; the film drifts slower than the page as it scrolls away. */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const el = root.current; if (!el) return;
    // React renders `muted` as a property only, so the server HTML can be refused autoplay; start it here.
    const film = el.querySelector("video");
    if (film) { film.muted = true; film.play().catch(() => {}); }
    if (reducedMotion()) return;
    const parts = el.querySelectorAll("[data-hero-part]");
    gsap.set(parts, { opacity: 0, y: 40 });
    let played = false;
    const play = () => {
      if (played) return; played = true;
      gsap.to(parts, { opacity: 1, y: 0, duration: 1.4, ease: "expo.out", stagger: 0.1 });
    };
    if (introDone()) play(); else window.addEventListener(INTRO_DONE, play, { once: true });

    const media = el.querySelector(".hero-media video");
    const drift = gsap.to(media, { yPercent: 18, ease: "none", scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: true } });
    return () => { window.removeEventListener(INTRO_DONE, play); drift.scrollTrigger?.kill(); drift.kill(); };
  }, []);

  return (
    <section className="hero" ref={root} aria-label="Welcome">
      <div className="hero-media">
        <video src="/media/hero.mp4" poster="/media/hero-poster.jpg" autoPlay muted loop playsInline preload="auto" aria-hidden="true" />
        <div className="hero-shade" />
      </div>
      <div className="hero-body wrap">
        <div className="hero-copy">
          <img className="hero-script" src="/brand/great-tasting.svg" alt={hero.tagline} data-hero-part />
          <h1 className="hero-title" data-hero-part>{hero.welcome} <em>{hero.est}</em></h1>
        </div>
        <form className="hero-finder" data-hero-part role="search" onSubmit={(e) => { e.preventDefault(); findShops(query); }}>
          <label htmlFor="hero-postcode" className="label">{hero.finder.label}</label>
          <div className="finder-field">
            <Icon name="pin" />
            <input id="hero-postcode" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={hero.finder.placeholder} autoComplete="postal-code" />
            <button type="submit" className="finder-go" aria-label={hero.finder.cta}><Icon name="search" /></button>
          </div>
        </form>
      </div>
    </section>
  );
}
