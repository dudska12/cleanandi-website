export type Plan = {
  id: string;
  name: string;
  caption: string;
  period: string;
  price: string;
  unit: string;
  features: string[];
  featured?: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    id: "cctv",
    name: "CCTV 단독",
    caption: "보안만 우선 필요한 매장",
    period: "월",
    price: "29,000",
    unit: "원~",
    features: ["CCTV 2대 기준", "추가 1대당 월 10,000원", "설치 후 상태 점검 관리"],
  },
  {
    id: "combined",
    name: "결합 케어",
    caption: "보안 + 위생 한 번에",
    period: "월",
    price: "45,000",
    unit: "원~",
    featured: true,
    badge: "추천",
    features: [
      "매장 20평 이하 기준",
      "CCTV 2대 + 정기 방역",
      "클린앤아이 관리 인증 제공",
    ],
  },
  {
    id: "hygiene",
    name: "소독 단독",
    caption: "위생 관리만 필요한 매장",
    period: "월",
    price: "25,000",
    unit: "원~",
    features: ["매장 20평 이하 기준", "3개월 1회 정기 방역", "영업시간 맞춤 방문"],
  },
];

export const priceNote =
  "※ 평수 및 카메라 추가에 따른 맞춤 견적 가능 — 현장 확인 후 정확한 금액을 안내드립니다.";
