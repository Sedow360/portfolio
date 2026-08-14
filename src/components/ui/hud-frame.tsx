import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

export function HudFrame({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "group relative border border-border bg-panel transition-colors",
        "hover:border-border-strong",
        className
      )}
    >
      <Corner
        className="top-0 left-0"
        flip="left"
      />

      <Corner
        className="top-0 right-0"
        flip="right"
      />

      <Corner
        className="bottom-0 left-0"
        flip="left"
        bottom
      />

      <Corner
        className="bottom-0 right-0"
        flip="right"
        bottom
      />

      {children}
    </div>
  )
}

function Corner({
  className,
  flip,
  bottom,
}: {
  className: string
  flip: "left" | "right"
  bottom?: boolean
}) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute h-3.5 w-3.5 border-accent-dim opacity-70",
        "transition-colors group-hover:border-accent group-hover:opacity-100",
        flip === "left" ? "border-l-2" : "border-r-2",
        bottom ? "border-b-2" : "border-t-2",
        className
      )}
    />
  )
}