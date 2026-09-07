import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/content/process";

export function ProcessSection() {
  return (
    <Section id="process" labelledBy="process-title" tone="white">
      <SectionHeading
        eyebrow="PROCESS"
        headingId="process-title"
        title="문의부터 정기 관리까지"
      />
      <ol className="mt-12 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li
            key={step.no}
            className="rounded border border-line bg-[#f7fbfc] px-7 py-8"
          >
            <p className="mb-4 text-[34px] font-extrabold tracking-[-0.045em] text-brand">
              {step.no}
            </p>
            <h3 className="mb-2.5 text-[19px] font-extrabold tracking-[-0.02em] text-ink">
              {step.title}
            </h3>
            <p className="text-[15px] leading-[1.7] text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
