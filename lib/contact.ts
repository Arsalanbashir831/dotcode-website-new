const WHATSAPP_BASE_URL = "https://wa.me/923035555992";

export function getWhatsAppContactUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_URL = getWhatsAppContactUrl(
  "Hi, I’d like to learn more about QuickAccounts.",
);
export const WHATSAPP_DEMO_URL = getWhatsAppContactUrl(
  "Hi, I’d like to book a QuickAccounts demo for my business.",
);
