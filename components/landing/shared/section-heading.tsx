import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  isDark?: boolean;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  isDark = false,
}: SectionHeadingProps) => (
  <div className="qa-section-heading" data-reveal>
    <p className="qa-eyebrow">{eyebrow}</p>
    <h2 className={cn(isDark && "text-white")}>{title}</h2>
    {description ? (
      <p className={cn(isDark && "!text-[#AAA7A4]")}>{description}</p>
    ) : null}
  </div>
);
