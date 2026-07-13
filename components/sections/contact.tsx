import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/components/reveal"

const channels = [
  { label: "Email", value: "lhjin0j@gmail.com", href: "mailto:lhjin0j@gmail.com" },
  {
    label: "GitHub",
    value: "github.com/Lee-Hyeong-Jin",
    href: "https://github.com/Lee-Hyeong-Jin",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jin326",
    href: "https://linkedin.com/in/jin326",
  },
  {
    label: "Blog",
    value: "lhjin0j.tistory.com",
    href: "https://lhjin0j.tistory.com",
  },
  {
    label: "Instagram",
    value: "@ihyeongjin921",
    href: "https://instagram.com/ihyeongjin921",
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
            Contact
          </p>
          <p className="mt-5 max-w-md text-muted-foreground">
            함께 만들고 싶은 프로젝트나 나누고 싶은 이야기가 있다면 편하게
            연락해주세요.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  className="group flex items-center justify-between gap-4"
                >
                  <span className="font-mono text-xs text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium group-hover:text-signal">
                    {channel.value}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
