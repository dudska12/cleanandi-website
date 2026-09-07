import type { ReactNode } from "react";

export type Variant = "solid" | "outline" | "white";
export type Size = "sm" | "md" | "lg";

const SIZES: Record<Size, string> = {
  sm: "px-5 py-3 text-[15px]",
  md: "px-7 py-4 text-[16px]",
  lg: "px-8 py-[18px] text-[17px]",
};

const VARIANTS: Record<Variant, string> = {
  solid:
    "bg-brand text-white hover:bg-brand-dark shadow-[0_14px_32px_rgba(14,143,134,0.28)]",
  outline: "border border-[#c3d8e2] text-ink hover:border-brand hover:text-brand",
  white:
    "bg-white text-ink hover:bg-mist shadow-[0_18px_40px_rgba(4,42,58,0.3)]",
};

/** 공통 버튼형 링크. tel: 링크는 CallButton 이 이 컴포넌트를 감싼다. */
export function ActionButton({
  href,
  variant = "solid",
  size = "md",
  className = "",
  children,
  ...rest
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded font-extrabold tracking-[-0.01em] transition-colors ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
