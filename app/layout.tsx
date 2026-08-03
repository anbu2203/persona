import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Rajdhani, Share_Tech_Mono } from 'next/font/google'
import './globals.css'
import './portfolio.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const techMono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tech-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://v0-anbumathi-chezhian-2203.vercel.app'),
  alternates: {
    canonical: '/',
  },
  title: 'Anbumathi Chezhian | Electronics & IoT Developer',
  description:
    'Portfolio of Anbumathi Chezhian — Electronics & IoT project developer building end-to-end connected systems, from sensor to cloud.',
  generator: 'v0.app',
  keywords: [
    'Anbumathi Chezhian',
    'IoT Developer',
    'Electronics',
    'Embedded Systems',
    'ESP32',
    'Arduino',
    'PCB Design',
    'Portfolio',
  ],
  authors: [{ name: 'Anbumathi Chezhian' }],
  openGraph: {
    title: 'Anbumathi Chezhian | Electronics & IoT Developer',
    description:
      'Building the connected world, one circuit at a time — IoT, embedded systems, and electronics innovation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080b10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`portfolio-root ${inter.variable} ${rajdhani.variable} ${techMono.variable}`}
    >
      <body className="portfolio-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
