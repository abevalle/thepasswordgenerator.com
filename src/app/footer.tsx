"use client"

export default function Footer() {
  return (
    <footer className="py-8 px-4 text-center text-gray-500 relative z-10">
      <div className="container mx-auto">
        <p className="text-sm">
          © 2024{' '}
          <a 
            className="text-purple-400 hover:text-purple-300 transition-colors" 
            href="https://abevalle.com/"
          >
            AbeValle
          </a>
          {' '}• Crafted with precision
        </p>
      </div>
    </footer>
  )
}
