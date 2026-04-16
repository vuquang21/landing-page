import { Mail, Twitter, Github } from 'lucide-react'
import { LazyVideo } from '../components/LazyVideo'

const CTA_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4'

export default function Cta() {
  return (
    <section className="section-contain relative w-full bg-[#010828]">
      <div className="relative w-full">
        <LazyVideo
          className="w-full h-auto block"
          src={CTA_VIDEO}
        />

        {/* Text block (right-aligned) */}
        <div className="absolute inset-0 flex flex-col justify-center items-end lg:pr-[20%] lg:pl-[15%] px-5 sm:px-8">
          <div className="relative">
            <span
              className="font-condiment text-neon absolute -top-4 sm:-top-6 lg:-top-12 left-0 text-[17px] sm:text-[28px] md:text-[44px] lg:text-[68px] normal-case -rotate-1"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Go beyond
            </span>
            <h2 className="font-grotesk uppercase text-cream leading-[1] text-[16px] sm:text-[28px] md:text-[44px] lg:text-[60px] text-right">
              <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">JOIN US.</span>
              REVEAL WHAT&apos;S HIDDEN.
              <br />
              DEFINE WHAT&apos;S NEXT.
              <br />
              FOLLOW THE SIGNAL.
            </h2>
          </div>
        </div>

        {/* Social icons - bottom left */}
        <div className="absolute left-[8%] bottom-[12%] sm:bottom-[14%] md:bottom-[16%] lg:bottom-[20%]">
          <div className="liquid-glass rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem] flex flex-col overflow-hidden">
            {[Mail, Twitter, Github].map((Icon, i, arr) => (
              <button
                key={i}
                className={`w-[14vw] sm:w-[14.375rem] md:w-[10.78125rem] lg:w-[16.77rem] h-[8vw] sm:h-[5rem] md:h-[4rem] lg:h-[6rem] flex items-center justify-center text-cream hover:bg-white/10 transition-colors ${
                  i < arr.length - 1 ? 'border-b border-white/10' : ''
                }`}
                aria-label={['Mail', 'Twitter', 'Github'][i]}
              >
                <Icon size={22} strokeWidth={1.5} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
