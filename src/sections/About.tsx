import { LazyVideo } from '../components/LazyVideo'

const ABOUT_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4'

const DESCRIPTION =
  'A digital object fixed beyond time and place. An exploration of distance, form, and silence in space'

export default function About() {
  return (
    <section className="section-contain relative w-full min-h-screen overflow-hidden">
      {/* Video background */}
      <LazyVideo
        className="absolute inset-0 w-full h-full object-cover"
        src={ABOUT_VIDEO}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1831px] mx-auto w-full min-h-screen px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24 flex flex-col justify-between">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start justify-between gap-10 lg:gap-20">
          <div className="relative">
            <h2 className="font-grotesk uppercase text-cream leading-[1] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
              Hello!
              <br />
              I&apos;m orbis
            </h2>
            <span
              className="font-condiment text-neon absolute right-[-40px] sm:right-[-60px] lg:right-[-80px] bottom-[-6px] lg:bottom-[-10px] text-[36px] sm:text-[46px] md:text-[56px] lg:text-[68px] -rotate-2 opacity-90 normal-case"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Orbis
            </span>
          </div>

          <p className="font-mono uppercase text-cream text-[14px] sm:text-[15px] lg:text-[16px] max-w-[266px] leading-relaxed">
            {DESCRIPTION}
          </p>
        </div>

        {/* Bottom row */}
        <div className="flex flex-row items-end justify-between gap-10 mt-20 lg:mt-0">
          <div className="flex flex-col gap-6">
            <p className="font-mono uppercase text-[14px] sm:text-[15px] lg:text-[16px] max-w-[266px] leading-relaxed opacity-10 text-cream max-lg:text-[#010828] max-lg:opacity-100">
              {DESCRIPTION}
            </p>
            <p className="font-mono uppercase text-[14px] sm:text-[15px] lg:text-[16px] max-w-[266px] leading-relaxed opacity-10 text-cream max-lg:text-[#010828] max-lg:opacity-100">
              {DESCRIPTION}
            </p>
          </div>

          <div className="hidden lg:flex flex-col gap-6">
            <p className="font-mono uppercase text-[16px] max-w-[266px] leading-relaxed opacity-10 text-cream">
              {DESCRIPTION}
            </p>
            <p className="font-mono uppercase text-[16px] max-w-[266px] leading-relaxed opacity-10 text-cream">
              {DESCRIPTION}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
