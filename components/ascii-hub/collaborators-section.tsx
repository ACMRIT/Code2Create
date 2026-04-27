"use client"

import { motion } from "framer-motion"

const collaborators = [
  {
    id: "bmsce",
    name: "BMSCE ACM",
    description: "Bangalore, India",
  },
  {
    id: "rvce",
    name: "RVCE ACM",
    description: "Bangalore, India",
  },
  {
    id: "mit",
    name: "MIT ACM",
    description: "Manipal, India",
  },
  {
    id: "nitk",
    name: "NITK ACM",
    description: "Surathkal, India",
  },
]

export function CollaboratorsSection() {
  return (
    <section className="relative border-b border-border px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 border px-3 py-1 font-mono text-xs font-bold" style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}>
            <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: 'var(--orange)' }} />
            <span>PARTNERSHIPS & COLLABORATIONS</span>
          </div>

          <h2 className="font-pixel-line text-4xl font-bold leading-tight tracking-tight md:text-5xl" style={{ color: 'var(--green)' }}>
            Collaborating Chapters
          </h2>

          <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
            Code2Create 2026 is proudly supported by leading ACM student chapters across India. Together, we&apos;re building a platform for innovation and technical excellence.
          </p>
        </motion.div>

        {/* Collaborators Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={collaborator.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col items-center gap-4 border px-6 py-8 text-center transition-all duration-200"
              style={{ borderColor: 'var(--green)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0, 217, 126, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {/* Logo Placeholder */}
              <div className="flex h-24 w-24 items-center justify-center border-2 border-dashed bg-secondary/30 transition-all duration-200" style={{ borderColor: 'var(--orange)' }}>
                <div className="font-mono text-[10px] text-center px-2" style={{ color: 'var(--orange)' }}>
                  [LOGO]
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  {collaborator.name}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {collaborator.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ACM RIT Organizer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border px-6 py-8 md:px-8 md:py-10"
          style={{ borderColor: 'var(--green)', backgroundColor: 'rgba(0, 217, 126, 0.05)' }}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 border px-3 py-1 font-mono text-xs font-bold" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
              <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: 'var(--green)' }} />
              <span>ORGANIZED BY</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-pixel-line text-2xl font-bold" style={{ color: 'var(--orange)' }}>
                ACM RIT Student Chapter
              </h3>
              <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                The ACM Ramaiah Institute of Technology Student Chapter is dedicated to fostering a community of passionate technologists, providing a platform for students to learn, innovate, and compete at regional and national levels.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
