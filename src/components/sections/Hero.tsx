import { ActionButton } from "@/components/ui/ActionButton";
import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { HeroStats } from "@/components/sections/HeroStats";
import { hero } from "@/content/hero";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[clamp(520px,78vh,740px)] items-center overflow-hidden bg-[#dfeef3]"
    >
      <div className="absolute inset-0">
        <Media src={hero.image.src} alt={hero.image.alt} sizes="100vw" priority />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3)_0%,rgba(240,249,251,0.55)_46%,rgba(255,255,255,0.82)_100%)]"
      />

      <Container className="relative py-[clamp(4.375rem,10vw,6.875rem)] text-center">
        <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#b4e4db] bg-[#e2f5f1] px-4 py-2 text-[13.5px] font-extrabold tracking-[-0.01em] text-[#0b7a72]">
          {hero.badge}
        </p>
        <h1
          id="hero-title"
          className="mx-auto max-w-[900px] text-[clamp(2.375rem,6.4vw,4.75rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-ink text-balance"
        >
          {hero.titleLead}
          <br />
          <span className="text-brand">{hero.titleHighlight}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-[640px] text-[clamp(0.875rem,1.55vw,1.1875rem)] leading-[1.65] text-muted">
          {hero.description}
        </p>
        <div className="mb-[clamp(3rem,6vw,4.5rem)] mt-10 flex flex-wrap justify-center gap-3">
          <CallButton size="lg" />
          <ActionButton href="#price" variant="outline" size="lg">
            요금 안내 보기
          </ActionButton>
        </div>
        <HeroStats />
      </Container>
    </section>
  );
}
