import { cn } from "@/lib/utils"

const GROOVES = [48, 40, 32] as const

/**
 * 프로필 사진을 감싸는 바이닐 그루브 — 시그니처 비주얼.
 */
export function VinylRing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-signal", className)}
      role="presentation"
      aria-hidden="true"
    >
      {GROOVES.map((r) => (
        <circle
          key={r}
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeOpacity={r === 48 ? 0.35 : 0.18}
          strokeWidth="0.4"
        />
      ))}
    </svg>
  )
}
