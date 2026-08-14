import { useEffect, useRef, useState } from "react"

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //   setInView(true)
    //   return
    // }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // reveal once, don't re-trigger on scroll up
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}