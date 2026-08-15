export type Dossier = {
  codename: string
  caseNo: string
  designation: string
  status: "deployed" | "archived"
  brief: string
  equipment: string[]
  href: string
}

export const dossiers: Dossier[] = [
  {
    codename: "drawee.",
    caseNo: "001",
    designation: "REAL-TIME COLLABORATION",
    status: "deployed",
    brief:
      "Real-time collaborative whiteboard with ephemeral rooms and sub-200ms stroke synchronization. Architected Redis-backed session state and resolved responsive input inconsistencies with Pointer Events.",
    equipment: ["React/TS", "Socket.io", "Redis", "Vercel", "Railway"],
    href: "https://drawee-wk3j.vercel.app/",
  },
  {
    codename: "PaperPlane",
    caseNo: "002",
    designation: "ANONYMOUS COMMUNICATION",
    status: "deployed",
    brief:
      "Anonymous messaging platform with OTP-verified onboarding, protected API routes, and LLM-powered message suggestions. Implemented endpoint rate limiting that reduced unauthorized traffic by 90%.",
    equipment: ["Next.js", "MongoDB", "OpenRouter", "OTP", "NextAuth"],
    href: "https://paper-plane-iota.vercel.app",
  },
  {
    codename: "NicheHolyTech",
    caseNo: "003",
    designation: "SERVERLESS CLOUD SYSTEM",
    status: "deployed",
    brief:
      "Serverless application backed by nine AWS Lambda functions and API Gateway. Designed JWT-based administrative authentication and resolved distributed CORS failures across Vercel and AWS.",
    equipment: ["AWS Lambda", "API Gateway", "DynamoDB", "JWT", "Vercel"],
    href: "https://niche-holy-tech.vercel.app/",
  },
  {
    codename: "PokeUnite",
    caseNo: "004",
    designation: "ML MATCHMAKING ENGINE",
    status: "archived",
    brief:
      "Two-stage matchmaking system combining pgvector semantic retrieval with a Scikit-Learn regression ranker. Encodes player playstyle into 5D embeddings and achieved 80%+ prediction accuracy on synthetic match outcomes.",
    equipment: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Scikit-Learn",
    ],
    href: "https://github.com/Sedow360/PokeUnite",
  },
  {
    codename: "CV Ground",
    caseNo: "005",
    designation: "COMPUTER VISION TASKS",
    status: "archived",
    brief:
      "Using Computer Vision to build marketable and useful projects. Prototypes in making.",
    equipment: ["OpenCV", "MediaPipe", "Google's TASK models"],
    href: "https://github.com/Sedow360/CV-ground",
  }
]

export const loadout = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Socket.io"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"],
  },
  {
    title: "Cloud / AI",
    items: ["AWS", "Vercel", "Supabase"],
  },
  {
    title: "AI/ML",
    items: ["OpenCV", "MediaPipe", "Scikit-Learn", "Numpy", "Pandas"]
  }
]

export const serviceHistory = [
  {
    date: "2023 — 2027",
    title: "B.Tech CSE (AI/ML) — TMSL Kolkata",
    detail:
      "Computer Science and Engineering with an AI/ML specialization. CGPA: 8.2.",
  },
  {
    date: "INCOMING",
    title: "TCS Digital",
    detail:
      "Selected for an incoming TCS Digital role.",
  },
]

export const briefingLines = [
  "Software engineer — AI/ML focused, incoming TCS Digital.",
  "Fourth-year CSE (AI/ML), TMSL Kolkata.",
  "Builds production systems across frontend, backend, and cloud.",
]

export const links = [
  {
    cmd: "mail --send",
    label: "ayushmaiti2004@gmail.com",
    href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ayushmaiti2004@gmail.com",
  },
  {
    cmd: "connect --linkedin",
    label: "/in/ayush-maiti-dev",
    href: "https://www.linkedin.com/in/ayush-maiti-dev/",
  },
  {
    cmd: "connect --github",
    label: "/Sedow360",
    href: "https://github.com/Sedow360",
  },
  {
    cmd: "view --frames",
    label: "@_ominousity_",
    href: "https://instagram.com/_ominousity_",
  },
]