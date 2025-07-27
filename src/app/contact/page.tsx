"use client"

export default function Contact() {
  return (
    <main className="min-w-screen min-h-screen">
      <div className="mesh-gradient"></div>
      <section className="content">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="glass-card p-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About The Password Generator
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">The Story Behind The Password Generator</h2>
                <p>
                  ThePasswordGenerator.com was once a forgotten domain, lost in the digital graveyard of expired websites. 
                  Discovered at a domain auction, we saw an opportunity to breathe new life into this perfectly-named domain 
                  and transform it into something useful for the internet community.
                </p>
                <p>
                  Today, this revived domain serves a vital purpose: providing a free, secure, and accessible tool for 
                  generating strong passwords. We believe every good domain deserves a second chance to make a positive 
                  impact on the web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">How It Works</h2>
                <p>
                  The Password Generator uses cryptographically secure random number generation to create truly random passwords:
                </p>
                <ul className="list-disc ml-6 space-y-2 mt-3">
                  <li><strong>Client-Side Generation:</strong> All passwords are generated locally in your browser using the Web Crypto API</li>
                  <li><strong>crypto.getRandomValues():</strong> We use this secure method to ensure true randomness, not predictable patterns</li>
                  <li><strong>Zero Server Contact:</strong> Your passwords never leave your device - we can't see, store, or log them</li>
                  <li><strong>Customizable Options:</strong> Choose your character sets, length, and exclude ambiguous characters as needed</li>
                </ul>
                <p className="mt-3">
                  This approach ensures that your passwords are as secure as possible, generated with the same randomness 
                  standards used by security professionals worldwide.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Technical Details</h2>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <ul className="space-y-2">
                    <li>✓ Built with Next.js 14 and TypeScript for modern performance</li>
                    <li>✓ Uses Web Crypto API for cryptographically secure randomness</li>
                    <li>✓ Fully client-side - no server processing or storage</li>
                    <li>✓ Open source and transparent codebase</li>
                    <li>✓ Mobile-responsive design for use anywhere</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Security & Privacy</h2>
                <p>
                  Your security is our top priority. We've designed this tool with privacy in mind:
                </p>
                <ul className="list-disc ml-6 space-y-2 mt-3">
                  <li>No passwords are ever transmitted to our servers</li>
                  <li>No tracking of generated passwords</li>
                  <li>No required sign-ups or personal information</li>
                  <li>Minimal analytics only for site improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
                <p>
                  Questions or feedback about The Password Generator? We'd love to hear from you.
                </p>
                <div className="mt-4">
                  <p className="text-sm text-gray-400">
                    This project is maintained by <a href="https://abevalle.com/" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">AbeValle</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}