const awards = [
  {
    name: "한국 코드페어 빌더스 챌린지",
    year: "2019",
    prize: "동상",
    host: "한국콘텐츠진흥원",
  },
  { name: "KIST-KREM", year: "2021", prize: "최우수상", host: "KIST" },
  {
    name: "PaaS-Ta 클라우드 개발자 경진대회",
    year: "2021",
    prize: "특별상",
    host: "정보통신산업진흥원",
  },
  {
    name: "UNIST 슈퍼컴퓨팅 캠프",
    year: "2022",
    prize: "대상",
    host: "UNIST",
  },
  {
    name: "관광데이터 활용 공모전",
    year: "2023",
    prize: "장려상",
    host: "한국관광공사",
  },
  {
    name: "대구광역시 ABB 해커톤",
    year: "2023",
    prize: "최우수상",
    host: "대구광역시",
  },
  {
    name: "ETH Global San Francisco",
    year: "2024",
    prize: "Skale 4th · Flow 4th",
    host: "ETH Global",
  },
  {
    name: "ETH Global Bangkok",
    year: "2024",
    prize: "Kinto 2nd · Design Award",
    host: "ETH Global",
  },
  {
    name: "HashKey Hackerhouse Taichu",
    year: "2024",
    prize: "Special Award",
    host: "HashKey",
  },
] as const

export function Awards() {
  return (
    <div className="py-14">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase">
          수상경력
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          9건 · 2019 — 2024
        </p>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs text-muted-foreground">
              <th className="py-2 pr-4 font-mono font-normal">대회명</th>
              <th className="py-2 pr-4 font-mono font-normal">연도</th>
              <th className="py-2 pr-4 font-mono font-normal">수상내역</th>
              <th className="py-2 font-mono font-normal">주최기관</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((award) => (
              <tr
                key={award.name + award.year}
                className="border-b border-border/60 last:border-none"
              >
                <td className="py-2.5 pr-4">{award.name}</td>
                <td className="py-2.5 pr-4 font-mono text-muted-foreground">
                  {award.year}
                </td>
                <td className="py-2.5 pr-4 text-amber">{award.prize}</td>
                <td className="py-2.5 text-foreground/70">{award.host}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
