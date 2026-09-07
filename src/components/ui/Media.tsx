import Image from "next/image";

/**
 * 이미지 슬롯. 실제 파일이 준비되면 src 에 public 경로("/photos/xxx.jpg")를 넣으면
 * 자동으로 next/image 최적화가 적용된다. src 가 없으면 접근성 라벨을 가진
 * 자리표시자를 렌더링한다. 항상 position:relative 인 부모 안에서 사용한다.
 */
export function Media({
  src,
  alt,
  sizes = "100vw",
  priority = false,
}: {
  src: string | null;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 grid place-items-center bg-[#e7f1f5] text-[13px] font-semibold text-muted"
      >
        이미지 준비 중
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
    />
  );
}
