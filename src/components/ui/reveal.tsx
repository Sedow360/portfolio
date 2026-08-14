import { useInView } from "@/lib/useInView"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
    >
      {children}
    </div>
  )
}