import { useTypewriter } from "@/lib/useTypewriter"
import { briefingLines } from "@/data/content"

const navItems = [
  { idx: "01", label: "Field Operations", href: "#operations" },
  { idx: "02", label: "Loadout", href: "#loadout" },
  { idx: "03", label: "Service History", href: "#history" },
  { idx: "04", label: "Recruitment", href: "#extraction" },
]

const aboutSummary =
  "Fourth-year CSE (AI/ML) at TMSL Kolkata, TCS Digital incoming. Drives architecture and design decisions independently — projects tend to start from practical implications rather than top-down planning."

export function Hero() {
  const typed = useTypewriter(briefingLines)

  const reconVideo = `${import.meta.env.BASE_URL}graphics/map.mp4`

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col justify-center overflow-hidden px-8 py-20 sm:px-16 lg:px-20">
      {/* Reconnaissance visual */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[58%]"
      >
        {/* Image */}
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale"
        >
          <source src={reconVideo} type="video/mp4" />
        </video>

        {/* Fade image into page background */}
        <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/65 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-transparent to-bg/30" />

        {/* Subtle tactical grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Coordinate-style metadata */}
        <div className="absolute bottom-32 right-10 hidden font-mono text-[9px] tracking-[0.15em] text-text-dim/30 xl:block">
          <div>RECON // ACTIVE</div>
          <div className="mt-1">LAT 22.5726 N</div>
          <div>LON 88.3639 E</div>
        </div>
      </div>

      {/* Main dossier content */}
      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.35fr)]">
        <div className="max-w-3xl">
          <span className="text-xs tracking-[0.15em] text-accent-dim uppercase before:content-['//_']">
            Personnel Dossier
          </span>

          <h1 className="mt-2 text-[clamp(3.5rem,11vw,8rem)] leading-[0.92] font-semibold">
            AYUSH
            <br />
            MAITI
          </h1>

          <div className="mt-3 text-base tracking-wide text-text-dim">
            @Shadow/Sedow
          </div>

          {/* Status metadata */}
          <div className="mt-7 grid max-w-xl grid-cols-2 gap-x-8 gap-y-3 border-y border-border py-4 text-[10px] tracking-[0.12em] sm:grid-cols-3">
            <div>
              <span className="block text-text-dim/60">STATUS</span>
              <span className="mt-1 block text-accent">ACTIVE</span>
            </div>

            <div>
              <span className="block text-text-dim/60">ROLE</span>
              <span className="mt-1 block text-text">SOFTWARE ENGINEER</span>
            </div>

            <div>
              <span className="block text-text-dim/60">SPECIALTY</span>
              <span className="mt-1 block text-text">AI / ML · FULL STACK</span>
            </div>
          </div>

          <div className="mt-6 min-h-[1.6em] font-mono text-[clamp(1rem,2.2vw,1.35rem)] text-text-dim">
            {typed}
            <span className="ml-0.5 inline-block w-[0.55em] animate-pulse bg-text-dim align-middle">
              &nbsp;
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text">
            {aboutSummary}
          </p>
        </div>
      </div>

      {/* Section navigation */}
      <nav
        aria-label="Section listing"
        className="relative z-10 mt-16 w-full max-w-7xl border-t border-border pt-6 text-sm"
      >
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group border-b border-transparent tracking-wider text-text-dim uppercase transition-colors hover:border-accent hover:text-text"
            >
              <span className="mr-1 text-accent transition-colors group-hover:text-accent">
                {item.idx}
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Bottom technical readout */}
      <div className="pointer-events-none absolute bottom-6 right-8 z-10 hidden font-mono text-[9px] tracking-[0.15em] text-text-dim/30 md:block">
        DOSSIER // 01
      </div>
    </section>
  )
}