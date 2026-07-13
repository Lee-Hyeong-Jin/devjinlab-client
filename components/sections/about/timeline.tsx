const timeline = [
  {
    period: "2021–22",
    title: "슈퍼컴퓨팅 · AI 연구 프로젝트",
    detail: "CNN 마스크 판별 모델 · 병렬 컴퓨팅 최적화 (대상 수상)",
  },
  {
    period: "2023 —",
    title: "서울과학기술대학교 컴퓨터공학과",
    detail: "재학 중 · 현재 휴학",
  },
  {
    period: "2024",
    title: "ETH Global SF · Bangkok 연속 입상",
    detail:
      "국제 블록체인 해커톤 — Skale 4th · Flow 4th · Kinto 2nd · Design Award",
  },
  {
    period: "2025",
    title: "대기업 HM 사 AI 플랫폼 개발 참여",
    detail: "RAG 파이프라인 개발 주도",
  },
  {
    period: "2026",
    title: "폐쇄망 환경에서 동작하는 AI 솔루션 개발",
    detail: "육궁 창업경진 대회 창의상 수상",
  },
] as const

export function Timeline() {
  return (
    <div>
      <p className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
        경력 &amp; 개발 활동
      </p>

      <ul className="mt-8 flex flex-col gap-8">
        {timeline.map((item, i) => (
          <li key={i} className="flex gap-4 sm:gap-8">
            <p className="w-16 shrink-0 pt-0.5 font-mono text-xs text-muted-foreground sm:w-24">
              {item.period}
            </p>
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
