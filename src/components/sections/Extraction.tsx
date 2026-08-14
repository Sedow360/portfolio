import { links } from "@/data/content"

function CommsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M12 3v4" />
      <path d="M8.5 7.5a5 5 0 1 0 7 0" />
      <path d="M6 15a8 8 0 0 0 12 0" />
      <path d="M12 20v1" />
      <path d="M9 21h6" />
    </svg>
  )
}

export function Extraction() {
  return (
    <section
      id="extraction"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16"
    >
      {/* Content */}
      <div className="min-w-0 lg:order-1">
        <div className="border-t border-b border-border py-6 font-mono text-sm">
          {links.map((link) => (
            <div
              key={link.cmd}
              className="group relative flex flex-wrap gap-2 py-2 transition-colors hover:bg-panel/30"
            >
              <span className="text-accent-dim transition-colors group-hover:text-accent">
                &gt;
              </span>

              <span className="text-text-dim">
                {link.cmd}
              </span>

              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-accent underline decoration-transparent underline-offset-4 transition-all hover:translate-x-1 hover:decoration-accent"
              >
                {link.label}
              </a>
            </div>
          ))}

          <div className="mt-3 flex items-center gap-1 text-text-dim">
            <span className="text-accent-dim">&gt;</span>
            <span className="inline-block h-4 w-2 animate-pulse bg-accent-dim" />
          </div>
        </div>
      </div>

      {/* Section Identity */}
      <div className="lg:order-2 lg:sticky lg:top-28 lg:self-start">
        <div className="flex items-start gap-4 lg:block">
          <div className="mb-4 text-text-dim">
            <CommsIcon />
          </div>

          <div>
            <div className="font-display text-5xl leading-none tracking-tight text-text/20 lg:text-7xl">
              04
            </div>

            <span className="mt-3 block text-xs tracking-[0.15em] text-text-dim uppercase before:content-['//_']">
              Recruitment
            </span>

            <h2 className="mt-2 text-3xl font-semibold">
              Open Comms
            </h2>
          </div>
        </div>

        <div className="mt-6 hidden h-px w-full bg-border lg:block" />
      </div>
    </section>
  )
}