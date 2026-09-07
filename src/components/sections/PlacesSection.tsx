import { Media } from "@/components/ui/Media";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { places } from "@/content/places";

export function PlacesSection() {
  return (
    <Section id="place" labelledBy="place-title" tone="white">
      <SectionHeading
        eyebrow="PLACE"
        headingId="place-title"
        title="이런 공간에 클린앤아이"
        description="매장 규모와 구조에 따라 카메라 위치와 방역 범위를 다르게 설계합니다."
      />
      <ul className="mt-12 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {places.map((place) => (
          <li
            key={place.id}
            className="relative h-[300px] overflow-hidden rounded bg-[#e7f1f5]"
          >
            <Media
              src={place.image.src}
              alt={place.image.alt}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,44,63,0.86)_0%,rgba(15,44,63,0.04)_60%)]"
            />
            <div className="absolute inset-x-6 bottom-6">
              <p className="mb-1.5 text-[20px] font-extrabold tracking-[-0.02em] text-white">
                {place.title}
              </p>
              <p className="text-[14px] leading-[1.6] text-[#cbe2ec]">
                {place.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
