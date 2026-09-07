import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Clean & I — CCTV Security + Regular Disinfection Care";

// 한글 폰트 임베드 없이 렌더링하기 위해 영문·숫자만 사용한다.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 88,
          background: "#0b5b7a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, letterSpacing: 10, color: "#3fd9c0" }}>
          CLEAN &amp; I
        </div>
        <div style={{ fontSize: 66, fontWeight: 800, marginTop: 28, lineHeight: 1.2 }}>
          CCTV Security +
        </div>
        <div style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.2 }}>
          Regular Disinfection Care
        </div>
        <div style={{ fontSize: 40, marginTop: 44, color: "#a5cbdc" }}>
          010-9184-2422
        </div>
      </div>
    ),
    size,
  );
}
