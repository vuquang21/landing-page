import { LazyVideo } from '../components/LazyVideo'

const NFTS = [
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    video:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
]

export default function Collection() {
  return (
    <section className="section-contain relative w-full bg-[#010828]">
      <div className="max-w-[1831px] mx-auto w-full px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-12 lg:mb-20">
          <h2 className="font-grotesk uppercase text-cream leading-[1] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px]">
            Collection of
            <br />
            <span className="inline-block ml-12 sm:ml-24 lg:ml-32">
              <span
                className="font-condiment text-neon normal-case mr-2 sm:mr-3 lg:mr-4"
                style={{ mixBlendMode: 'exclusion' }}
              >
                Space
              </span>
              <span className="font-grotesk">objects</span>
            </span>
          </h2>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-3">
              <span className="font-grotesk uppercase text-cream text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-none">
                SEE
              </span>
              <div className="flex flex-col justify-center leading-[1]">
                <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px]">
                  ALL
                </span>
                <span className="font-grotesk uppercase text-cream text-[20px] sm:text-[26px] md:text-[30px] lg:text-[36px]">
                  CREATORS
                </span>
              </div>
            </div>
            <div className="bg-neon w-full mt-3 h-[6px] sm:h-[8px] lg:h-[10px]" />
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFTS.map((nft, i) => (
            <div
              key={i}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="relative w-full pb-[100%] overflow-hidden rounded-[24px]">
                <LazyVideo
                  className="absolute inset-0 w-full h-full object-cover"
                  src={nft.video}
                />

                {/* Rarity overlay bar */}
                <div className="absolute left-3 right-3 bottom-3 liquid-glass rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-mono uppercase text-[11px] text-cream/70 tracking-wider">
                      RARITY SCORE:
                    </span>
                    <span className="font-grotesk text-cream text-[16px] uppercase tracking-wider">
                      {nft.score}
                    </span>
                  </div>

                  <button
                    aria-label="View NFT"
                    className="liquid-btn w-12 h-12"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
