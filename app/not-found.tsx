import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Dotcode Solutions page could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="qa-site seo-page">
      <section className="seo-hero">
        <div className="qa-container">
          <p className="qa-eyebrow">404</p>
          <h1>Page not found</h1>
          <p className="seo-intro">
            The page may have moved or the address may be incorrect. Return to
            the QuickAccounts homepage or explore the product guides.
          </p>
          <div className="seo-actions">
            <Link href="/">Return home</Link>
            <Link href="/blog">Browse guides</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
