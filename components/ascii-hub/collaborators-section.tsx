"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const collaborators = [
  {
    id: "bmsce",
    name: "BMSCE ACM",
    description: "Bangalore, India",
    link: "https://bmsce.acm.org/",
    logo: "/bmsce.png",
  },
  {
    id: "rvce",
    name: "RVCE ACM",
    description: "Bangalore, India",
    link: "https://www.acmrvce.com/",
    logo: "/rvce.png",
  },
  {
    id: "mit",
    name: "MIT ACM",
    description: "Bangalore, India",
    link: "https://mitb.acm.org/",
    logo: "/manipal.png",
  },
  {
    id: "nitk",
    name: "NITK ACM",
    description: "Surathkal, India",
    link: "https://nitk.acm.org/#/",
    logo: "/nitk.jpg",
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
              {/* Logo */}
              <a
                href={collaborator.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex h-28 w-28 items-center justify-center overflow-hidden border-2 bg-background transition-all duration-200 hover:scale-105"
                style={{ borderColor: 'var(--orange)' }}
              >
                <Image
                  src={collaborator.logo}
                  alt={`${collaborator.name} logo`}
                  fill
                  sizes="112px"
                  className="object-contain p-3"
                />
              </a>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="font-mono text-sm font-semibold text-foreground">
                  {collaborator.name}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {collaborator.description}
                </p>
                <a
                  href={collaborator.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs transition-colors"
                  style={{ color: 'var(--green)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--green)';
                  }}
                >
                  Visit Website →
                </a>
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
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="relative h-56 w-full overflow-hidden border border-border md:h-72 md:w-96 md:shrink-0">
                <Image
                  src="/group.jpg"
                  alt="ACM RIT organizing team group photo"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-pixel-line text-2xl font-bold" style={{ color: 'var(--orange)' }}>
                  ACM RIT Student Chapter
                </h3>
                <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                  The RIT ACM Chapter is a vibrant community dedicated to empowering students at the Ramaiah Institute of Technology with the skills, knowledge, and networks needed to excel in the tech world. As part of the global Association for Computing Machinery, our chapter brings together passionate RITians who are driven to explore, innovate, and lead in all areas of computing.
                </p>
                <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
                  Through workshops, hackathons, and technical events, the chapter provides a platform for students to enhance their skills, explore emerging technologies, and engage with a vibrant developer community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
