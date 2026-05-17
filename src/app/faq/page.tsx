import type { Metadata } from 'next'
import Script from 'next/script'
import Footer from '../footer'

export const metadata: Metadata = {
  title: 'FAQ — The Password Generator',
  description:
    'Answers to the most common questions about The Password Generator: how secure passwords are, why generation happens in your browser, how passphrase and easy modes differ, and more.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — The Password Generator',
    description:
      'Common questions about The Password Generator answered: privacy, security, passphrase vs random, leetspeak, batch generation, and more.',
    url: 'https://thepasswordgenerator.com/faq',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'Is The Password Generator really free?',
    a: 'Yes, completely. There is no signup, no paywall, no premium tier, and no upsell. The site is supported by unobtrusive ads and the occasional donation.',
  },
  {
    q: 'Do my generated passwords leave my browser?',
    a: 'No. All password generation runs in JavaScript inside your browser. We have no backend that receives passwords. You can verify this by opening your browser DevTools network tab while generating a password — there will be no outbound request related to the password itself.',
  },
  {
    q: 'How random are the passwords?',
    a: 'Random-mode passwords use the browser\'s built-in random source. With all character sets enabled at the default 32-character length, the resulting password has roughly 200 bits of entropy — orders of magnitude beyond brute-force feasibility on current and foreseeable hardware.',
  },
  {
    q: 'What is a passphrase and why would I use one?',
    a: 'A passphrase is a sequence of common words separated by a delimiter — for example, "Happy-Tiger-Cloud-Robot". Passphrases are easier to type, easier to remember, and still very strong because their entropy grows with the size of the word list and the number of words. Use a passphrase whenever you have to type a password yourself rather than pasting it from a password manager.',
  },
  {
    q: 'What is Easy mode for?',
    a: 'Easy mode produces short, memorable passwords like "happymonkey42" — perfect for kids, classroom logins, and other low-stakes accounts where typeability matters more than maximum security. You can optionally enable leetspeak to swap letters for numbers and symbols.',
  },
  {
    q: 'How does leetspeak work in this tool?',
    a: 'When leetspeak is enabled in Easy mode, common letters get swapped: a→@, e→3, i→1, o→0, s→$, t→7, l→1. The result looks like "h@ppym0nk3y42". Note that attackers know these substitution rules, so leetspeak alone does not make a password secure — length is what matters.',
  },
  {
    q: 'How long should my password be?',
    a: 'For typical accounts: 16+ random characters or 4+ word passphrases. For high-value accounts (primary email, banking, crypto, password-manager master): 20+ random characters or 5+ word passphrases. Length matters far more than complexity.',
  },
  {
    q: 'Can I generate many passwords at once?',
    a: 'Yes. Toggle Generation Mode from Single to Batch, pick a count (10, 50, 100, or any custom number up to 1,000), and click Generate. You can then Copy All to clipboard or Download as a .txt file.',
  },
  {
    q: 'Why are some characters excluded by default?',
    a: 'The Avoid Ambiguous Characters option removes characters that look alike across common fonts: 0/O, 1/l/I. This reduces typos when a password has to be transcribed by hand.',
  },
  {
    q: 'Do you store or log generated passwords?',
    a: 'No. We do not store, log, or transmit generated passwords. Anonymous analytics record interaction events (e.g., "user changed mode to passphrase"), never the password content.',
  },
  {
    q: 'Does the site work offline?',
    a: 'Once loaded, password generation runs entirely in your browser. You can disconnect your network and keep generating passwords. The site itself does need to be initially loaded online.',
  },
  {
    q: 'I have a feature request or bug report. How do I reach you?',
    a: 'Use the contact form linked in the footer. Bug reports with steps to reproduce are very welcome.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <Script
        id="faq-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600 text-center">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Everything you might want to know about generating passwords safely in your browser.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6"
            >
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center gap-4">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-indigo-500 transition-transform group-open:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
