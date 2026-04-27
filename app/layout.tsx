import type { Metadata, Viewport } from "next"
import { Geist_Mono, Silkscreen } from "next/font/google"
import { GeistPixelLine } from "geist/font/pixel"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
})

const geistPixelLine = GeistPixelLine

export const metadata: Metadata = {
  title: "Code2Create 2026 | Fork It. Finish It. Ship It.",
  description:
    "Code2Create 2026 is a regional-level technical competition designed to bring together passionate student developers to solve real-world problems through innovation and code. Organized by ACM RIT Student Chapter.",
  keywords: [
    "code2create",
    "competition",
    "coding",
    "hackathon",
    "ACM",
    "technical",
    "student",
    "developers",
  ],

}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${geistPixelLine.variable}`}>
      <body
        className={`${geistMono.variable} ${silkscreen.variable} font-mono antialiased`}
      >
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
