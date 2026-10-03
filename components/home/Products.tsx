"use client";

import { useEffect, useRef, useState } from "react";
import { Button, Icon } from "@/components/ui";
import { products } from "@/lib/content";

/* Bernice's bestseller row: a giant outlined word runs behind a sideways rail of rounded cards. Here the word is
   "Fresh Everyday" and the cards are the nine live product ranges, each with its own cut-out photograph sitting on
   a warm disc. The rail scrolls natively (trackpad, touch, keyboard), drags with a mouse, and has arrow buttons. */
export function Products() {
  const rail = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const el = rail.current; if (!el) return;
    const update = () => setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    // Mouse drag; touch and trackpads already scroll natively.
    let down = false, startX = 0, startLeft = 0, moved = false;
    const onDown = (e: PointerEvent) => { if (e.pointerType !== "mouse") return; down = true; moved = false; startX = e.clientX; startLeft = el.scrollLeft; };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) { moved = true; el.classList.add("is-dragging"); }
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => { down = false; el.classList.remove("is-dragging"); };
    const onClick = (e: MouseEvent) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } };
    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("click", onClick, true);
    return () => {
      el.removeEventListener("scroll", update); window.removeEventListener("resize", update);
      el.removeEventListener("pointerdown", onDown); window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp); el.removeEventListener("click", onClick, true);
    };
  }, []);

  const step = (dir: number) => {
    const el = rail.current; if (!el) return;
    const card = el.querySelector("li");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 320) + 24), behavior: "smooth" });
  };

  return (
    <section className="products" id="products" aria-labelledby="products-title">
      <div className="products-marquee" aria-hidden="true">
        <div className="marquee-track">{Array.from({ length: 6 }, (_, i) => <span key={i}>{products.marquee}</span>)}</div>
      </div>
      <div className="wrap products-head">
        <h2 id="products-title" className="h-display" data-reveal>{products.title}</h2>
        <div className="products-intro" data-reveal>
          <p>{products.text}</p>
          <div className="products-controls">
            <button className="round-btn" onClick={() => step(-1)} disabled={edge.start} aria-label="Previous products"><Icon name="left" /></button>
            <button className="round-btn" onClick={() => step(1)} disabled={edge.end} aria-label="Next products"><Icon name="arrow" /></button>
          </div>
        </div>
      </div>
      <ul className="product-rail" ref={rail} aria-label="Product ranges">
        {products.items.map((p) => (
          <li key={p.title} className="product-card">
            <a href={p.href} draggable={false}>
              <div className="product-media"><span className="product-disc" /><img src={p.image} alt="" loading="lazy" draggable={false} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="product-more">{products.cta.label}<Icon name="arrow" /></span>
            </a>
          </li>
        ))}
      </ul>
      <div className="wrap products-foot">
        <Button href={products.cta.href} tone="red">{products.cta.label}</Button>
        <Button href={products.allergens.href} tone="line">{products.allergens.label}</Button>
      </div>
    </section>
  );
}
