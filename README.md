# Bayne's the Family Bakers: homepage demo

A private redesign of the baynes.co.uk homepage. Next.js 16, GSAP and Lenis. It is not indexed (`noindex`), and every
outbound link is held on the page.

- **Look and motion:** theolly.it contributes the roundel intro, a circle that opens into the hero film, red
  statement blocks whose words fill in as you scroll, thin red connector rules, a giant serif word and the shop cards
  on red. bernicebakery.com contributes the outlined marquee behind a rail of rounded product cards, the arch-framed
  photographs, a turning sticker and pill buttons.
- **Brand:** Red #A32035, Maroon #7A152F, Amber #FFB75B and Cream #FFFEF7, all taken from the live vector logo.
  Type is Noto Serif Display (condensed width) with Hanken Grotesk. The script accent is Bayne's own
  "great tasting Scottish baking" SVG.
- **Copy:** `lib/content.ts`, verbatim from the live site, with no em or en dashes. `lib/shops.ts` holds all 73
  shops from the live directory. The shop finder filters them on the page by postcode, town or street.
- **Media:** `scripts/media.sh` builds `public/media` from the live photos and Bayne's two YouTube films.
  `scripts/logo.py` splits the live vector logo into its wreath, wordmark and tagline (`lib/logo.ts`).
- **Analytics:** PostHog EU (`lib/posthog.ts`) records pageviews, autocapture, recordings and scroll depth. Surveys
  are off.

```bash
npm run dev   # http://127.0.0.1:3037
```
