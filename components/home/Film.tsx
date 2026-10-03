"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui";
import { film } from "@/lib/content";

/* Bayne's 2024 film, played on the page. The frame widens from inset to full-bleed as it scrolls in (The Olly's
   photographs do the same); a round play button follows the pointer across the poster. */
export function Film() {
  const video = useRef<HTMLVideoElement>(null);
  const cursor = useRef<HTMLSpanElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    const v = video.current; if (!v) return;
    if (v.paused) { v.play(); setStarted(true); } else v.pause();
  };

  const follow = (e: React.PointerEvent<HTMLDivElement>) => {
    const c = cursor.current; if (!c || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    c.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`;
  };

  return (
    <section className="film" id="film" aria-labelledby="film-title">
      <div className="wrap film-head">
        <h2 id="film-title" className="h-display" data-reveal>{film.title}</h2>
      </div>
      <div className={`film-frame${started ? " is-started" : ""}${playing ? " is-playing" : ""}`} onPointerMove={follow} data-reveal="60">
        <video ref={video} src={film.src} poster={film.poster} playsInline preload="metadata" controls={started}
          onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label={film.caption} />
        {!started && (
          <button className="film-play" onClick={toggle} aria-label={`Play film: ${film.caption}`}>
            <span className="film-cursor" ref={cursor}><span className="film-cursor-dot"><Icon name="play" /><span>Play</span></span></span>
          </button>
        )}
      </div>
      <p className="wrap film-caption">{film.caption}</p>
    </section>
  );
}
