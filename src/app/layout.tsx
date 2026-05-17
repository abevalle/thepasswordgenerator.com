import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Script from 'next/script'
import Nav from './Nav'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://thepasswordgenerator.com'),
  title: {
    default: 'The Password Generator — Secure Random Passwords & Passphrases',
    template: '%s | The Password Generator',
  },
  description:
    'Generate cryptographically strong passwords, memorable passphrases, and short easy-to-remember passwords entirely in your browser. No tracking, no upload, no limits.',
  keywords: [
    'password generator',
    'secure password',
    'random password',
    'passphrase generator',
    'memorable password',
    'leetspeak password',
    'strong password',
    'free password generator',
    'browser password generator',
    'private password generator',
  ],
  authors: [{ name: 'AbeValle', url: 'https://abevalle.com' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://thepasswordgenerator.com',
    title: 'The Password Generator — Secure Random Passwords & Passphrases',
    description:
      'Free in-browser password generator. Build secure random passwords, memorable passphrases, and short easy passwords. 100% client-side. No data leaves your device.',
    siteName: 'The Password Generator',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Password Generator — Secure Random Passwords & Passphrases',
    description:
      'Free in-browser password generator. Cryptographically strong. No tracking. No upload.',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366F1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gradient-to-br from-indigo-50 to-rose-50 dark:from-gray-900 dark:to-gray-800 min-h-screen text-gray-900 dark:text-gray-100`}
      >
        <Nav />
        <div className="pt-20">{children}</div>
        <Script
          id="ga-loader"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4HNF0DRJMG"
        />
        <Script id="ga-init">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4HNF0DRJMG');`}
        </Script>
      </body>
    </html>
  )
}
