"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"

const ASCII_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=-~^"

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
    // Dynamic grid size based on viewport width
    const updateGridSize = () => {
      // Run only on client side
      if (typeof window !== "undefined") {
        const width = window.innerWidth
        const height = window.innerHeight
        
        // Calculate cols/rows based on character size (approx 8px width, 14px height)
        // Ensure it overflows slightly to prevent gaps on different devices
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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
      {/* Scanline overlay */}
      {motionEnabled && (
        <div
          className="animate-scanline pointer-events-none absolute inset-0 z-10 h-[2px] w-full bg-foreground/5"
          aria-hidden="true"
        />
      )}

      {/* ASCII Background */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.15] flex items-center justify-center"
        aria-hidden="true"
      >
        <pre className="font-mono text-foreground whitespace-pre text-[10px] leading-[10px] sm:text-xs sm:leading-[14px]">
          {asciiFrame}
        </pre>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex w-full max-w-4xl flex-col items-start gap-6 text-left sm:gap-8 mt-16 sm:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-start gap-6 sm:gap-8 w-full"
        >
          <div className="flex flex-col items-start gap-2 sm:gap-4 w-full">
            <h1 className="font-pixel-line text-5xl sm:text-7xl font-bold leading-none tracking-tight text-balance md:text-8xl lg:text-9xl break-words" style={{ color: 'var(--orange)' }}>
              Code2Create
            </h1>
            <div className="flex flex-col items-start gap-1 sm:gap-3 w-full">
              <div className="text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl break-words">
                <span style={{ color: 'var(--orange)' }}>Fork It.</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl break-words">
                <span style={{ color: 'var(--green)' }}>Finish It. Ship It.</span>
              </div>
            </div>
          </div>

          <p className="max-w-prose font-mono text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg lg:text-xl">
            A regional-level technical competition designed to bring together
            passionate student developers to solve real-world problems through
            innovation and code. Compete, innovate, and ship scalable solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-start gap-4 sm:flex-row mt-8"
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
      </div>

      {/* Scroll indicator */}
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
