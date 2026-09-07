import { faqs } from "@/content/faq";
import { plans } from "@/content/pricing";
import { site } from "@/content/site";

/** schema.org LocalBusiness — 검색 결과에 상호·연락처·서비스 노출 */
export function localBusinessJsonLd() {
  const prices = plans.map((p) => Number(p.price.replace(/,/g, "")));
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.nameEn,
    description: site.description,
    url: site.url,
    telephone: site.phoneIntl,
    image: `${site.url}/opengraph-image`,
    areaServed: { "@type": "Country", name: "대한민국" },
    priceRange: `₩${Math.min(...prices).toLocaleString()}~`,
    knowsAbout: ["CCTV 설치", "매장 방역", "정기 소독", "보안 카메라 관리"],
  };
}

/** schema.org FAQPage — 자주 묻는 질문 리치 결과 */
export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
