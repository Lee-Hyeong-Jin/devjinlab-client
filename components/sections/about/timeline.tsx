const timeline = [
  {
    period: "2023 —",
    title: "서울과학기술대학교 컴퓨터공학과",
    detail: "재학 중 · 현재 휴학",
  },
  {
    period: "2024",
    title: "고교학점제 과목 추천 서비스 개발 참여",
    detail: "AI 기반 과목 추천 시스템 개발",
  },
  {
    period: "2024",
    title: "ETH Global SF · Bangkok 연속 입상",
    detail: "국제 블록체인 해커톤 — Skale 4th · Flow 4th · Kinto 2nd · Design Award",
  },
  {
    period: "2021–22",
    title: "슈퍼컴퓨팅 · AI 연구 프로젝트",
    detail: "CNN 마스크 판별 모델 · 병렬 컴퓨팅 최적화 (대상 수상)",
  },
] as const

export function Timeline() {
  return (
    <div className="border-b border-border py-14">
      <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase">
        경력 & 개발 활동
      </p>

      <ol className="mt-8 border-l border-border">
        {timeline.map((item, i) => (
          <li key={i} className="relative py-5 pl-8 first:pt-0 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-6 -left-px h-px w-4 bg-signal"
            />
            <span className="absolute top-[1.35rem] -left-[3px] size-1.5 rounded-full bg-signal" />
            <p className="font-mono text-xs text-muted-foreground">
              {item.period}
            </p>
            <p className="mt-1.5 font-medium">{item.title}</p>
            <p className="mt-1 text-sm text-foreground/70">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
