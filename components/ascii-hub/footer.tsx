"use client"

import { motion } from "framer-motion"
import { Linkedin, ArrowUp, Globe, Mail } from "lucide-react"

const ASCII_LOGO = `
 ██████╗  ██████╗  ██████╗ 
██╔════╝ ╚════██╗ ██╔════╝ 
██║       █████╔╝ ██║      
██║      ██╔═══╝  ██║      
╚██████╗ ███████╗ ╚██████╗ 
 ╚═════╝ ╚══════╝  ╚═════╝`

const socialLinks = [
  { name: "Email", icon: Mail, href: "mailto:acm.ritb@gmail.com" },
  { name: "ACM RIT Website", icon: Globe, href: "https://acmrit.vercel.app/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/acm-rit" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* ASCII Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <pre
              className="font-mono text-[8px] leading-[10px] md:text-[10px] md:leading-[12px] font-bold"
              aria-label="Code2Create ASCII logo"
              role="img"
              style={{ color: 'var(--orange)' }}
            >
              {ASCII_LOGO}
            </pre>
            <p className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-muted-foreground">
              Code2Create 2026: A regional technical competition
              organized by ACM RIT. Fork it. Finish it. Ship it.
            </p>
          </motion.div>

          {/* Social Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Connect
            </span>
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-2 font-mono text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none"
                  style={{ color: 'var(--green)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--green)';
                  }}
                >
                  <link.icon size={14} />
                  <span className="font-bold">{link.name}</span>
                  <span className="ml-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {"->"}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Map & Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between h-full"
          >
            <div className="w-full">
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest font-bold" style={{ color: 'var(--orange)' }}>
                Venue
              </span>
              <div className="h-40 w-full overflow-hidden border border-border" style={{ borderColor: 'var(--green)' }}>
                <iframe
                  title="Ramaiah Institute of Technology Map"
                  src="https://www.google.com/maps?q=M.S.+Ramaiah+Institute+of+Technology,+Bangalore&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(1.2)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                MSR Nagar, MSRIT Post, Bangalore - 560054, Karnataka, INDIA
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 self-start font-mono text-xs text-muted-foreground transition-all duration-200 hover:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:outline-none lg:self-end"
              aria-label="Back to top"
            >
              <ArrowUp size={12} />
              <span>BACK TO TOP</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="font-mono text-[10px] text-muted-foreground">
            {"// "} Code2Create 2026 &mdash; {new Date().getFullYear()}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            Fork It. Finish It. Ship It.
          </span>
        </div>
      </div>
    </footer>
  )
}
