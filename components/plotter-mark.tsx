import { cn } from "@/lib/utils"

const NESTED_SQUARES = [
  { size: 220, rotate: 0, delay: 0 },
  { size: 168, rotate: 8, delay: 0.12 },
  { size: 120, rotate: -6, delay: 0.24 },
  { size: 78, rotate: 11, delay: 0.36 },
  { size: 42, rotate: -14, delay: 0.48 },
] as const

const TRACE_NODES = [
  { x: 24, y: 40 },
  { x: 24, y: 260 },
  { x: 276, y: 40 },
  { x: 276, y: 260 },
] as const

/**
 * 재귀적으로 축소되는 사각형 — mpi4py로 병렬화한 만델브로 집합 프로젝트를
 * 플로터로 그린 도면처럼 재해석한 시그니처 마크.
 */
export function PlotterMark({ className }: { className?: string }) {
  const center = 150

  return (
    <svg
      viewBox="0 0 300 300"
      className={cn("text-signal", className)}
      role="presentation"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="299"
        height="299"
        rx="2"
        pathLength={1}
        className="draw-in"
        style={{ animationDelay: "0s" }}
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />

      {NESTED_SQUARES.map((sq, i) => (
        <rect
          key={i}
          x={center - sq.size / 2}
          y={center - sq.size / 2}
          width={sq.size}
          height={sq.size}
          rx="6"
          pathLength={1}
          className="draw-in"
          style={{
            animationDelay: `${sq.delay}s`,
            transformOrigin: `${center}px ${center}px`,
          }}
          transform={`rotate(${sq.rotate})`}
          fill="none"
          stroke="currentColor"
          strokeWidth={i === NESTED_SQUARES.length - 1 ? 1.5 : 1}
        />
      ))}

      {TRACE_NODES.map((node, i) => (
        <line
          key={i}
          x1={center}
          y1={center}
          x2={node.x}
          y2={node.y}
          pathLength={1}
          className="draw-in"
          style={{ animationDelay: `${0.5 + i * 0.08}s` }}
          stroke="currentColor"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
      ))}

      {TRACE_NODES.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="3"
          className="fade-in-node"
          style={{ animationDelay: `${0.8 + i * 0.08}s` }}
          fill="currentColor"
        />
      ))}
    </svg>
  )
}
