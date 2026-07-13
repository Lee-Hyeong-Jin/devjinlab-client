import { Philosophy } from "@/components/sections/about/philosophy"
import { Timeline } from "@/components/sections/about/timeline"
import { Skills } from "@/components/sections/about/skills"
import { Awards } from "@/components/sections/about/awards"
import { Reveal } from "@/components/reveal"

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-card">
      <div className="mx-auto flex max-w-3xl flex-col gap-20 px-6 py-24">
        <Reveal>
          <Philosophy />
        </Reveal>
        <Reveal>
          <Timeline />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Awards />
        </Reveal>
      </div>
    </section>
  )
}
