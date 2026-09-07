import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { faqs } from "@/content/faq";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="border-t border-line bg-mist"
    >
      <JsonLd data={faqJsonLd()} />
      <Container className="flex flex-wrap gap-x-14 gap-y-10 py-[clamp(4rem,8vw,6.875rem)]">
        <div className="min-w-0 flex-1 basis-[300px]">
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden className="inline-block h-0.5 w-6 bg-brand" />
            <span className="text-xs font-extrabold tracking-[0.14em] text-brand">
              FAQ
            </span>
          </div>
          <h2
            id="faq-title"
            className="text-[clamp(1.75rem,3.8vw,2.75rem)] font-extrabold leading-[1.24] tracking-[-0.02em] text-ink"
          >
            자주 묻는 질문
          </h2>
          <p className="mt-3.5 text-[16.5px] leading-[1.7] text-muted">
            더 궁금한 점은 전화로 편하게 물어보세요.
          </p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-block text-[19px] font-extrabold tracking-[-0.02em] text-brand hover:text-ink"
          >
            {site.phone} →
          </a>
        </div>

        <ul className="flex min-w-0 flex-1 basis-[480px] flex-col gap-3">
          {faqs.map((faq) => (
            <li key={faq.q}>
              <details className="group rounded border border-line bg-white px-7 py-6">
                <summary className="cursor-pointer list-none text-[17px] font-extrabold tracking-[-0.02em] text-ink marker:content-['']">
                  {faq.q}
                </summary>
                <p className="mt-2.5 text-[15.5px] leading-[1.72] text-muted text-pretty">
                  {faq.a}
                </p>
              </details>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
