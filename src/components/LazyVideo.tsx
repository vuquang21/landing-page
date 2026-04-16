import { memo, useEffect, useRef, useState } from 'react'

interface LazyVideoProps
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  src: string
  /** How early to begin loading before the element enters the viewport. */
  rootMargin?: string
}

/**
 * A <video> that:
 *  - Defers network + decode until near viewport (saves bandwidth & main-thread).
 *  - Pauses when scrolled off-screen (saves GPU + battery).
 *  - Promotes itself to its own compositor layer to decouple from page repaints.
 *
 * All 7 videos on this page would otherwise decode simultaneously on mount.
 */
function LazyVideoImpl({
  src,
  rootMargin = '250px',
  className = '',
  style,
  ...rest
}: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return

        if (entry.isIntersecting) {
          setLoaded(true)
          // If already loaded before, ensure playback resumes.
          if (el.readyState >= 2) el.play().catch(() => {})
        } else {
          if (!el.paused) el.pause()
        }
      },
      { rootMargin, threshold: 0.01 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      disableRemotePlayback
      className={className}
      style={{
        // Promote to own GPU layer; prevents scroll repaints.
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        ...style,
      }}
      {...rest}
      src={loaded ? src : undefined}
    />
  )
}

export const LazyVideo = memo(LazyVideoImpl)
