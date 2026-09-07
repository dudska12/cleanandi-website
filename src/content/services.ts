export type Service = {
  id: string;
  tag: string;
  title: string;
  description: string;
  points: string[];
  image: { src: string | null; alt: string };
};

export const services: Service[] = [
  {
    id: "cctv",
    tag: "CCTV",
    title: "고화질 CCTV 설치·관리",
    description:
      "매장과 사업장 구조에 맞춰 보안 카메라를 설치합니다. 매장 구조를 먼저 확인해 사각지대 없이 위치를 잡습니다.",
    points: [
      "구조 확인 후 설치 위치 설계",
      "규모에 맞춘 카메라 대수 구성",
      "설치 후 장비 상태 정기 점검",
    ],
    image: { src: null, alt: "매장 천장에 설치된 보안 CCTV 카메라" },
  },
  {
    id: "hygiene",
    tag: "HYGIENE",
    title: "정기 전문 소독·방역",
    description:
      "3개월에 1회 주기로 매장 살균 케어를 진행합니다. 방문 시간은 매장 영업 일정에 맞춰 조율합니다.",
    points: [
      "3개월 1회 주기 매장 살균",
      "영업 일정에 맞춘 방문",
      "현장 상황에 맞춘 방역 방식",
    ],
    image: { src: null, alt: "방역 작업자가 매장 바닥을 소독하는 모습" },
  },
  {
    id: "certification",
    tag: "CERTIFICATION",
    title: "클린앤아이 관리 인증",
    description:
      "고객이 믿고 방문할 수 있도록 매장 입구에 부착하는 관리 인증을 제공합니다. 보안과 위생을 함께 관리하는 매장임을 알립니다.",
    points: [
      "매장 입구 부착용 인증 스티커",
      "보안·위생 관리 매장 안내",
      "결합 케어 신청 시 제공",
    ],
    image: { src: null, alt: "매장 유리문에 부착된 클린앤아이 관리 인증 스티커" },
  },
];
