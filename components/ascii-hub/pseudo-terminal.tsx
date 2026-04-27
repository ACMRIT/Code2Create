"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { submitDoubt } from "@/app/actions/submit-doubt"
import { useToast } from "@/hooks/use-toast"

export function PseudoTerminal() {
  const [question, setQuestion] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!question.trim()) return

    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    
    try {
      const result = await submitDoubt(formData)
      
      if (result.success) {
        toast({
          title: "✓ Received",
          description: "Your question has been submitted.",
          duration: 4000,
          style: { backgroundColor: 'black', color: 'var(--green)', border: '1px solid var(--green)' }
        })
        setQuestion("")
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit. Please try again later.",
          variant: "destructive"
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "Network error occurred.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24"
    >
      <div className="mb-8 flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground">{">"}</span>
          <div className="h-[1px] w-12 bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            COMMUNICATIONS
          </span>
        </div>
        <h2 className="font-pixel-line text-3xl font-bold tracking-tight text-foreground md:text-5xl" style={{ color: 'var(--green)' }}>
          Ask a Question
        </h2>
        <p className="max-w-prose font-mono text-sm leading-relaxed text-muted-foreground">
          Got a question about Code2Create? Drop it below and our team will get back to you.
        </p>
      </div>

      <div
        className="border border-border relative group"
        role="application"
        aria-label="Submit a doubt or question"
        style={{ borderColor: 'var(--green)' }}
      >
        {/* Form header */}
        <div className="flex items-center gap-2 border-b border-border bg-secondary/10 px-4 py-2.5" style={{ borderColor: 'var(--green)' }}>
          <div className="h-2.5 w-2.5 bg-foreground" style={{ backgroundColor: 'var(--orange)' }} />
          <div className="h-2.5 w-2.5 bg-muted-foreground/50" />
          <div className="h-2.5 w-2.5 bg-muted-foreground/30" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            c2c-mainframe ~ submit_doubt.sh
          </span>
        </div>

        {/* Input body */}
        <form onSubmit={handleSubmit} className="flex flex-col h-auto bg-black p-6 gap-6">
          <div className="flex flex-col gap-3">
            <label htmlFor="question" className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--orange)' }}>
              [ INPUT : YOUR QUERY ]
            </label>
            <div className="relative font-mono text-sm text-foreground">
              <span className="absolute top-3 left-3 text-muted-foreground">{"$"}</span>
              <textarea
                id="question"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                disabled={isSubmitting}
                className="w-full min-h-[140px] resize-y bg-secondary/10 text-foreground font-mono placeholder:text-muted-foreground/40 border border-border p-3 pl-8 focus:outline-none focus:ring-1 focus:ring-[var(--green)] disabled:opacity-50"
                style={{ borderColor: 'var(--green)' }}
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !question.trim()}
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-[var(--green)] bg-transparent px-8 font-mono text-sm uppercase tracking-widest text-[var(--green)] hover:bg-[var(--green)] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Executing...</span>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <span>Submit_Query</span>
                  <span className="opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-0">
                    &gt;
                  </span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  )
}
