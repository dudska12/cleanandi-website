import { site } from "@/content/site";

/** 모바일 전용 하단 고정 전화 상담 바 (lg 이상에서는 숨김) */
export function MobileCallBar() {
  return (
    <a
      href={site.phoneHref}
      aria-label={`지금 전화 상담 ${site.phone}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-3 bg-brand px-5 py-4 text-[16px] font-extrabold tracking-[-0.01em] text-white shadow-[0_-8px_26px_rgba(15,44,63,0.18)] lg:hidden"
    >
      <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
      지금 전화 상담 · {site.phone}
    </a>
  );
}
