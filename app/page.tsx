import React from "react"
import { Navigation } from "@/components/ascii-hub/navigation"
import { HeroSection } from "@/components/ascii-hub/hero-section"
import { DomainSection } from "@/components/ascii-hub/domain-section"
import { CollaboratorsSection } from "@/components/ascii-hub/collaborators-section"
import { Footer } from "@/components/ascii-hub/footer"
import { techSections } from "@/lib/sections-data"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      <main>
        <HeroSection />

        {techSections.map((section, index) => (
          <React.Fragment key={section.id}>
            <DomainSection
              section={section}
              index={index}
            />
          </React.Fragment>
        ))}

        <CollaboratorsSection />
      </main>

      <Footer />
    </div>
  )
}
