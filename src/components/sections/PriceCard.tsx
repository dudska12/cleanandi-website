import type { Plan } from "@/content/pricing";

export function PriceCard({ plan }: { plan: Plan }) {
  const featured = plan.featured ?? false;
  return (
    <article
      className={`relative rounded border p-8 pt-9 ${
        featured
          ? "border-deep bg-deep text-white shadow-[0_22px_46px_rgba(11,91,122,0.24)]"
          : "border-line bg-white"
      }`}
    >
      {featured ? (
        <span aria-hidden className="absolute inset-x-0 top-0 h-[3px] bg-accent" />
      ) : null}

      <div className="mb-2 flex items-center gap-2.5">
        <h3 className="text-[15.5px] font-extrabold tracking-[-0.01em]">
          {plan.name}
        </h3>
        {plan.badge ? (
          <span className="rounded-[3px] bg-accent px-2.5 py-1 text-[11.5px] font-extrabold text-[#044038]">
            {plan.badge}
          </span>
        ) : null}
      </div>
      <p className={`mb-6 text-[13.5px] ${featured ? "text-[#a5cbdc]" : "text-[#7591a2]"}`}>
        {plan.caption}
      </p>

      <p className="mb-7 flex items-baseline gap-1.5">
        <span className={`text-[15px] font-bold ${featured ? "text-[#a5cbdc]" : "text-muted"}`}>
          {plan.period}
        </span>
        <span className="text-[40px] font-extrabold tracking-[-0.045em]">
          {plan.price}
        </span>
        <span className={`text-[17px] font-bold ${featured ? "text-[#a5cbdc]" : "text-muted"}`}>
          {plan.unit}
        </span>
      </p>

      <div
        className={`mb-6 h-px ${featured ? "bg-white/20" : "bg-[#edf3f6]"}`}
      />
      <ul className="flex flex-col gap-3.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={`flex gap-2.5 text-[15px] leading-[1.6] ${
              featured ? "text-[#e0eff5]" : "text-[#33566b]"
            }`}
          >
            <span aria-hidden className={`font-extrabold ${featured ? "text-accent" : "text-brand"}`}>
              ·
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
