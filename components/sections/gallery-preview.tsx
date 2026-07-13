import { ArrowUpRight } from "lucide-react"

export function GalleryPreview() {
  return (
    <section
      id="gallery-preview"
      className="scroll-mt-24 border-t border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs tracking-[0.2em] text-signal uppercase">
          Projects
        </p>

        <p className="mt-8 text-foreground/70">
          프로젝트를 정리하고 있습니다. 곧 채워질 예정입니다.
        </p>

        <div className="mt-8">
          <a
            href="https://gallery.devjinlab.com"
            className="inline-flex items-center gap-1.5 font-mono text-sm hover:text-signal"
          >
            갤러리 방문하기
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
