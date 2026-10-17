import { LandingPage } from "@/components/landing/landing-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <LandingPage />;
}
