"use client"

import Link from 'next/link'
import { SIBLING_TOOLS } from './NullWebNav'

const CURRENT_BRAND = 'Password Generator'

export default function Footer() {
  const siblings = SIBLING_TOOLS.filter((t) => t.name !== CURRENT_BRAND)

  return (
    <footer className="mt-16 border-t border-gray-200/60 dark:border-gray-700/60 bg-white/40 dark:bg-gray-900/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* More Tools grid */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          More NullWeb.net Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siblings.map((tool) => (
            <a
              key={tool.url}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white/60 dark:bg-gray-800/50 backdrop-blur-lg p-4 shadow-sm border border-gray-200/60 dark:border-gray-700/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="font-semibold text-gray-900 dark:text-white">{tool.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{tool.description}</div>
            </a>
          ))}
        </div>

        {/* Legal links */}
        <div className="mt-10 pt-8 border-t border-gray-200/60 dark:border-gray-700/60">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              FAQ
            </Link>
            <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Terms
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Blog
            </Link>
          </div>

          <div className="mt-6 flex flex-col items-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
                The Password Generator
              </span>
            </p>
            <p className="mt-1">
              Made with{' '}
              <span className="text-rose-500" aria-label="love">&hearts;</span>{' '}
              by{' '}
              <a
                href="https://abevalle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                abevalle
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
