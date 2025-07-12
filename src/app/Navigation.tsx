"use client"

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card-nav backdrop-blur-md bg-gray-900/50 border-b border-gray-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            The Password Generator
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Generator
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}