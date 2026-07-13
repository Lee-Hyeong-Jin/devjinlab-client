import Link from "next/link"

import { Button } from "@/components/ui/button"

const menu_items = [
  { id: 0, name: "gallery", href: "https://gallery.devjinlab.com" },
  { id: 1, name: "blog", href: "https://blog.devjinlab.com" },
  { id: 2, name: "about", href: "about" },
  { id: 3, name: "contact", href: "contact" },
] as const

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 p-6">
        <Link href="/" className="text-sm font-semibold">
          devjinlab
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-sm">
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

        <Button variant="outline" size="sm">
          Login
        </Button>
      </div>
    </header>
  )
}
