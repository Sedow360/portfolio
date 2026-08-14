import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type CarouselApi = UseEmblaCarouselType[1]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) throw new Error("useCarousel must be used within a <Carousel />")
  return context
}

function Carousel({
  opts,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { opts?: CarouselOptions }) {
  const [carouselRef, api] = useEmblaCarousel({
    align: "start",
    ...opts,
  })
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)
    return () => {
      api?.off("select", onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{ carouselRef, api, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}
    >
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef } = useCarousel()
  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div className={cn("flex gap-6", className)} {...props} />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}
      {...props}
    />
  )
}

function CarouselPrevious({ className, ...props }: React.ComponentProps<"button">) {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <button
      type="button"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        "flex items-center gap-1 border border-border px-3 py-1.5 text-xs uppercase tracking-wider text-text-dim transition-colors hover:border-accent-dim hover:text-accent-dim disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-dim",
        className
      )}
      {...props}
    >
      <ArrowLeft className="size-3" /> Prev
    </button>
  )
}

function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <button
      type="button"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        "flex items-center gap-1 border border-border px-3 py-1.5 text-xs uppercase tracking-wider text-text-dim transition-colors hover:border-accent-dim hover:text-accent-dim disabled:opacity-30 disabled:hover:border-border disabled:hover:text-text-dim",
        className
      )}
      {...props}
    >
      Next <ArrowRight className="size-3" />
    </button>
  )
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }