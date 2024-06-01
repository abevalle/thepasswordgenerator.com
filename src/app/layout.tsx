import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Password Generator - Secure & Random Passwords',
  description: 'Generate secure, random passwords with The Password Generator. Enhance your online security with strong, unique passwords.',
  keywords: 'password generator, passwords, security, strong passwords, random passwords, online security',
  author: 'The Password Generator Team',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    type: 'website',
    url: 'https://thepasswordgenerator.com',
    title: 'The Password Generator - Secure & Random Passwords',
    description: 'Generate secure, random passwords with The Password Generator. Enhance your online security with strong, unique passwords.',
    images: [{
      url: 'https://thepasswordgenerator.com/path/to/your/image.jpg',
      width: 800,
      height: 600,
      alt: 'The Password Generator',
    }],
    siteName: 'The Password Generator',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://thepasswordgenerator.com',
    title: 'The Password Generator - Secure & Random Passwords',
    description: 'Generate secure, random passwords with The Password Generator. Enhance your online security with strong, unique passwords.',
    image: 'https://thepasswordgenerator.com/path/to/your/image.jpg',
    site: '@your_twitter_handle',
    creator: '@your_twitter_handle',
  },
  canonical: 'https://thepasswordgenerator.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script id="423h4j" async src="https://www.googletagmanager.com/gtag/js?id=G-4HNF0DRJMG"></Script>
      <Script id="3j42l3h">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4HNF0DRJMG');`}
      </Script>
    </html>
  )
}
