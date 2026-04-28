"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TechSection } from "@/lib/sections-data"
import { getFAQs, FAQ } from "@/app/actions/get-faqs"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface SectionFaqProps {
  section: TechSection
}

export function SectionFaq({ section }: SectionFaqProps) {
  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFaqs = async () => {
      setIsLoading(true)
      try {
        const fetchedFaqs = await getFAQs()
        setFaqs(fetchedFaqs)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchFaqs()
  }, [])

  return (
    <div className="grid min-h-[80vh] grid-cols-1 lg:grid-cols-2">
      {/* Left Column - Details */}
      <div className="flex flex-col p-6 lg:border-r lg:p-12 xl:p-16 w-full max-w-full overflow-hidden">
        <div className="mb-12 flex flex-col items-start gap-4">
          <div className="inline-flex items-center justify-center bg-foreground px-3 py-1 font-mono text-sm tracking-tight text-background">
            {section.number} // {section.subtitle}
          </div>
          <h2 className="font-pixel-line text-5xl font-bold tracking-tight text-foreground md:text-6xl text-balance break-words" style={{ color: 'var(--orange)' }}>
            {section.title}
          </h2>
        </div>

        <div className="prose prose-invert max-w-none text-muted-foreground mb-8">
          <p className="font-mono text-sm sm:text-base leading-relaxed text-balance">
            {section.description}
          </p>
        </div>
        
        {/* The FAQ Accordion Here */}
        <div className="w-full mt-4 flex-1 flex flex-col">
          {isLoading ? (
             <div className="font-mono text-muted-foreground animate-pulse">Loading FAQs...</div>
          ) : faqs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full border-t border-border">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.id} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-mono text-sm sm:text-base text-left hover:text-foreground hover:no-underline py-4">
                    <span className="flex items-center gap-2">
                       <span style={{ color: 'var(--orange)' }}>&gt;</span> {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="font-mono text-muted-foreground text-sm leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : null}
        </div>
      </div>

      {/* Right Column - ASCII Art */}
      <div className="relative flex flex-col bg-background/50 p-6 lg:p-12 xl:p-16 overflow-hidden">
        <div className="absolute top-6 right-6 lg:top-12 lg:right-12">
          <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {section.specs.map((spec, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-4 hover:border-green-400/50 transition-colors">
                <span className="font-mono text-xs text-muted-foreground">
                  {spec.label}
                </span>
                <span className="mt-2 block font-mono text-sm font-bold text-foreground">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
