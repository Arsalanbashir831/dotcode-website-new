import Link from "next/link";

export function ProductDefinitionSection() {
  return (
    <section className="qa-product-definition" aria-labelledby="what-is-dotcode">
      <div className="qa-container">
        <p className="qa-eyebrow">Product overview</p>
        <h2 id="what-is-dotcode">What is Dotcode?</h2>
        <p>
          Dotcode is inventory, serial-number, warranty,
          RMA, and accounting software for electronics and hardware retailers,
          wholesalers, and distributors. It connects purchasing, sales, POS
          billing, warehouse stock, customer and supplier accounts, cash
          records, and product service history in one system. Teams can trace
          any serialized electronic or hardware product from receipt through
          sale, invoice lookup, warranty review, return, and replacement.
          Standard setup, supported data migration, and team training are
          included. Businesses should confirm integrations, data formats,
          permissions, customizations, and deployment needs during a guided
          demo.
        </p>
        <div className="qa-product-definition-links">
          <Link href="/#contact">Book a guided demo</Link>
          <Link href="/implementation">Review implementation</Link>
        </div>
      </div>
    </section>
  );
}
