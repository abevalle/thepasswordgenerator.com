"use client"

export default function Privacy() {
  return (
    <main className="min-w-screen min-h-screen">
      <div className="mesh-gradient"></div>
      <section className="content">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="glass-card p-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <p className="text-lg mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Information We Collect</h2>
                <p>
                  The Password Generator operates entirely in your browser. We do not collect, store, or transmit any passwords you generate. 
                  The only data we collect is anonymous analytics information to improve our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Analytics</h2>
                <p>
                  We use Google Analytics to understand how visitors use our site. This includes:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Pages visited and time spent on site</li>
                  <li>General location (country/region)</li>
                  <li>Device and browser information</li>
                  <li>Referral sources</li>
                </ul>
                <p>
                  No personally identifiable information is collected. You can opt-out of analytics tracking by using browser settings or ad blockers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Cookies</h2>
                <p>
                  Our site may use cookies for analytics purposes only. No personal data is stored in cookies. 
                  You can disable cookies in your browser settings without affecting the password generator functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Third-Party Services</h2>
                <p>
                  We use Google Analytics for website analytics. Please review Google&apos;s Privacy Policy for information about their data practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Data Security</h2>
                <p>
                  All password generation occurs locally in your browser using cryptographically secure random number generation. 
                  No passwords are ever transmitted to our servers or stored anywhere.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Changes to Privacy Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Changes will be posted on this page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
                <p>
                  If you have questions about this privacy policy, please contact us at: 
                  <a href="https://abevalle.com/" className="text-purple-400 hover:text-purple-300 ml-1">
                    abevalle.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}