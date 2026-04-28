"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const ASCII_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=-~^"

const collaborationChapters = [
  "BMSCE ACM",
  "MIT ACM",
  "NITK ACM",
  "RVCE ACM",
]

const chapterImages = [
  { name: "RIT ACM", src: "/rit.jpg" },
  { name: "BMSCE ACM", src: "/bmsce.png" },
  { name: "MIT ACM", src: "/manipal.png" },
  { name: "NITK ACM", src: "/nitk.jpg" },
  { name: "RVCE ACM", src: "/rvce.png" },
]

function useAsciiFrame(rows: number, cols: number, enabled: boolean) {
  const [frame, setFrame] = useState("")
  const rafRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const generateFrame = useCallback(() => {
    let result = ""
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const distFromCenter = Math.abs(c - cols / 2) / (cols / 2)
        const vertDist = Math.abs(r - rows / 2) / (rows / 2)
        const dist = Math.sqrt(distFromCenter ** 2 + vertDist ** 2)
        if (Math.random() > dist * 0.7) {
          result += ASCII_CHARS[Math.floor(Math.random() * ASCII_CHARS.length)]
        } else {
          result += " "
        }
      }
      if (r < rows - 1) result += "\n"
    }
    return result
  }, [rows, cols])

  useEffect(() => {
    if (!enabled) {
      setFrame(generateFrame())
      return
    }

    const animate = (time: number) => {
      if (time - lastTimeRef.current > 120) {
        lastTimeRef.current = time
        setFrame(generateFrame())
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [enabled, generateFrame])

  return frame
}

export function HeroSection() {
  const [motionEnabled, setMotionEnabled] = useState(true)
  const [gridSize, setGridSize] = useState({ rows: 30, cols: 80 })

  useEffect(() => {
    const updateGridSize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth
        const height = window.innerHeight
        const cols = Math.ceil(width / 6)
        const rows = Math.ceil(height / 10)

        setGridSize({ rows, cols })
      }
    }

    updateGridSize()
    window.addEventListener("resize", updateGridSize)

    return () => window.removeEventListener("resize", updateGridSize)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setMotionEnabled(!mq.matches)
    const handler = (e: MediaQueryListEvent) => setMotionEnabled(!e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  const asciiFrame = useAsciiFrame(gridSize.rows, gridSize.cols, motionEnabled)

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden px-4 pt-2 sm:pt-4">
      {motionEnabled && (
        <div
          className="animate-scanline pointer-events-none absolute inset-0 z-10 h-[2px] w-full bg-foreground/5"
          aria-hidden="true"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15] flex items-center justify-center"
        aria-hidden="true"
      >
        <pre className="font-mono text-foreground whitespace-pre text-[10px] leading-[10px] sm:text-xs sm:leading-[14px]">
          {asciiFrame}
        </pre>
      </div>

      <div className="relative z-20 mt-0 flex w-full max-w-7xl flex-col gap-5 text-left sm:gap-6 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid w-full grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5 lg:gap-4"
        >
          {chapterImages.map((chapter) => (
            <div
              key={chapter.name}
              className="flex items-center gap-2 border border-border bg-secondary/20 px-2.5 py-1.5"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-border bg-background">
                <Image
                  src={chapter.src}
                  alt={chapter.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  Chapter
                </p>
                <p className="truncate font-mono text-sm font-semibold" style={{ color: 'var(--green)' }}>
                  {chapter.name}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-6 text-left lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex w-full flex-col items-start gap-4 sm:gap-5"
          >
            <div className="flex w-full flex-col items-start gap-2 sm:gap-3">
              <h1 className="font-pixel-line text-5xl font-bold leading-none tracking-tight text-balance md:text-8xl lg:text-9xl break-words" style={{ color: 'var(--orange)' }}>
                Code2Create
              </h1>
              <div className="text-2xl font-bold leading-none sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap" style={{ color: 'var(--green)' }}>
                Fork It. Finish It. Ship It.
              </div>
            </div>

            <p className="max-w-prose font-mono text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
             Code2Create 2026 is a regional-level technical competition designed to bring together
passionate student developers to solve real-world problems through innovation and code.
Organized by the ACM RIT Student Chapter in collaboration with leading ACM student
chapters, the event challenges participants across both conceptual understanding and practical
implementation. It provides a platform to enhance problem-solving skills, coding proficiency, and
system design thinking under time constraints. Participants will gain hands-on experience,
improve their logical reasoning, and learn to build efficient, scalable solutions in a competitive
environment.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdryNmD_wNzJ496_NW5-irYgqxEUyfwmt5Xn_7p060rqZSsnw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 px-8 py-4 font-mono text-base font-bold transition-all duration-200 bg-foreground text-background border-2 border-foreground hover:bg-transparent hover:text-foreground focus-visible:ring-2 focus-visible:outline-none w-full sm:w-auto"
              >
                Register Now
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  {">"}
                </span>
              </a>
              <a
                href="#event-format"
                className="group flex items-center justify-center gap-2 px-8 py-4 font-mono text-base font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none w-full sm:w-auto"
                style={{
                  borderColor: 'var(--orange)',
                  border: '2px solid',
                  color: 'var(--orange)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--orange)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--orange)';
                }}
              >
                Learn More
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  {"->"}
                </span>
              </a>
              <a
                href="mailto:acm.ritb@gmail.com"
                className="flex items-center justify-center gap-2 px-8 py-4 font-mono text-base font-bold transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none w-full sm:w-auto"
                style={{
                  borderColor: 'var(--green)',
                  border: '2px solid',
                  color: 'var(--green)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--green)';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--green)';
                }}
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="w-full max-w-sm justify-self-start border border-border bg-secondary/20 p-5 sm:p-6 lg:justify-self-end"
          >
            <div className="space-y-4">
              <div className="space-y-2 border-b border-border pb-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em]" style={{ color: 'var(--orange)' }}>
                  ACM RIT presents
                </p>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                  In collaboration with
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Chapters
                </p>
                <div className="flex flex-wrap gap-2">
                  {collaborationChapters.map((chapter) => (
                    <span
                      key={chapter}
                      className="border px-3 py-1 font-mono text-xs"
                      style={{ borderColor: 'var(--green)', color: 'var(--green)' }}
                    >
                      {chapter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-4 w-[1px] bg-muted-foreground"
        />
      </motion.div>
    </section>
  )
}
