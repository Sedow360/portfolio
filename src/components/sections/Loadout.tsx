import { loadout } from "@/data/content"

function SystemsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="6" height="6" />
      <rect x="14" y="4" width="6" height="6" />
      <rect x="4" y="14" width="6" height="6" />
      <rect x="14" y="14" width="6" height="6" />
    </svg>
  )
}

function TacticalCorners() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="pointer-events-none absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </>
  )
}

export function Loadout() {
  return (
    <section
      id="loadout"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16"
    >
      {/* Content */}
      <div className="min-w-0 lg:order-1">
        <div className="border-t border-border">
          {loadout.map((slot, index) => (
            <div
              key={slot.title}
              className="group relative grid grid-cols-1 gap-5 border-b border-border py-7 transition-colors duration-200 hover:bg-panel/30 sm:grid-cols-[180px_minmax(0,1fr)] sm:px-5"
            >
              <TacticalCorners />

              <div>
                <span className="text-[10px] tracking-[0.15em] text-text-dim">
                  0{index + 1} // SYSTEM
                </span>

                <h3 className="mt-1 text-sm tracking-wide text-text uppercase">
                  {slot.title}
                </h3>
              </div>

              <ul className="space-y-1.5 text-sm leading-relaxed text-text">
                {slot.items.map((item) => (
                  <li
                    key={item}
                    className="transition-transform duration-200 before:mr-2 before:text-accent-dim before:content-['▸'] group-hover:translate-x-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section Identity */}
      <div className="lg:order-2 lg:sticky lg:top-28 lg:self-start">
        <div className="flex items-start gap-4 lg:block">
          <div className="mb-4 text-text-dim">
            <SystemsIcon />
          </div>

          <div>
            <div className="font-display text-5xl leading-none tracking-tight text-text/20 lg:text-7xl">
              02
            </div>

            <span className="mt-3 block text-xs tracking-[0.15em] text-text-dim uppercase before:content-['//_']">
              Loadout
            </span>

            <h2 className="mt-2 text-3xl font-semibold">
              Current Equipment
            </h2>
          </div>
        </div>

        <div className="mt-6 hidden h-px w-full bg-border lg:block" />
      </div>
    </section>
  )
}