import { Mail, Twitter, Github } from 'lucide-react'
import { LazyVideo } from '../components/LazyVideo'

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4'

const NAV_LINKS = ['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact']

const SocialButton = ({
  icon: Icon,
  label,
}: {
  icon: typeof Mail
  label: string
}) => (
  <button
    aria-label={label}
    className="liquid-glass rounded-[1rem] w-14 h-14 flex items-center justify-center text-cream hover:bg-white/10 transition-colors"
  >
    <Icon size={20} strokeWidth={1.5} />
  </button>
)

export default function Hero() {
  return (
    <section className="section-contain relative w-full min-h-screen overflow-hidden rounded-b-[32px]">
      {/* Video background */}
      <LazyVideo
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1831px] mx-auto w-full min-h-screen px-5 sm:px-8 lg:px-16 py-6 sm:py-8 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between w-full">
          <div className="font-grotesk text-cream text-[16px] uppercase tracking-wide">
            Orbis.Nft
          </div>

          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-grotesk text-[13px] uppercase tracking-wider text-cream hover:text-neon transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Spacer to balance layout on desktop */}
          <div className="w-[96px] hidden lg:block" />
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex items-center relative mt-12 lg:mt-20">
          <div className="w-full relative">
            <h1 className="font-grotesk uppercase text-cream leading-[1.05] sm:leading-[1] text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] max-w-[780px] lg:ml-32">
              Beyond earth
              <br />
              and ( its ) familiar boundaries
            </h1>

            <span className="font-condiment text-neon absolute right-2 sm:right-6 lg:right-24 top-6 sm:top-10 lg:top-12 text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] -rotate-1 opacity-90 normal-case"
              style={{ mixBlendMode: 'exclusion' }}
            >
              Nft collection
            </span>
          </div>

          {/* Desktop social icons */}
          <div className="hidden lg:flex absolute right-0 top-0 flex-col gap-3">
            <SocialButton icon={Mail} label="Email" />
            <SocialButton icon={Twitter} label="Twitter" />
            <SocialButton icon={Github} label="Github" />
          </div>
        </div>

        {/* Mobile social icons */}
        <div className="flex lg:hidden justify-center gap-3 pb-10 pt-6">
          <SocialButton icon={Mail} label="Email" />
          <SocialButton icon={Twitter} label="Twitter" />
          <SocialButton icon={Github} label="Github" />
        </div>
      </div>
    </section>
  )
}
