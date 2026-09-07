import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-deep"
    >
      <Container className="py-[clamp(4rem,8vw,6.25rem)] text-center">
        <h2
          id="contact-title"
          className="mx-auto max-w-[820px] text-[clamp(1.75rem,4vw,2.875rem)] font-extrabold leading-[1.24] tracking-[-0.035em] text-white text-balance"
        >
          우리 매장 맞춤 보안·위생 견적
          <br />
          지금 신청하세요
        </h2>
        <p className="mx-auto mb-10 mt-4 max-w-[540px] text-[17.5px] leading-[1.7] text-[#b9d8e6] text-pretty">
          전화 한 번으로 상담이 시작됩니다. 매장 위치와 평수만 알려주시면 현장 방문
          견적까지 무료로 진행합니다.
        </p>
        <a
          href={site.phoneHref}
          aria-label={`전화 상담 ${site.phone}`}
          className="inline-flex items-center gap-4 rounded-md bg-white px-9 py-5 shadow-[0_18px_40px_rgba(4,42,58,0.3)] transition-colors hover:bg-[#e2f5f1]"
        >
          <span className="text-[13px] font-extrabold tracking-[0.05em] text-brand">
            CALL
          </span>
          <span className="text-[clamp(1.5rem,3vw,2.125rem)] font-extrabold tracking-[-0.035em] text-ink">
            {site.phone}
          </span>
        </a>
        <p className="mt-5 text-[14.5px] text-[#9cc6d8]">
          현장 방문 견적은 무료입니다
        </p>
      </Container>
    </section>
  );
}
