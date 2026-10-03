import type { ReactNode } from "react";
import { brandIcons } from "@/lib/brand-icons";

const glyphs = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  left: <path d="M19 12H5M11 6l-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />,
  play: <path d="M8 5.5v13l11-6.5z" fill="currentColor" />,
  pause: <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />,
  search: <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></g>,
  pin: <g fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></g>,
  phone: <path d="M6.6 3.5h3l1.5 4-2 1.3a11 11 0 0 0 6.1 6.1l1.3-2 4 1.5v3a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.5 5.6a2 2 0 0 1 2.1-2.1z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />,
  sound: <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4zM15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
  mute: <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4zM16 9.5l5 5M21 9.5l-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />,
};

export type IconName = keyof typeof glyphs | keyof typeof brandIcons;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const brand = (brandIcons as Record<string, string>)[name];
  return (
    <svg className={`icon ${className ?? ""}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {brand ? <path d={brand} fill="currentColor" /> : glyphs[name as keyof typeof glyphs]}
    </svg>
  );
}

/* Pill button, Bernice's rounded "Add to cart" in the Bayne's palette. The label rolls up on hover. */
export function Button({ href, children, tone = "red", size, className, icon = "arrow" }: {
  href: string; children: ReactNode; tone?: "red" | "amber" | "cream" | "line"; size?: "sm"; className?: string; icon?: IconName | null;
}) {
  return (
    <a href={href} className={`btn btn-${tone}${size ? ` btn-${size}` : ""} ${className ?? ""}`}>
      <span className="btn-label"><span data-text={typeof children === "string" ? children : undefined}>{children}</span></span>
      {icon && <span className="btn-icon"><Icon name={icon} /></span>}
    </a>
  );
}
