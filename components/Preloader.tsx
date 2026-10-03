"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Roundel } from "@/components/Logo";
import { INTRO_DONE, reducedMotion } from "@/components/Motion";
import { getLenis } from "@/lib/scroll";

/* The Olly opens on its round logo over a pale field, then the first photograph grows out of a circle to fill the
   screen. Here the Bayne's roundel builds part by part (disc, wreath, wordmark, tagline), shrinks away, and the hero
   film opens out of a circle in its place. Plays once per session. */
export function Preloader() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const finish = () => {
      html.classList.remove("is-loading");
      try { sessionStorage.setItem("baynes-intro", "1"); } catch {}
      getLenis()?.start();
      window.dispatchEvent(new Event(INTRO_DONE));
    };
    const el = root.current;
    if (!html.classList.contains("is-loading") || !el || reducedMotion()) {
      html.classList.remove("is-loading");
      requestAnimationFrame(() => window.dispatchEvent(new Event(INTRO_DONE)));
      return;
    }
    window.scrollTo(0, 0);
    const q = (s: string) => el.querySelector(`[data-part="${s}"]`);
    const media = document.querySelector<HTMLElement>(".hero-media");
    const tl = gsap.timeline({ defaults: { ease: "expo.out" }, onComplete: () => { finish(); el.style.display = "none"; } });
    tl.fromTo(q("disc"), { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 1.1 }, 0.15)
      .fromTo(q("emblem"), { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.9 }, 0.55)
      .fromTo(q("word"), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.9 }, 0.7)
      .fromTo(q("tagline"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.9 }, 0.85)
      .to(el.querySelector(".preloader-mark"), { scale: 0.6, opacity: 0, duration: 0.7, ease: "power3.in" }, 2.05);
    if (media) {
      tl.set(media, { clipPath: "circle(0% at 50% 50%)" }, 0)
        .to(el, { backgroundColor: "rgba(255,254,247,0)", duration: 0.5, ease: "none" }, 2.35)
        .fromTo(media, { clipPath: "circle(9% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", duration: 1.5, ease: "power3.inOut" }, 2.35)
        .add(() => window.dispatchEvent(new Event(INTRO_DONE)), 3.05);
    }
    return () => { tl.kill(); };
  }, []);

  return (
    <div className="preloader" ref={root} aria-hidden="true">
      <div className="preloader-mark"><Roundel title="" /></div>
    </div>
  );
}
