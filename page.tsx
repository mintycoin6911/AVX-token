import { HeroSection } from "@/components/hero-section"
import { InfoCard } from "@/components/info-card"
import { LiveTracker } from "@/components/live-tracker"
import { CommunitySection } from "@/components/community-section"
import { Disclaimer } from "@/components/disclaimer"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AVIRYX%20COVER-fnIexsbWBh5CZ05iy1dAfTBn0ALcew.png')",
      }}
    >
      <div className="min-h-screen bg-black/70">
        <HeroSection />

        <main className="max-w-5xl mx-auto px-5 pb-16">
          {/* Top Grid - About, Tokenomics, Lore */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <InfoCard title="About">
              <p>
                Aviryx is a digital spirit born from lost chains — a
                skull-crowned guardian with neon wings. Meme-born, lore-fueled,
                and community-owned. Forged on Pump.fun, it doesn&apos;t chase
                moons — it flies past them.
              </p>
            </InfoCard>

            <InfoCard title="Tokenomics">
              <ul className="list-disc list-inside space-y-2">
                <li>Total Supply: 1,000,000,000 AVX</li>
                <li>0/0 Tax — 100% Community</li>
                <li>LP Burned / Contract Renounced</li>
                <li>Launched via Pump.fun</li>
              </ul>
            </InfoCard>

            <InfoCard title="Lore">
              <p>
                When data died, the bird rose — glitch-winged, bone-crowned. It
                guards the chain&apos;s skies and calls its sentinels to flight.
                The prophecy is simple: ascend.
              </p>
            </InfoCard>
          </div>

          {/* Live Tracker */}
          <div className="mt-5">
            <LiveTracker />
          </div>

          {/* Community */}
          <div className="mt-5">
            <CommunitySection />
          </div>

          {/* Disclaimer */}
          <Disclaimer />
        </main>

        <Footer />
      </div>
    </div>
  )
}
