import { site } from "@/content/site";

/**
 * 텍스트 로고 락업. 실제 로고 이미지가 준비되면 public/logo.svg 를 두고
 * 이 컴포넌트를 next/image 로 교체하면 된다.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex items-baseline gap-2 font-extrabold tracking-[-0.02em] text-ink ${className}`}
    >
      <span className="text-[19px]">{site.name}</span>
      <span className="text-[13px] font-semibold text-muted">{site.nameEn}</span>
    </span>
  );
}
