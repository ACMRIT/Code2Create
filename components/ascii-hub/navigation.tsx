"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { navLinks } from "@/lib/sections-data"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => document.getElementById(link.id))
      const scrollPos = window.scrollY + 120

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id)
          return
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        const offset = 80
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: "smooth" })
      }
    }, 300)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <a
            href="/"
            className="font-pixel-line text-xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity"
            style={{ color: 'var(--orange)' }}
          >
            Code2Create
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-3 py-1.5 font-mono text-xs transition-all duration-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none ${
                activeSection === link.id
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {link.title.toUpperCase()}
            </button>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdryNmD_wNzJ496_NW5-irYgqxEUyfwmt5Xn_7p060rqZSsnw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 font-mono text-xs transition-all duration-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none text-muted-foreground hover:bg-foreground hover:text-background"
          >
            REGISTER
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 font-mono text-foreground transition-all duration-200 hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            />
            {/* Sliding Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-screen w-3/4 max-w-sm border-l border-border bg-background/95 p-6 shadow-2xl backdrop-blur-md lg:hidden flex flex-col"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 font-mono text-foreground transition-all duration-200 hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-2 overflow-y-auto">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`px-4 py-3 text-left font-mono text-base transition-all duration-200 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none border-b border-border/40 last:border-0 ${
                      activeSection === link.id
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-foreground hover:text-background hover:pl-6"
                    }`}
                  >
                    {link.title.toUpperCase()}
                  </button>
                ))}
                <div className="mt-6">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdryNmD_wNzJ496_NW5-irYgqxEUyfwmt5Xn_7p060rqZSsnw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 font-mono text-base font-bold transition-all duration-200 text-background bg-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none hover:opacity-90"
                  >
                    REGISTER
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
