# devjinlab

개인 브랜드 **devjinlab**의 메인 플랫폼(랜딩 페이지)입니다. `devjinlab.com`에서 서비스되며, 프로젝트 전시용 `gallery.devjinlab.com`과 글쓰기용 `blog.devjinlab.com` 두 서브도메인과 함께 하나의 브랜드를 구성합니다. gallery/blog는 별도 프로젝트로 관리됩니다.

이 저장소는 랜딩(hero) · about(개발 철학·경력·기술 스택·수상경력) · 프로젝트/블로그 프리뷰 · contact를 한 페이지 안에서 앵커 스크롤로 연결하는 싱글 페이지 구조입니다.

## 기술 스택

- [Next.js](https://nextjs.org) 16 (App Router) · React 19 · TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 · [shadcn/ui](https://ui.shadcn.com) (`radix-nova` 스타일)
- [next-themes](https://github.com/pacocoursey/next-themes) — 라이트/다크 테마 토글
- [lucide-react](https://lucide.dev) — 아이콘

## 시작하기

```bash
pnpm install
pnpm dev
```

`http://localhost:3000`에서 확인할 수 있습니다.

## 스크립트

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | 개발 서버 실행 |
| `pnpm build` | 프로덕션 빌드 |
| `pnpm start` | 빌드 결과 실행 |
| `pnpm lint` | ESLint 검사 |
| `pnpm format` | Prettier로 포맷팅 |
| `pnpm typecheck` | TypeScript 타입 검사 |

## 컴포넌트 추가

shadcn 컴포넌트는 다음 명령으로 추가합니다.

```bash
npx shadcn@latest add button
```

`components/ui`에 추가되며, `@/components/ui/button` 형태로 가져와 사용합니다.

## 프로젝트 구조

```
app/
  layout.tsx       # 폰트, 테마 프로바이더, 그레인 오버레이
  page.tsx         # 섹션 조합 순서
  globals.css       # 디자인 토큰(색상·라운드), 애니메이션 유틸리티
components/
  header.tsx        # 상단 내비게이션 (모바일: 햄버거 메뉴)
  sections/          # hero / about / gallery-preview / blog-preview / contact
  theme-toggle.tsx   # 라이트/다크 전환 버튼
  vinyl-ring.tsx      # 히어로 시그니처 비주얼
  bokeh.tsx, skyline.tsx, grain-overlay.tsx  # 배경 무드 디테일
```

## 디자인

밤/달맞이(月見) 무드의 "lofi Tokyo" 톤을 기본으로 합니다 — 슬레이트 네이비 배경에 달빛 골드 액센트(다크), 세이지 톤 페이퍼에 앤틱 골드(라이트). 헤더의 토글 버튼으로 전환할 수 있습니다.
