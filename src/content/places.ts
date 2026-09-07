export type Place = {
  id: string;
  title: string;
  note: string;
  image: { src: string | null; alt: string };
};

export const places: Place[] = [
  {
    id: "cafe",
    title: "카페 · 음식점",
    note: "주방과 홀을 나눠 관리",
    image: { src: null, alt: "카페 내부 홀과 주방 전경" },
  },
  {
    id: "retail",
    title: "소매 매장",
    note: "출입구·계산대 중심 보안",
    image: { src: null, alt: "소매 매장 계산대와 진열대" },
  },
  {
    id: "office",
    title: "사무실 · 사업장",
    note: "공용 공간 위생 관리",
    image: { src: null, alt: "사무실 공용 업무 공간" },
  },
  {
    id: "facility",
    title: "학원 · 다중이용시설",
    note: "사람이 모이는 실내 살균",
    image: { src: null, alt: "학원 강의실 등 다중이용시설 실내" },
  },
];
