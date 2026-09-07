import { heroStats } from "@/content/hero";

export function HeroStats() {
  return (
    <ul className="mx-auto grid max-w-[1010px] grid-cols-1 gap-px overflow-hidden rounded border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {heroStats.map((stat) => (
        <li key={stat.label} className="bg-white px-5 py-6">
          <p
            className={`mb-1.5 whitespace-nowrap text-[clamp(1.5rem,3.4vw,2rem)] font-extrabold tracking-[-0.03em] ${
              stat.accent ? "text-brand" : "text-ink"
            }`}
          >
            {stat.value}
          </p>
          <p className="text-[13.5px] tracking-[-0.01em] text-[#6d8b9c]">
            {stat.label}
          </p>
        </li>
      ))}
    </ul>
  );
}
