import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"

export function GalleryPreview() {
  return (
    <section id="gallery-preview" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Reveal className="flex flex-col items-center">
          <p className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
            Projects
          </p>
          <p className="mt-5 max-w-md text-muted-foreground">
            프로젝트를 정리하고 있습니다. 곧 채워질 예정입니다.
          </p>
          <Button asChild variant="outline" className="mt-8">
            <a href="https://gallery.devjinlab.com">
              갤러리 방문하기
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
