import { HudFrame } from "@/components/ui/hud-frame"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { dossiers } from "@/data/content"

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  )
}

export function Operations() {
  return (
    <section
      id="operations"
      className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16"
    >
      {/* Section Identity */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="flex items-start gap-4 lg:block">
          <div className="mb-4 text-text-dim">
            <TargetIcon />
          </div>

          <div>
            <div className="font-display text-5xl leading-none tracking-tight text-text/20 lg:text-7xl">
              01
            </div>

            <span className="mt-3 block text-xs tracking-[0.15em] text-text-dim uppercase before:content-['//_']">
              Field Operations
            </span>

            <h2 className="mt-2 text-3xl font-semibold">
              Case Files
            </h2>
          </div>
        </div>

        <div className="mt-6 hidden h-px w-full bg-border lg:block" />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <Carousel>
          <CarouselContent>
            {dossiers.map((d) => (
              <CarouselItem key={d.caseNo}>
                <HudFrame className="h-full p-6 md:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xl font-semibold tracking-wide">
                        {d.codename}
                      </div>

                      <div className="text-xs text-text-dim">
                        CASE NO. {d.caseNo} — {d.designation}
                      </div>
                    </div>

                    <span
                      className={
                        "shrink-0 border px-2 py-0.5 text-[0.65rem] tracking-wider uppercase " +
                        (d.status === "deployed"
                          ? "border-accent text-accent"
                          : "border-border text-text-dim")
                      }
                    >
                      {d.status}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-text">
                    {d.brief}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {d.equipment.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2 py-0.5 text-[0.7rem] text-text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={d.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-block text-sm text-accent transition-colors hover:text-text after:content-['_→']"
                  >
                    {d.status === "archived"
                      ? "View source code"
                      : "View case file"}
                  </a>
                </HudFrame>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-6 flex gap-3">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}