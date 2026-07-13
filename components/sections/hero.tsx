import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PlotterMark } from "@/components/plotter-mark"

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
      className="mx-auto grid max-w-5xl gap-12 px-6 pt-20 pb-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-28"
    >
      <div>
        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase">
          devjinlab
        </p>
        <h1 className="mt-4 font-mono text-4xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">
          이형진
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          AI 엔지니어 · DevOps 엔지니어
        </p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/80">
          논리를 예술로 표현하는 엔지니어를 꿈꿉니다.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <a href="#gallery-preview">프로젝트 보기</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">연락하기</a>
          </Button>
        </div>

        <ul className="mt-10 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          {quick_links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 hover:text-foreground"
              >
                <link.icon className="size-3.5" aria-hidden="true" />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-sm">
        <PlotterMark className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-[22%] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src="/profile.jpg"
            alt="이형진 프로필 사진"
            fill
            sizes="(min-width: 768px) 20rem, 60vw"
            className="object-cover grayscale"
            priority
          />
        </div>
      </div>
    </section>
  )
}
