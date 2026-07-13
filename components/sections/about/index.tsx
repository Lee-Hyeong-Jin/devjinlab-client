import { Philosophy } from "@/components/sections/about/philosophy"
import { Timeline } from "@/components/sections/about/timeline"
import { Skills } from "@/components/sections/about/skills"
import { Awards } from "@/components/sections/about/awards"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Philosophy />
        <Timeline />
        <Skills />
        <Awards />
      </div>
    </section>
  )
}
