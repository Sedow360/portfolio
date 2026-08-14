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
    designation: "COLLAB CANVAS",
    status: "deployed",
    brief:
      "Real-time collaborative canvas. Ephemeral rooms, stroke-level sync over Redis, socket race conditions hunted and fixed.",
    equipment: ["React/TS", "Socket.io", "Redis", "Vercel", "Railway"],
    href: "https://drawee-wk3j.vercel.app/",
  },
  {
    codename: "PaperPlane",
    caseNo: "002",
    designation: "ANON COMMS",
    status: "deployed",
    brief:
      "Anonymous messaging with OTP verification, rate limiting, and AI-suggested personalities via OpenRouter.",
    equipment: ["Next.js", "OTP", "OpenRouter"],
    href: "https://paper-plane-iota.vercel.app",
  },
  {
    codename: "NicheHolyTech",
    caseNo: "003",
    designation: "CLOUD OPS",
    status: "deployed",
    brief: "Serverless backend on Lambda + API Gateway — the cloud-proof entry in the record.",
    equipment: ["AWS Lambda", "API Gateway"],
    href: "https://niche-holy-tech.vercel.app/",
  },
  {
    codename: "PokeUnite",
    caseNo: "004",
    designation: "ML MATCHMAKING",
    status: "archived",
    brief:
      "Two-stage retrieval with pgvector plus a linear regression matchmaking engine — the ML-proof entry.",
    equipment: ["FastAPI", "pgvector", "scikit-learn"],
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
  { title: "Frontend", items: ["React / Next.js", "TypeScript", "Tailwind"] },
  { title: "Backend", items: ["Node / Express", "FastAPI", "Socket.io"] },
  { title: "Database", items: ["MongoDB", "DynamoDB", "PostgreSQL"] },
  { title: "Cloud & Infra", items: ["AWS", "Redis", "Supabase"] },
  { title: "AI / ML", items: ["OpenCV / MediaPipe", "Scikit-Learn", "Pandas", "Numpy"] },
]

export const serviceHistory = [
  {
    date: "2023 — Present",
    title: "B.Tech CSE, AI/ML — TMSL Kolkata",
    detail: "Fourth year. Built fundamentals in CS, SDE and AI/ML",
  },
]

export const briefingLines = [
  "AI/ML operator — incoming, TCS Digital.",
  "Third-year CSE, TMSL Kolkata.",
  "Builds for personality, beyond performance.",
]

export const links = [
  { cmd: "mail --send", label: "ayushmaiti2004@gmail.com", href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ayushmaiti2004@gmail.com" },
  { cmd: "connect --linkedin", label: "/in/ayush-maiti-dev", href: "https://www.linkedin.com/in/ayush-maiti-dev/" },
  { cmd: "connect --github", label: "/Sedow360", href: "https://github.com/Sedow360" },
  { cmd: "view --frames", label: "@_ominousity_", href: "https://instagram.com/_ominousity_" },
]