import type { Metadata } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { I18nProvider } from '@/components/layout/I18nProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mantaray - We Build Products That Scale',
  description: 'From MVP to enterprise, Mantaray delivers exceptional digital products with a 14-day timeline guarantee.',
  keywords: ['web development', 'MVP', 'startup', 'enterprise', 'UI/UX design'],
  authors: [{ name: 'Mantaray' }],
  openGraph: {
    title: 'Mantaray - We Build Products That Scale',
    description: 'From MVP to enterprise, Mantaray delivers exceptional digital products.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${notoSansArabic.variable}`}
      >
        <ThemeProvider>
          <I18nProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
