import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function BlogPreview() {
  return (
    <section id="blog-preview" className="bg-card">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
              Blog
            </p>
            <p className="mt-3 max-w-md text-muted-foreground">
              개발하며 정리한 생각을 기록하는 공간입니다.
            </p>
          </div>

          <Button asChild variant="outline" className="shrink-0">
            <a href="https://blog.devjinlab.com">
              블로그 방문하기
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
