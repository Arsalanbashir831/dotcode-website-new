# Technical SEO and GEO implementation report

Implementation date: October 17, 2026

## Completed in the website code

- Added a permanent `www` → apex redirect that preserves paths and query strings.
- Added CSP, HSTS, frame, referrer, MIME-sniffing, and permissions security headers; removed the framework disclosure header.
- Reworked titles and descriptions across the indexable site. Production-rendered maximums are 54 title characters and 141 description characters.
- Fixed the homepage H1 duplication caused by animated-word fallback markup.
- Replaced the external hero thumbnail with a local, dimensioned, responsive image.
- Reduced crawlable ticker repetition and excluded the decorative strip from snippets.
- Added an explicit 404 page with useful navigation and `noindex, follow`.
- Added `/features` and `/industries` crawlable hubs and connected the main navigation to them.
- Added visible breadcrumbs to shared commercial and guide pages.
- Added a linked Organization → WebSite → SoftwareApplication graph with stable IDs, official profile links, contact information, features, and licensing offers.
- Added page-specific WebPage/CollectionPage/BlogPosting and BreadcrumbList graphs.
- Added visible guide reviewer and update information before enabling BlogPosting markup.
- Removed obsolete HowTo markup from the Custom ERP page.
- Added `/llms.txt` and explicit search/browsing crawler rules.
- Added honest sitemap `lastmod` values and removed ignored priority/change-frequency hints.
- Added a self-contained QuickAccounts definition to the homepage and citation-ready answer passages to key guides and the serial-tracking page.
- Expanded the blog hub with contextual guide summaries.
- Added page-specific product screenshots, descriptive alt text, captions, and workflow evidence for the nine strategic feature/industry pages.
- Replaced the public Gmail address with the domain contact address published by Dotcode.
- Increased key navigation and icon-button targets to 48px.

## Production-build validation

- `pnpm typecheck`: passed
- `pnpm lint`: passed
- `pnpm build`: passed; 30 static outputs generated
- `git diff --check`: passed
- 25 indexable HTML pages checked: one H1, one canonical, acceptable title/description lengths, and JSON-LD present on every page
- 52 rendered JSON-LD scripts parsed with zero errors
- Confirmed schema types include Organization, WebSite, SoftwareApplication, WebPage, CollectionPage, BlogPosting, BreadcrumbList, Service, FAQPage, Offer, and ImageObject
- Local production response: homepage HTML 136,999 bytes, approximately 42ms TTFB; serial page HTML 46,727 bytes, approximately 9ms TTFB. These are local diagnostics, not field Core Web Vitals.
- Confirmed `308` canonical-host redirect and query preservation
- Confirmed custom route returns HTTP `404` and noindex metadata

## Requires owner access or business evidence

The following recommendations cannot be completed truthfully from repository data alone:

1. Publish privacy, terms, security/data-handling, hosting/backups, support/SLA, and refund pages after the owner supplies or approves the policies.
2. Publish attributed case studies after customer permission, baseline metrics, interventions, and outcomes are available.
3. Add named individual authors and credentials if the company wants Person authorship; current guides use the visibly attributed Dotcode Solutions Product Team.
4. Add VideoObject only after the owned video's upload date, duration, canonical watch URL, and ownership are confirmed.
5. Decide whether model-training crawlers such as GPTBot, Google-Extended, CCBot, and Bytespider should be allowed. Search/browsing crawlers remain open.
6. Request recrawls in Google Search Console and submit updated URLs to Bing/IndexNow after deployment.
7. Run mobile Lighthouse and monitor Search Console Core Web Vitals on the deployed origin; local response timing is not a substitute for field data.
8. Align LinkedIn, marketplace, and video-channel descriptions around “QuickAccounts by Dotcode Solutions” using account-owner access.

## Post-deployment checks

1. Verify the apex redirect and headers at the CDN edge.
2. Validate representative URLs in Google Rich Results Test and Schema Markup Validator.
3. Submit the sitemap and request recrawl of the homepage, pricing, feature hubs, key feature pages, and guides.
4. Recheck search snippets for removal of the obsolete demo placeholder and repeated ticker copy.
5. Track GSC impressions, clicks, CTR, indexed pages, and Core Web Vitals by page group for 8–12 weeks.
