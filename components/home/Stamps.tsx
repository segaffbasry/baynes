"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Roundel } from "@/components/Logo";
import { reducedMotion } from "@/components/Motion";

/* The app's loyalty card: six stamps that press in one by one as the card scrolls into view, the sixth turning into
   the free hot drink. Purely illustrative; the wording beside it is the live App page's. */
export function Stamps({ label }: { label: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current; if (!el || reducedMotion()) return;
    const stamps = el.querySelectorAll(".stamp-mark");
    const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 75%", once: true } });
    tl.fromTo(stamps, { scale: 1.8, opacity: 0, rotate: -25 }, { scale: 1, opacity: 1, rotate: 0, duration: 0.45, ease: "back.out(2.2)", stagger: 0.22 })
      .fromTo(el.querySelector(".stamp-card-free"), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, ease: "expo.out" }, "-=0.1");
    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, []);

  return (
    <div className="stamp-card" ref={root} aria-label={label} role="img">
      <div className="stamp-card-top">
        <Roundel className="stamp-card-logo" title="" />
        <span className="stamp-card-title">Rewards</span>
      </div>
      <ol className="stamp-grid" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className={i === 5 ? "is-free" : undefined}>
            <span className="stamp-mark">{i === 5 ? <CupIcon /> : <Roundel title="" />}</span>
          </li>
        ))}
      </ol>
      <p className="stamp-card-free" aria-hidden="true">{label}</p>
    </div>
  );
}

function CupIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M12 16h22l-2.6 24a3 3 0 0 1-3 2.7H17.6a3 3 0 0 1-3-2.7z" fill="var(--cream)" />
      <path d="M10 12.5h26v4H10z" fill="var(--cream)" />
      <path d="M14 24h18v8H14z" fill="var(--red)" />
      <path d="M20 4c-2 2.5 2 3.5 0 6M26 4c-2 2.5 2 3.5 0 6" stroke="var(--cream)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
