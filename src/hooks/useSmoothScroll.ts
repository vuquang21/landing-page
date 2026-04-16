import { useEffect } from 'react'
import Lenis from 'lenis'

type LenisOptions = ConstructorParameters<typeof Lenis>[0]

/**
 * Drives Lenis off a single requestAnimationFrame loop.
 * Disables itself for users with prefers-reduced-motion and on touch devices
 * (iOS/Android momentum scroll is already smoother than any JS library).
 */
export function useSmoothScroll(options?: LenisOptions) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReducedMotion || isTouch) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      ...options,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [options])
}
