import Hero from './sections/Hero'
import About from './sections/About'
import Collection from './sections/Collection'
import Cta from './sections/Cta'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <div className="relative bg-[#010828] text-cream overflow-x-hidden">
      <Hero />
      <About />
      <Collection />
      <Cta />
      <div className="texture-overlay" aria-hidden="true" />
    </div>
  )
}
