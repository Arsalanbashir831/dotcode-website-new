# Technical SEO Audit — dotcodesolutions.com

- Audit date: October 17, 2026
- Technical score: **74/100**
- Scope: crawlability, indexability, security, URLs, mobile, CWV evidence, structured data, JavaScript rendering, and IndexNow
- Baseline: same-day full audit technical score 78/100; the four-point difference is stricter technical weighting, not a reachability regression

## Category breakdown

| Category | Status | Score | Summary |
|---|---|---:|---|
| Crawlability | Pass | 95 | Valid robots and sitemap; 23/23 sitemap URLs return 200 |
| Indexability | Warn | 76 | Self-canonicals and index/follow pass; duplicate `www` host remains |
| Security | Warn | 60 | HTTPS/HSTS pass; CSP and other defensive headers are missing |
| URL structure | Warn | 72 | Clean paths and trailing-slash normalization; hostname duplication |
| Mobile | Warn | 82 | Viewport and responsive CSS pass; some hit areas are below 48px |
| Core Web Vitals | Warn | 55 provisional | No CrUX/PSI field data; source-level performance risks remain |
| Structured data | Fail | 40 | JSON-LD exists on only 2 of 23 sitemap URLs |
| JavaScript rendering | Pass | 92 | Critical content and metadata are present in initial HTML |
| IndexNow | Fail/optional | 20 | No key or submission evidence detected |

## Verified strengths

- `robots.txt` and `sitemap.xml` both return 200.
- The sitemap contains 23 apex-domain HTTPS URLs; all 23 returned 200 in fresh requests.
- All 23 raw HTML responses contained a responsive viewport, one H1, index/follow, and matching apex self-canonical.
- Unknown URLs return a true 404.
- HTTP apex redirects to HTTPS in one hop.
- Trailing-slash URLs redirect with 308 to the slashless form.
- Critical content, titles, descriptions, canonicals, and schema are server-rendered/prerendered (`x-nextjs-prerender: 1`).
- HTTPS and HSTS are active with `max-age=63072000`.

## High-priority findings

### 1. Consolidate the `www` hostname

`https://www.dotcodesolutions.com/` returns 200 with the same 139,657-byte homepage instead of redirecting. `http://www` redirects to HTTPS `www`, not to the preferred apex domain.

Fix: configure an edge-level 301/308 from every `www` request to `https://dotcodesolutions.com`, preserving path and query. Verify that HTTP, HTTPS, apex, `www`, and trailing-slash variants resolve in no more than one hop.

### 2. Add missing security headers

Live responses include HSTS but omit:

- Content-Security-Policy
- X-Content-Type-Options
- X-Frame-Options or CSP `frame-ancestors`
- Referrer-Policy
- Permissions-Policy

HSTS also lacks `includeSubDomains` and `preload`.

Fix: add headers through `next.config.ts` or Vercel. Introduce CSP in Report-Only mode first, accounting for YouTube and required image/script origins. Add `includeSubDomains` only after confirming every subdomain is HTTPS-ready; preload is optional and difficult to reverse.

### 3. Expand structured-data coverage

Only the homepage and `/custom-erp-development` contain JSON-LD. The other 21 sitemap URLs contain none.

Fix:

- Publish a server-rendered Organization + WebSite graph globally.
- Link the existing SoftwareApplication with stable `@id` values.
- Add WebPage and BreadcrumbList to nested commercial pages.
- Add Article/BlogPosting to guides after visible authorship and dates exist.
- Use CollectionPage on `/blog`.
- Validate rendered output with Schema.org Validator and Google's Rich Results Test.

## Medium-priority findings

### 4. Measure—not infer—Core Web Vitals

No CrUX or PSI data was available. The PSI request returned 429 quota exhaustion, and the browser performance runner was unavailable. Current CWV status is therefore unverified.

Observable risks:

- Homepage raw HTML is about 139.6 KB.
- A CSS bundle is about 80.1 KB uncompressed.
- A 102,280-byte third-party YouTube thumbnail is preloaded.
- Multiple Next.js chunks and repeated ticker markup increase transfer and processing work.

Fix: collect mobile Lighthouse and 75th-percentile CrUX/GSC data. Only preload the actual LCP asset, optimize/self-host the video poster, reduce repeated server-rendered markup, and defer noncritical animation/video code.

Targets: LCP below 2.5 seconds, INP below 200 ms, and CLS below 0.1 at the mobile 75th percentile.

### 5. Increase small mobile hit areas

The viewport and responsive baseline are sound, with 19 responsive media rules and intrinsic dimensions on key local images. Some utility controls use 38–44px hit areas, below this audit's 48×48px target.

Fix: increase interactive hit areas to 48×48px or provide equivalent invisible padding, with approximately 8px separation between adjacent targets.

## Lower-priority findings

### 404 metadata conflict

The 404 response correctly returns 404 and includes `noindex`, but inherited layout metadata also emits `index, follow`, the homepage description, and duplicate titles.

Fix: create an explicit App Router `not-found` page/metadata path that emits one descriptive title and a single `noindex, follow` directive without inherited homepage metadata.

### Sitemap semantics

The sitemap is complete and valid but omits real `lastmod` values and uses `priority`/`changefreq`, which Google ignores.

Fix: add real modification dates from content/deployment data and remove unsupported priority/change-frequency signals.

### IndexNow

No IndexNow evidence was found. A generic `/indexnow-key.txt` request returned 404, although this alone is not definitive because key filenames can vary.

Fix: confirm that no backend submission exists. Add IndexNow only if Bing/Yandex/Naver discovery matters; it is low impact for this small, mostly static site.

### AI crawler policy

Robots explicitly allows OAI-SearchBot, Claude-SearchBot, and PerplexityBot. GPTBot, ChatGPT-User, Google-Extended, CCBot, and other agents fall under the wildcard allow rule.

Fix: retain this if both AI-search visibility and training access are intentional. Otherwise, separate search/browsing crawlers from model-training crawlers.

## Implementation order

1. Redirect `www` to apex and verify all redirect variants.
2. Add and test security headers, starting CSP in Report-Only mode.
3. Fix 404 metadata conflicts.
4. Add the global entity graph and shared page/breadcrumb schema.
5. Optimize the hero/video poster and repeated ticker markup.
6. Run mobile Lighthouse, then monitor GSC/CrUX field data.
7. Increase undersized mobile hit areas.
8. Decide the AI-training and IndexNow policies explicitly.

## Limitations

- No Google Search Console, CrUX, GA4, paid Lighthouse API, or DataForSEO credentials were available.
- PSI returned HTTP 429, so CWV score and status are provisional.
- No automated browser/device run was available; mobile conclusions combine source, CSS, and markup inspection.
