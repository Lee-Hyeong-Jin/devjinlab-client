const LIGHTS = [
  { top: "8%", left: "12%", size: "9rem", color: "var(--signal)", opacity: 0.35 },
  { top: "42%", left: "82%", size: "7rem", color: "var(--violet)", opacity: 0.3 },
  { top: "68%", left: "6%", size: "6rem", color: "var(--violet)", opacity: 0.22 },
  { top: "4%", left: "78%", size: "5rem", color: "var(--signal)", opacity: 0.28 },
] as const

/**
 * 흐릿한 야경 조명 보케 — lofi 앨범 커버의 시그니처 디테일.
 */
export function Bokeh() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {LIGHTS.map((light, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            top: light.top,
            left: light.left,
            width: light.size,
            height: light.size,
            backgroundColor: light.color,
            opacity: light.opacity,
          }}
        />
      ))}
    </div>
  )
}
