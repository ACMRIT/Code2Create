export interface TechSection {
  id: string
  number: string
  title: string
  subtitle: string
  description: string
  ascii: string
  specs: { label: string; value: string }[]
  commands: string[]
}

export const techSections: TechSection[] = [
  {
    id: "event-format",
    number: "01",
    title: "Event Format",
    subtitle: "Two rounds of intense coding",
    description:
      "Code2Create follows a two-phase structure designed to test both fundamental knowledge and practical implementation skills. Round 1 tests CS fundamentals with speed and accuracy, while Round 2 challenges you with real-world problem-solving and system design.",
    ascii: `
    ┌─────────────────────────┐
    │   ROUND 1: SCREENING    │
    │  ┌─────────────────┐   │
    │  │ Quizizz: 30 Qs │   │
    │  │ 45-60 Minutes   │   │
    │  │ CS Fundamentals │   │
    │  └────────┬────────┘   │
    │           │             │
    │  ┌────────▼────────┐   │
    │  │  Top 50% Pass    │   │
    │  └────────┬────────┘   │
    │           │             │
    │  ┌────────▼────────┐   │
    │  │   ROUND 2:      │   │
    │  │   DEVELOPMENT   │   │
    │  │   4-5 Hours     │   │
    │  │   Real Problems │   │
    │  └─────────────────┘   │
    └─────────────────────────┘`,
    specs: [
      { label: "Round 1", value: "Conceptual Screening" },
      { label: "Platform", value: "Quizizz (30 questions)" },
      { label: "Duration R1", value: "45–60 minutes" },
      { label: "Round 2", value: "Development & Problem Solving" },
      { label: "Duration R2", value: "4–5 hours" },
      { label: "AI Tools", value: "NOT allowed in R1, Allowed in R2" },
    ],
    commands: [
      "$ competition start --round 1",
      "Quizizz URL: [link]",
      "$ competition proceed --round 2",
      "Time: 4-5 hours",
      "$ competition submit",
      "Evaluating submissions...",
    ],
  },
  {
    id: "schedule",
    number: "02",
    title: "Event Schedule",
    subtitle: "Full day timeline",
    description:
      "Code2Create 2026 is a full-day event running from 9:00 AM to 5:00 PM. The schedule is carefully designed to give contestants adequate time for both screening and development phases, with breaks for refreshment and evaluation.",
    ascii: `
    9:00 AM  │ Opening & Briefing
             │ ┌─────────────────┐
   10:00 AM  ├─► ROUND 1: MCQ   │
   10:45 AM  │ └─────────────────┘
             │
   10:45 AM  │ Shortlisting
   11:00 AM  │ BreakTime
             │ ┌─────────────────┐
   12:00 PM  ├─► ROUND 2: Dev   │
    3:30 PM  │ └─────────────────┘
             │
    3:30 PM  │ Evaluation
    4:30 PM  │ Results & Awards
    5:00 PM  │ Event Ends`,
    specs: [
      { label: "Date", value: "6th May 2026" },
      { label: "Time", value: "9:00 AM – 5:00 PM" },
      { label: "Venue", value: "ESB Seminar Hall 1, RIT Bangalore" },
      { label: "Mode", value: "Offline" },
    ],
    commands: [
      "$ schedule show --event code2create",
      "Registration: 9:00-9:30 AM",
      "$ schedule next-activity",
      "Round 1: Conceptual Screening [10:00]",
      "$ competition time-remaining",
      "Round 2: 4 hours 30 minutes",
    ],
  },
  {
    id: "rules-guidelines",
    number: "03",
    title: "Rules & Guidelines",
    subtitle: "Competition standards",
    description:
      "Code2Create maintains strict guidelines to ensure fair competition and quality submissions. All participants must adhere to the rules including plagiarism policy, timeline constraints, and device regulations. Follow proper code structure and submit on time.",
    ascii: `
    ┌──────────────────────────┐
    │  COMPETITION RULES       │
    ├──────────────────────────┤
    │ ✓ No plagiarism          │
    │ ✓ Follow timelines       │
    │ ✓ One device/team (R1)   │
    │ ✓ Proper code structure  │
    │ ✓ Late submissions: NO   │
    │ ✓ Judges may ask Q&A     │
    │ ✓ AI: NO (R1), YES (R2)  │
    │ ✓ Languages: Any         │
    └──────────────────────────┘`,
    specs: [
      { label: "Team Size", value: "2–3 members" },
      { label: "Languages", value: "Any programming language" },
      { label: "AI Tools", value: "Only in Round 2" },
      { label: "Internet", value: "Only in Round 2" },
    ],
    commands: [
      "$ rules check --plagiarism",
      "Similarity score: 2% [OK]",
      "$ submission verify",
      "Code structure: [VALID]",
      "$ deadline check",
      "Time remaining: 15 minutes",
    ],
  },
  {
    id: "judging-criteria",
    number: "04",
    title: "Judging Criteria",
    subtitle: "Evaluation framework",
    description:
      "Submissions are evaluated on multiple dimensions to ensure comprehensive assessment of coding ability. The judges focus on problem-solving approach, code quality, scalability, edge case handling, and the clarity of your explanation.",
    ascii: `
    SUBMISSION EVALUATION
    ┌──────────────────────┐
    │ Problem Solving      │ 20%
    │ Approach & Logic     │
    ├──────────────────────┤
    │ Code Quality         │ 25%
    │ Structure & Style    │
    ├──────────────────────┤
    │ Scalability          │ 20%
    │ Architecture Design  │
    ├──────────────────────┤
    │ Edge Cases           │ 20%
    │ Error Handling       │
    ├──────────────────────┤
    │ Explanation          │ 15%
    │ Clarity & Q&A        │
    └──────────────────────┘`,
    specs: [
      { label: "Problem-Solving", value: "20%" },
      { label: "Code Quality", value: "25%" },
      { label: "Scalability", value: "20%" },
      { label: "Edge Cases", value: "20%" },
    ],
    commands: [
      "$ evaluate submission_001",
      "Problem Solving: 18/20",
      "Code Quality: 23/25",
      "Scalability: 19/20",
      "$ final-score submit_001",
      "Total Score: 92/100 [EXCELLENT]",
    ],
  },
  {
    id: "prizes",
    number: "05",
    title: "Prizes & Awards",
    subtitle: "Recognition & rewards",
    description:
      "Code2Create offers attractive prize pools and recognition across multiple categories. Winners in overall rankings and special categories receive monetary rewards, and all participants receive certificates for their participation.",
    ascii: `
    PRIZE DISTRIBUTION
    ┌──────────────────────┐
    │  1ST PLACE: ₹7,000   │  🥇
    │  2ND PLACE: ₹5,000   │  🥈
    │  3RD PLACE: ₹3,000   │  🥉
    ├──────────────────────┤
    │ SPECIAL CATEGORIES   │
    ├──────────────────────┤
    │ Best Fresher: ₹2,500 │
    │ Best Female: ₹2,500  │
    ├──────────────────────┤
    │ All participants:    │
    │ Certificate of Merit │
    └──────────────────────┘`,
    specs: [
      { label: "1st Prize", value: "₹7,000" },
      { label: "2nd Prize", value: "₹5,000" },
      { label: "3rd Prize", value: "₹3,000" },
      { label: "Special Awards", value: "Best Fresher, Best Female" },
    ],
    commands: [
      "$ winners query --event code2create",
      "1st: Team Alpha - ₹7,000 [AWARDED]",
      "2nd: Team Beta - ₹5,000 [AWARDED]",
      "$ certificates --all-participants",
      "Generated: 150 certificates",
      "Status: READY_FOR_DISTRIBUTION",
    ],
  },
  {
    id: "faq",
    number: "06",
    title: "FAQ",
    subtitle: "Common questions",
    description:
      "Find answers to frequently asked questions about Code2Create 2026. Learn about eligibility, team formation, allowed tools, certificates, and internet usage policies.",
    ascii: `
    FREQUENTLY ASKED QUESTIONS
    ┌──────────────────────────┐
    │ Who can participate?     │
    │ > All engineering        │
    │   students               │
    ├──────────────────────────┤
    │ Team size?               │
    │ > 2–3 members            │
    ├──────────────────────────┤
    │ Languages allowed?       │
    │ > Any programming lang   │
    ├──────────────────────────┤
    │ Certificates provided?   │
    │ > Yes, for all           │
    ├──────────────────────────┤
    │ Internet usage?          │
    │ > Only in Round 2        │
    └──────────────────────────┘`,
    specs: [
      { label: "Eligibility", value: "All engineering students" },
      { label: "Team Size", value: "2–3 members" },
      { label: "Languages", value: "Any" },
      { label: "Certificates", value: "Yes, for all participants" },
    ],
    commands: [
      "$ faq query --topic eligibility",
      "All engineering students welcome",
      "$ faq query --topic team-size",
      "Requirements: 2–3 members",
      "$ faq query --topic certificates",
      "Status: YES [PROVIDED_TO_ALL]",
    ],
  },
  {
    id: "contact",
    number: "07",
    title: "Contact & Support",
    subtitle: "Get in touch",
    description:
      "Have questions or need clarification? Reach out to the ACM RIT Student Chapter organizing team. We're here to help with any queries related to registration, technical issues, or general information.",
    ascii: `
    CONTACT INFORMATION
    ┌─────────────────────────┐
    │ Organizing Team:        │
    │ ACM RIT Student Chapter │
    ├─────────────────────────┤
    │ Email:                  │
    │ acm.ritb@gmail.com      │
    ├─────────────────────────┤
    │ Coordinators:           │
    │                         │
    │ Mayeraa                 │
    │ 9606973155              │
    │                         │
    │ Swanand                 │
    │ 6364097357              │
    └─────────────────────────┘`,
    specs: [
      { label: "Email", value: "acm.ritb@gmail.com" },
      { label: "Coordinator 1", value: "Mayeraa - 9606973155" },
      { label: "Coordinator 2", value: "Swanand - 6364097357" },
      { label: "Organization", value: "ACM RIT Student Chapter" },
    ],
    commands: [
      "$ contact send --email acm.ritb@gmail.com",
      "Subject: Code2Create Query",
      "Message sent [OK]",
      "$ contact call --coordinator mayeraa",
      "Phone: 9606973155",
      "Status: AVAILABLE",
    ],
  },
  {
    id: "about-event",
    number: "08",
    title: "About Code2Create",
    subtitle: "Event overview",
    description:
      "Code2Create 2026 is a regional-level technical competition designed to bring together passionate student developers to solve real-world problems through innovation and code. It emphasizes problem-solving, coding proficiency, and system design under time constraints, giving participants hands-on experience in a competitive environment.",
    ascii: `
    CODE2CREATE 2026
    ┌─────────────────────────┐
    │ REGIONAL COMPETITION    │
    ├─────────────────────────┤
    │ Problem-Solving         │
    │ Coding Proficiency      │
    │ System Design           │
    │ Real-World Problems     │
    ├─────────────────────────┤
    │ Date: 6th May 2026      │
    │ Time: 9:00 AM – 5:00 PM │
    │ Venue: RIT Bangalore    │
    │ Mode: Offline           │
    ├─────────────────────────┤
    │ Two Rounds Challenge    │
    │ Screening + Development │
    └─────────────────────────┘`,
    specs: [
      { label: "Level", value: "Regional competition" },
      { label: "Focus", value: "Problem-solving & System Design" },
      { label: "Date", value: "6th May 2026" },
      { label: "Organized By", value: "ACM RIT Student Chapter" },
    ],
    commands: [
      "$ event info --name code2create",
      "Level: Regional | Status: OPEN",
      "$ event stats --year 2026",
      "Participants: 150+ | Teams: 50+",
      "$ event get --details full",
      "Status: REGISTRATION_OPEN [GO!]",
    ],
  },
]

export const navLinks = techSections.map((s) => ({
  id: s.id,
  number: s.number,
  title: s.title,
}))
