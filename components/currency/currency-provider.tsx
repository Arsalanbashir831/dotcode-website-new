"use client";

import { createContext, useContext, useSyncExternalStore } from "react";
import type { ReactNode } from "react";

import { COUNTRY_COOKIE, localizePrices, USD_TO_PKR_FALLBACK } from "@/lib/currency";

const RateContext = createContext(USD_TO_PKR_FALLBACK);

export function CurrencyProvider({ rate, children }: { rate: number; children: ReactNode }) {
  return <RateContext.Provider value={rate}>{children}</RateContext.Provider>;
}

function detectPakistan() {
  // Prefer the IP-based country set by proxy.ts; it's authoritative when present.
  const match = document.cookie.match(new RegExp(`(?:^|; )${COUNTRY_COOKIE}=([A-Z]{2})`));
  if (match) return match[1] === "PK";
  // Fallback (local dev, or hosts without geolocation): the browser's time zone.
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone === "Asia/Karachi";
  } catch {
    return false;
  }
}

const noSubscribe = () => () => {};

/** False during server render and hydration, then the real value on the client. */
export function useIsPakistan() {
  return useSyncExternalStore(noSubscribe, detectPakistan, () => false);
}

/** Renders text with "$" amounts shown in PKR for visitors from Pakistan. */
export function PriceText({ children }: { children: string }) {
  const isPakistan = useIsPakistan();
  const rate = useContext(RateContext);
  return <>{isPakistan ? localizePrices(children, rate) : children}</>;
}
