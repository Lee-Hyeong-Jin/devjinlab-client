import { cn } from "@/lib/utils"

const TILE = [
  { x: 0, w: 26, h: 22 },
  { x: 26, w: 16, h: 34 },
  { x: 42, w: 22, h: 16 },
  { x: 64, w: 14, h: 28 },
  { x: 78, w: 20, h: 40 },
  { x: 98, w: 18, h: 20 },
  { x: 116, w: 12, h: 30 },
  { x: 128, w: 24, h: 18 },
  { x: 152, w: 16, h: 36 },
  { x: 168, w: 20, h: 24 },
  { x: 188, w: 14, h: 32 },
  { x: 202, w: 26, h: 20 },
  { x: 228, w: 18, h: 40 },
  { x: 246, w: 16, h: 22 },
  { x: 262, w: 22, h: 30 },
  { x: 284, w: 14, h: 18 },
  { x: 298, w: 20, h: 34 },
  { x: 318, w: 24, h: 20 },
  { x: 342, w: 16, h: 28 },
  { x: 358, w: 22, h: 16 },
  { x: 380, w: 20, h: 24 },
] as const

const TILE_WIDTH = 400
const REPEATS = 4
const VIEWBOX_WIDTH = TILE_WIDTH * REPEATS

const BUILDINGS = Array.from({ length: REPEATS }, (_, i) =>
  TILE.map((b) => ({ ...b, x: b.x + i * TILE_WIDTH }))
).flat()

/**
 * 히어로 하단에 깔리는 도쿄풍 스카이라인 실루엣 — 밤 무드보드 디테일.
 * 넓은 화면에서도 건물 비율이 늘어나지 않도록 타일을 반복해 채운다.
 */
export function Skyline({ className }: { className?: string }) {
  const baseline = 44
  const towerX = VIEWBOX_WIDTH / 2

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} 46`}
      preserveAspectRatio="xMidYMax slice"
      className={cn("w-full", className)}
      role="presentation"
      aria-hidden="true"
    >
      {BUILDINGS.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={baseline - b.h}
          width={b.w}
          height={b.h}
          className="fill-foreground"
          fillOpacity="0.08"
        />
      ))}

      {/* tower */}
      <line
        x1={towerX}
        y1="4"
        x2={towerX}
        y2="24"
        stroke="currentColor"
        className="text-foreground"
        strokeOpacity="0.14"
        strokeWidth="1"
      />
      <circle cx={towerX} cy="4" r="1.4" className="fill-signal" />
    </svg>
  )
}
