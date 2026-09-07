import { PriceCard } from "@/components/sections/PriceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans, priceNote } from "@/content/pricing";

export function PricingSection() {
  return (
    <Section id="price" labelledBy="price-title" tone="mist">
      <SectionHeading
        eyebrow="PRICE"
        headingId="price-title"
        title="서비스 요금 안내"
        description="CCTV만, 소독만, 또는 두 가지를 묶은 결합 케어까지 선택하실 수 있습니다."
      />
      <div className="mt-12 grid grid-cols-1 items-start gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <PriceCard key={plan.id} plan={plan} />
        ))}
      </div>
      <p className="mt-7 text-[14.5px] text-[#7591a2]">{priceNote}</p>
    </Section>
  );
}
