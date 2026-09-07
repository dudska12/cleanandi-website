export type Step = { no: string; title: string; body: string };

export const steps: Step[] = [
  {
    no: "01",
    title: "전화 문의",
    body: "매장 위치와 평수만 알려주시면 상담이 시작됩니다.",
  },
  {
    no: "02",
    title: "현장 방문 견적",
    body: "사각지대와 방역 범위를 확인해 무료로 견적을 드립니다.",
  },
  {
    no: "03",
    title: "설치 및 첫 방역",
    body: "카메라 설치와 첫 방역을 영업 일정에 맞춰 진행합니다.",
  },
  {
    no: "04",
    title: "정기 케어 관리",
    body: "3개월 주기 방역과 장비 점검을 이어서 관리합니다.",
  },
];
