"use client";

import type { FormEvent } from "react";
import { getDictionary } from "@/components/i18n/dictionary";
import { useLocale } from "@/components/i18n/locale-provider";
import { getWhatsAppContactUrl } from "@/lib/contact";

export function ConsultationForm() {
  const t = getDictionary(useLocale()).consultation;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi, I’d like to book a Dotcode ERP consultation.",
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
        <p className="qa-eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p>{t.body}</p>
        <p className="qa-consultation-note">{t.note}</p>
      </div>
      <label>{t.name}<input name="name" autoComplete="name" required /></label>
      <label>{t.company}<input name="company" autoComplete="organization" required /></label>
      <label>{t.email}<input type="email" name="email" autoComplete="email" required /></label>
      <label>{t.phone}<input type="tel" name="phone" autoComplete="tel" dir="ltr" placeholder={t.phonePlaceholder} required /></label>
      <label>{t.requirements}<textarea name="requirements" rows={4} required /></label>
      <button type="submit">{t.submit}</button>
    </form>
  );
}
