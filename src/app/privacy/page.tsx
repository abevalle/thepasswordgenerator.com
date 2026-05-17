import type { Metadata } from 'next'
import Footer from '../footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — The Password Generator',
  description:
    'How The Password Generator handles your data. Local-only password generation, anonymous analytics, GDPR and CCPA rights, third-party services, and our data retention practices.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy — The Password Generator',
    description:
      'The Password Generator runs entirely in your browser. Learn exactly what data we collect (and what we don\'t), and your rights under GDPR and CCPA.',
    url: 'https://thepasswordgenerator.com/privacy',
    type: 'website',
  },
}

export default function Privacy() {
  const lastUpdated = 'May 17, 2026'

  return (
    <main className="min-h-screen">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600 text-center">
          Privacy Policy
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Last updated: {lastUpdated}
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <article className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 shadow-xl border border-gray-200/60 dark:border-gray-700/60 p-6 sm:p-10 prose prose-indigo dark:prose-invert max-w-none">
          <h2>The TL;DR</h2>
          <p>
            <strong>The Password Generator (&ldquo;we&rdquo;, &ldquo;our&rdquo;, the &ldquo;Service&rdquo;) runs entirely in your browser.</strong> We do not see, store, log, or transmit
            any password or passphrase you generate. The only data we collect is anonymous usage analytics about how the site itself is used. This page explains that in detail and describes your rights under GDPR, CCPA, and similar laws.
          </p>

          <h2>1. Information We Do Not Collect</h2>
          <p>
            We do <strong>not</strong> collect any of the following:
          </p>
          <ul>
            <li>Generated passwords, passphrases, or any output of the tool.</li>
            <li>Inputs you give to the tool (length sliders, mode selections at the password level, character toggles).</li>
            <li>Names, email addresses, phone numbers, or any contact information unless you voluntarily submit them through our contact form.</li>
            <li>Payment information of any kind. We have no paid features.</li>
            <li>Account credentials. We have no accounts.</li>
          </ul>
          <p>
            Password and passphrase generation happens in your browser using JavaScript and the browser&apos;s built-in random source. You can verify this by opening your browser&apos;s developer tools network tab while generating a password — you will see no outbound requests carrying that data.
          </p>

          <h2>2. Information We Do Collect</h2>
          <h3>2.1 Anonymous Usage Analytics</h3>
          <p>
            We use Google Analytics 4 (GA4) to understand how visitors find and use the site, so we can prioritize features and fix bugs. GA4 stores:
          </p>
          <ul>
            <li>Anonymous interaction events such as &ldquo;changed mode to passphrase&rdquo; or &ldquo;clicked generate&rdquo; — never the password itself.</li>
            <li>Pages visited and approximate time on page.</li>
            <li>Country and approximate region derived from IP address (IP is anonymized by GA4 before storage).</li>
            <li>Device type, browser, and operating system.</li>
            <li>Referring page (e.g., a search engine or another site that linked to us).</li>
          </ul>
          <p>
            We do not enable Google Signals, advertising features, or any cross-site identity linking inside GA4. You can opt out at any time by installing the official <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>, by using a privacy-focused browser, or by enabling browser tracking protection.
          </p>

          <h3>2.2 Approximate Geographic Location</h3>
          <p>
            Our hosting platform (Vercel) detects the country your request originates from at the edge and stores it in a short-lived cookie (24 hours) so we can show region-appropriate content (such as legal notices required by your jurisdiction). The country code never identifies you personally and is derived from your IP address without ever exposing the IP to our application code.
          </p>

          <h3>2.3 Contact Form Submissions</h3>
          <p>
            If you choose to use the contact form, we will receive the email address and message you provide. This information is used only to reply to your inquiry. We do not add contact form submissions to a mailing list.
          </p>

          <h2>3. Cookies and Local Storage</h2>
          <p>
            We use the following client-side storage:
          </p>
          <ul>
            <li><strong>Analytics cookies</strong> set by Google Analytics. These contain a random identifier that lets GA4 distinguish unique visitors. They contain no personal information and you can block them at the browser level.</li>
            <li><strong>A <code>geo</code> cookie</strong> containing a two-letter country code, set on first visit and expiring after 24 hours.</li>
            <li><strong>No local storage of passwords.</strong> The tool does not write generated passwords to <code>localStorage</code>, <code>sessionStorage</code>, IndexedDB, or any other client-side store.</li>
          </ul>

          <h2>4. Third Parties</h2>
          <p>
            The Service uses a small number of third-party services. Each has its own privacy policy.
          </p>
          <ul>
            <li><strong>Google Analytics</strong> — anonymous usage analytics. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s privacy policy</a>.</li>
            <li><strong>Google AdSense</strong> (if/when displayed) — contextual advertising. See Google&apos;s privacy policy.</li>
            <li><strong>Vercel</strong> — our hosting provider. Vercel processes requests on our behalf and may log standard request metadata (IP, user agent, URL, timestamp) for security and reliability purposes. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s privacy policy</a>.</li>
            <li><strong>Google Fonts</strong> — we self-host fonts through Next.js where possible to avoid sending requests to Google&apos;s font CDN.</li>
          </ul>

          <h2>5. Your Rights Under GDPR (EU/UK Users)</h2>
          <p>
            If you are located in the European Economic Area or the United Kingdom, you have the following rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul>
            <li><strong>Right of access</strong> — request a copy of the personal data we hold about you.</li>
            <li><strong>Right to rectification</strong> — request correction of inaccurate personal data.</li>
            <li><strong>Right to erasure</strong> (&ldquo;right to be forgotten&rdquo;) — request deletion of your personal data.</li>
            <li><strong>Right to restrict processing</strong> — request that we limit how we use your data.</li>
            <li><strong>Right to data portability</strong> — receive your data in a machine-readable format.</li>
            <li><strong>Right to object</strong> — object to processing based on legitimate interests, including direct marketing.</li>
            <li><strong>Right to withdraw consent</strong> — where processing is based on consent, withdraw that consent at any time.</li>
            <li><strong>Right to lodge a complaint</strong> — with your local data protection supervisory authority.</li>
          </ul>
          <p>
            Because we do not collect personal information beyond what is described above, most rights requests will return little or no data. To exercise any of these rights, contact us through the contact form.
          </p>

          <h2>6. Your Rights Under CCPA (California Users)</h2>
          <p>
            If you are a California resident, the California Consumer Privacy Act (CCPA) and CPRA give you the following rights:
          </p>
          <ul>
            <li><strong>Right to know</strong> what categories of personal information we collect, why, and with whom we share it (described above).</li>
            <li><strong>Right to delete</strong> personal information we collect about you, subject to certain exceptions.</li>
            <li><strong>Right to correct</strong> inaccurate personal information.</li>
            <li><strong>Right to opt out of the sale or sharing</strong> of personal information. <strong>We do not sell personal information.</strong></li>
            <li><strong>Right to limit use of sensitive personal information.</strong> We do not collect sensitive personal information as defined by the CCPA.</li>
            <li><strong>Right to non-discrimination</strong> for exercising any of these rights.</li>
          </ul>

          <h2>7. Data Retention</h2>
          <p>
            We retain anonymous analytics data for the default Google Analytics retention period (currently 14 months). Contact form messages are retained only as long as needed to handle the inquiry, typically less than 90 days. The <code>geo</code> cookie expires after 24 hours.
          </p>

          <h2>8. Security</h2>
          <p>
            The Service is delivered over HTTPS. Because all sensitive processing happens client-side, our attack surface is small — we have no database of passwords to leak. However, no service can guarantee absolute security against all attacks on the underlying browser, operating system, or network.
          </p>

          <h2>9. Children&apos;s Privacy</h2>
          <p>
            The Service is intended for general audiences and is safe for children to use, but we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information through the contact form, please contact us and we will delete it.
          </p>

          <h2>10. International Data Transfers</h2>
          <p>
            Our hosting and analytics providers may process data in the United States and other jurisdictions. By using the Service, you understand that your data may be transferred to and processed in countries other than your own. We rely on the providers&apos; standard contractual clauses and other transfer mechanisms required by GDPR and similar laws.
          </p>

          <h2>11. Do Not Track</h2>
          <p>
            We honor the browser-level Global Privacy Control (GPC) signal where supported. The site does not implement personalized advertising or cross-site tracking.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of the page will reflect the most recent revision. Material changes will also be noted on the homepage.
          </p>

          <h2>13. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or want to exercise any of the rights described above, please see the <a href="/about">about page</a> or reach out at <a href="https://abevalle.com" target="_blank" rel="noopener noreferrer">abevalle.com</a>.
          </p>
        </article>
      </section>

      <Footer />
    </main>
  )
}
