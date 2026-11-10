const WHATSAPP_BASE_URL = "https://wa.me/923071257828";

export const DEMO_APPLICATION_URL = "https://quickerp.dotcodesolutions.com/";

export function getWhatsAppContactUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_URL = getWhatsAppContactUrl(
  "Hi, I’d like to learn more about Dotcode ERP.",
);
export const WHATSAPP_DEMO_URL = getWhatsAppContactUrl(
  "Hi, I’d like to book a Dotcode ERP demo for my business.",
);
