import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { BlogPreview } from "@/components/sections/blog-preview"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <GalleryPreview />
        <BlogPreview />
        <Contact />
      </main>
    </>
  )
}
