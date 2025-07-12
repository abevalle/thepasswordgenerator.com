"use client"

export default function Contact() {
  return (
    <main className="min-w-screen min-h-screen">
      <div className="mesh-gradient"></div>
      <section className="content">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="glass-card p-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Contact & About
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">About The Password Generator</h2>
                <p>
                  The Password Generator is a free, open-source tool designed to help users create cryptographically secure passwords. 
                  Our mission is to improve online security by making strong password generation accessible to everyone.
                </p>
                <p>
                  All password generation happens locally in your browser using secure random number generation. 
                  We never see, store, or transmit your passwords - your security is our priority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Website Owner</h2>
                <p>
                  This website is owned and operated by AbeValle, a software developer focused on creating 
                  useful security and productivity tools.
                </p>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <p className="mb-2"><strong>Owner:</strong> AbeValle</p>
                  <p className="mb-2"><strong>Website:</strong> 
                    <a href="https://abevalle.com/" className="text-purple-400 hover:text-purple-300 ml-1" target="_blank" rel="noopener noreferrer">
                      abevalle.com
                    </a>
                  </p>
                  <p><strong>Location:</strong> United States</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
                <p>
                  For questions, feedback, or support regarding The Password Generator, please visit:
                </p>
                <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <a 
                    href="https://abevalle.com/" 
                    className="text-purple-400 hover:text-purple-300 text-lg font-medium"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Contact via abevalle.com →
                  </a>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Technical Information</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Built with Next.js and TypeScript</li>
                  <li>Uses crypto.getRandomValues() for secure randomness</li>
                  <li>Client-side only - no server processing of passwords</li>
                  <li>Open source and transparent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Security & Privacy</h2>
                <p>
                  We take your privacy seriously. Please review our 
                  <a href="/privacy" className="text-purple-400 hover:text-purple-300 mx-1">Privacy Policy</a>
                  and 
                  <a href="/terms" className="text-purple-400 hover:text-purple-300 mx-1">Terms of Service</a>
                  for detailed information about how we protect your data.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}