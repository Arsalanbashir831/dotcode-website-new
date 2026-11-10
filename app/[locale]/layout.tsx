import type { Metadata } from "next";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import { notFound } from "next/navigation";
import "@fontsource-variable/manrope";
import { Analytics } from "@vercel/analytics/next";

import { CurrencyProvider } from "@/components/currency/currency-provider";
import { getDictionary } from "@/components/i18n/dictionary";
import { LocaleProvider } from "@/components/i18n/locale-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { getUsdToPkrRate } from "@/lib/currency";
import { isLocale, localeDir, locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { siteEntityGraph } from "@/lib/seo";

import "../globals.css";

const nastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-urdu",
});

type Props = Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL("https://dotcodesolutions.com"),
    title: { default: meta.defaultTitle, template: meta.titleTemplate },
    description: meta.description,
    keywords: meta.keywords,
    applicationName: "Dotcode Solutions",
    category: "Business software",
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "1254x1254" }],
      apple: [{ url: "/favicon.png", sizes: "1254x1254" }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      siteName: "Dotcode Solutions",
      locale: locale === "ur" ? "ur_PK" : "en_US",
      alternateLocale: locale === "ur" ? "en_US" : "ur_PK",
      title: meta.defaultTitle,
      description: meta.socialDescription,
      images: [{ url: "/assets/dotcode-logo.png", alt: "Dotcode Solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.defaultTitle,
      description: meta.socialDescription,
      images: ["/assets/dotcode-logo.png"],
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale: param } = await params;
  if (!isLocale(param)) notFound();
  const locale: Locale = param;
  const usdToPkr = await getUsdToPkrRate();

  return (
    <html lang={locale} dir={localeDir(locale)} className={locale === "ur" ? nastaliq.variable : undefined}>
      <body suppressHydrationWarning>
        <JsonLd data={siteEntityGraph} />
        <LocaleProvider locale={locale}>
          <CurrencyProvider rate={usdToPkr}>{children}</CurrencyProvider>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  );
}
