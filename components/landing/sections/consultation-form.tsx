"use client";

import type { FormEvent } from "react";
import { getWhatsAppContactUrl } from "@/lib/contact";

export function ConsultationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi, I’d like to book a QuickAccounts consultation.",
      `Name: ${formData.get("name")}`,
      `Company: ${formData.get("company")}`,
      `Email: ${formData.get("email")}`,
      `WhatsApp: ${formData.get("phone")}`,
      `What I’d like to review: ${formData.get("requirements")}`,
    ].join("\n");

    window.open(getWhatsAppContactUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="qa-consultation-form" onSubmit={handleSubmit}>
      <div>
        <p className="qa-eyebrow">Book a consultation</p>
        <h2>Tell us what you need to organize.</h2>
        <p>Share your business type, locations and the records you want to improve. We’ll use this to prepare a relevant walkthrough.</p>
        <p className="qa-consultation-note">We’ll open WhatsApp with your details ready to review and send.</p>
      </div>
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Company name<input name="company" autoComplete="organization" required /></label>
      <label>Company email<input type="email" name="email" autoComplete="email" required /></label>
      <label>WhatsApp number<input type="tel" name="phone" autoComplete="tel" placeholder="Include country code, e.g. +92 300 1234567" required /></label>
      <label>What should we review?<textarea name="requirements" rows={4} required /></label>
      <button type="submit">Continue to WhatsApp</button>
    </form>
  );
}
