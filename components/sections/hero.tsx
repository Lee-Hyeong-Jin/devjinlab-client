import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { VinylRing } from "@/components/vinyl-ring"
import { Bokeh } from "@/components/bokeh"
import { Skyline } from "@/components/skyline"
import { Reveal } from "@/components/reveal"

const quick_links = [
  { name: "lhjin0j@gmail.com", href: "mailto:lhjin0j@gmail.com", icon: Mail },
  {
    name: "github.com/Lee-Hyeong-Jin",
    href: "https://github.com/Lee-Hyeong-Jin",
    icon: ArrowUpRight,
  },
  {
    name: "linkedin.com/in/jin326",
    href: "https://linkedin.com/in/jin326",
    icon: ArrowUpRight,
  },
] as const

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center overflow-hidden px-6 pt-24 pb-20 text-center sm:pt-32"
    >
      <Bokeh />

      <Reveal delay={150} className="relative w-full max-w-[15rem]">
        <VinylRing className="absolute inset-0 h-full w-full" />
        <div className="glow-ring relative m-[14%] aspect-square overflow-hidden rounded-full bg-card">
          <Image
            src="/profile.jpg"
            alt="이형진 프로필 사진"
            fill
            sizes="15rem"
            className="object-cover"
            priority
          />
        </div>
      </Reveal>

      <Reveal className="mt-10 flex flex-col items-center">
        <p className="font-serif text-base tracking-[0.2em] text-signal italic">
          devjinlab
        </p>
        <h1 className="font-kr-serif mt-3 text-5xl leading-[1.15] font-bold text-balance sm:text-6xl">
          이형진
        </h1>
        <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
          AI 엔지니어 · DevOps 엔지니어
        </p>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          논리를 예술로 표현하는 엔지니어를 꿈꿉니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <a href="#gallery-preview">프로젝트 보기</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">연락하기</a>
          </Button>
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
          {quick_links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 hover:text-signal"
              >
                <link.icon className="size-3.5" aria-hidden="true" />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-12 text-foreground sm:h-16" />
    </section>
  )
}
