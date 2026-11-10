import type { Metadata } from "next";

import { LandingPage } from "@/components/landing/landing-page";
import { localeAlternates, readLocale } from "@/lib/i18n";
import type { LocaleParams } from "@/lib/i18n";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  return { alternates: localeAlternates(await readLocale(params), "/") };
}

export default async function Home({ params }: LocaleParams) {
  return <LandingPage locale={await readLocale(params)} />;
}
