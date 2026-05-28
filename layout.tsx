import type { Metadata } from 'next'
import { Righteous, Creepster } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const righteous = Righteous({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-righteous',
})

const creepster = Creepster({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-creepster',
})

export const metadata: Metadata = {
  title: 'Aviryx | $AVX',
  description: 'Enter the world of Aviryx — Skull-crowned Spirit of the Chain. Meme-born, lore-fueled, and community-owned.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${righteous.variable} ${creepster.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
