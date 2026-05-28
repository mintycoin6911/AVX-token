import Link from "next/link"
import { InfoCard } from "./info-card"

export function CommunitySection() {
  const links = [
    { name: "Twitter", href: "https://x.com/AviryxCoin" },
    { name: "Telegram", href: "https://t.me/AviryxNest" },
    { name: "Pump.fun", href: "https://pump.fun" },
  ]

  return (
    <InfoCard title="Community">
      <div className="flex flex-wrap gap-4 items-center">
        {links.map((link, index) => (
          <span key={link.name} className="flex items-center gap-4">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors underline underline-offset-4"
            >
              {link.name}
            </Link>
            {index < links.length - 1 && (
              <span className="text-muted-foreground">·</span>
            )}
          </span>
        ))}
      </div>
    </InfoCard>
  )
}
