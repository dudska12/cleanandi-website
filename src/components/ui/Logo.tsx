import Image from "next/image";
import logo from "@/assets/logo.png";
import { site } from "@/content/site";

/**
 * 헤더용 로고. 현재 자산은 정사각 스택형 락업(흰 배경)이라 흰색 헤더에서만 자연스럽다.
 * 가로형/투명 배경 버전이 생기면 src/assets/logo.png 만 교체하면 된다.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt={`${site.name} ${site.nameEn}`}
      width={52}
      height={52}
      priority
      sizes="52px"
      className={`h-[46px] w-[46px] sm:h-[52px] sm:w-[52px] ${className}`}
    />
  );
}
