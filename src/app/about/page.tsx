import type { Metadata } from 'next'
import Footer from '../footer'

export const metadata: Metadata = {
  title: 'About — The Password Generator',
  description:
    'The story behind The Password Generator: a privacy-first, client-side password tool built to give every visitor strong passwords without tracking, accounts, or paywalls.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — The Password Generator',
    description:
      'How and why The Password Generator was built: privacy-first, client-side, free forever.',
    url: 'https://thepasswordgenerator.com/about',
    type: 'website',
  },
}

const VALUES = [
  {
    title: 'Privacy by default',
    body: 'Every password is generated inside your browser. We have no backend that receives passwords and nothing to leak.',
  },
  {
    title: 'No accounts, no limits',
    body: 'No signup, no premium tier, no rate limits. Generate one password or a thousand — the tool works the same.',
  },
  {
    title: 'Strong by construction',
    body: 'Random mode uses the browser’s built-in random source. Passphrase and Easy modes draw from a curated word list with sensible defaults.',
  },
  {
    title: 'Built to last',
    body: 'A single-page tool with no dependencies on a remote backend means the site keeps working even when the rest of the internet goes sideways.',
  },
]

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600 text-center">
          About The Password Generator
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A free, in-browser password tool built around one simple idea: your passwords should never leave your device.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <article className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 p-6 sm:p-10 shadow-xl border border-gray-200/60 dark:border-gray-700/60 prose prose-indigo dark:prose-invert max-w-none">
          <h2>The story</h2>
          <p>
            <strong>thepasswordgenerator.com</strong> sat dormant for years — a perfectly descriptive domain quietly expiring in
            the digital graveyard. Picked up at auction, we set out to give it the simple, ad-light, privacy-respecting tool the
            name promises: a place anyone can land and walk away with a strong password in seconds.
          </p>

          <h2>How it works</h2>
          <p>
            All password and passphrase generation runs as JavaScript in your browser. Open your browser&apos;s DevTools network tab
            while generating a password and you will see no outbound request related to the password itself. The tool will keep
            working even after you disconnect your network. We have no server-side password storage and never could.
          </p>

          <h2>Three modes, one tool</h2>
          <ul>
            <li><strong>Random</strong> &mdash; high-entropy strings with full character-set control. Best for password managers.</li>
            <li><strong>Passphrase</strong> &mdash; memorable phrases like <code>Happy-Tiger-Cloud-Robot-42</code>. Best for passwords you have to type.</li>
            <li><strong>Easy</strong> &mdash; short, memorable passwords with optional leetspeak. Best for kids and low-stakes accounts.</li>
          </ul>

          <h2>How we&apos;re funded</h2>
          <p>
            The site is supported by unobtrusive ads and the occasional donation. There is no paid tier and no plan to introduce
            one. If you find the tool useful, the best thing you can do is share it.
          </p>

          <h2>Get in touch</h2>
          <p>
            Bug reports, feature requests, and general feedback are welcome. The project is maintained by{' '}
            <a href="https://abevalle.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              abevalle
            </a>
            . Use the contact form on abevalle.com to reach us directly.
          </p>
        </article>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">What we believe</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 p-6 shadow-xl border border-gray-200/60 dark:border-gray-700/60"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">{value.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
