import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

import { Button } from "@/components/ui/button";
import { WHATSAPP_CONTACT_URL } from "@/lib/contact";

type WhatsAppButtonProps = {
  href?: string;
  size?: "default" | "lg";
  className?: string;
  label?: string;
  theme?: "whatsapp" | "orange";
  showIcon?: boolean;
};

export function WhatsAppButton({
  href = WHATSAPP_CONTACT_URL,
  size = "default",
  className,
  label = "Contact Us",
  theme = "whatsapp",
  showIcon = true,
}: WhatsAppButtonProps) {
  const themeClass = theme === "orange"
    ? "bg-[#F45A21] text-white hover:bg-[#D94712] focus-visible:ring-[#F45A21]"
    : "bg-[#2E6F40] text-white hover:bg-[#1DA851] focus-visible:ring-[#2E6F40]";

  return (
    <Button
      asChild
      size={size}
      className={`${themeClass} ${className ?? ""}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {showIcon ? <WhatsappLogoIcon size={20} weight="fill" aria-hidden="true" /> : null}
        {label}
      </a>
    </Button>
  );
}
