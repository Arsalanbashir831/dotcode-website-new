seo# SEO Action Plan — dotcodesolutions.com

## Immediate: 0–14 days

| Priority | Action | Impact | Effort | Primary scope |
|---|---|---:|---:|---|
| High | Permanently redirect `www` to apex, preserving paths and queries | High | Low | Vercel/DNS |
| High | Rewrite 23 titles to ~50–60 characters and nine oversized descriptions to ~140–160 | High | Medium | `app/layout.tsx`, page metadata |
| High | Fix the homepage H1's duplicated “Wholesalers” text | Medium | Low | Hero component |
| High | Choose one primary query/value proposition per page; move secondary geographies into body copy | High | Medium | Metadata + copy |
| Medium | Add CSP/frame-ancestors, X-Content-Type-Options, Referrer-Policy, and Permissions-Policy | Medium | Medium | `next.config.ts` / Vercel |
| Medium | Add an explicit `not-found` route with one title and `noindex, follow` | Medium | Low | App Router |
| Medium | Replace the external YouTube thumbnail with an optimized, dimensioned local poster | Medium | Low | Homepage hero |

Success checks: one-hop `www` redirect, unique rendered titles/descriptions, one H1 per page, no conflicting 404 robots metadata, no new console/CSP breakage.

## Near term: 2–6 weeks

| Priority | Action | Impact | Effort | Primary scope |
|---|---|---:|---:|---|
| High | Deepen or consolidate the nine template-heavy feature/industry pages | Very high | High | Content + product SMEs |
| High | Create About/team, privacy, terms, security/data-handling, hosting/backups, support/SLA, and refund pages | High | Medium | Trust center |
| High | Publish 2–3 attributed QuickAccounts case studies with baseline → intervention → outcome | Very high | High | Customer proof |
| High | Replace public Gmail contact with a domain email | Medium | Low | Contact/footer/schema |
| Medium | Create real Features and Industries hub pages | High | Medium | IA/navigation |
| Medium | Add visible breadcrumbs to deep pages | Medium | Medium | Shared landing template |
| Medium | Add page-specific screenshots, diagrams, comparison tables, and captions | High | High | Design/content |
| Medium | Reduce server-rendered ticker duplication and below-fold motion JavaScript | Medium | Medium | Homepage |

Content acceptance criteria for each retained commercial leaf:

- One specific intent and audience
- Direct 100–160 word answer below H1
- Distinct workflow/state model, not swapped nouns
- At least one real product screen or diagram
- Supported inputs, records, roles, outputs, and limitations
- Relevant internal links and visible breadcrumb
- Product-specific proof or customer example where permission exists

## Medium term: 6–12 weeks

| Priority | Action | Impact | Effort | Primary scope |
|---|---|---:|---:|---|
| High | Upgrade guides with named author/reviewer, credentials, publish/modified dates, sources, and original examples | High | High | Editorial |
| High | Expand the blog hub beyond a 30-word link list | High | Medium | `/blog` |
| Medium | Add WebSite + linked Organization/SoftwareApplication graph | Medium | Medium | Homepage schema |
| Medium | Add WebPage + BreadcrumbList to commercial templates | Medium | Medium | Shared SEO template |
| Medium | Add BlogPosting only after visible guide authorship/dates exist | Medium | Medium | Guide template |
| Medium | Remove obsolete HowTo JSON-LD from Custom ERP | Low | Low | Custom ERP schema |
| Medium | Create `/llms.txt` and connect visible Fiverr/Upwork identities via `sameAs` | Medium | Low | GEO/entity signals |
| Low | Add real sitemap `lastmod`; remove ignored priority/changefreq fields | Low | Low | `app/sitemap.ts` |

## Performance validation

1. Run mobile Lighthouse after the hero/ticker changes.
2. Monitor Search Console Core Web Vitals until enough 75th-percentile field data exists.
3. Target LCP under 2.5 s, INP under 200 ms, and CLS under 0.1 at the 75th percentile.
4. Record bundle size, homepage HTML size, hero image bytes, and TTFB before and after changes.

## Reporting cadence

- Weekly during implementation: completed fixes, regressions, CWV lab checks
- Monthly: GSC impressions/clicks/CTR by page group, conversions, index coverage, AI citation samples
- After 8–12 weeks: compare non-brand visibility and conversions against the pre-change baseline
