"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/acm__rit?igsh=MXZpZHJsYXpjdXQ5aw==",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/acm-rit",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ACM_RIT",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.gg/sNUM35sj",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://chat.whatsapp.com/IGY09dDzxXk6wE1h1yCxMa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/rit_acm",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
]

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Format", href: "/#event-format" },
  { label: "Rules", href: "/#rules-guidelines" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Register", href: "https://docs.google.com/forms/d/e/1FAIpQLSdryNmD_wNzJ496_NW5-irYgqxEUyfwmt5Xn_7p060rqZSsnw/viewform" },
]


export function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: 'var(--border)' }}>
      {/* Top fade line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Branding */}
          <div className="lg:col-span-2 space-y-5">
            <a href="https://acmrit.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-block">
              <div 
                className="font-pixel-line text-2xl font-bold tracking-wider"
                style={{ color: 'var(--orange)' }}
              >
                CODE2CREATE
              </div>
            </a>
            <p className="text-sm leading-relaxed max-w-sm font-mono" style={{ color: 'var(--muted-foreground)' }}>
              A regional-level technical competition organized by the ACM Student Chapter at MSRIT. Bringing together passionate developers to solve real-world problems through innovation and code.
            </p>
            <a
              href="https://acmrit.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors"
              style={{ color: 'var(--green)' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--orange)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--green)' }}
            >
              Visit ACM RIT
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap pt-1">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 rounded-md flex items-center justify-center border transition-colors duration-200"
                  style={{ 
                    backgroundColor: 'rgba(0, 217, 126, 0.1)',
                    borderColor: 'var(--green)',
                    color: 'var(--green)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 140, 66, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--orange)';
                    e.currentTarget.style.color = 'var(--orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0, 217, 126, 0.1)';
                    e.currentTarget.style.borderColor = 'var(--green)';
                    e.currentTarget.style.color = 'var(--green)';
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Col 3 — Quick links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-mono text-sm uppercase tracking-wider transition-colors duration-200"
                    style={{ color: 'var(--foreground)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--green)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--foreground)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm font-mono" style={{ color: 'var(--muted-foreground)' }}>
              <div>
                <p className="font-bold" style={{ color: 'var(--foreground)' }}>M S Ramaiah Institute of Technology</p>
                <p className="text-xs mt-0.5">M.S.Ramaiah Nagar, MSRIT Post</p>
                <p className="text-xs">Bengaluru — 560 054</p>
              </div>
              <div className="space-y-1 text-xs">
                <a
                  href="mailto:acm.ritb@gmail.com"
                  className="block transition-colors"
                  style={{ color: 'var(--green)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--orange)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--green)' }}
                >
                  acm.ritb@gmail.com
                </a>
                <a
                  href="https://msrit.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors"
                  style={{ color: 'var(--muted-foreground)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--foreground)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted-foreground)' }}
                >
                  msrit.edu
                </a>
              </div>
              <div className="pt-1 space-y-2 text-xs">
                <div className="flex items-center gap-2 pb-1">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold" style={{ fontSize: '9px', backgroundColor: 'rgba(0, 217, 126, 0.1)', borderColor: 'var(--green)', border: '1px solid', color: 'var(--green)' }}>FC</span>
                  <div>
                    <span className="font-semibold" style={{ color: 'var(--foreground)' }}>Dr. Jamuna S Murthy</span>
                    <span style={{ color: 'var(--muted-foreground)', marginLeft: '0.5rem' }}>· Faculty Coordinator</span>
                  </div>
                </div>
                <p className="text-xs uppercase tracking-wider font-bold mb-1" style={{ color: 'var(--muted-foreground)' }}>Event Coordinators</p>
                <p><span className="font-semibold" style={{ color: 'var(--foreground)' }}>Mayeraa Singh</span> <span style={{ color: 'var(--green)' }}>· +91 96069 73155</span></p>
                <p><span className="font-semibold" style={{ color: 'var(--foreground)' }}>Swanand Gadwe</span> <span style={{ color: 'var(--green)' }}>· +91 63640 97357</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Venue map */}
        <div className="mt-12 space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: 'var(--muted-foreground)' }}>
            Venue
          </h4>
          <div className="h-40 w-full overflow-hidden border" style={{ borderColor: 'var(--green)' }}>
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
          <p className="font-mono text-[10px]" style={{ color: 'var(--muted-foreground)' }}>
            MSR Nagar, MSRIT Post, Bangalore - 560054, Karnataka, INDIA
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs font-mono" style={{ color: 'var(--muted-foreground)' }}>
            © 2026 ACM Student Chapter · RIT Bengaluru
          </p>
          <p className="text-xs font-mono" style={{ color: 'var(--muted-foreground)' }}>
            Made by{" "}
            <span style={{ color: 'var(--foreground)' }}>Samrudh P & Sagar S R</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
