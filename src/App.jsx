import { Hero } from "@/components/sections/Hero"
import { Operations } from "@/components/sections/Operations"
import { Loadout } from "@/components/sections/Loadout"
import { History } from "@/components/sections/History"
import { Extraction } from "@/components/sections/Extraction"
import { Reveal } from "@/components/ui/reveal"

function App() {
  return (
    <div id="top">
      <Hero />
      <Reveal><Operations /></Reveal>
      <Reveal><Loadout /></Reveal>
      <Reveal><History /></Reveal>
      <Reveal><Extraction /></Reveal>
    </div>
  )
}

export default App