"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { reducedMotion } from "@/components/Motion";
import { Icon } from "@/components/ui";
import { delivery, headerNav, hero, nav, socials } from "@/lib/content";
import { getLenis } from "@/lib/scroll";

/* Full-screen menu with every page of the live navigation. A red panel wipes down, the links rise one after
   another in the display serif. Esc closes, focus is trapped and returned. */
function Menu({ open, close }: { open: boolean; close: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const el = root.current; if (!el) return;
    const t = gsap.timeline({ paused: true, onReverseComplete: () => { el.style.visibility = "hidden"; } });
    t.fromTo(el, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "power3.inOut" }, 0)
      .fromTo(el.querySelectorAll("[data-menu-in]"), { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "expo.out", stagger: 0.04 }, 0.35);
    tl.current = t;
    return () => { t.kill(); };
  }, []);

  useEffect(() => {
    const el = root.current, t = tl.current; if (!el || !t) return;
    const lenis = getLenis();
    if (open) {
      el.style.visibility = "visible";
      t.timeScale(reducedMotion() ? 50 : 1).play();
      lenis?.stop();
      const focusables = () => Array.from(el.querySelectorAll<HTMLElement>("a, button"));
      focusables()[0]?.focus();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") { close(); return; }
        if (e.key !== "Tab") return;
        const f = focusables(), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      };
      document.addEventListener("keydown", onKey);
      return () => { document.removeEventListener("keydown", onKey); };
    }
    lenis?.start();
    if (t.progress() > 0) t.timeScale(reducedMotion() ? 50 : 1.5).reverse();
  }, [open, close]);

  return (
    <div className="menu" id="site-menu" ref={root} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open} inert={!open} data-lenis-prevent>
      <div className="menu-inner wrap">
        <nav aria-label="Bayne’s">
          <ul className="menu-links">
            {nav.map((l) => <li key={l.label} data-menu-in><a href={l.href}>{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="menu-side">
          <img className="menu-script" src="/brand/great-tasting.svg" alt={hero.tagline} data-menu-in />
          <div data-menu-in>
            <p className="label">Order for delivery</p>
            <ul className="menu-small">{delivery.map((d) => <li key={d.name}><a href={d.href}>{d.name}</a></li>)}</ul>
          </div>
          <div data-menu-in>
            <p className="label">Follow us</p>
            <ul className="menu-small">{socials.map((s) => <li key={s.name}><a href={s.href}><Icon name={s.icon} />{s.name}</a></li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Floating pill header: the red strip logo, five of the live sections, the shop finder and a menu button. It slides
   away on the way down and comes back on the way up; over the cream sections it gains a solid backing. */
export function Header() {
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => { setOpen(false); toggle.current?.focus(); }, []);

  useEffect(() => {
    const el = bar.current; if (!el) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY, d = y - last;
      el.classList.toggle("is-solid", y > window.innerHeight * 0.6);
      if (y < 160) { el.classList.remove("is-hidden"); last = y; return; }
      if (Math.abs(d) < 6) return;
      el.classList.toggle("is-hidden", d > 0);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = nav.filter((l) => headerNav.includes(l.label));
  return (
    <>
      <header className={`site-header${open ? " is-open" : ""}`} ref={bar} data-hero-in>
        <div className="header-pill">
          <a href="#top" className="header-logo" aria-label="Bayne’s the Family Bakers, back to the top"><Logo title="" /></a>
          <nav className="header-nav" aria-label="Main">
            <ul>{links.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
          </nav>
          <a href="#shops" className="btn btn-amber btn-sm header-cta">{hero.finder.label}</a>
          <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="site-menu" onClick={() => (open ? close() : setOpen(true))}>
            <span className="menu-toggle-label">{open ? "Close" : "Menu"}</span>
            <span className="menu-toggle-lines" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </header>
      <Menu open={open} close={close} />
    </>
  );
}
