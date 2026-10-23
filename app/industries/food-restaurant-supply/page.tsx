import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/seo/seo-landing-page";

export const metadata: Metadata = {
  title: "Restaurant Supply Distributor Software",
  description: "Organize food and restaurant supply stock, repeat customer orders, supplier purchasing and account balances in one workflow.",
  keywords: [
    "restaurant supply distributor software",
    "food wholesale inventory management",
    "hotel and restaurant supply accounts",
    "food distributor stock software",
    "restaurant supplier invoicing system",
  ],
  alternates: { canonical: "/industries/food-restaurant-supply" },
  openGraph: {
    title: "Food & Restaurant Supply Software | Dotcode Solutions",
    description: "Keep food service stock, repeat supplier orders, invoices and restaurant account balances connected in one system.",
    url: "/industries/food-restaurant-supply",
  },
};

export default function FoodRestaurantSupplyPage() {
  return <SeoLandingPage path="/industries/food-restaurant-supply"
    eyebrow="Dotcode for food service supply"
    title="Inventory software for food and restaurant supply wholesalers"
    intro="Restaurants, cafes and hotels buy on a repeating rhythm, often from the same short list of products. Dotcode keeps the product catalogue, supplier purchasing, invoices and account balances connected so repeat orders are quick and the office can see who owes what."
    sections={[
      {
        heading: "A catalogue built for repeat orders",
        body: "Food service ranges are usually narrower but ordered constantly. Product records give the team a consistent code and price context for each line, and the invoice history shows what each customer typically buys.",
      },
      {
        heading: "Stock and purchasing across storage locations",
        body: "Supplier purchases are recorded against a destination, whether that is a main warehouse or a distribution point. Receiving against the order creates the stock increase, and transfers between locations keep a reference for where goods have moved.",
        bullets: [
          "Purchases tied to the supplier and receiving location",
          "Stock records shared by the warehouse and the sales team",
          "Transfers recorded between storage sites",
        ],
      },
      {
        heading: "Accounts for restaurants, cafes and hotels",
        body: "Regular buyers often settle on a cycle rather than per delivery. Invoices post to the customer ledger with a running balance, so the team can review outstanding amounts, payment history and the invoices behind them.",
      },
      {
        heading: "Returns and order corrections",
        body: "When a delivery is short or an item comes back, the correction is recorded against the original sale and customer. Stock and account entries follow the same transaction, keeping the warehouse and the office aligned. Dotcode provides setup, supported migration and training.",
      },
    ]}
    faqs={[
      { question: "Can we see a customer's repeat order history?", answer: "Yes. Invoices are held against the customer, so previous sales and the products billed can be reviewed when taking the next order." },
      { question: "Does Dotcode track expiry dates and food safety records?", answer: "Food safety and expiry requirements depend on your products and local rules. Bring those requirements to the guided demo so the team can confirm what the setup covers." },
      { question: "Can we manage stock in more than one storage site?", answer: "Yes. Each warehouse or storage location is separate, with transfers recorded between them." },
      { question: "Can we manage customer account balances?", answer: "Yes. Invoices and payments post to a customer ledger with a running balance, so outstanding amounts can be reviewed in one place." },
    ]}
  />;
}
