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
    subtitle: "Two rounds designed to test conceptual clarity and real-world coding",
    description:
      "",
    ascii: `
    ┌────────────────────────────────────────────────────────┐
    │ ROUND 1: ELIMINATION & CONCEPTUAL SCREENING            │
    ├────────────────────────────────────────────────────────┤
    │ Platform:   Quizizz (online, timed)                    │
    │ Duration:   45–60 minutes                              │
    │ Format:     30 questions (Easy, Medium, Hard mix)       │
    │                                                         │
    │ • Direct theory-based questions                        │
    │ • Scenario-driven problems                             │
    │ • Multi-select questions for depth & breadth           │
    │ • Assessment on correctness AND response speed         │
    │ • Leaderboard ranking by accuracy + speed              │
    │                                                         │
    │ ✓ Filters: Top 50% advance to Round 2                  │
    └────────────────────────────────────────────────────────┘
    
    ┌────────────────────────────────────────────────────────┐
    │ ROUND 2: DEVELOPMENT & PROBLEM SOLVING PHASE           │
    ├────────────────────────────────────────────────────────┤
    │ Duration:   4–5 hours                                  │
    │ Format:     Hands-on coding + internal evaluation      │
    │ Tools:      AI tools & Internet fully allowed          │
    │                                                         │
    │ • Real-world problem statements provided              │
    │ • Partial Git repositories or build-from-scratch      │
    │ • Open-ended: Multiple valid approaches exist         │
    │ • Think critically: Trade-offs, constraints, scale    │
    │ • Continuous internal evaluations                     │
    │ • Final assessment by expert judges                   │
    │                                                         │
    │ ✓ Evaluation: Quality, approach, structure, clarity   │
    └────────────────────────────────────────────────────────┘`,
    specs: [
      { label: "Round 1", value: "Conceptual Screening (Quizizz)" },
      { label: "R1 Duration", value: "45–60 minutes" },
      { label: "R1 Format", value: "30 mixed-difficulty questions" },
      { label: "R2 Duration", value: "4–5 hours" },
      { label: "R2 Format", value: "Hands-on coding + problem-solving" },
      { label: "Tools", value: "No AI/Internet in R1 | Full access in R2" },
    ],
    commands: [
      "$ round 1 --start",
      "Quizizz: Testing core CS fundamentals [45-60 mins]",
      "$ leaderboard show --top 50%",
      "Shortlisted participants: 50 teams advance",
      "$ round 2 --begin",
      "Real-world problems + system design [4-5 hours]",
    ],
  },
  {
    id: "schedule",
    number: "02",
    title: "Event Schedule",
    subtitle: "Full day timeline",
    description:
      "Code2Create 2026 runs on 6th May 2026 from 9:00 AM to 4:30 PM at ESB Seminar Hall 1, RIT Bangalore. A carefully designed day with screening, development phases, and expert evaluation.",
    ascii: ``,
    specs: [
      { label: "9:00 AM", value: "Opening & Briefing" },
      { label: "10:00 - 10:30 AM", value: "Round 1 – Conceptual Screening" },
      { label: "10:45 AM", value: "Shortlisting Announcement" },
      { label: "11:00 AM", value: "Break" },
      { label: "12:00 PM", value: "Round 2 – Development Phase" },
      { label: "3:30 PM", value: "Evaluation by Judges" },
      { label: "4:30 PM", value: "Results & Winner Announcement" },
    ],
    commands: [
      "$ event timeline --day 1",
      "Timeline initialized with 7 key milestones",
      "$ start-day",
      "[09:00] Opening ceremony commencing",
      "$ continue --schedule",
      "[04:30] Event concludes with awards ceremony",
    ],
  },
  {
    id: "rules-guidelines",
    number: "03",
    title: "Rules & Guidelines",
    subtitle: "Competition standards",
    description:
      "Code2Create maintains strict guidelines to ensure fair competition and quality submissions. All participants must adhere to the rules including team participation, timeline adherence, AI usage policy, plagiarism prevention, device restrictions, proper code structure, and conduct standards. Violations result in immediate disqualification.",
    ascii: ``,
    specs: [
      { label: "Team Participation", value: "Teams as specified during registration" },
      { label: "Timeline Adherence", value: "Participants must strictly follow the event schedule" },
      { label: "AI Tools Round 1", value: "Prohibited" },
      { label: "AI Tools Round 2", value: "Allowed if solution is clearly understood and explainable" },
      { label: "Plagiarism Policy", value: "Any copying between teams leads to disqualification" },
      { label: "Device Restriction R1", value: "One device per team in Round 1 only" },
      { label: "Submission Deadline", value: "All submissions must be within allotted time" },
      { label: "Late Submissions", value: "Will not be considered" },
      { label: "Code Structure", value: "Must maintain proper structure and readability" },
      { label: "Judge Q&A", value: "Judges may ask to explain approach and decisions" },
      { label: "Misconduct", value: "Any violation results in immediate disqualification" },
    ],
    commands: [
      "$ rules load --comprehensive",
      "11 rules loaded and validated",
      "$ compliance check --all-teams",
      "Team registration verified",
      "$ timeline synchronized",
      "All participants synced to event schedule",
    ],
  },
  {
    id: "judging-criteria",
    number: "04",
    title: "Judging Criteria",
    subtitle: "Evaluation framework",
    description:
      "Submissions are evaluated on five key dimensions to ensure comprehensive assessment of coding ability. Judges assess your problem-solving approach, code quality and structure, scalability and efficiency, handling of edge cases and constraints, and clarity in explaining your solution and decisions.",
    ascii: ``,
    specs: [
      { label: "Problem-Solving Approach & Logic", value: "Understanding the problem and devising optimal algorithms" },
      { label: "Code Quality & Structure", value: "Readability, maintainability, proper naming conventions, and organization" },
      { label: "Scalability & Efficiency", value: "Performance optimization, time/space complexity, and design scalability" },
      { label: "Handling of Edge Cases & Constraints", value: "Robustness, error handling, and consideration of boundary conditions" },
      { label: "Clarity in Explanation & Justification", value: "Ability to articulate approach, decisions, and answer judges' questions" },
    ],
    commands: [
      "$ evaluate submission_001",
      "Problem-Solving: 18/20 [Clear logic, optimized approach]",
      "Code Quality: 23/25 [Well-structured, clean code]",
      "Scalability: 19/20 [Efficient algorithms, good design]",
      "Edge Cases: 18/20 [Proper error handling]",
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
      { label: "Special Awards", value: "Best Fresher" },
      { label: "Special Awards", value: "Best Female" },
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
      "Find answers to frequently asked questions about Code2Create 2026. Learn about eligibility, prior experience, team formation, allowed programming languages, certificates, and internet usage policies.",
    ascii: ``,
    specs: [
      { label: "Who can participate?", value: "All engineering students are eligible to participate" },
      { label: "Is prior coding experience required?", value: "Basic programming knowledge is recommended but not mandatory" },
      { label: "Is the event individual or team-based?", value: "This is team-based with teams of 2–3 members" },
      { label: "Which programming languages are allowed?", value: "Participants can use any language suitable for solving the problem" },
      { label: "Will certificates be provided?", value: "Yes, all participants will receive certificates" },
      { label: "Can we use the internet during the event?", value: "Allowed only in Round 2 under guidelines" },
    ],
    commands: [
      "$ faq query --topic eligibility",
      "Answer: All engineering students are eligible",
      "$ faq query --topic experience",
      "Answer: Basic knowledge recommended but not mandatory",
      "$ faq query --topic team-size",
      "Answer: Teams of 2–3 members",
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
