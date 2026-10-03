import { logo } from "@/lib/logo";

/* The live strip logo, redrawn from its own vector: wheat wreath, BAYNE'S on its maroon shadow, THE FAMILY BAKERS.
   `badge` keeps the red field behind it as on baynes.co.uk; without it the parts sit on whatever is underneath. */
export function Logo({ badge = true, title = "Bayne’s the Family Bakers", className }: { badge?: boolean; title?: string; className?: string }) {
  return (
    <svg className={className} viewBox="96 0 760 106" role={title ? "img" : undefined} aria-label={title || undefined} aria-hidden={title ? undefined : true}>
      {badge && <rect x="96" y="0" width="760" height="106" fill="var(--red)" />}
      <path d={logo.emblem} fill="var(--amber)" />
      <path d={logo.shadow} fill="var(--maroon)" />
      <path d={logo.word} fill="var(--cream)" />
      <path d={logo.tagline} fill="var(--amber)" />
    </svg>
  );
}

/* The circular master logo (as on careers.baynes.co.uk), recomposed from the same parts: wreath on top, the
   wordmark across the middle, the tagline beneath. Each part is an inner group so the preloader can animate it without
   touching the placement on the outer one. */
export function Roundel({ className, title = "Bayne’s the Family Bakers" }: { className?: string; title?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" role={title ? "img" : undefined} aria-label={title || undefined} aria-hidden={title ? undefined : true}>
      <circle data-part="disc" cx="200" cy="200" r="200" fill="var(--red)" />
      <g transform="translate(200 100) scale(1.22) translate(-145 -53.5)"><g data-part="emblem">
        <path d={logo.emblem} fill="var(--amber)" />
      </g></g>
      <g transform="translate(200 205) scale(1.06) translate(-410 -51.5)"><g data-part="word">
        <path d={logo.shadow} fill="var(--maroon)" />
        <path d={logo.word} fill="var(--cream)" />
      </g></g>
      <g transform="translate(200 278) scale(1.12) translate(-725.5 -53)"><g data-part="tagline">
        <path d={logo.tagline} fill="var(--amber)" />
      </g></g>
    </svg>
  );
}
