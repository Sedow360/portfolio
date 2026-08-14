import { useEffect, useRef, useState } from "react"

export function useTypewriter(lines: string[], { speed = 35, pause = 900 } = {}) {
  const [display, setDisplay] = useState("")
  const indexRef = useRef({ line: 0, char: 0, deleting: false })

  useEffect(() => {
    // if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    //   setDisplay(lines[0] ?? "")
    //   return
    // }

    let timeout: ReturnType<typeof setTimeout>

    function tick() {
      const state = indexRef.current
      const currentLine = lines[state.line]

      if (!state.deleting) {
        state.char++
        setDisplay(currentLine.slice(0, state.char))
        if (state.char >= currentLine.length) {
          state.deleting = true
          timeout = setTimeout(tick, pause)
          return
        }
        timeout = setTimeout(tick, speed)
      } else {
        state.char--
        setDisplay(currentLine.slice(0, state.char))
        if (state.char <= 0) {
          state.deleting = false
          state.line = (state.line + 1) % lines.length
          timeout = setTimeout(tick, 400)
          return
        }
        timeout = setTimeout(tick, speed / 2)
      }
    }

    timeout = setTimeout(tick, speed)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return display
}