import { ServiceCard } from "@/components/sections/ServiceCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <Section id="service" labelledBy="service-title" tone="mist">
      <SectionHeading
        eyebrow="SERVICE"
        headingId="service-title"
        title="주요 제공 서비스"
        description="CCTV 설치부터 정기 소독·방역, 관리 인증까지 하나로 이어지는 케어입니다."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
}
