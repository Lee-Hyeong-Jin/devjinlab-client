import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"

const menu_items = [
  { id: 0, name: "blog", href: "https://blog.devjinlab.com" },
  { id: 1, name: "gallery", href: "https://gallery.devjinlab.com" },
  { id: 2, name: "about", href: "#about" },
  { id: 3, name: "contact", href: "#contact" },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-5xl items-center justify-between gap-2 px-4 py-3 sm:gap-6 sm:px-6">
        <Link
          href="/"
          className="shrink-0 font-serif text-lg tracking-tight text-signal italic"
        >
          devjinlab
        </Link>

        <nav aria-label="Main" className="hidden min-w-0 sm:block">
          <ul className="flex items-center gap-8 font-mono text-xs whitespace-nowrap text-muted-foreground">
            {menu_items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="transition-colors hover:text-signal"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <MobileNav menu_items={menu_items} />
          <ThemeToggle />
          <Button size="sm" className="px-4 font-mono text-xs sm:text-[13px]">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
