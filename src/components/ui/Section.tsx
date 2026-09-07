import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/** 섹션 공통 래퍼 — 배경 톤, 상단 구분선, 반응형 세로 여백을 통일한다. */
export function Section({
  id,
  labelledBy,
  tone = "white",
  children,
}: {
  id: string;
  labelledBy: string;
  tone?: "white" | "mist";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`border-t border-line ${tone === "mist" ? "bg-mist" : "bg-white"}`}
    >
      <Container className="py-[clamp(4rem,8vw,6.875rem)]">{children}</Container>
    </section>
  );
}
