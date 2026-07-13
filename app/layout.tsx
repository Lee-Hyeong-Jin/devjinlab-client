import type { Metadata } from "next"
import { Geist_Mono, Inter, Instrument_Serif, Gowun_Batang } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { GrainOverlay } from "@/components/grain-overlay"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
})

const gowunBatang = Gowun_Batang({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-kr-serif",
})

export const metadata: Metadata = {
  title: "devjinlab",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        inter.variable,
        fontMono.variable,
        instrumentSerif.variable,
        gowunBatang.variable
      )}
    >
      <body>
        <ThemeProvider>
          <GrainOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
