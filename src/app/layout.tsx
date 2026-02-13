import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Trofi AgriTech | Agriculture Redefined',
  description:
    'Africa\'s premier agriculture intelligence platform. Explore policy tracking, trade statistics, post-harvest loss analysis, value chain analytics, and AI adoption insights across the continent.',
  keywords: [
    'Africa agriculture',
    'agricultural intelligence',
    'food security',
    'trade statistics',
    'post-harvest loss',
    'value chain',
    'AI in agriculture',
    'policy tracker',
    'Trofi AgriTech',
  ],
  authors: [{ name: 'Trofi AgriTech' }],
  openGraph: {
    title: 'Trofi AgriTech | Agriculture Redefined',
    description:
      'Africa\'s premier agriculture intelligence platform delivering data-driven insights to transform farming, trade, and food security across the continent.',
    url: 'https://trofi-agritech.org',
    siteName: 'Trofi AgriTech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trofi AgriTech | Agriculture Redefined',
    description:
      'Africa\'s premier agriculture intelligence platform delivering data-driven insights to transform farming, trade, and food security.',
  },
  metadataBase: new URL('https://trofi-agritech.org'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
