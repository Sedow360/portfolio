import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { serviceHistory } from "@/data/content"

function TimelineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M6 4v16" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="12" r="2" />
      <circle cx="6" cy="18" r="2" />
      <path d="M8 6h7M8 12h10M8 18h7" />
    </svg>
  )
}

function TacticalCorners() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-accent opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-accent opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-accent opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-accent opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
    </>
  )
}

export function History() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 65%"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <section
      id="history"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16"
    >
      {/* Section Identity */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex items-start gap-4 lg:block">
          <div className="mb-4 text-text-dim">
            <TimelineIcon />
          </div>

          <div>
            <div className="font-display text-5xl leading-none tracking-tight text-text/20 lg:text-7xl">
              03
            </div>

            <span className="mt-3 block text-xs tracking-[0.15em] text-text-dim uppercase before:content-['//_']">
              Training History
            </span>

            <h2 className="mt-2 text-3xl font-semibold">
              Timeline
            </h2>
          </div>
        </div>

        <div className="mt-6 hidden h-px w-full bg-border lg:block" />
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="relative pl-8 md:pl-12">
        <div className="absolute bottom-2 left-0 top-2 w-[2px] bg-border/30" />

        <motion.div
          style={{ scaleY }}
          className="absolute bottom-2 left-0 top-2 w-[2px] origin-top bg-accent"
        />

        <div className="flex flex-col gap-4">
          {serviceHistory.map((entry, index) => (
            <TimelineItem
              key={entry.title}
              entry={entry}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  entry,
  index,
  scrollYProgress,
}: {
  entry: (typeof serviceHistory)[0]
  index: number
  scrollYProgress: any
}) {
  const totalItems = serviceHistory.length
  const startRange = index / totalItems

  const dotColor = useTransform(
    scrollYProgress,
    [startRange, startRange + 0.05],
    [
        "var(--border-color, #303633)",
        "#f36614",
    ]
  )

  const dotGlow = useTransform(
    scrollYProgress,
    [startRange, startRange + 0.05],
    [
        "rgba(77, 163, 255, 0)",
        "rgba(77, 163, 255, 0.9)",
    ]
  )

  return (
    <div className="group/item relative">
      <motion.span
        style={{
          backgroundColor: dotColor,
          boxShadow: useTransform(
            dotGlow,
            (glow) => `0 0 10px ${glow}`
          ),
        }}
        className="absolute left-[-2rem] top-7 z-10 h-3 w-3 -translate-x-[5px] rotate-45 border border-border bg-panel md:left-[-3rem]"
      />

      <div className="relative border-b border-border/60 px-4 py-7 transition-colors duration-200 group-hover/item:bg-panel/30 md:px-6">
        <TacticalCorners />

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs tracking-wider text-accent-dim">
            {entry.date}
          </span>

          <span className="font-mono text-[10px] text-text-dim/40">
            SYS_LOG // 0{index + 1}
          </span>
        </div>

        <h3 className="mt-2 text-lg font-bold tracking-wide uppercase text-text transition-transform duration-200 group-hover/item:translate-x-1">
          {entry.title}
        </h3>

        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-dim">
          {entry.detail}
        </p>
      </div>
    </div>
  )
}