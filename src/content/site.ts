/** 사이트 전역 정보. 도메인은 배포 전 NEXT_PUBLIC_SITE_URL 환경변수로 교체. */
const FALLBACK_URL = "https://www.cleanandi.co.kr";

export const site = {
  name: "클린앤아이",
  nameEn: "Clean & I",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL).replace(/\/$/, ""),
  tagline: "매장 CCTV 설치 + 정기 소독·방역 결합 케어",
  description:
    "클린앤아이는 매장·사업장을 위한 CCTV 보안 설치와 3개월 주기 정기 소독·방역을 하나로 묶은 결합 케어 서비스입니다. 현장 방문 견적 무료, 상담 010-9184-2422.",
  keywords: [
    "클린앤아이",
    "매장 CCTV 설치",
    "상가 CCTV",
    "보안 카메라 설치",
    "매장 소독",
    "정기 방역",
    "사업장 방역 업체",
    "CCTV 방역 결합",
  ],
  phone: "010-9184-2422",
  phoneHref: "tel:01091842422",
  phoneIntl: "+82-10-9184-2422",
  locale: "ko_KR",
  foundingYear: 2026,
  nav: [
    { label: "서비스", href: "#service" },
    { label: "적용 공간", href: "#place" },
    { label: "요금", href: "#price" },
    { label: "진행 과정", href: "#process" },
    { label: "자주 묻는 질문", href: "#faq" },
  ],
} as const;
