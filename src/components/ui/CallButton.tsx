import {
  ActionButton,
  type Size,
  type Variant,
} from "@/components/ui/ActionButton";
import { site } from "@/content/site";

export function CallButton({
  variant = "solid",
  size = "md",
  label,
  className = "",
}: {
  variant?: Variant;
  size?: Size;
  label?: string;
  className?: string;
}) {
  return (
    <ActionButton
      href={site.phoneHref}
      variant={variant}
      size={size}
      className={className}
      aria-label={`전화 상담 ${site.phone}`}
    >
      {variant === "solid" ? (
        <span aria-hidden className="h-[7px] w-[7px] rounded-full bg-accent" />
      ) : null}
      {label ?? `전화 상담 ${site.phone}`}
    </ActionButton>
  );
}
