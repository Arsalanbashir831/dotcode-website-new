import {
  Boxes,
  Calculator,
  Hammer,
  NotebookTabs,
  Pill,
  ScanBarcode,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Sofa,
  Store,
  Wheat,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { catalogUr } from "@/components/landing/data/catalog-ur";
import type { Locale } from "@/lib/i18n";

export type Faq = { question: string; answer: string };
export type PageSection = { heading: string; body: string; bullets?: string[] };
export type Evidence = { title: string; body: string; steps: [string, string][] };

export type FeatureGraphicKind = "pos" | "accounting" | "outlets" | "stock" | "ledger";

export type CoreFeature = {
  slug: string;
  title: string;
  icon: LucideIcon;
  graphic: FeatureGraphicKind;
  /** Homepage card copy. */
  description: string;
  /** One-line copy for menus and hub cards. */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: PageSection[];
  evidence: Evidence;
  faqs: Faq[];
};

export type Industry = {
  slug: string;
  title: string;
  /** One-line copy for menus, hub cards and the homepage. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  keywords: string[];
  sections: PageSection[];
  faqs: Faq[];
};

export type IndustryGroup = {
  name: string;
  icon: LucideIcon;
  description: string;
  industries: Industry[];
};

export const featureHref = (slug: string) => `/features/${slug}`;
export const industryHref = (slug: string) => `/industries/${slug}`;

/* -------------------------------------------------------------------------- */
/* Core features                                                              */
/* -------------------------------------------------------------------------- */

export const coreFeatures: CoreFeature[] = [
  {
    slug: "pos-system",
    title: "POS System",
    icon: ScanBarcode,
    graphic: "pos",
    description:
      "Fast counter billing with barcode scanning, discounts, returns and printed receipts. Every sale updates stock and accounts instantly.",
    tagline: "Fast counter billing that updates stock and accounts.",
    metaTitle: "POS Software for Retail Shops & Outlets in Pakistan",
    metaDescription:
      "Point of sale software for shops, outlets and restaurants: barcode billing, discounts, returns, receipts and day-end closing, connected to stock and accounts.",
    h1: "A point of sale that keeps up with your busiest hour",
    intro:
      "Bill customers in seconds at the counter. Scan or search the item, apply a discount, take cash, card or a bank transfer and print the receipt. Each sale updates your stock and your books as it happens, so there is nothing to re-enter at the end of the day.",
    sections: [
      {
        heading: "Quick billing at the counter",
        body: "Cashiers find items by barcode, code or name and build the bill in a few taps. Busy days stop turning into queues.",
        bullets: [
          "Barcode scanning and quick item search",
          "Item and bill-level discounts",
          "Cash, card, bank transfer and mixed payments",
          "Printed or shared receipts with your shop details",
        ],
      },
      {
        heading: "Returns and exchanges against the original bill",
        body: "Open the original sale, return or swap the item, and the stock and cash records follow automatically. Size or colour exchanges in clothing and footwear take seconds.",
      },
      {
        heading: "Credit sales to regular customers",
        body: "Sell on account to a regular customer or trade buyer. The amount goes straight to their ledger, so you always know who owes what.",
      },
      {
        heading: "Day-end closing per counter and outlet",
        body: "See each cashier's and each outlet's sales, payments by method and cash in hand. Owners can check the day's numbers from anywhere.",
      },
    ],
    evidence: {
      title: "From the counter to the books, in one step.",
      body: "A sale at the counter is not a separate job from stock and accounts. When the bill is saved, the items leave stock at that outlet, the payment lands in the right cash or bank account, and credit sales post to the customer's ledger.",
      steps: [
        ["Scan", "Add items by barcode, code or name."],
        ["Bill", "Apply discounts and take payment by any method."],
        ["Done", "Stock, cash and ledgers update on their own."],
      ],
    },
    faqs: [
      {
        question: "Does the POS work with barcode scanners and receipt printers?",
        answer:
          "Yes. Standard barcode scanners and receipt printers are supported. Tell us what hardware you have and we will confirm it during setup.",
      },
      {
        question: "Can I run the POS in more than one outlet?",
        answer:
          "Yes. Each outlet bills from its own stock, and the owner sees sales for each outlet or all outlets together.",
      },
      {
        question: "Can I sell on credit (udhaar) from the POS?",
        answer:
          "Yes. Select the customer and the bill posts to their ledger. Payments received later reduce their balance.",
      },
    ],
  },
  {
    slug: "accounting",
    title: "Accounting",
    icon: Calculator,
    graphic: "accounting",
    description:
      "Sales, purchases, expenses, cash and bank in one set of books, with profit and loss, balance sheet and trial balance ready when you need them.",
    tagline: "Your books, kept up to date by every sale and purchase.",
    metaTitle: "Accounting Software for Retail & Wholesale Businesses",
    metaDescription:
      "Business accounting for shops, distributors and wholesalers: sales, purchases, expenses, cash and bank, with profit and loss, balance sheet and trial balance.",
    h1: "Accounting that runs itself from your daily trading",
    intro:
      "Every sale, purchase, payment and expense flows into one set of books. No separate register, no month-end re-typing. Open your profit and loss, balance sheet or cash position whenever you need it, for one outlet or the whole business.",
    sections: [
      {
        heading: "Books that fill themselves",
        body: "Sales from the POS, supplier purchases and customer payments post to the right accounts automatically. You only enter what is not already a transaction, like rent or salaries.",
      },
      {
        heading: "Cash, bank and expenses in one view",
        body: "Track every bank account, cash drawer and petty cash balance. Record rent, salaries, electricity, transport and other expenses by category and by outlet.",
        bullets: [
          "Multiple bank and cash accounts",
          "Expenses by category and outlet",
          "Transfers between accounts and outlets",
        ],
      },
      {
        heading: "Reports you can actually read",
        body: "Profit and loss, balance sheet, trial balance, cash flow and sales reports, by day, month or year. Share them with your partner or accountant in a click.",
      },
      {
        heading: "Real profit, not just sales",
        body: "Because stock is costed as it is bought and sold, your profit reflects what you actually earned on each sale, by outlet, item or category.",
      },
    ],
    evidence: {
      title: "Trading in, reports out.",
      body: "You run the shop or the warehouse. The sales, purchases and payments you already record become your books, and the reports stay current without anyone rebuilding them at month end.",
      steps: [
        ["Trade", "Sell, buy and receive payments as usual."],
        ["Post", "Entries flow to the right accounts automatically."],
        ["Report", "Open profit and loss, balance sheet or cash flow."],
      ],
    },
    faqs: [
      {
        question: "Do I need to know accounting to use it?",
        answer:
          "No. Most entries happen automatically from your sales and purchases. Your accountant can still access the full books and reports.",
      },
      {
        question: "Can I see profit for each outlet?",
        answer:
          "Yes. Sales, costs and expenses are tagged to the outlet, so you can see profit for each branch or for the whole business.",
      },
      {
        question: "Can you bring over my existing books?",
        answer:
          "Yes. We move your opening balances, customers, suppliers and items from Excel or your current software as part of setup.",
      },
    ],
  },
  {
    slug: "multi-outlet-management",
    title: "Multiple Outlets Management",
    icon: Store,
    graphic: "outlets",
    description:
      "Run every shop, branch and warehouse from one system. See sales and stock for each outlet, move goods between them and control who can do what.",
    tagline: "Every branch and warehouse, in one place.",
    metaTitle: "Multi-Outlet & Branch Management Software",
    metaDescription:
      "Manage multiple shops, branches and warehouses from one system: outlet-wise sales and stock, stock transfers, user roles and combined reports.",
    h1: "Every outlet under control, from one screen",
    intro:
      "Whether you have two shops or twenty branches plus a warehouse, each location runs on its own stock and sales, while you see everything together. Move stock between outlets with a proper record and give each team access to only what they need.",
    sections: [
      {
        heading: "Outlet-wise sales and stock",
        body: "Each shop, branch or warehouse has its own stock and its own sales. Compare outlets side by side, or look at the whole business at once.",
      },
      {
        heading: "Stock transfers with a paper trail",
        body: "Send goods from the warehouse to a branch, or between branches, with a transfer record. Stock leaves one location and arrives at the other, so nothing goes missing between them.",
        bullets: [
          "Transfer notes with sending and receiving outlet",
          "Stock updated at both ends",
          "Full transfer history per item",
        ],
      },
      {
        heading: "Staff access by outlet and role",
        body: "Cashiers bill only at their outlet. Managers see their branch. Owners see everything. Unlimited users, with no per-user fees.",
      },
      {
        heading: "Owner's view from anywhere",
        body: "Check today's sales, cash and stock for any outlet from your phone or laptop, without calling the shop.",
      },
    ],
    evidence: {
      title: "Many outlets. One set of numbers.",
      body: "Each location keeps its own stock and sales, so local staff work independently. Everything rolls up into one business, so the owner never has to collect figures from every branch by phone.",
      steps: [
        ["Add", "Set up each shop, branch and warehouse."],
        ["Move", "Transfer stock between them with a record."],
        ["Compare", "See each outlet or the whole business."],
      ],
    },
    faqs: [
      {
        question: "Is there a limit on outlets or warehouses?",
        answer:
          "No fixed limit. Add the shops, branches and warehouses you run today, and more as you grow.",
      },
      {
        question: "Can I restrict staff to one outlet?",
        answer:
          "Yes. Assign each user to an outlet and a role, so they only see and do what they need.",
      },
      {
        question: "Do all outlets need internet?",
        answer:
          "Outlets share live data through our cloud hosting, which needs an internet connection. Talk to us about your locations and we will advise the right setup.",
      },
    ],
  },
  {
    slug: "stock-management",
    title: "Stocks Management",
    icon: Boxes,
    graphic: "stock",
    description:
      "Know exactly what you have and where. Purchases, sales, transfers and adjustments keep stock accurate, with low-stock alerts before you run out.",
    tagline: "Accurate stock by item, size, colour and location.",
    metaTitle: "Inventory & Stock Management Software for Shops and Wholesalers",
    metaDescription:
      "Track stock by item and location, record purchases and adjustments, get low-stock alerts and see stock value, for retailers, wholesalers and distributors.",
    h1: "Stock you can trust, in every location",
    intro:
      "Stop counting shelves to answer a simple question. Every purchase, sale, return and transfer updates stock as it happens, by item and by location. See what is running low, what is not selling and what your stock is worth.",
    sections: [
      {
        heading: "Every item, in every location",
        body: "See live quantities for each product at each outlet and warehouse. Organise items by category, brand, size and colour, so a wide range stays easy to manage.",
      },
      {
        heading: "Purchases that update stock",
        body: "Record supplier purchases and goods received against the supplier's ledger. Stock goes up and the amount you owe is recorded in the same step.",
      },
      {
        heading: "Low-stock alerts and reorder lists",
        body: "Set a minimum level per item and see what needs reordering before the shelf is empty. Fast and slow movers are easy to spot.",
        bullets: [
          "Minimum stock levels per item",
          "Fast-moving and slow-moving items",
          "Stock value at cost",
        ],
      },
      {
        heading: "Adjustments and stock counts",
        body: "Record damage, shrinkage or count differences with a reason, so stock stays accurate and losses are visible rather than hidden.",
      },
    ],
    evidence: {
      title: "Stock that follows the goods.",
      body: "Stock is not a number you update at the end of the month. It moves with every purchase, sale, return and transfer, so the figure on screen matches the goods on the shelf.",
      steps: [
        ["Receive", "Record the supplier purchase and stock goes up."],
        ["Sell", "Every bill takes stock out at that outlet."],
        ["Reorder", "See low stock before the shelf is empty."],
      ],
    },
    faqs: [
      {
        question: "Can I manage sizes and colours?",
        answer:
          "Yes. Clothing and footwear businesses set up items by size and colour so the exact piece is billed and counted.",
      },
      {
        question: "Can I see the value of my stock?",
        answer:
          "Yes. Stock is valued at cost, for each location or the whole business.",
      },
      {
        question: "Do you support batch or expiry tracking?",
        answer:
          "If your business needs batch or expiry tracking, for example in pharmacy or food, tell us during the demo and we will confirm the setup for your items.",
      },
    ],
  },
  {
    slug: "ledger-tracking",
    title: "Ledger Tracking",
    icon: NotebookTabs,
    graphic: "ledger",
    description:
      "A digital khata for every customer and supplier. Credit sales, purchases and payments in one running balance, with aging so you know who to follow up.",
    tagline: "Customer and supplier khata, always up to date.",
    metaTitle: "Customer & Supplier Ledger (Khata) Software",
    metaDescription:
      "Digital khata for retailers and wholesalers: customer and supplier ledgers, credit sales, payments, running balances, aging and account statements.",
    h1: "Your khata, digital and always balanced",
    intro:
      "Replace the paper register with a ledger for every customer and supplier. Credit sales, purchases, payments and returns post automatically, so the running balance is always right and you know exactly who owes you and whom you owe.",
    sections: [
      {
        heading: "Customer ledgers for credit sales",
        body: "Every credit sale and payment lands on the customer's account in date order. Shopkeepers, retailers and trade buyers each have one clear running balance.",
      },
      {
        heading: "Supplier ledgers for what you owe",
        body: "Purchases and payments to suppliers stay on their own ledgers, so you pay the right amount on time and never twice.",
      },
      {
        heading: "Aging and follow-up",
        body: "See which balances are current and which are 30, 60 or 90 days old. Chase the oldest first and stop credit from piling up.",
        bullets: [
          "Receivable and payable aging",
          "Running balance on every account",
          "Account statements to share with customers",
        ],
      },
      {
        heading: "Statements your customers trust",
        body: "Share a clean account statement showing every bill and payment. Disputes over who paid what get settled in minutes.",
      },
    ],
    evidence: {
      title: "One running balance per account.",
      body: "A credit sale, a supplier purchase, a payment received or a return all post to the right ledger automatically. Every account shows its full history in date order and a balance you can rely on.",
      steps: [
        ["Post", "Sales, purchases and payments land on the ledger."],
        ["Review", "See the running balance and aging."],
        ["Follow up", "Share a statement and collect what is due."],
      ],
    },
    faqs: [
      {
        question: "Can I share a statement with a customer?",
        answer:
          "Yes. Generate an account statement showing every bill and payment for any date range and share it with the customer.",
      },
      {
        question: "Can I see who owes me the most, and for how long?",
        answer:
          "Yes. Receivable aging shows each customer's balance split by how old it is, so you know who to follow up first.",
      },
      {
        question: "Can you bring over my existing khata balances?",
        answer:
          "Yes. We load your customers' and suppliers' opening balances during setup, so you start with the right figures.",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Industries                                                                 */
/* -------------------------------------------------------------------------- */

const industry = (
  data: Omit<Industry, "metaTitle" | "metaDescription"> & {
    metaTitle?: string;
    metaDescription?: string;
  },
): Industry => ({
  metaTitle: data.metaTitle ?? `${data.title} Software: POS, Stock & Accounts`,
  metaDescription: data.metaDescription ?? data.intro,
  ...data,
});

export const industryGroups: IndustryGroup[] = [
  {
    name: "Fashion and apparel",
    icon: Shirt,
    description: "Sizes, colours, seasons and fast exchanges, across shops and warehouses.",
    industries: [
      industry({
        slug: "clothing-boutiques",
        title: "Clothing stores and boutiques",
        summary: "Bill by size and colour, handle exchanges and track stock across outlets.",
        h1: "Business software for clothing stores and boutiques",
        intro:
          "Run your clothing brand or boutique with POS billing, stock by size and colour, outlet-wise sales and full accounts in one system, built for ready-to-wear, eastern wear and kids' wear retailers.",
        keywords: ["clothing store POS Pakistan", "boutique software", "garment shop inventory software", "clothing brand outlet management"],
        sections: [
          {
            heading: "Stock by design, size and colour",
            body: "Every article is tracked down to the size and colour, so staff bill the exact piece and you know which sizes are running out before the season ends.",
          },
          {
            heading: "Sale season without the chaos",
            body: "Apply discounts at the counter, handle exchanges against the original bill and see sell-through by collection, so you know what to reorder and what to clear.",
          },
          {
            heading: "Every outlet and the warehouse together",
            body: "Move stock from the warehouse to the outlet where it sells, and see each branch's sales and stock from one screen.",
          },
        ],
        faqs: [
          { question: "Can I handle size exchanges at the counter?", answer: "Yes. Open the original bill, swap the size or colour, and stock updates at that outlet automatically." },
          { question: "Can I see which sizes or designs sell best?", answer: "Yes. Sales and stock reports by item, size, colour and category show your best and slowest sellers." },
        ],
      }),
      industry({
        slug: "garment-manufacturers-wholesalers",
        title: "Garment manufacturers and wholesalers",
        summary: "Wholesale orders, dealer ledgers and finished-goods stock in one place.",
        h1: "Business software for garment manufacturers and wholesalers",
        intro:
          "Sell finished garments to retailers and dealers, track stock across your warehouse and outlets, and keep every dealer's ledger and payments in order, with accounts that update themselves.",
        keywords: ["garment wholesale software Pakistan", "garment factory accounts software", "readymade garments wholesale inventory", "dealer ledger software"],
        sections: [
          {
            heading: "Wholesale invoicing to dealers",
            body: "Invoice retailers and dealers by article, size set or carton. Each invoice reduces stock and posts to the dealer's ledger in one step.",
          },
          {
            heading: "Dealer credit under control",
            body: "Every dealer has a running balance with aging, so you know who is paying on time and who needs a follow-up before the next consignment.",
          },
          {
            heading: "Finished goods across warehouses",
            body: "Track finished stock in each warehouse and any factory outlets, with transfers recorded between them.",
          },
        ],
        faqs: [
          { question: "Can I sell both wholesale and retail?", answer: "Yes. Invoice dealers on credit and run counter sales at your outlets from the same stock and accounts." },
          { question: "Does it cover production planning?", answer: "The core system covers sales, stock, ledgers and accounts. If you need production or costing workflows, we can discuss a custom extension." },
        ],
      }),
      industry({
        slug: "fabric-textile-shops",
        title: "Fabric and textile shops",
        summary: "Lawn, cotton and suiting by the suit or the metre, wholesale and retail.",
        h1: "Business software for fabric and textile shops",
        intro:
          "From unstitched lawn suits to suiting by the metre, manage counter sales, wholesale buyers, stock by design and supplier ledgers in one system made for cloth markets and textile retailers.",
        keywords: ["cloth shop software Pakistan", "fabric shop POS", "unstitched suit inventory", "textile wholesale ledger"],
        sections: [
          {
            heading: "Sell by the suit or by the metre",
            body: "Set items up the way you sell them, whether by piece, suit or metre, so billing is quick and stock stays accurate.",
          },
          {
            heading: "Season after season, by design",
            body: "Track stock by brand, collection and design so you know what is left from last season and what to reorder.",
          },
          {
            heading: "Retail counter and wholesale buyers",
            body: "Run counter sales and credit sales to wholesale buyers from the same stock, with each buyer's ledger always current.",
          },
        ],
        faqs: [
          { question: "Can I sell fabric by the metre?", answer: "Yes. Items can be set up in metres, pieces or suits depending on how you sell them." },
          { question: "Can I keep ledgers for wholesale buyers?", answer: "Yes. Credit sales post to each buyer's ledger with a running balance and aging." },
        ],
      }),
      industry({
        slug: "footwear-leather-goods",
        title: "Footwear and leather goods",
        summary: "Shoes, bags and leather goods by article, size and colour.",
        h1: "Business software for footwear and leather goods stores",
        intro:
          "Run shoe stores, footwear brands and leather goods outlets with fast POS billing, stock by article, size and colour, outlet transfers and full accounts, all in one system.",
        keywords: ["shoe shop software Pakistan", "footwear POS", "footwear inventory by size", "leather goods store software"],
        sections: [
          {
            heading: "Every article in every size",
            body: "Track each article by size and colour at every outlet, so staff can tell a customer whether their size is in stock, here or at another branch.",
          },
          {
            heading: "Exchanges in seconds",
            body: "Size swaps are the most common return in footwear. Open the original bill, exchange the pair, and stock and cash stay right.",
          },
          {
            heading: "Shops, warehouse and wholesale",
            body: "Move pairs between the warehouse and outlets with a transfer record, and invoice wholesale buyers on credit from the same stock.",
          },
        ],
        faqs: [
          { question: "Can I check if a size is available at another branch?", answer: "Yes. Stock is visible per outlet, so staff can see where a size is in stock." },
          { question: "Can I sell to wholesale buyers too?", answer: "Yes. Invoice buyers on credit and their ledger updates automatically." },
        ],
      }),
    ],
  },
  {
    name: "Food and grocery",
    icon: ShoppingBasket,
    description: "Fast billing, high volumes and tight margins, from counters to distribution.",
    industries: [
      industry({
        slug: "restaurants-cafes-fast-food",
        title: "Restaurants, cafés and fast food",
        summary: "Quick counter billing, ingredient stock and daily cash closing.",
        h1: "Business software for restaurants, cafés and fast food",
        intro:
          "Bill orders quickly at the counter, keep track of ingredients and supplies, close the day's cash for each branch and see real profit after food cost and expenses.",
        keywords: ["restaurant POS Pakistan", "cafe billing software", "fast food POS", "restaurant inventory and accounts"],
        sections: [
          {
            heading: "Fast billing at the counter",
            body: "Ring up orders in a few taps, apply deals and discounts, and take cash, card or bank transfer. Receipts print with your branding.",
          },
          {
            heading: "Ingredients and supplies",
            body: "Record purchases from suppliers and track stock of ingredients, packaging and drinks, so you know what you are using and what to reorder.",
          },
          {
            heading: "Branch-wise cash and profit",
            body: "Close each branch's day with cash in hand and payment totals, and see profit after food cost, salaries, rent and utilities.",
          },
        ],
        faqs: [
          { question: "Does it handle table orders or a kitchen display?", answer: "The POS covers counter billing, payments and receipts. If you need table management or kitchen order tickets, confirm the setup with us in a demo." },
          { question: "Can I see sales for each branch?", answer: "Yes. Each branch has its own sales and cash closing, and the owner sees all branches together." },
        ],
      }),
      industry({
        slug: "bakeries-sweet-shops",
        title: "Bakeries and sweet shops",
        summary: "Counter sales by piece or weight, daily cash and multi-branch control.",
        h1: "Business software for bakeries and sweet shops",
        intro:
          "Sell bakery items and mithai by piece or by weight, track ingredient purchases, manage several branches and see each day's sales and cash, with accounts that update on their own.",
        keywords: ["bakery POS Pakistan", "sweet shop software", "mithai shop billing", "bakery branch management"],
        sections: [
          {
            heading: "Sell by piece or by kilo",
            body: "Set up items by piece, dozen or kilogram. Counter staff bill quickly, even on Eid and wedding-season rushes.",
          },
          {
            heading: "Raw material purchases",
            body: "Record purchases of flour, sugar, ghee and packaging against supplier ledgers, and see what you spend each month.",
          },
          {
            heading: "Every branch, every day",
            body: "Each branch closes its day with sales and cash totals, while the owner sees all branches together.",
          },
        ],
        faqs: [
          { question: "Can I sell items by weight?", answer: "Yes. Items can be set up per kilogram, per piece or per box." },
          { question: "Can I take advance orders for events?", answer: "Credit and advance payments can be recorded against a customer's ledger. Show us your order process in the demo and we will confirm the setup." },
        ],
      }),
      industry({
        slug: "grocery-stores-supermarkets",
        title: "Grocery stores, marts and supermarkets",
        summary: "Barcode billing for thousands of items, with stock and supplier ledgers.",
        h1: "Business software for grocery stores, marts and supermarkets",
        intro:
          "From a neighbourhood kiryana store to a multi-branch mart, bill fast with barcodes, keep thousands of items in stock, manage supplier credit and see profit after every expense.",
        keywords: ["grocery store POS Pakistan", "supermarket software", "kiryana store software", "mart billing and inventory"],
        sections: [
          {
            heading: "Barcode billing at speed",
            body: "Scan, bill and print the receipt in seconds, with multiple counters running at the same time.",
          },
          {
            heading: "Thousands of items, under control",
            body: "Track stock for every item, set minimum levels and get a reorder list before shelves go empty. Spot slow movers that tie up cash.",
          },
          {
            heading: "Supplier credit and distributor ledgers",
            body: "Purchases from distributors post to their ledgers, so you know exactly what you owe each one and when it is due.",
          },
        ],
        faqs: [
          { question: "Can several counters bill at the same time?", answer: "Yes. Multiple cashiers can bill at once, each with their own day-end closing." },
          { question: "Can I keep udhaar accounts for regular customers?", answer: "Yes. Credit sales post to the customer's ledger and payments reduce their balance." },
        ],
      }),
      industry({
        slug: "fmcg-distributors",
        title: "FMCG and food distributors",
        summary: "Retailer ledgers, high-volume invoicing and warehouse stock.",
        h1: "Business software for FMCG and food distributors",
        intro:
          "Invoice hundreds of retailers, keep every shop's ledger and payments straight, track warehouse stock and see profit by product, all in one system for distributors and wholesalers.",
        keywords: ["distribution software Pakistan", "FMCG distributor software", "wholesale distribution accounts", "retailer ledger software"],
        sections: [
          {
            heading: "High-volume invoicing",
            body: "Invoice retailers quickly from a single catalogue. Each invoice reduces warehouse stock and posts to the retailer's ledger.",
          },
          {
            heading: "Retailer ledgers and recoveries",
            body: "Every retailer has a running balance with aging, so your team knows which shops to collect from and how much.",
          },
          {
            heading: "Warehouse stock and principal purchases",
            body: "Record purchases from the company or principal, track stock in each warehouse, and see what you owe each supplier.",
          },
        ],
        faqs: [
          { question: "Can I track recoveries from shops?", answer: "Yes. Payments received are posted to each retailer's ledger, and aging shows what is overdue." },
          { question: "Can I manage more than one warehouse?", answer: "Yes. Each warehouse holds its own stock, with transfers recorded between them." },
        ],
      }),
    ],
  },
  {
    name: "Health and beauty",
    icon: Pill,
    description: "Large catalogues, fast-moving items and careful stock control.",
    industries: [
      industry({
        slug: "pharmacies-medical-stores",
        title: "Pharmacies and medical stores",
        summary: "Fast counter billing, large catalogues and distributor ledgers.",
        h1: "Business software for pharmacies and medical stores",
        intro:
          "Bill medicines and medical supplies quickly, keep a large catalogue in stock, manage distributor credit and see profit across one or more pharmacy outlets.",
        keywords: ["pharmacy software Pakistan", "medical store POS", "pharmacy inventory software", "medical store accounts"],
        sections: [
          {
            heading: "Find and bill any item fast",
            body: "Search by name or code, or scan the barcode, and bill in seconds even with thousands of products.",
          },
          {
            heading: "Stock that is always right",
            body: "Purchases, sales and returns update stock automatically, and minimum levels flag what needs reordering.",
          },
          {
            heading: "Distributor ledgers",
            body: "Purchases from each distributor post to their ledger, so you know what you owe and can reconcile with their statements.",
          },
        ],
        faqs: [
          { question: "Can I track batches and expiry dates?", answer: "If you need batch or expiry tracking, tell us during the demo and we will confirm the setup for your pharmacy." },
          { question: "Can I run more than one pharmacy?", answer: "Yes. Each outlet has its own stock and sales, and you see all of them together." },
        ],
      }),
      industry({
        slug: "cosmetics-beauty",
        title: "Cosmetics and beauty stores",
        summary: "Brand-wise stock, shade variants and outlet transfers.",
        h1: "Business software for cosmetics and beauty stores",
        intro:
          "Manage a wide catalogue of brands and shades, bill quickly at the counter, move stock between outlets and keep supplier and distributor ledgers in order.",
        keywords: ["cosmetics store software Pakistan", "beauty shop POS", "cosmetics inventory", "beauty distributor ledger"],
        sections: [
          {
            heading: "A wide catalogue, organised",
            body: "Group items by brand, category and shade so staff find the exact product quickly and stock stays accurate.",
          },
          {
            heading: "Counter, salon and wholesale sales",
            body: "Sell at the counter, on credit to salons, or wholesale to other shops, all from the same stock and ledgers.",
          },
          {
            heading: "Outlet-wise stock and transfers",
            body: "Move stock to the outlet where it sells, with a transfer record, and see sales and stock for every location.",
          },
        ],
        faqs: [
          { question: "Can I sell on credit to salons?", answer: "Yes. Credit sales post to each salon's ledger with a running balance." },
          { question: "Can I see which brands sell best?", answer: "Yes. Sales reports by brand, category and item show your best and slowest sellers." },
        ],
      }),
    ],
  },
  {
    name: "Electronics and technology",
    icon: Smartphone,
    description: "High-value stock, wholesale trade and tight control over every unit.",
    industries: [
      industry({
        slug: "mobile-phones-accessories",
        title: "Mobile phones and accessories",
        summary: "High-value stock, retail and wholesale, with dealer ledgers.",
        h1: "Business software for mobile phone and accessories shops",
        intro:
          "Sell phones, accessories and gadgets at the counter and to other dealers, track high-value stock at every outlet, and keep dealer and supplier ledgers accurate.",
        keywords: ["mobile shop software Pakistan", "mobile phone POS", "mobile accessories inventory", "mobile dealer ledger"],
        sections: [
          {
            heading: "Every high-value unit accounted for",
            body: "Stock for each model and variant is tracked by outlet, so a missing handset shows up the same day, not at the month-end count.",
          },
          {
            heading: "Retail and dealer trade together",
            body: "Bill walk-in customers at the counter and invoice other dealers on credit, from the same stock and accounts.",
          },
          {
            heading: "Supplier and dealer ledgers",
            body: "Purchases and sales on credit post to each party's ledger, so balances with the market are always clear.",
          },
        ],
        faqs: [
          { question: "Can I track phones by IMEI?", answer: "If you need unit-level IMEI tracking, tell us during the demo and we will confirm the setup for your shop." },
          { question: "Can I trade with other dealers on credit?", answer: "Yes. Credit sales and purchases post to each dealer's ledger with a running balance." },
        ],
      }),
      industry({
        slug: "electronics-home-appliances",
        title: "Electronics and home appliances",
        summary: "Showroom and warehouse stock, credit sales and supplier accounts.",
        h1: "Business software for electronics and home appliance stores",
        intro:
          "Run showrooms and warehouses for TVs, ACs, fridges and small appliances, with POS billing, stock by model, credit customer ledgers and complete accounts.",
        keywords: ["electronics store software Pakistan", "home appliances shop POS", "electronics showroom inventory", "appliance dealer accounts"],
        sections: [
          {
            heading: "Showroom and warehouse stock",
            body: "See stock by model at each showroom and warehouse, and record deliveries from the warehouse with a transfer.",
          },
          {
            heading: "Credit customers and payments",
            body: "Sell on credit and record payments as they come in. Each customer's ledger shows what is still due.",
          },
          {
            heading: "Supplier purchases and dues",
            body: "Purchases from companies and distributors post to supplier ledgers, so you always know what you owe.",
          },
        ],
        faqs: [
          { question: "Can I sell on credit or in parts?", answer: "Yes. Sales on credit post to the customer's ledger and every payment reduces their balance." },
          { question: "Can I manage several showrooms?", answer: "Yes. Each showroom and warehouse has its own stock, visible together for the owner." },
        ],
      }),
      industry({
        slug: "computer-it-hardware",
        title: "Computer and IT hardware",
        summary: "Laptops, parts and accessories for retail and corporate buyers.",
        h1: "Business software for computer and IT hardware dealers",
        intro:
          "Sell laptops, parts and accessories to walk-in customers, resellers and corporate buyers, with stock by model, credit ledgers and accounts in one system.",
        keywords: ["computer shop software Pakistan", "IT hardware dealer software", "computer parts inventory", "laptop shop POS"],
        sections: [
          {
            heading: "Stock by model and part",
            body: "Track laptops, RAM, drives and accessories by model at each location, so the counter knows what is available.",
          },
          {
            heading: "Corporate and reseller accounts",
            body: "Invoice corporate buyers and resellers on credit and follow up using each account's aging.",
          },
          {
            heading: "Purchases from importers and distributors",
            body: "Record purchases against supplier ledgers and keep a clear record of what you owe each one.",
          },
        ],
        faqs: [
          { question: "Can I invoice corporate customers on credit?", answer: "Yes. Invoices post to the customer's ledger with aging, so you can follow up on time." },
          { question: "Do you track serial numbers?", answer: "If you need serial-level tracking, tell us during the demo and we will confirm the setup." },
        ],
      }),
    ],
  },
  {
    name: "Hardware, building and auto",
    icon: Hammer,
    description: "Thousands of parts, trade customers on credit and bulk stock.",
    industries: [
      industry({
        slug: "hardware-paint-sanitary",
        title: "Hardware, paint and sanitary stores",
        summary: "Thousands of small items, contractor ledgers and counter sales.",
        h1: "Business software for hardware, paint and sanitary stores",
        intro:
          "Manage thousands of fittings, tools, paints and sanitary items, bill quickly at the counter, keep contractor and plumber ledgers and see what every item earns.",
        keywords: ["hardware store software Pakistan", "paint shop POS", "sanitary store inventory", "contractor ledger software"],
        sections: [
          {
            heading: "Thousands of small items",
            body: "Find any fitting or tool by code, name or barcode, and keep stock accurate across a very large catalogue.",
          },
          {
            heading: "Contractor and plumber accounts",
            body: "Trade customers buy on credit. Their ledgers show every bill and payment, with aging for follow-up.",
          },
          {
            heading: "Counter and bulk orders",
            body: "Bill walk-in customers at the counter and invoice bulk site orders from the same stock.",
          },
        ],
        faqs: [
          { question: "Can I keep ledgers for contractors?", answer: "Yes. Credit sales post to each contractor's ledger with a running balance and aging." },
          { question: "Can I sell in different units, like piece and box?", answer: "Items are set up in the unit you sell them in. Tell us how you sell and we will configure it during setup." },
        ],
      }),
      industry({
        slug: "building-materials",
        title: "Building materials",
        summary: "Cement, steel, tiles and marble, with builder and contractor ledgers.",
        h1: "Business software for building materials dealers",
        intro:
          "Sell cement, steel, tiles, marble and other building materials to builders and contractors, track bulk stock across yards and warehouses, and keep every account's balance clear.",
        keywords: ["building material dealer software Pakistan", "cement dealer accounts", "steel dealer software", "tiles shop inventory"],
        sections: [
          {
            heading: "Bulk stock in every yard",
            body: "Track stock by bag, ton, piece or box at each yard and warehouse, with transfers recorded between them.",
          },
          {
            heading: "Builder and contractor credit",
            body: "Large credit sales post to each builder's ledger. Aging shows which accounts are overdue before you send the next load.",
          },
          {
            heading: "Supplier and company accounts",
            body: "Purchases from manufacturers and suppliers post to their ledgers so you always know what you owe.",
          },
        ],
        faqs: [
          { question: "Can I track stock in bags, tons or pieces?", answer: "Yes. Items are set up in the unit you buy and sell them in." },
          { question: "Can I see which contractors are overdue?", answer: "Yes. Receivable aging shows every contractor's balance by how long it has been outstanding." },
        ],
      }),
      industry({
        slug: "auto-parts",
        title: "Auto parts and motorcycle spares",
        summary: "Part lookups, workshop ledgers and multi-shop stock.",
        h1: "Business software for auto parts and motorcycle spares dealers",
        intro:
          "Find parts quickly, bill counter and workshop customers, keep mechanic and workshop ledgers and track stock across shops and godowns.",
        keywords: ["auto parts shop software Pakistan", "motorcycle spare parts software", "auto parts inventory", "workshop ledger software"],
        sections: [
          {
            heading: "Find the right part fast",
            body: "Search by part number, name or vehicle, and see stock at this shop or another branch.",
          },
          {
            heading: "Workshop and mechanic accounts",
            body: "Workshops buy on credit. Their ledgers keep every bill and payment, with aging to stay on top of recoveries.",
          },
          {
            heading: "Shops and godowns together",
            body: "Move parts from the godown to the shop with a transfer record, and see stock for every location.",
          },
        ],
        faqs: [
          { question: "Can I search by part number?", answer: "Yes. Items can be found by part number, name or code at the counter." },
          { question: "Can I sell on credit to workshops?", answer: "Yes. Credit sales post to each workshop's ledger." },
        ],
      }),
    ],
  },
  {
    name: "Home and lifestyle",
    icon: Sofa,
    description: "Showrooms, seasonal demand and repeat institutional buyers.",
    industries: [
      industry({
        slug: "furniture-home-decor",
        title: "Furniture and home décor",
        summary: "Showroom stock, advance payments and customer balances.",
        h1: "Business software for furniture and home décor stores",
        intro:
          "Manage high-value showroom and warehouse stock, take advances and part payments, keep customer balances clear and see profit on every sale.",
        keywords: ["furniture shop software Pakistan", "furniture showroom inventory", "home decor store POS", "furniture customer ledger"],
        sections: [
          {
            heading: "Showroom and warehouse stock",
            body: "See every piece at each showroom and warehouse, with transfers and deliveries recorded.",
          },
          {
            heading: "Advances and part payments",
            body: "Record the advance at booking and the balance on delivery. The customer's ledger shows exactly what is still due.",
          },
          {
            heading: "Profit on every sale",
            body: "Because stock is costed, you see the real margin on each piece and each category.",
          },
        ],
        faqs: [
          { question: "Can I take an advance and the balance later?", answer: "Yes. Payments are recorded against the customer's ledger, which shows the remaining balance." },
          { question: "Can I manage more than one showroom?", answer: "Yes. Each showroom and warehouse holds its own stock." },
        ],
      }),
      industry({
        slug: "crockery-household",
        title: "Crockery and household goods",
        summary: "Wide catalogues, retail and wholesale, with fast counter billing.",
        h1: "Business software for crockery and household goods stores",
        intro:
          "Bill crockery, kitchenware and household items quickly, manage a wide catalogue across outlets and keep wholesale buyer and supplier ledgers up to date.",
        keywords: ["crockery shop software Pakistan", "household goods store POS", "kitchenware inventory", "crockery wholesale ledger"],
        sections: [
          {
            heading: "A wide catalogue, easy to bill",
            body: "Organise items by category and brand, and bill by barcode or name at the counter.",
          },
          {
            heading: "Retail and wholesale together",
            body: "Sell at the counter and invoice wholesale buyers on credit from the same stock.",
          },
          {
            heading: "Damages and stock counts",
            body: "Record breakages and count differences with a reason, so losses are visible and stock stays right.",
          },
        ],
        faqs: [
          { question: "Can I record breakages?", answer: "Yes. Stock adjustments are recorded with a reason, so you can see losses over time." },
          { question: "Can I sell to wholesale buyers on credit?", answer: "Yes. Credit sales post to the buyer's ledger with aging." },
        ],
      }),
      industry({
        slug: "stationery-book-shops",
        title: "Stationery and book shops",
        summary: "Back-to-school rushes, school accounts and supplier ledgers.",
        h1: "Business software for stationery and book shops",
        intro:
          "Handle back-to-school rushes with fast billing, keep thousands of items in stock, manage school and office accounts and stay on top of what you owe publishers and suppliers.",
        keywords: ["stationery shop software Pakistan", "book shop POS", "stationery inventory", "school supply accounts"],
        sections: [
          {
            heading: "Ready for the school rush",
            body: "Multiple counters bill at the same time, and stock updates as each bill is saved.",
          },
          {
            heading: "School and office accounts",
            body: "Invoice schools and offices on credit and keep each account's balance and aging visible.",
          },
          {
            heading: "Publisher and supplier dues",
            body: "Purchases post to supplier ledgers, so you pay the right amounts on time.",
          },
        ],
        faqs: [
          { question: "Can I invoice schools on credit?", answer: "Yes. Credit sales post to the school's ledger with a running balance." },
          { question: "Can several counters bill at once?", answer: "Yes. Each cashier bills independently with their own day-end closing." },
        ],
      }),
    ],
  },
  {
    name: "Agri and commodity trade",
    icon: Wheat,
    description: "Seasonal stock, dealer networks and long credit cycles.",
    industries: [
      industry({
        slug: "agri-inputs-dealers",
        title: "Fertilizer, seed and pesticide dealers",
        summary: "Seasonal stock, farmer credit and company accounts.",
        h1: "Business software for fertilizer, seed and pesticide dealers",
        intro:
          "Manage seasonal stock of fertilizer, seed and pesticides, keep farmer and sub-dealer credit under control until harvest, and stay clear on what you owe each company.",
        keywords: ["fertilizer dealer software Pakistan", "pesticide dealer accounts", "seed dealer inventory", "agri dealer ledger"],
        sections: [
          {
            heading: "Seasonal stock in every godown",
            body: "Track stock at each godown before and during the season, with transfers between them.",
          },
          {
            heading: "Farmer credit until harvest",
            body: "Credit sales to farmers and sub-dealers post to their ledgers. Aging shows what is due as harvest payments come in.",
          },
          {
            heading: "Company accounts",
            body: "Purchases from companies post to their ledgers, so your dues and payments are always reconciled.",
          },
        ],
        faqs: [
          { question: "Can I give credit to farmers until harvest?", answer: "Yes. Credit sales post to each farmer's ledger and payments reduce the balance when they come in." },
          { question: "Can I manage several godowns?", answer: "Yes. Each godown holds its own stock, with transfers recorded." },
        ],
      }),
      industry({
        slug: "grain-commodity-traders",
        title: "Rice, grain and commodity traders",
        summary: "Bulk purchases and sales by weight, with party ledgers.",
        h1: "Business software for rice, grain and commodity traders",
        intro:
          "Buy and sell rice, wheat, pulses and other commodities in bulk, track stock by weight in each warehouse and keep every party's ledger accurate.",
        keywords: ["grain trader software Pakistan", "rice dealer accounts", "commodity trading ledger", "arhat software"],
        sections: [
          {
            heading: "Stock by weight",
            body: "Track stock in kilograms, maunds or bags at each warehouse, updated with every purchase and sale.",
          },
          {
            heading: "Party ledgers for buyers and sellers",
            body: "Every party has a ledger showing purchases, sales and payments, so balances in the market are never in doubt.",
          },
          {
            heading: "Profit on each lot",
            body: "Because purchases are costed, you see what each sale actually earned after cost.",
          },
        ],
        faqs: [
          { question: "Can I keep stock in maunds or bags?", answer: "Items are set up in the unit you trade in. Tell us during setup and we will configure it." },
          { question: "Can one party be both a buyer and a seller?", answer: "Yes. Their ledger shows both sides and the net balance." },
        ],
      }),
    ],
  },
];

export const allIndustries: Industry[] = industryGroups.flatMap((group) => group.industries);

export const findIndustry = (slug: string) => allIndustries.find((item) => item.slug === slug);
export const findFeature = (slug: string) => coreFeatures.find((item) => item.slug === slug);

/** FAQs appended to every industry page. */
export const commonIndustryFaqs: Faq[] = [
  {
    question: "Does it include POS, stock, accounting and ledgers?",
    answer:
      "Yes. POS billing, stock management, multi-outlet control, customer and supplier ledgers and full accounting are all part of one system.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The software is free and open source. You only pay $50/month for hosting, with every feature and unlimited users included. No license or renewal fee.",
  },
  {
    question: "Do you help with setup?",
    answer:
      "Yes. We set it up, bring over your items, customers, suppliers and opening balances, and train your staff. Setup, data transfer and training are included.",
  },
];

/** Closing section on every industry page. */
const oneSystemSection: PageSection = {
  heading: "Everything in one system",
  body: "Every business here gets the same five core tools, connected so a single sale updates all of them.",
  bullets: [
    "POS system for fast counter billing",
    "Stock management by item and location",
    "Multiple outlets and warehouses",
    "Customer and supplier ledger tracking",
    "Full accounting and reports",
  ],
};

/* -------------------------------------------------------------------------- */
/* Localisation                                                               */
/* -------------------------------------------------------------------------- */

/** Translatable fields; slugs, icons, graphics and keywords come from English. */
export type FeatureCopy = Pick<
  CoreFeature,
  "title" | "description" | "tagline" | "metaTitle" | "metaDescription" | "h1" | "intro" | "sections" | "evidence" | "faqs"
>;
export type IndustryCopy = Pick<Industry, "title" | "summary" | "h1" | "intro" | "sections" | "faqs"> & {
  metaTitle?: string;
  keywords?: string[];
};
export type GroupCopy = Pick<IndustryGroup, "name" | "description">;

export type CatalogTranslation = {
  features: Record<string, FeatureCopy>;
  /** Keyed by the English group name. */
  groups: Record<string, GroupCopy>;
  industries: Record<string, IndustryCopy>;
  industryMetaTitle: (title: string) => string;
  commonIndustryFaqs: Faq[];
  oneSystemSection: PageSection;
};

function buildCatalog(t?: CatalogTranslation) {
  const need = <T,>(table: Record<string, T>, key: string, kind: string): T => {
    const value = table[key];
    // Fail the build, not the visitor, when a translation is missing.
    if (!value) throw new Error(`Missing Urdu translation for ${kind} "${key}"`);
    return value;
  };

  const features: CoreFeature[] = t
    ? coreFeatures.map((feature) => ({ ...feature, ...need(t.features, feature.slug, "feature") }))
    : coreFeatures;

  const groups: IndustryGroup[] = t
    ? industryGroups.map((group) => ({
        ...group,
        ...need(t.groups, group.name, "industry group"),
        industries: group.industries.map((item) => {
          const copy = need(t.industries, item.slug, "industry");
          return {
            ...item,
            ...copy,
            metaTitle: copy.metaTitle ?? t.industryMetaTitle(copy.title),
            metaDescription: copy.intro,
            keywords: copy.keywords ?? item.keywords,
          };
        }),
      }))
    : industryGroups;

  const industries = groups.flatMap((group) => group.industries);

  return {
    coreFeatures: features,
    industryGroups: groups,
    allIndustries: industries,
    commonIndustryFaqs: t?.commonIndustryFaqs ?? commonIndustryFaqs,
    oneSystemSection: t?.oneSystemSection ?? oneSystemSection,
    findFeature: (slug: string) => features.find((item) => item.slug === slug),
    findIndustry: (slug: string) => industries.find((item) => item.slug === slug),
  };
}

const catalogs = {
  en: buildCatalog(),
  ur: buildCatalog(catalogUr),
} satisfies Record<Locale, ReturnType<typeof buildCatalog>>;

export const getCatalog = (locale: Locale) => catalogs[locale];
