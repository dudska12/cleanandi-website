import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#0a3348] text-white">
      <Container className="flex flex-wrap items-end justify-between gap-8 py-12 pb-24 lg:pb-12">
        <div>
          <div className="mb-2.5 text-[17px] font-extrabold tracking-[-0.02em]">
            {site.name}{" "}
            <span className="font-semibold text-[#77a0b5]">{site.nameEn}</span>
          </div>
          <p className="text-[14px] leading-[1.75] text-[#8caec1]">
            CCTV 보안 설치 + 정기 소독·방역 결합 케어 서비스
            <br />
            문의{" "}
            <a href={site.phoneHref} className="hover:text-white">
              {site.phone}
            </a>
          </p>
        </div>
        <p className="text-[13px] text-[#6a93a8]">
          © {site.foundingYear} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
