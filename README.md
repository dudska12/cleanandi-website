# cleanandi-website

클린앤아이 공식 홈페이지

## 기술 스택

- [Next.js 16](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS 4
- ESLint

## 개발

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인.

## 스크립트

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint 검사 |

## 구조

```
src/
  app/
    layout.tsx   # 루트 레이아웃 · 메타데이터
    page.tsx     # 홈 페이지
    globals.css  # Tailwind + 테마 토큰
public/          # 정적 자산
```
