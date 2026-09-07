export const hero = {
  badge: "CCTV 보안 설치 + 정기 소독·방역 결합 케어",
  titleLead: "보안부터 위생까지,",
  titleHighlight: "한 번에 맡기세요",
  description:
    "CCTV와 정기 소독·방역을 한 번에 관리하는 원스톱 케어 솔루션, 클린앤아이.",
  image: { src: null, alt: "클린앤아이가 관리하는 깨끗하고 안전한 매장 내부" },
};

export type HeroStat = { value: string; label: string; accent?: boolean };

export const heroStats: HeroStat[] = [
  { value: "3개월", label: "1회 정기 소독 주기" },
  { value: "2대", label: "기본 CCTV 구성" },
  { value: "월 45,000원~", label: "결합 케어 시작 요금" },
  { value: "무료", label: "현장 방문 견적", accent: true },
];
