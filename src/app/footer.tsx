"use client"

export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-gray-500 relative z-10">
      <div className="container mx-auto">
        <p className="text-sm mb-4">
          © 2025{' '}
          <a 
            className="text-purple-400 hover:text-purple-300 transition-colors" 
            href="https://abevalle.com/"
          >
            AbeValle
          </a>
          {' '}• Crafted with precision
        </p>
        <div className="flex justify-center gap-6 text-xs">
          <a 
            href="/privacy" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            Terms of Service
          </a>
          <a 
            href="/contact" 
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
