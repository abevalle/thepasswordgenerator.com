import type { Metadata } from 'next'
import Footer from '../footer'

export const metadata: Metadata = {
  title: 'Terms of Service — The Password Generator',
  description:
    'The terms and conditions governing your use of The Password Generator: acceptable use, disclaimers, limitation of liability, and your responsibilities.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service — The Password Generator',
    description:
      'Terms governing your use of The Password Generator.',
    url: 'https://thepasswordgenerator.com/terms',
    type: 'website',
  },
}

export default function Terms() {
  const lastUpdated = 'May 17, 2026'

  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600 text-center">
          Terms of Service
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Last updated: {lastUpdated}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6 sm:p-10 prose prose-indigo dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using The Password Generator (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            The Password Generator is a free, client-side tool that generates passwords, passphrases, and easy memorable passwords entirely within your browser. The Service is provided at no cost and without registration.
          </p>

          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You are responsible for the secure storage and use of any password you generate using the Service.</li>
            <li>You are responsible for selecting password options appropriate to your security needs.</li>
            <li>You agree not to use the Service for any unlawful purpose, including unauthorized access to systems you do not have permission to use.</li>
            <li>You acknowledge that password security depends on factors outside our control, including the strength of the surrounding authentication system, your operating environment, and how you store and use generated passwords.</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>
            You may not:
          </p>
          <ul>
            <li>Use automated tools to scrape, mirror, or republish the Service.</li>
            <li>Interfere with or attempt to disrupt the Service or its underlying infrastructure.</li>
            <li>Use the Service in connection with any activity that violates applicable law.</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All text, branding, and source code on this site are owned by us or licensed for use here, except where third-party licenses apply (font licenses, open-source libraries). You retain ownership of any passwords you generate — we make no claim to them.
          </p>

          <h2>6. Disclaimers</h2>
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. While we believe the Service produces strong passwords when used as intended, we do not warrant that any specific password will withstand a specific attack, that the Service will be uninterrupted, or that it will be free of defects.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE PASSWORD GENERATOR OR ITS OPERATORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICE — INCLUDING ANY UNAUTHORIZED ACCESS, LOSS, OR THEFT OF ACCOUNTS PROTECTED BY GENERATED PASSWORDS — EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2>8. Third-Party Services</h2>
          <p>
            The Service uses third-party providers (hosting, analytics, advertising) described in our <a href="/privacy">Privacy Policy</a>. We are not responsible for the privacy practices, terms, or content of any third-party site.
          </p>

          <h2>9. Privacy</h2>
          <p>
            Your privacy is important to us. See our <a href="/privacy">Privacy Policy</a> for details on what data we do and do not collect.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may modify these Terms at any time. The &ldquo;Last updated&rdquo; date at the top of the page reflects the latest revision. Your continued use of the Service after a change constitutes acceptance of the revised Terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of California, United States, without regard to its conflict-of-laws principles.
          </p>

          <h2>12. Contact</h2>
          <p>
            Questions about these Terms? See the <a href="/about">about page</a> or reach out at <a href="https://abevalle.com" target="_blank" rel="noopener noreferrer">abevalle.com</a>.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  )
}
