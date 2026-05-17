"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { specialAwards, winnerTeams } from "@/lib/sections-data"

const rankLabels: Record<1 | 2 | 3, string> = {
  1: "Champion",
  2: "Runner Up",
  3: "Second Runner Up",
}

export function WinnersSection() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 border px-3 py-1 font-mono text-xs font-bold" style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}>
            <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: 'var(--orange)' }} />
            <span>EVENT WINNERS</span>
          </div>
          <h2 className="font-pixel-line text-4xl font-bold leading-tight tracking-tight md:text-5xl" style={{ color: 'var(--green)' }}>
            Code2Create 2026 Winners
          </h2>
          <p className="max-w-3xl font-mono text-sm leading-relaxed text-muted-foreground md:text-base">
            The competition recognized the top three performing teams based on their cumulative scores across the judging criteria. These teams demonstrated exceptional coding proficiency, algorithmic thinking, and strategic execution under pressure.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden border border-border bg-secondary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <Image
              src="/code2create.png"
              alt="Code2Create winning teams group photo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="relative flex h-[520px] flex-col justify-end p-6 sm:p-8">
              <div className="max-w-xl space-y-3">
                <div className="inline-flex items-center gap-2 border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.35em]" style={{ borderColor: 'var(--green)', color: 'var(--green)' }}>
                  <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: 'var(--green)' }} />
                  <span>Top 3 Teams</span>
                </div>
                <h3 className="font-pixel-line text-2xl font-bold text-white sm:text-3xl">
                  Celebrating the teams that solved, built, and shipped the best solutions.
                </h3>
                <p className="font-mono text-sm leading-relaxed text-white/75 sm:text-base">
                  Each winner earned recognition for accuracy, clarity, and the quality of their technical execution throughout the event.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {winnerTeams.map((team, index) => (
              <motion.article
                key={team.rank}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border bg-card p-5 sm:p-6"
                style={{ borderColor: team.accent }}
              >
                <div className="grid gap-4 sm:grid-cols-[120px_1fr] sm:items-start">
                  <div className="relative h-28 overflow-hidden border" style={{ borderColor: team.accent }}>
                    {team.image ? (
                      <Image
                        src={team.image}
                        alt={`Team ${team.teamName}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
                        <div
                          className="flex h-16 w-16 items-center justify-center border text-2xl font-bold"
                          style={{ borderColor: team.accent, color: team.accent }}
                        >
                          {team.rank}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-pixel-line text-xl font-bold text-foreground sm:text-2xl">
                        Team {team.teamName}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: team.accent }}>
                        {rankLabels[team.rank]}
                      </span>
                    </div>

                    <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                      {team.summary}
                    </p>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Cash Prize</p>
                        <p className="mt-1 font-mono text-sm font-semibold" style={{ color: 'var(--foreground)' }}>{team.prize}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Institution</p>
                        <p className="mt-1 font-mono text-sm font-semibold text-foreground">{team.institution}</p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Team Members</p>
                      <p className="mt-1 font-mono text-sm leading-relaxed text-foreground">
                        {team.members.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}

            <div className="pt-4">
              <div className="mb-4 inline-flex items-center gap-2 border px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.35em]" style={{ borderColor: 'var(--orange)', color: 'var(--orange)' }}>
                <span className="inline-block h-1.5 w-1.5" style={{ backgroundColor: 'var(--orange)' }} />
                <span>Special Awards</span>
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                {specialAwards.map((award) => (
                  <motion.article
                    key={award.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="border bg-card p-5 sm:p-6"
                    style={{ borderColor: award.accent }}
                  >
                    <div className="space-y-4">
                      <div className="relative aspect-[4/3] overflow-hidden border bg-secondary/10" style={{ borderColor: award.accent }}>
                        {award.image ? (
                          <Image
                            src={award.image}
                            alt={award.teamName}
                            fill
                            sizes="(max-width: 1280px) 100vw, 50vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-white/10 to-transparent">
                            <div
                              className="flex h-16 w-16 items-center justify-center border text-2xl font-bold"
                              style={{ borderColor: award.accent, color: award.accent }}
                            >
                              {award.title.slice(0, 1)}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.35em]" style={{ color: award.accent }}>
                          {award.title}
                        </p>
                        <h3 className="mt-1 font-pixel-line text-xl font-bold text-foreground sm:text-2xl">
                          Team {award.teamName}
                        </h3>
                        <p className="mt-2 font-mono text-sm leading-relaxed text-muted-foreground">
                          {award.summary}
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Cash Prize</p>
                            <p className="mt-1 font-mono text-sm font-semibold text-foreground">{award.prize}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Institution</p>
                            <p className="mt-1 font-mono text-sm font-semibold text-foreground">{award.institution}</p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Team Members</p>
                          <p className="mt-1 font-mono text-sm leading-relaxed text-foreground">
                            {award.members.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}