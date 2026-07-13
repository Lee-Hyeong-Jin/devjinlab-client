import Link from "next/link"

import { Button } from "@/components/ui/button"

const menu_items = [
  { id: 0, name: "gallery", href: "https://gallery.devjinlab.com" },
  { id: 1, name: "blog", href: "https://blog.devjinlab.com" },
  { id: 2, name: "about", href: "#about" },
  { id: 3, name: "contact", href: "#contact" },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-6 sm:py-6">
        <Link href="/" className="shrink-0 text-sm font-semibold">
          devjinlab
        </Link>

        <nav aria-label="Main" className="min-w-0 overflow-x-auto">
          <ul className="flex items-center gap-2 text-xs whitespace-nowrap sm:gap-6 sm:text-sm">
            {menu_items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="outline"
          size="sm"
          className="shrink-0 px-2 sm:px-2.5"
        >
          Login
        </Button>
      </div>
    </header>
  )
}
