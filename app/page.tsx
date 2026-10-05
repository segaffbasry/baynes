import { Header } from "@/components/Header";
import { Logo } from "@/components/Logo";
import { Motion } from "@/components/Motion";
import { Preloader } from "@/components/Preloader";
import { Film } from "@/components/home/Film";
import { Hero } from "@/components/home/Hero";
import { Products } from "@/components/home/Products";
import { ShopFinder } from "@/components/home/ShopFinder";
import { Stamps } from "@/components/home/Stamps";
import { Button, Icon } from "@/components/ui";
import { app, bakery, delivery, intro, legal, nav, people, seventy, shopOnline, signature, socials, story } from "@/lib/content";

/* Homepage. Look and motion after theolly.it (round-logo intro, a circle that opens into the first film, red
   statement blocks whose words fill in on scroll, thin red connector rules, a giant serif word) with Bernice
   Bakery's warmth (outlined marquee behind a rail of rounded product cards, arch-framed photographs, a turning
   sticker). Copy is baynes.co.uk's own, see lib/content.ts. */
export default function Home() {
  return (
    <>
      <Motion />
      <Preloader />
      <a className="skip-link" href="#main">Skip to content</a>
      <div id="top" />
      <Header />
      <main id="main">
        <Hero />

        {/* The app, straight after the hero: the live banner's phone in natural colour on its own warm backdrop, the
            loyalty stamps pressing in beside the copy, and the two store buttons. */}
        <section className="app" id="app" aria-labelledby="app-title">
          <div className="wrap">
            <div className="app-panel">
              <div className="app-copy">
                <p className="label" data-reveal>{app.lead}</p>
                <h2 id="app-title" className="h-display" data-reveal>{app.title}</h2>
                <p data-reveal>{app.text}</p>
                <div data-reveal><Stamps label={app.stamps} note={app.stampsNote} /></div>
                <div className="app-stores" data-reveal>
                  <p className="app-download">{app.download}</p>
                  <ul>{app.stores.map((st) => <li key={st.name}><a href={st.href} className="store-btn"><Icon name={st.icon} /><span><small>{st.label}</small>{st.name}</span></a></li>)}</ul>
                </div>
              </div>
              <figure className="app-phone"><img src="/media/app-phone.webp" alt="The Bayne’s app on a phone: a warm welcome from your favourite baker, Baynesy" data-parallax="8" /></figure>
            </div>
          </div>
        </section>

        {/* The Olly's red statement: a connector rule drops in, the words fill in as they pass, three columns follow. */}
        <section className="statement" id="story-intro" aria-label="About Bayne’s">
          <div className="statement-line" data-draw aria-hidden="true" />
          <div className="wrap">
            <p className="statement-kicker label" data-reveal>{intro.kicker}</p>
            <p className="statement-text" data-fill>{intro.statement}</p>
            <ul className="facts" data-reveal data-stagger>
              {intro.facts.map((f) => (
                <li key={f.value}><span className="fact-value">{f.value}</span><p>{f.text}</p></li>
              ))}
            </ul>
          </div>
        </section>

        {/* The signature morning roll: copy beside two arch-framed photographs (Bernice's arches). */}
        <section className="signature" aria-labelledby="signature-title">
          <div className="wrap signature-grid">
            <div className="signature-copy">
              <p className="label label-red" data-reveal>{signature.label}</p>
              <h2 id="signature-title" className="h-display" data-reveal>{signature.title}</h2>
              <p className="lead" data-reveal>{signature.text}</p>
              <div data-reveal><Button href={signature.cta.href} tone="red">{signature.cta.label}</Button></div>
            </div>
            <div className="signature-arches">
              <figure className="arch arch-tall"><img src="/media/rolls-portrait.webp" alt="Bayne’s morning rolls, fresh from the oven" data-parallax="10" /></figure>
              <figure className="arch arch-short"><img src="/media/pies-portrait.webp" alt="Bayne’s Scotch pies" data-parallax="10" /></figure>
              <div className="sticker" data-spin="160" aria-hidden="true">
                <svg viewBox="0 0 200 200"><defs><path id="sticker-ring" d="M100 100m-74 0a74 74 0 1 1 148 0a74 74 0 1 1-148 0" /></defs>
                  <text><textPath href="#sticker-ring">THE BAYNE’S ROLL · SINCE 1954 · THE BAYNE’S ROLL · SINCE 1954 ·</textPath></text></svg>
              </div>
            </div>
          </div>
        </section>

        <Products />

        {/* Shop online: two Click & Collect cards in Bernice's soft rounded style. */}
        <section className="shop-online" id="shop-online" aria-labelledby="shop-online-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="shop-online-title" className="h-display" data-reveal>{shopOnline.title}</h2>
              <p className="lead" data-reveal>{shopOnline.text}</p>
            </div>
            <div className="order-grid" data-reveal data-stagger>
              {shopOnline.cards.map((c) => (
                <article key={c.title} className="order-card">
                  <div className="order-media"><span className="order-disc" /><img src={c.image} alt="" loading="lazy" /></div>
                  <div className="order-copy">
                    <p className="label">{c.label}</p>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <Button href={c.href} tone="amber">{c.cta}</Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The Olly's giant serif word ("PANETTERIA") becomes the bakery's home, with the bakery photographs. */}
        <section className="bakery" aria-labelledby="bakery-title">
          <div className="wrap">
            <h2 id="bakery-title" className="giant" data-reveal="80">{bakery.word}</h2>
            <div className="bakery-row">
              <p className="lead" data-reveal>{bakery.text}</p>
              <img className="bakery-script" src="/brand/great-tasting.svg" alt="" aria-hidden="true" data-reveal />
            </div>
          </div>
          <div className="bakery-photos">
            <figure className="bakery-photo bakery-photo-a"><img src="/media/people-5.webp" alt="Bayne’s bakers with trays of morning rolls" loading="lazy" data-parallax="14" /></figure>
            <figure className="bakery-photo bakery-photo-b"><img src="/media/transport.webp" alt="A Bayne’s delivery lorry outside a shop" loading="lazy" data-parallax="14" /></figure>
            <figure className="bakery-photo bakery-photo-c"><img src="/media/people-3.webp" alt="A Bayne’s baker in the Lochore bakery" loading="lazy" data-parallax="14" /></figure>
          </div>
        </section>

        {/* Our Story: four chapters in a row along a red rule that draws across, The Olly's thin connectors. */}
        <section className="story" id="story" aria-labelledby="story-title">
          <div className="wrap">
            <div className="story-head">
              <p className="label label-red" data-reveal>{story.label}</p>
              <h2 id="story-title" className="h-display" data-reveal>{story.title}</h2>
            </div>
            <ol className="timeline">
              <span className="timeline-rule" data-draw="x" aria-hidden="true" />
              {story.chapters.map((c) => (
                <li key={c.year} className="chapter" data-reveal>
                  <span className="chapter-dot" aria-hidden="true" />
                  <h3 className="chapter-year">{c.year}</h3>
                  <figure className="chapter-photo">{c.image && <img src={c.image} alt={c.alt} loading="lazy" />}</figure>
                  <p>{c.text[0]}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 70 years: the anniversary roundel beside the live copy, on red. */}
        <section className="seventy" aria-labelledby="seventy-title">
          <div className="wrap seventy-grid">
            <img className="seventy-mark" src="/brand/baynesy-70.webp" alt="Baynesy, the Bayne’s baker, with a 70th birthday cake" loading="lazy" data-reveal="60" />
            <div>
              <h2 id="seventy-title" className="h-display" data-reveal>{seventy.title}</h2>
              {seventy.text.map((t) => <p key={t.slice(0, 20)} className="lead" data-reveal>{t}</p>)}
              <div data-reveal><Button href={story.cta.href} tone="cream">{story.cta.label}</Button></div>
            </div>
          </div>
        </section>

        <Film />

        <ShopFinder />

        {/* People: the careers "Our Purpose" line filling on scroll over a strip of team photographs, then the values. */}
        <section className="people" id="careers" aria-labelledby="people-title">
          <div className="wrap">
            <p className="label" data-reveal>{people.label}</p>
            <h2 id="people-title" className="people-purpose" data-fill>{people.purpose[0]}<em>{people.purpose[1]}</em>{people.purpose[2]}</h2>
          </div>
          <div className="people-strip" aria-label="Bayne’s people">
            {people.photos.map((p, i) => <figure key={p.src} className={`people-photo people-photo-${i}`} data-reveal="80"><img src={p.src} alt={p.alt} loading="lazy" data-parallax="10" /></figure>)}
          </div>
          <div className="wrap">
            <h3 className="values-title" data-reveal>{people.valuesTitle}</h3>
            <ul className="values" data-reveal data-stagger>
              {people.values.map((v) => <li key={v.title}><h4>{v.title}</h4><p>{v.text}</p></li>)}
            </ul>
            <div className="people-cta" data-reveal><Button href={people.cta.href} tone="amber">{people.cta.label}</Button></div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <img className="footer-script" src="/brand/great-tasting.svg" alt="Great tasting Scottish baking" />
            <a href="#top" className="footer-logo" aria-label="Bayne’s the Family Bakers, back to the top"><Logo title="" badge={false} /></a>
          </div>
          <div className="footer-grid">
            <nav aria-label="Footer">
              <p className="label">Bayne’s</p>
              <ul>{nav.map((l) => <li key={l.label}><a href={l.href} className="u-link">{l.label}</a></li>)}</ul>
            </nav>
            <div>
              <p className="label">Order for delivery</p>
              <ul>{delivery.map((d) => <li key={d.name}><a href={d.href} className="u-link">{d.name}</a></li>)}</ul>
            </div>
            <div>
              <p className="label">Follow us</p>
              <ul className="footer-social">{socials.map((s) => <li key={s.name}><a href={s.href} aria-label={s.name}><Icon name={s.icon} /></a></li>)}</ul>
            </div>
          </div>
          <div className="footer-bar">
            <p>{legal.copyright}</p>
            <ul>{legal.links.map((l) => <li key={l.label}><a href={l.href} className="u-link">{l.label}</a></li>)}</ul>
          </div>
        </div>
      </footer>
    </>
  );
}
