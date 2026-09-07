import { Media } from "@/components/ui/Media";
import type { Service } from "@/content/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="overflow-hidden rounded border border-line bg-white transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand hover:shadow-[0_18px_38px_rgba(15,44,63,0.1)]">
      <div className="relative h-[196px] bg-[#e7f1f5]">
        <Media
          src={service.image.src}
          alt={service.image.alt}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="px-7 pb-8 pt-7">
        <p className="mb-3 text-[12.5px] font-extrabold tracking-[0.1em] text-brand">
          {service.tag}
        </p>
        <h3 className="mb-3 text-[21px] font-extrabold tracking-[-0.02em] text-ink">
          {service.title}
        </h3>
        <p className="mb-5 text-[15.5px] leading-[1.74] text-muted text-pretty">
          {service.description}
        </p>
        <ul className="flex flex-col gap-2.5 border-t border-[#edf3f6] pt-5">
          {service.points.map((point) => (
            <li
              key={point}
              className="flex gap-2.5 text-[14.5px] leading-[1.6] text-[#33566b]"
            >
              <span aria-hidden className="font-extrabold text-brand">
                ·
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
