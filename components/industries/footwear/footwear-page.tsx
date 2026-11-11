import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  BarChart3,
  Boxes,
  Calculator,
  Check,
  Footprints,
  LayoutDashboard,
  ReceiptText,
  Ruler,
  ShoppingCart,
  TrendingUp,
  Truck,
} from "lucide-react";

import { PriceText } from "@/components/currency/currency-provider";
import { getDictionary } from "@/components/i18n/dictionary";
import { featureHref, getCatalog } from "@/components/landing/data/catalog";
import type { Faq, Industry, PageSection } from "@/components/landing/data/catalog";
import { MarketingHeader } from "@/components/landing/sections/marketing-header";
import { SiteFooter } from "@/components/landing/sections/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { DEMO_APPLICATION_URL, getWhatsAppContactUrl } from "@/lib/contact";
import { localizePath } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { pageSchema } from "@/lib/seo";

import { footwearContent } from "./content";
import { FootwearMotion } from "./footwear-motion";
import "./footwear.css";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45];
/** Demo stock per colour row, size 38 → 45. */
const sizeStock = [
  [4, 6, 2, 1, 3, 5, 1, 0],
  [2, 0, 5, 7, 4, 2, 3, 1],
  [0, 3, 4, 2, 6, 1, 0, 2],
];
const totalPairs = sizeStock.flat().reduce((sum, n) => sum + n, 0);
const featureIcons = [Ruler, ArrowLeftRight, Truck];
const dashNavIcons = [LayoutDashboard, ReceiptText, Boxes, ShoppingCart, Calculator, BarChart3];
/** Demo weekly sales (% of chart height) for two outlets, Mon → Sun. */
const salesBars: [number, number][] = [[42, 30], [55, 38], [48, 44], [62, 50], [78, 60], [96, 82], [88, 70]];
const donutColours = ["#f45a21", "#171717", "#ff986f", "#a86a3d"];
const plWidths = [100, 61, 20];

type FootwearPhoto = { src: string; width: number; height: number };
const shoePhoto: FootwearPhoto ={ src: "/assets/industries/footwear/sneakers-pair.webp", width: 1320, height: 1231 };

type Props = {
  locale: Locale;
  path: string;
  industry: Industry;
  oneSystem: PageSection;
  faqs: Faq[];
};

export function FootwearIndustryPage({ locale, path, industry, oneSystem, faqs }: Props) {
  const t = getDictionary(locale);
  const c = footwearContent[locale];
  const catalog = getCatalog(locale);
  const href = (target: string) => localizePath(locale, target);
  const contactUrl = getWhatsAppContactUrl(c.whatsappMessage);
  const d = c.dashboard;
  const [sizeSection] = industry.sections;
  // Donut: each category's arc starts where the previous one ended (25 = 12 o'clock).
  const donutSegments = d.stock.categories.map(([, value], i, all) => ({
    value,
    offset: 25 - all.slice(0, i).reduce((sum, [, v]) => sum + v, 0),
  }));
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <main className="qa-site fw-page" id="top">
      <JsonLd data={pageSchema({ locale, path, name: industry.h1, description: industry.metaDescription })} />
      <JsonLd data={faqSchema} />
      <MarketingHeader locale={locale} />

      <FootwearMotion>
        <article>
          {/* Hero */}
          <section className="fw-hero">
            <div className="fw-hero-bg" aria-hidden="true">
              <span className="fw-blob fw-blob-a" />
              <span className="fw-blob fw-blob-b" />
              <span className="fw-grid-lines" />
            </div>
            <div className="qa-container fw-hero-grid">
              <div className="fw-hero-copy">
                <nav className="fw-breadcrumbs" aria-label={t.common.breadcrumb}>
                  <Link href={href("/")}>{t.common.home}</Link>
                  <span aria-hidden="true">/</span>
                  <Link href={href("/industries")}>{t.common.industries}</Link>
                  <span aria-hidden="true">/</span>
                  <span aria-current="page">{industry.title}</span>
                </nav>
                <p className="fw-badge"><Footprints aria-hidden="true" />{c.heroBadge}</p>
                <h1 className="fw-title">
                  {industry.h1.split(" ").map((word, index) => (
                    <Fragment key={`${word}-${index}`}>
                      <span className="fw-word-wrap"><span className="fw-word">{word}</span></span>{" "}
                    </Fragment>
                  ))}
                </h1>
                <p className="fw-intro"><PriceText>{industry.intro}</PriceText></p>
                <div className="fw-actions">
                  <WhatsAppButton href={contactUrl} size="lg" label={c.whatsapp} />
                  <Button asChild size="lg" variant="outline" className="fw-outline-btn">
                    <a href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                      {t.common.tryFreeDemo}<ArrowRight aria-hidden="true" />
                    </a>
                  </Button>
                </div>
                <ul className="fw-proof">
                  {t.seoPage.proof.map((item) => (
                    <li key={item}><Check aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="fw-hero-visual" role="img" aria-label={c.heroVisualLabel}>
                <div className="fw-stage" data-parallax-root>
                  <span className="fw-stage-ring" aria-hidden="true" />
                  <div className="fw-pos-card" data-depth="0.4">
                    <div className="fw-pos-head">
                      <span>{c.heroCard.article}</span>
                      <em>{c.heroCard.inStock}</em>
                    </div>
                    <div className="fw-pos-sizes">
                      {sizes.slice(1, 7).map((size) => (
                        <span key={size} className={size === 42 ? "is-active" : undefined}>{size}</span>
                      ))}
                    </div>
                    <ul>
                      {c.heroCard.outlets.map(([outlet, pairs]) => (
                        <li key={outlet}><i />{outlet}<b>{pairs}</b></li>
                      ))}
                    </ul>
                  </div>
                  <Image
                    className="fw-sneaker"
                    data-depth="1"
                    src={shoePhoto.src}
                    alt={c.sneakerAlt}
                    width={shoePhoto.width}
                    height={shoePhoto.height}
                    sizes="(min-width: 960px) 520px, 80vw"
                    priority
                    unoptimized
                  />
                  {c.heroChips.map((chip, index) => (
                    <div className={`fw-chip fw-chip-${index + 1}`} data-depth={0.6 + index * 0.25} key={chip.label}>
                      <span>{chip.label}</span>
                      <strong>{chip.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Marquee */}
          <section className="fw-marquee" aria-label={c.marqueeLabel}>
            <div className="fw-marquee-track">
              {[0, 1].map((group) => (
                <div className="fw-marquee-group" key={group} aria-hidden={group === 1 ? true : undefined}>
                  {c.marquee.map((item) => (
                    <span key={item}>{item}<i aria-hidden="true">✦</i></span>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* Size matrix (pinned scroll scene) */}
          <section className="fw-size" id="size-matrix">
            <div className="qa-container fw-size-grid">
              <div className="fw-size-copy">
                <p className="qa-eyebrow">{c.sizeEyebrow}</p>
                <h2>{sizeSection.heading}</h2>
                <p>{sizeSection.body}</p>
                <ul className="fw-legend">
                  <li><i className="is-ok" />{c.sizeLegend.available}</li>
                  <li><i className="is-low" />{c.sizeLegend.low}</li>
                  <li><i className="is-out" />{c.sizeLegend.out}</li>
                </ul>
                <Image className="fw-size-shoe" src={shoePhoto.src} alt="" width={shoePhoto.width} height={shoePhoto.height} unoptimized aria-hidden="true" />
              </div>
              <div className="fw-matrix" aria-hidden="true">
                <div className="fw-matrix-head">
                  <span>{c.heroCard.article}</span>
                  <strong><b className="fw-matrix-total" data-total={totalPairs}>{totalPairs}</b> {c.sizeTotal}</strong>
                </div>
                <div className="fw-matrix-table">
                  <span />
                  {sizes.map((size) => <span className="fw-matrix-size" key={size}>{size}</span>)}
                  {sizeStock.map((row, rowIndex) => (
                    <div className="fw-matrix-row" key={c.sizeColours[rowIndex]}>
                      <span className="fw-matrix-colour"><i data-colour={rowIndex} />{c.sizeColours[rowIndex]}</span>
                      {row.map((count, index) => (
                        <span
                          className={`fw-cell ${count === 0 ? "is-out" : count <= 2 ? "is-low" : "is-ok"} ${rowIndex === 0 && sizes[index] === 42 ? "is-target" : ""}`}
                          key={sizes[index]}
                        >
                          {count}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="fw-matrix-scan" />
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="fw-features">
            <div className="qa-container">
              <div className="fw-heading" data-fw-reveal>
                <p className="qa-eyebrow">{c.featureEyebrow}</p>
                <h2>{c.featureTitle}</h2>
              </div>
              <div className="fw-feature-grid">
                {industry.sections.map((section, index) => {
                  const Icon = featureIcons[index] ?? Ruler;
                  return (
                    <article className={`fw-feature fw-feature-${index + 1}`} key={section.heading}>
                      <span className="fw-feature-icon"><Icon aria-hidden="true" /></span>
                      <h3>{section.heading}</h3>
                      <p>{section.body}</p>
                      <div className="fw-feature-visual" aria-hidden="true">
                        {index === 0 ? (
                          <div className="fw-mini-sizes">
                            {sizes.slice(0, 6).map((size, i) => (
                              <span key={size} className={i === 4 ? "is-active" : undefined}>{size}</span>
                            ))}
                          </div>
                        ) : null}
                        {index === 1 ? (
                          <div className="fw-mini-receipt">
                            {c.featureVisuals.exchange.map((line, i) => <span key={line} className={i === 2 ? "is-total" : undefined}>{line}</span>)}
                          </div>
                        ) : null}
                        {index === 2 ? (
                          <div className="fw-mini-transfer">
                            <span>{c.featureVisuals.transfer[0]}</span>
                            <i><b className="fw-transfer-dot" />{c.featureVisuals.transfer[1]}</i>
                            <span>{c.featureVisuals.transfer[2]}</span>
                          </div>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Management dashboard */}
          <section className="fw-dash" id="dashboard">
            <div className="qa-container">
              <div className="fw-heading fw-dash-heading" data-fw-reveal>
                <p className="qa-eyebrow">{d.eyebrow}</p>
                <h2>{d.title}</h2>
                <p>{d.body}</p>
              </div>

              <div className="fw-dash-stage">
                <div className="fw-dash-frame" role="img" aria-label={d.frameLabel}>
                  <aside className="fw-dash-side" aria-hidden="true">
                    <span className="fw-dash-logo">d</span>
                    {d.nav.map((item, i) => {
                      const Icon = dashNavIcons[i];
                      return <span className={i === 0 ? "is-active" : undefined} key={item}><Icon />{item}</span>;
                    })}
                  </aside>
                  <div className="fw-dash-main" aria-hidden="true">
                    <div className="fw-dash-top">
                      <strong>{d.appTitle}</strong>
                      <span>{d.filter}</span>
                    </div>

                    <div className="fw-dash-kpis">
                      {d.kpis.map((kpi) => (
                        <div className="fw-widget fw-kpi" key={kpi.label}>
                          <span>{kpi.label}</span>
                          <strong>{kpi.value}</strong>
                          <em className={kpi.up ? "is-up" : "is-due"}>{kpi.delta}</em>
                        </div>
                      ))}
                    </div>

                    <div className="fw-dash-grid">
                      <div className="fw-widget fw-w-sales">
                        <div className="fw-w-head"><span><TrendingUp />{d.sales.title}</span><b>{d.sales.total}</b></div>
                        <div className="fw-bars">
                          {salesBars.map(([a, b], i) => (
                            <div className="fw-bar-col" key={d.sales.days[i]}>
                              <div className="fw-bar-pair">
                                <i className="fw-bar" style={{ height: `${a}%` }} />
                                <i className="fw-bar is-b" style={{ height: `${b}%` }} />
                              </div>
                              <small>{d.sales.days[i]}</small>
                            </div>
                          ))}
                        </div>
                        <div className="fw-w-legend"><span><i />{d.sales.outlets[0]}</span><span><i className="is-b" />{d.sales.outlets[1]}</span></div>
                      </div>

                      <div className="fw-widget fw-w-stock">
                        <div className="fw-w-head"><span><Boxes />{d.stock.title}</span></div>
                        <div className="fw-stock-body">
                          <div className="fw-donut">
                            <svg viewBox="0 0 42 42">
                              {donutSegments.map((seg, i) => (
                                <circle
                                  key={i}
                                  className="fw-donut-seg"
                                  cx="21" cy="21" r="15.915"
                                  fill="none"
                                  stroke={donutColours[i]}
                                  strokeWidth="6"
                                  strokeDasharray={`${seg.value} ${100 - seg.value}`}
                                  strokeDashoffset={seg.offset}
                                />
                              ))}
                            </svg>
                            <span>{d.stock.donutLabel}</span>
                          </div>
                          <ul className="fw-donut-legend">
                            {d.stock.categories.map(([name, pct], i) => (
                              <li key={name}><i style={{ background: donutColours[i] }} />{name}<b>{pct}%</b></li>
                            ))}
                          </ul>
                        </div>
                        <ul className="fw-alerts">
                          {d.stock.alerts.map((alert, i) => (
                            <li key={alert.article}>
                              <div><strong>{alert.article}</strong><small>{alert.detail}</small></div>
                              <span>{alert.qty}</span>
                              <em className={`is-${["warn", "low", "out"][i]}`}>{alert.status}</em>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="fw-widget fw-w-purchase">
                        <div className="fw-w-head"><span><ShoppingCart />{d.purchases.title}</span></div>
                        <ul className="fw-po">
                          {d.purchases.rows.map((row) => (
                            <li key={row.po}>
                              <div><strong>{row.supplier}</strong><small>{row.po}</small></div>
                              <b>{row.amount}</b>
                              <em className={`is-${row.tone}`}>{row.status}</em>
                            </li>
                          ))}
                        </ul>
                        <div className="fw-po-foot"><span>{d.purchases.payableLabel}</span><b>{d.purchases.payable}</b></div>
                      </div>

                      <div className="fw-widget fw-w-accounts">
                        <div className="fw-w-head"><span><Calculator />{d.accounts.title}</span></div>
                        <ul className="fw-pl">
                          {d.accounts.rows.map(([label, value], i) => (
                            <li key={label}>
                              <span>{label}</span>
                              <i><b style={{ width: `${plWidths[i]}%` }} /></i>
                              <strong>{value}</strong>
                            </li>
                          ))}
                        </ul>
                        <div className="fw-profit"><span>{d.accounts.profitLabel}</span><strong>{d.accounts.profit}</strong></div>
                        <div className="fw-balances">
                          {d.accounts.balances.map(([label, value]) => (
                            <div key={label}><span>{label}</span><b>{value}</b></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Image className="fw-dash-shoe" src={shoePhoto.src} alt="" width={shoePhoto.width} height={shoePhoto.height} unoptimized aria-hidden="true" />
              </div>

              <div className="fw-dash-modules">
                {d.modules.map((module) => (
                  <Link className="fw-dash-module" href={href(featureHref(module.slug))} key={module.slug}>
                    <strong>{module.title}<ArrowRight aria-hidden="true" /></strong>
                    <span>{module.body}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* PPC ad showcase (horizontal scroll on desktop) */}
          <section className="fw-ads" id="campaigns">
            <div className="fw-ads-pin">
              <div className="qa-container fw-ads-intro">
                <p className="qa-eyebrow">{c.adsEyebrow}</p>
                <h2>{c.adsTitle}</h2>
                <p>{c.adsBody}</p>
              </div>
              <div className="fw-ads-viewport">
                <div className="fw-ads-track">
                  {c.ads.map((ad) => (
                    <figure className={`fw-ad ${ad.width === ad.height ? "is-square" : ""}`} key={ad.src}>
                      <div className="fw-ad-frame">
                        <div className="fw-ad-bar"><i /><i /><i /><span>{ad.format}</span></div>
                        <Image src={ad.src} alt={ad.alt} width={ad.width} height={ad.height} unoptimized sizes="(min-width: 900px) 60vw, 100vw" />
                      </div>
                      <figcaption>{ad.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="fw-stats">
            <div className="qa-container fw-stats-grid">
              {c.stats.map((stat) => (
                <div className="fw-stat" key={stat.label}>
                  <strong>
                    <PriceText>{stat.value}</PriceText>
                  </strong>
                  <p><PriceText>{stat.label}</PriceText></p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="fw-steps">
            <div className="qa-container">
              <div className="fw-heading" data-fw-reveal>
                <p className="qa-eyebrow">{c.stepsEyebrow}</p>
                <h2>{c.stepsTitle}</h2>
              </div>
              <div className="fw-step-wrap">
                <span className="fw-step-line" aria-hidden="true"><span /></span>
                <ol className="fw-step-list">
                {c.steps.map((step, index) => (
                  <li className="fw-step" key={step.title}>
                    <span className="fw-step-num">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
              </div>
            </div>
          </section>

          {/* One system */}
          <section className="fw-one">
            <div className="qa-container fw-one-grid" data-fw-reveal>
              <div>
                <p className="qa-eyebrow">Dotcode ERP</p>
                <h2>{oneSystem.heading}</h2>
                <p>{oneSystem.body}</p>
              </div>
              <ul>
                {oneSystem.bullets?.map((bullet) => (
                  <li key={bullet}><Check aria-hidden="true" />{bullet}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="fw-cta">
            <div className="qa-container">
              <div className="fw-cta-card">
                <Image className="fw-cta-shoe" src={shoePhoto.src} alt="" width={shoePhoto.width} height={shoePhoto.height} unoptimized />
                <p className="qa-eyebrow">{c.ctaEyebrow}</p>
                <h2>{c.ctaTitle}</h2>
                <p>{c.ctaBody}</p>
                <div className="fw-actions">
                  <WhatsAppButton href={contactUrl} size="lg" label={c.whatsapp} />
                  <a className="fw-cta-link" href={DEMO_APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                    {t.common.tryFreeDemo}<ArrowRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="fw-faq" aria-labelledby="fw-faq-heading">
            <div className="qa-container fw-faq-grid">
              <div className="fw-heading" data-fw-reveal>
                <p className="qa-eyebrow">{c.faqEyebrow}</p>
                <h2 id="fw-faq-heading">{c.faqTitle}</h2>
              </div>
              <div className="fw-faq-list" data-fw-reveal>
                {faqs.map(({ question, answer }) => (
                  <details key={question}>
                    <summary><PriceText>{question}</PriceText></summary>
                    <p><PriceText>{answer}</PriceText></p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <nav className="qa-container fw-related" aria-label={t.seoPage.relatedLabel}>
            <h2>{c.relatedTitle}</h2>
            <div>
              {catalog.coreFeatures.map(({ slug, title }) => (
                <Link href={href(featureHref(slug))} key={slug}>{title}</Link>
              ))}
              <Link href={href("/industries")}>{t.common.industries}</Link>
              <Link href={href("/pricing")}>{t.common.pricing}</Link>
            </div>
          </nav>
        </article>
      </FootwearMotion>

      <SiteFooter locale={locale} />
    </main>
  );
}
