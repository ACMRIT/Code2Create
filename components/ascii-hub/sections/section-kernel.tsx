"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import type { TechSection } from "@/lib/sections-data"

const shadow = "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"

/*
  SECTION 01: KERNEL & SYSTEMS
  Style: Full-width terminal takeover. The entire section looks like one big terminal window.
  The background is inverted (white on black), with a persistent "menu bar" at top.
*/

function BootSequence() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [lines, setLines] = useState<string[]>([])
  const bootLines = [
    "[  0.000000] Linux version 6.1.0-monochrome (gcc 13.2.0)",
    "[  0.000012] Command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1",
    "[  0.000034] x86/cpu: AMD Ryzen 9 7950X detected",
    "[  0.000089] Memory: 16384000K/16777216K available",
    "[  0.001204] ACPI: Core revision 20221020",
    "[  0.002100] PCI: Using configuration type 1",
    "[  0.003400] Scheduler: CFS initialized (16 CPUs)",
    "[  0.004200] NET: Registered PF_INET protocol family",
    "[  0.005100] VFS: Mounted root filesystem (ext4)",
    "[  OK  ] System ready.",
  ]

  useEffect(() => {
    if (!isInView) return
    let i = 0
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        const currentLine = bootLines[i]
        i++
        setLines((prev) => [...prev, currentLine])
      } else {
        clearInterval(interval)
      }
    }, 150)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <div ref={ref} className="bg-background p-6 font-mono text-xs leading-relaxed text-foreground">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={
            typeof line === "string" && line.startsWith("[  OK")
              ? "mt-2 font-bold text-foreground"
              : "text-muted-foreground"
          }
        >
          {line}
        </motion.div>
      ))}
      {lines.length < bootLines.length && (
        <span className="animate-blink inline-block text-foreground">{"_"}</span>
      )}
    </div>
  )
}

export function SectionKernel({ section }: { section: TechSection }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
      {/* Section label with ghost number */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 flex items-end gap-6"
      >
        <span className="font-pixel-line text-3xl font-bold leading-none md:text-5xl" style={{ color: 'rgba(245, 245, 245, 0.15)' }}>
          {section.number}
        </span>
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </motion.div>

      {/* Giant terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden border border-border"
        style={{ boxShadow: shadow }}
      >
        {/* Terminal title bar */}
        <div className="h-1.5 w-full" style={{ backgroundColor: 'var(--orange)' }} />

        {/* Terminal body - full width content */}
        <div className="flex flex-col">
          {/* Full width content */}
          <div className="flex flex-col">
            {/* Title area */}
            <div className="border-b border-border p-6">
              <h2 className="font-pixel-line text-3xl font-bold md:text-4xl" style={{ color: 'var(--green)' }}>
                {section.title}
              </h2>
              <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            </div>

            {/* Specs as clean cards */}
            <div className="flex-1 p-6 border-t border-border">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.specs.map((spec, i) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="rounded-lg border border-border bg-card p-4 hover:border-green-400/50 transition-colors"
                  >
                    <div className="text-xs font-semibold text-muted-foreground">{spec.label}</div>
                    <div className="mt-2 text-sm font-bold text-foreground">{spec.value}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
