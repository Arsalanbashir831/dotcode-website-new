# GEO / AI Search Analysis — dotcodesolutions.com

- Audit date: October 17, 2026
- GEO readiness score: **55/100**
- Scope: Google AI Overviews, ChatGPT search, Perplexity, Bing Copilot, crawler access, entity signals, passage citability, multimodal evidence, and server-rendered accessibility

## Platform breakdown

| Platform | Score | Assessment |
|---|---:|---|
| Google AI Overviews | 58 | Technically accessible and well structured, but commercial leaves lack depth, sources, and likely ranking authority |
| ChatGPT search | 54 | OpenAI search crawler is allowed; entity ambiguity and weak independent mentions limit confidence |
| Perplexity | 45 | Crawler access passes, but sampled search found no Reddit/Wikipedia/community validation |
| Bing Copilot | 53 | Indexable SSR content passes; brand ambiguity and no verified IndexNow workflow reduce clarity/freshness |

## Component score

| GEO factor | Weight | Score | Evidence |
|---|---:|---:|---|
| Passage-level citability | 25% | 44 | Useful facts exist, but most sections are short fragments rather than self-contained cited answers |
| Structural readability | 20% | 68 | Clear headings, lists, FAQs, and tables on stronger pages; the blog and guides are shallow |
| Multimodal content | 15% | 58 | Homepage includes product imagery/video; many landing pages reuse one generic image |
| Authority and brand signals | 20% | 38 | LinkedIn/Fiverr/Upwork signals exist; authorship, citations, case studies, and unambiguous entities are weak |
| Technical accessibility | 20% | 78 | SSR and crawler access pass; `llms.txt` and licensing guidance are absent, and an indexed snapshot is stale |

## AI crawler access

The live `robots.txt` allows all crawlers by default and explicitly allows OAI-SearchBot, Claude-SearchBot, and PerplexityBot.

| Crawler | Access status | Notes |
|---|---|---|
| OAI-SearchBot | Allowed explicitly | Supports OpenAI search visibility |
| ChatGPT-User | Allowed by wildcard | Supports user-initiated browsing |
| GPTBot | Allowed by wildcard | Training access is currently allowed |
| ClaudeBot / Claude-SearchBot | Allowed | Claude search access is explicit for Claude-SearchBot |
| PerplexityBot | Allowed explicitly | Supports Perplexity discovery |
| Googlebot | Allowed by wildcard | Required for Google Search and AI Overviews |
| Google-Extended | Allowed by wildcard | Gemini training/grounding policy is not separated |
| CCBot, anthropic-ai, Bytespider, cohere-ai | Allowed by wildcard | Training/data collection is currently permitted |

Recommendation: keep search/browsing crawlers open. Decide explicitly whether model-training crawlers should remain open; if not, add crawler-specific rules without blocking Googlebot, OAI-SearchBot, ChatGPT-User, Claude search, or PerplexityBot.

## Server-side rendering

Pass. Titles, descriptions, canonicals, headings, body content, internal links, and existing JSON-LD are present in initial HTML. Live responses include `x-nextjs-prerender: 1`. AI crawlers do not need to execute JavaScript to understand the core pages.

One exception is conceptual rather than technical: interactive demonstrations and visual product evidence are less useful to text-only crawlers unless the surrounding copy, captions, transcripts, and VideoObject/ImageObject data explain them.

## Indexed-snapshot freshness problem

A search-engine snapshot of the homepage, crawled two days before this audit, still exposed obsolete placeholder text—“Your software demo will play here” and an instruction to add a YouTube video ID—even though the current live source contains a real product-video treatment. The same cached representation exposes dozens of repeated ticker claims.

Why this matters: AI answers may summarize cached search-index text rather than the newest browser-visible version. Placeholder language and repeated marketing claims can displace the product definition, pricing, workflows, and evidence passages that should be cited.

Actions:

1. Ensure obsolete placeholder text is absent from every production variant, cached HTML response, and deployment alias.
2. Reduce ticker duplication in server-rendered HTML; one crawlable benefit list is enough.
3. Use Google Search Console URL Inspection to request recrawl of the homepage and core commercial pages.
4. Submit updated URLs to Bing/IndexNow if Bing Copilot matters.
5. Recheck cached search representations after recrawl rather than assuming deployment alone fixed the AI-visible text.

## `llms.txt` and RSL status

- `/llms.txt`: **missing (404)**.
- RSL/licensing: no implementation was found in the repository or live-site evidence gathered for this audit.

`llms.txt` is an emerging discovery aid, not a replacement for crawlable pages, schema, sitemaps, or traditional SEO. RSL is optional and should reflect an actual company policy before implementation.

Recommended `llms.txt`:

```text
# QuickAccounts by Dotcode Solutions
> Inventory, serial-number, warranty, RMA, and accounting software for wholesale distributors and stock-led businesses.

## Product
- [QuickAccounts overview](https://dotcodesolutions.com/): Product capabilities, company information, pricing summary, and implementation support
- [Pricing](https://dotcodesolutions.com/pricing): Offline and online lifetime-license options and hosting costs
- [Implementation](https://dotcodesolutions.com/implementation): Setup, supported migration, and team training
- [Custom ERP development](https://dotcodesolutions.com/custom-erp-development): Custom accounting, sales, purchasing, team, outlet, and workflow software

## Core workflows
- [Wholesale inventory](https://dotcodesolutions.com/solutions/wholesale-inventory): Stock, purchasing, sales, customer accounts, cash, and ledgers
- [Serial-number tracking](https://dotcodesolutions.com/features/serial-number-tracking): Unit-level traceability and invoice lookup
- [Warranty management](https://dotcodesolutions.com/features/warranty-management): Warranty claims, RMAs, returns, and replacements
- [Multi-warehouse inventory](https://dotcodesolutions.com/features/multi-warehouse-inventory): Stock visibility and transfers across locations
- [Business accounting](https://dotcodesolutions.com/features/business-accounting): Customer, supplier, cash, and ledger records

## Guides
- [Warranty claim management](https://dotcodesolutions.com/guides/warranty-claim-management)
- [Serial-number inventory tracking](https://dotcodesolutions.com/guides/serial-number-inventory-tracking)
- [Excel-to-ERP migration](https://dotcodesolutions.com/guides/excel-to-erp-migration)

## Official identity
- [Dotcode on LinkedIn](https://pk.linkedin.com/company/dotcode-solutions)
```

## Brand and entity analysis

### Positive signals

- A discoverable [Dotcode LinkedIn company page](https://pk.linkedin.com/company/dotcode-solutions) links to the domain and showed 761 followers in the audit snapshot.
- The website links to public Fiverr and Upwork profiles and displays ratings/testimonials.
- A separate LinkedIn post mentions `dotcodesolutions.com`, providing an external domain mention.
- The homepage has an Organization → SoftwareApplication/Offer JSON-LD relationship.

### Entity risks

1. **QuickAccounts is ambiguous.** Sampled search results surfaced unrelated accounting businesses, an Estonian company, UK accounting content, and Bank of Cyprus reporting that uses the same term. Use the full entity name “QuickAccounts by Dotcode Solutions” plus “wholesale inventory, warranty, and RMA software” in titles, intros, schema, video descriptions, and external profiles.

2. **Dotcode is ambiguous.** Search results include unrelated companies with similar names in several countries. Stable `@id` values and consistent `sameAs` links are essential.

3. **The LinkedIn positioning does not match the product site closely enough.** The discoverable company page emphasizes Odoo, AI-powered workflows, and custom modules, while the website foregrounds QuickAccounts inventory/warranty software. Align the company description and featured posts around a clear parent-brand/product relationship.

4. **Weak platform diversity.** Sampled exact-name searches did not surface a Wikipedia/Wikidata entity, relevant Reddit discussion, or a clearly attributable QuickAccounts YouTube result. This is a sampled-search finding, not proof that no mention exists.

5. **External proof is not product-specific enough.** Fiverr/Upwork testimonials support delivery quality, but most do not document measurable QuickAccounts outcomes.

## Passage-level citability

No strong existing 134–167 word answer block was identified on the homepage or template-driven landing pages. Most useful statements are 15–50 words and depend on nearby headings or visual context. The Custom ERP page is the strongest source because it includes direct definitions, question-led FAQs, limitations, and a dated process.

High-value facts already available but fragmented:

- Online license: $850 one time, unlimited users, plus $40/month hosting
- Offline license: $1,200 one time, one user, locally stored data
- Setup, supported migration, and team training are included
- Product workflows cover inventory, serials, warranty/RMA, multi-location stock, accounts, and ledgers

Consolidate these into self-contained passages with a descriptive heading, direct answer in the first sentence, limitations, and links to the authoritative pricing or workflow page.

## Content reformatting suggestions

### Homepage: replace the short hero paragraph with an answer block

Suggested heading: `What is QuickAccounts?`

> QuickAccounts by Dotcode Solutions is inventory, serial-number, warranty, RMA, and accounting software for wholesale distributors and stock-led businesses. It connects purchasing, sales, warehouse stock, customer and supplier accounts, cash records, and product service history in one system. Teams can trace an individual CCTV camera, RAM module, hard drive, or other serialized product from receipt through sale, invoice lookup, warranty review, return, and replacement. Dotcode offers an online lifetime license for unlimited users at $850 plus $40 per month for hosting, and an offline single-user lifetime license for $1,200 with local data storage. Standard setup, supported data migration, and team training are included. Businesses should confirm required integrations, data formats, permissions, customizations, and deployment needs during a guided demo before selecting a license.

### Serial-number page: add a self-contained operational definition

Suggested heading: `How does serial-number inventory tracking work?`

> Serial-number inventory tracking records the identity and transaction history of each individual product unit, not only the total quantity in stock. When a distributor receives CCTV cameras, RAM, hard drives, or other electronics, staff assign or capture each unit’s serial number and connect it to purchasing and inventory records. At sale, the serial is linked to the customer and invoice. If the product later returns for support, staff can search the serial to verify the original sale, review warranty information, and record a repair, return, RMA, or replacement. This creates a traceable record from receiving through after-sales service. Before choosing a system, distributors should verify barcode support, bulk serial entry, import formats, duplicate detection, permissions, reporting, and how replacements remain linked to the original unit and claim.

### Warranty guide: expand the introduction into a quotable framework

Suggested heading: `What records are needed for a distributor warranty claim?`

> A distributor warranty claim should connect five records: the individual product or serial number, the original sale and invoice, the customer, the warranty decision, and the final resolution. Staff first identify the exact unit and reported fault, then verify when and to whom it was sold. They compare those records with the applicable warranty terms before accepting or declining the claim. If the claim proceeds, the team records whether the product was returned, sent for repair, replaced, credited, or escalated to a supplier through an RMA. A replacement should remain linked to the original serial and claim so future staff can see the complete history. A reliable workflow also records dates, responsible users, notes, evidence, and status changes, giving managers a consistent audit trail for customer service and supplier recovery.

## Schema recommendations for AI discoverability

1. Create one `@graph` connecting Organization, WebSite, and SoftwareApplication with stable IDs.
2. Add Organization `sameAs` for the verified LinkedIn, Fiverr, and Upwork identities and add a real `contactPoint`.
3. Add `WebPage` and `BreadcrumbList` to every deep page, linking `about` to `#quickaccounts` where appropriate.
4. Add `BlogPosting` and `Person` only after visible author name, credentials, publish date, and modified date are present.
5. Add `VideoObject` for the owned product demo with name, description, thumbnail, upload date, duration, and embed/content URL.
6. Use `ImageObject` for page-specific product screens and a dedicated 1200×630 social image.
7. Keep FAQ content visible and useful, but do not expect commercial FAQ rich results.

## Top five highest-impact changes

1. **Fix the stale indexed homepage representation.** Remove obsolete placeholder text and crawlable ticker duplication everywhere, then request recrawls and verify search snapshots.
2. **Disambiguate the entity.** Consistently use “QuickAccounts by Dotcode Solutions — wholesale inventory, warranty, and RMA software” across the site, schema, LinkedIn, video metadata, and marketplace profiles.
3. **Build product-specific authority.** Publish two to three attributed QuickAccounts case studies, named product experts, guide bylines, reviewed dates, and primary-source citations.
4. **Create extractable answer blocks.** Add 134–167 word direct answers to the homepage, feature pages, and guides, supported by tables, definitions, workflows, and explicit limitations.
5. **Connect the entity graph and discovery files.** Deploy Organization/WebSite/SoftwareApplication/WebPage/Person/VideoObject relationships and a concise `/llms.txt`.

## Measurement plan

- Search Console: indexed version, last crawl, query/page visibility, and title/snippet changes
- Monthly sampled prompts across Google AIO, ChatGPT, Perplexity, and Copilot using non-brand and branded queries
- Track whether citations use the preferred entity name and authoritative URL
- Record external mentions on LinkedIn, YouTube, Reddit, industry publications, and customer sites
- Monitor referral sessions and assisted conversions from AI platforms

## Limitations

- No DataForSEO LLM mention API, paid rank tracker, ChatGPT scraper, or Search Console account was available.
- Brand analysis used sampled public web searches; “not surfaced” does not prove total absence.
- AI answer output is personalized and volatile, so platform scores represent readiness rather than guaranteed citation share.
