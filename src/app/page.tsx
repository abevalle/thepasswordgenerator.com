"use client"

import CreateForm from "./CreateForm"
import Footer from "./footer"
import Script from "next/script"

const FAQS: { q: string; a: string }[] = [
  {
    q: "Is this password generator really free?",
    a: "Yes. The Password Generator is 100% free with no signup, no paywall, and no limits. We support the site through unobtrusive ads and donations.",
  },
  {
    q: "Do my passwords ever leave my browser?",
    a: "No. All password and passphrase generation happens locally in your browser using JavaScript. Nothing is sent to a server. Even if you closed your network connection, the tool would still work.",
  },
  {
    q: "How secure are the passwords?",
    a: "Random-mode passwords use the browser's cryptographic random source where available. With all character sets enabled and 20+ characters, the resulting passwords have well over 120 bits of entropy — far beyond what's feasible to brute-force.",
  },
  {
    q: "What is the difference between Random, Passphrase, and Easy modes?",
    a: "Random mode produces high-entropy strings like 'J7$kPq2vXb!9' — best for password managers. Passphrase mode produces memorable strings like 'Happy-Tiger-Cloud-Robot-42' — best when you have to type a password. Easy mode produces short, kid-friendly passwords like 'happymonkey42' — best for children and beginners.",
  },
  {
    q: "What is leetspeak and is it secure?",
    a: "Leetspeak swaps common letters for numbers and symbols (a→@, e→3, i→1, o→0, s→$, t→7, l→1). It adds character variety and makes a short memorable password look stronger. Attackers know the substitution rules, so for true security combine leetspeak with longer passphrases or use Random mode.",
  },
  {
    q: "How long should my password be?",
    a: "For most accounts: 16+ random characters or a 4+ word passphrase. For accounts holding sensitive data (email, banking, crypto): 20+ random characters or 5+ word passphrases. Length matters more than complexity.",
  },
  {
    q: "Can I generate multiple passwords at once?",
    a: "Yes. Switch the Generation Mode toggle from Single to Batch and choose 10, 50, 100, or a custom count up to 1,000. You can then copy all to clipboard or download as a .txt file.",
  },
  {
    q: "Does the site work offline?",
    a: "Once loaded, the generator runs entirely in your browser, so you can disconnect your network and keep generating passwords. The page itself will still need to be loaded initially.",
  },
  {
    q: "Do you store, log, or transmit generated passwords?",
    a: "Never. We have no server-side password storage and no logging of generated passwords. Analytics tracks anonymous interaction events (e.g., mode changes) — never the passwords themselves.",
  },
]

const HOWTO_STEPS = [
  { title: "Pick a style", body: "Choose Random for maximum security, Passphrase for memorable strength, or Easy for short, child-friendly passwords." },
  { title: "Tune your options", body: "Adjust length, character sets, word count, separator, leetspeak, and other options to fit your use case." },
  { title: "Generate", body: "Click Generate Password — or switch to Batch mode to create up to 1,000 passwords at once." },
  { title: "Copy & use", body: "Click Copy to put the password on your clipboard, paste it into your password manager, and you're done." },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to generate a strong password",
  totalTime: "PT30S",
  step: HOWTO_STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
}

function TrustBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-800/50 backdrop-blur border border-gray-200/60 dark:border-gray-700/60 shadow-sm">
      <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-8 8a1 1 0 01-1.42 0l-4-4a1 1 0 011.42-1.42L8 12.585l7.29-7.295a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{children}</span>
    </div>
  )
}

function Check() {
  return (
    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
          Generate Strong Passwords Instantly
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Free in-browser password generator. Build cryptographically secure random passwords,
          memorable passphrases, or short easy-to-remember passwords. Your data never leaves your device.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          <TrustBadge>100% Browser-Based</TrustBadge>
          <TrustBadge>No Registration Required</TrustBadge>
          <TrustBadge>Zero Tracking of Passwords</TrustBadge>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CreateForm />
      </section>

      {/* Why Choose comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
          Why Choose The Password Generator?
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Most online password generators ship your password through a server, force you to sign up, or limit features. We don&apos;t.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 p-6 shadow-xl border border-gray-200/60 dark:border-gray-700/60">
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">The Password Generator</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-200">
              <li className="flex gap-3"><Check /><span><strong>100% client-side.</strong> Nothing transmitted, ever.</span></li>
              <li className="flex gap-3"><Check /><span><strong>Three modes:</strong> random, passphrase, and easy/leetspeak.</span></li>
              <li className="flex gap-3"><Check /><span><strong>Batch up to 1,000</strong> passwords in one click.</span></li>
              <li className="flex gap-3"><Check /><span><strong>No registration, no email.</strong> Open the page and go.</span></li>
              <li className="flex gap-3"><Check /><span><strong>Length up to 256</strong> characters with granular character set control.</span></li>
              <li className="flex gap-3"><Check /><span><strong>Memorable phrases</strong> like correct-horse-battery-staple style passphrases.</span></li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/40 backdrop-blur-lg dark:bg-gray-800/30 p-6 shadow-lg border border-gray-200/60 dark:border-gray-700/60">
            <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300 mb-4">Typical Online Generators</h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex gap-3"><Cross /><span>Generate on the server — your password traverses the internet.</span></li>
              <li className="flex gap-3"><Cross /><span>Only one mode, usually random characters with limited options.</span></li>
              <li className="flex gap-3"><Cross /><span>Batch generation hidden behind a sign-up wall.</span></li>
              <li className="flex gap-3"><Cross /><span>Pop-ups, paywalls, and email capture.</span></li>
              <li className="flex gap-3"><Cross /><span>Capped at 32 characters or fewer.</span></li>
              <li className="flex gap-3"><Cross /><span>No passphrase or memorable-password support.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* How To */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-3">
          How to Generate a Strong Password
        </h2>
        <h3 className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Four steps. Thirty seconds. No account.
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOWTO_STEPS.map((step, i) => {
            const isLast = i === HOWTO_STEPS.length - 1
            return (
              <div
                key={step.title}
                className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 p-6 shadow-xl border border-gray-200/60 dark:border-gray-700/60"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-3 ${
                    isLast ? "bg-green-500" : "bg-indigo-500"
                  }`}
                >
                  {i + 1}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Long-form SEO content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-indigo dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            What makes a password strong in 2026?
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            A <strong>strong password</strong> in 2026 has three properties: it is <strong>long</strong>, it is <strong>unique to a single account</strong>,
            and it is generated by a process that an attacker cannot predict. The single biggest factor is length. Modern
            password-cracking rigs blow through 8-character passwords in seconds; a 16-character random password takes longer than
            the age of the universe to brute-force at current GPU speeds. That&apos;s why our tool defaults to 32 characters in Random mode.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Random passwords vs. passphrases</h3>
          <p className="text-gray-700 dark:text-gray-300">
            A 16-character <strong>random password</strong> like <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm">J7$kPq2vXb!9wM4n</code> packs roughly 105 bits of entropy.
            A 4-word <strong>passphrase</strong> like <code className="px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800 font-mono text-sm">Happy-Tiger-Cloud-Robot</code> drawn from a 7,776-word list packs about 51 bits — strong enough for almost any account, and dramatically easier to type and remember. Passphrases are the right choice when you need to type a password on a TV, a console, or someone else&apos;s device.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">When to use easy mode (and when not to)</h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Easy mode</strong> generates short, memorable passwords — perfect for kids&apos; school accounts,
            family screen-time logins, or any low-stakes service where a person needs to actually type the password from memory.
            They are <strong>not</strong> appropriate for primary email, banking, or password-manager master passwords. Use Random or a long
            Passphrase for those.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">Why client-side generation matters</h3>
          <p className="text-gray-700 dark:text-gray-300">
            When a password generator runs on a remote server, you have to trust that the operator doesn&apos;t log requests,
            doesn&apos;t get breached, and isn&apos;t served from a hijacked CDN. <strong>Client-side generation</strong> eliminates that entire trust chain — the
            password is produced inside your browser&apos;s JavaScript runtime and is only ever in your computer&apos;s memory until you copy it. We do not run a backend; you can verify this in your browser&apos;s network tab.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12">Best practices we recommend</h2>
          <ul className="text-gray-700 dark:text-gray-300">
            <li><strong>Use a password manager.</strong> Generated passwords are only useful if you can store and recall them. 1Password, Bitwarden, KeePass, and the built-in managers in Firefox, Chrome, and Safari are all reasonable choices.</li>
            <li><strong>One password, one account.</strong> Reusing passwords across sites is the single biggest cause of account takeover.</li>
            <li><strong>Turn on 2FA everywhere it&apos;s offered.</strong> A leaked password is harmless if the attacker can&apos;t get the second factor.</li>
            <li><strong>Rotate after breach, not on a calendar.</strong> Forced quarterly rotation makes passwords weaker; rotate when you learn a service has been breached or you have any reason to suspect compromise.</li>
            <li><strong>Avoid personal information.</strong> Pet names, birthdays, kids&apos; names, and home addresses are the first things attackers try.</li>
          </ul>
        </article>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6"
            >
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer list-none flex justify-between items-center">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-indigo-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
