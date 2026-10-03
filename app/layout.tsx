import type { Metadata, Viewport } from "next";
import { posthogSnippet } from "@/lib/posthog";
import "./globals.css";

// The live homepage's own title, with the dash it carries rewritten.
export const metadata: Metadata = {
  title: "Bayne’s the Family Bakers",
  description: "Welcome to Bayne’s the Family Bakers. Est. 1954. Great tasting Scottish baking.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = { themeColor: "#a32035" };

/* `js` (and the preloader's `is-loading`) is set before first paint, unless reduced motion is requested, so reveal
   targets can start hidden without a flash. The preloader plays once per session (`baynes-intro`); a repeat visit
   gets `js` only. Without JavaScript nothing is hidden and the preloader is never shown. */
const boot = "(function(){var d=document.documentElement;if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js');var s=null;try{s=sessionStorage.getItem('baynes-intro')}catch(e){}if(s!=='1')d.classList.add('is-loading')})()";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <script dangerouslySetInnerHTML={{ __html: posthogSnippet }} />
        <link rel="preload" href="/fonts/noto-serif-display-latin-standard-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/hanken-grotesk-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/media/hero-poster.jpg" as="image" />
        <noscript><style>{".preloader{display:none!important}"}</style></noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
