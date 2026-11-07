import Link from "next/link";

export function ProductDefinitionSection() {
  return (
    <section className="qa-product-definition" aria-labelledby="what-is-quickaccounts">
      <div className="qa-container">
        <p className="qa-eyebrow">What is QuickAccounts?</p>
        <h2 id="what-is-quickaccounts">Your firm&apos;s finances, finally under control</h2>
        <p>
          QuickAccounts is simple accounting software built for businesses that
          sell their expertise, not products. Send invoices, bill retainers and
          fees, record expenses, and always know who owes you and how much cash
          you have. We set it up for you, bring over your client records and
          train your team, so you&apos;re running in days, not months.
        </p>
        <div className="qa-product-definition-links">
          <Link href="/#contact">Book a free demo</Link>
          <Link href="/#process">See how it works</Link>
        </div>
      </div>
    </section>
  );
}
