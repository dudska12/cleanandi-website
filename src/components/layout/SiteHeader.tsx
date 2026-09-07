import { CallButton } from "@/components/ui/CallButton";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3">
        <a href="#main" aria-label={`${site.name} 홈으로 이동`}>
          <Logo />
        </a>

        <nav aria-label="주요 메뉴" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[15px] font-semibold text-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CallButton size="sm" label={site.phone} />
      </Container>
    </header>
  );
}
