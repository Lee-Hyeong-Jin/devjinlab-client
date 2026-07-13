import { Header } from "@/components/header"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="p-6">
          {/* TODO: 히어로 콘텐츠 */}
        </section>

        <section id="about" className="scroll-mt-24 p-6">
          {/* TODO: about 콘텐츠 */}
        </section>

        <section id="gallery-preview" className="p-6">
          {/* TODO: 갤러리 프리뷰, gallery.devjinlab.com 링크 카드 */}
        </section>

        <section id="blog-preview" className="p-6">
          {/* TODO: 블로그 프리뷰, blog.devjinlab.com 링크 카드 */}
        </section>

        <section id="contact" className="scroll-mt-24 p-6">
          {/* TODO: contact 콘텐츠 */}
        </section>
      </main>
    </>
  )
}
