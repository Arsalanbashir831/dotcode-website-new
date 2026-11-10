/** Cookie set by `proxy.ts` with the visitor's ISO country code (from their IP). */
export const COUNTRY_COOKIE = "qa_country";

/** Used when the live rate cannot be fetched. Update occasionally. */
export const USD_TO_PKR_FALLBACK = 280;

const RATE_SOURCES = [
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json",
  "https://latest.currency-api.pages.dev/v1/currencies/usd.json",
];

/**
 * Live USD → PKR rate, cached and refreshed once a day. Falls back to a fixed
 * rate so pricing always renders, even if both sources are down.
 */
export async function getUsdToPkrRate(): Promise<number> {
  for (const url of RATE_SOURCES) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 86_400 },
        signal: AbortSignal.timeout(4_000),
      });
      if (!response.ok) continue;
      const data = (await response.json()) as { usd?: { pkr?: unknown } };
      const rate = Number(data.usd?.pkr);
      // Sanity bounds guard against a malformed or wildly wrong response.
      if (Number.isFinite(rate) && rate > 100 && rate < 1_000) return rate;
    } catch {
      // Try the next source.
    }
  }
  return USD_TO_PKR_FALLBACK;
}

/** Formats a USD amount in rupees, rounded to a clean figure (nearest 100). */
export function formatPkr(usd: number, rate: number) {
  const pkr = usd * rate;
  const rounded = pkr >= 1_000 ? Math.round(pkr / 100) * 100 : Math.round(pkr);
  return `Rs ${rounded.toLocaleString("en-PK")}`;
}

/** Replaces every "$1,234" style amount in a string with its rupee value. */
export function localizePrices(text: string, rate: number) {
  return text
    .replace(/\$(\d[\d,]*(?:\.\d+)?)/g, (_, amount: string) =>
      formatPkr(Number(amount.replace(/,/g, "")), rate),
    )
    .replace(/\bin USD\b/g, "in PKR, converted from USD at today's rate");
}
