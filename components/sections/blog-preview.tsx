import { ArrowUpRight } from "lucide-react"

export function BlogPreview() {
  return (
    <section id="blog-preview" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase">
              Blog
            </p>
            <p className="mt-3 max-w-md text-foreground/80">
              개발하며 정리한 생각을 기록하는 공간입니다.
            </p>
          </div>

          <a
            href="https://blog.devjinlab.com"
            className="inline-flex shrink-0 items-center gap-1.5 font-mono text-sm hover:text-signal"
          >
            블로그 방문하기
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
