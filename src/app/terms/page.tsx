"use client"

export default function Terms() {
  return (
    <main className="min-w-screen min-h-screen">
      <div className="mesh-gradient"></div>
      <section className="content">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="glass-card p-8">
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
              <p className="text-lg mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Acceptance of Terms</h2>
                <p>
                  By using The Password Generator website, you agree to these terms of service. 
                  If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Description of Service</h2>
                <p>
                  The Password Generator is a free, client-side password generation tool that creates cryptographically secure passwords 
                  entirely within your browser. No passwords are transmitted to or stored on our servers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">User Responsibilities</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>You are responsible for the secure storage and use of generated passwords</li>
                  <li>You should not share passwords generated for personal use</li>
                  <li>You acknowledge that password security also depends on other factors beyond password strength</li>
                  <li>You agree to use this service for lawful purposes only</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Disclaimers</h2>
                <p>
                  This service is provided &quot;as is&quot; without warranties of any kind. While we use cryptographically secure methods 
                  for password generation, we cannot guarantee absolute security and are not liable for any security breaches 
                  that may occur from the use of generated passwords.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Limitation of Liability</h2>
                <p>
                  In no event shall The Password Generator or its operators be liable for any direct, indirect, incidental, 
                  special, or consequential damages arising from the use of this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand how we handle information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibent mb-4 text-white">Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4 text-white">Contact</h2>
                <p>
                  For questions about these terms, please contact us at: 
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