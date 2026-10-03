"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { getLenis, setLenis } from "@/lib/scroll";

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* One easing for the page, read off theolly.it: its Elementor motion runs on a long ease-out (GSAP "expo.out" for
   reveals, "power2.inOut" for the hero circle). */
export const EASE = "expo.out";

// Fires once the intro has finished (or straight away when it is skipped), so the hero can make its entrance.
export const INTRO_DONE = "baynes:intro-done";
export const introDone = () => !document.documentElement.classList.contains("is-loading");

/* Splits a block of text into word spans, keeping any inline elements (an <em> accent) intact. */
function splitWords(el: HTMLElement) {
  if (el.dataset.split) return Array.from(el.querySelectorAll<HTMLElement>(".w"));
  el.dataset.split = "1";
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const parts = (child.textContent ?? "").split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          const s = document.createElement("span"); s.className = "w"; s.textContent = p; frag.appendChild(s);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1) walk(child);
    });
  };
  walk(el);
  return Array.from(el.querySelectorAll<HTMLElement>(".w"));
}

/* Page-wide behaviour: Lenis smooth scroll, the link guard (a private demo never leaves the page), and every
   scroll-driven effect declared in the markup with data attributes:
   data-reveal      fade and rise into place once (children stagger with data-stagger)
   data-fill        The Olly's statement: words go from faint to solid as the block scrolls through
   data-parallax    image drifts against the scroll inside its frame
   data-draw        a thin rule that grows along its length as it scrolls through (The Olly's red connectors)
   data-spin        a sticker that turns with the scroll */
export function Motion() {
  useEffect(() => {
    // Links keep their live hrefs but never navigate: this is a private demo.
    const guard = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = href === "#top" ? 0 : document.querySelector<HTMLElement>(href);
        if (target === null) return;
        const lenis = getLenis();
        if (lenis) lenis.scrollTo(target as HTMLElement | number, { offset: 0, duration: 1.4 });
        else if (typeof target === "number") window.scrollTo({ top: 0 }); else target.scrollIntoView();
        return;
      }
      e.preventDefault();
    };
    document.addEventListener("click", guard, true);
    document.addEventListener("auxclick", guard, true);

    if (reducedMotion()) return () => { document.removeEventListener("click", guard, true); document.removeEventListener("auxclick", guard, true); };

    // Sideways trackpad swipes are left to the browser so the product rail scrolls natively.
    const lenis = new Lenis({ lerp: 0.1, virtualScroll: (d) => Math.abs(d.deltaX) <= Math.abs(d.deltaY) });
    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    if (document.documentElement.classList.contains("is-loading")) lenis.stop();

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const kids = el.hasAttribute("data-stagger") ? Array.from(el.children) : [el];
        gsap.fromTo(kids, { y: Number(el.dataset.reveal) || 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1.2, ease: EASE, stagger: 0.09,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-fill]").forEach((el) => {
        const words = splitWords(el);
        gsap.fromTo(words, { opacity: 0.18 }, {
          opacity: 1, ease: "none", stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 12;
        gsap.fromTo(el, { yPercent: -amount / 2, scale: 1.12 }, {
          yPercent: amount / 2, scale: 1.12, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
        const horizontal = el.dataset.draw === "x";
        gsap.fromTo(el, horizontal ? { scaleX: 0 } : { scaleY: 0 }, {
          ...(horizontal ? { scaleX: 1 } : { scaleY: 1 }), ease: "none",
          scrollTrigger: { trigger: el, start: "top 85%", end: "bottom 55%", scrub: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-spin]").forEach((el) => {
        gsap.to(el, { rotate: Number(el.dataset.spin) || 120, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      document.removeEventListener("click", guard, true);
      document.removeEventListener("auxclick", guard, true);
      window.removeEventListener("load", refresh);
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
  return null;
}
