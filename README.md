# cleanandi-website

클린앤아이 공식 홈페이지 — 매장 CCTV 설치 + 정기 소독·방역 결합 케어 서비스 소개.

## 기술 스택

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS 4
- Pretendard (self-hosted, `next/font/local`)

## 개발

```bash
npm install
cp .env.example .env.local   # 이미 있으면 생략
npm run dev
```

http://localhost:3000

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 환경변수

| 이름 | 설명 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 배포 도메인. canonical URL·sitemap·robots·OG 태그에 사용. **배포 전 실제 도메인으로 교체.** |

## 구조 (관심사 분리)

```
src/
  app/
    layout.tsx           루트 레이아웃 · 폰트 · 메타데이터 · LocalBusiness JSON-LD
    page.tsx             섹션 조립만 담당
    globals.css          Tailwind + 디자인 토큰(색·폰트)
    sitemap.ts           sitemap.xml 생성
    robots.ts            robots.txt 생성
    opengraph-image.tsx  1200x630 OG 이미지 생성
  content/               ← 문구·목록·요금 등 콘텐츠 데이터 (마크업 없음)
    site.ts services.ts places.ts pricing.ts process.ts faq.ts hero.ts
  components/
    layout/              SiteHeader · SiteFooter · MobileCallBar
    sections/            Hero · ServicesSection · PricingSection ... (페이지 섹션)
    ui/                  Container · Section · SectionHeading · CallButton ... (재사용 UI)
  lib/
    jsonld.ts            구조화 데이터 생성 함수
  fonts/
    PretendardVariable.woff2
```

- **콘텐츠 수정**은 `src/content/*.ts` 만 건드리면 됩니다. 컴포넌트는 렌더링만 합니다.
- 색상·폰트는 `src/app/globals.css` 의 `@theme` 토큰에서 관리합니다.

## SEO 체크리스트 (적용됨)

- `<html lang="ko">`, 회사명 + 업종 키워드가 들어간 `<title>` / `meta description`
- 시맨틱 구조: `header` / `main` / `section[aria-labelledby]` / `footer`, `h1` 1개 + 섹션별 `h2`
- 모든 이미지/이미지 슬롯에 한국어 `alt`
- Open Graph · Twitter Card · canonical
- `sitemap.xml`, `robots.txt` 자동 생성
- 구조화 데이터: `LocalBusiness`, `FAQPage`
- 반응형(모바일 우선), self-hosted 폰트 + `display: swap`, 전 페이지 정적 프리렌더

## 이미지 교체

지금은 모든 사진이 자리표시자입니다. 실제 파일을 `public/photos/` 에 넣고
`src/content/*.ts` 의 `image.src` 를 `/photos/파일명.jpg` 로 바꾸면
`next/image` 최적화가 자동 적용됩니다. 로고는 `src/components/ui/Logo.tsx` 참고.
