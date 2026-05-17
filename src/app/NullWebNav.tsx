"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export type NullWebNavTheme = {
  brand: string
  brandUrl: string
  primaryColor: string
  bgClass: string
  textClass: string
  activeClass: string
}

export type NavLink = {
  label: string
  href: string
}

export type SiblingTool = {
  name: string
  url: string
  description: string
}

export const SIBLING_TOOLS: SiblingTool[] = [
  { name: 'ZipMyFile', url: 'https://zipmyfile.com', description: 'Compress files & folders to ZIP' },
  { name: 'ReverseGif', url: 'https://reversegif.com', description: 'Reverse any GIF instantly' },
  { name: 'Password Generator', url: 'https://thepasswordgenerator.com', description: 'Generate secure passwords' },
  { name: 'BlurMyPlates', url: 'https://blurmyplates.com', description: 'Blur license plates in photos' },
  { name: 'Meeting Session', url: 'https://meetingsession.com', description: 'Collaborative online whiteboard' },
  { name: 'Helpdesky', url: 'https://helpdesky.net', description: 'Help desk & support tools' },
]

type Props = {
  theme: NullWebNavTheme
  navLinks: NavLink[]
}

export default function NullWebNav({ theme, navLinks }: Props) {
  const pathname = usePathname()
  const [toolsOpen, setToolsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const siblings = SIBLING_TOOLS.filter(
    (t) => t.name.toLowerCase() !== theme.brand.toLowerCase()
  )

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setToolsOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme.bgClass} border-b border-gray-200/60 dark:border-gray-700/60 backdrop-blur-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            href={theme.brandUrl}
            className="font-bold text-lg tracking-tight"
            style={{ color: theme.primaryColor }}
          >
            {theme.brand}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? theme.activeClass : `${theme.textClass} hover:text-indigo-600 dark:hover:text-indigo-400`
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* More Tools dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setToolsOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm font-medium ${theme.textClass} hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors`}
                aria-haspopup="menu"
                aria-expanded={toolsOpen}
              >
                More Tools
                <svg className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {toolsOpen && (
                <div
                  role="menu"
                  className="absolute right-0 mt-2 w-72 rounded-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2"
                >
                  {siblings.map((tool) => (
                    <a
                      key={tool.url}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl px-3 py-2 hover:bg-indigo-50 dark:hover:bg-gray-700/60 transition-colors"
                      role="menuitem"
                    >
                      <div className="font-medium text-gray-900 dark:text-white text-sm">{tool.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{tool.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* NullWeb badge (desktop) */}
          <a
            href="https://nullweb.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200/60 dark:border-indigo-700/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
          >
            NullWeb.net
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden inline-flex items-center justify-center p-2 rounded-md ${theme.textClass} hover:text-indigo-600 dark:hover:text-indigo-400`}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive(link.href)
                    ? `${theme.activeClass} bg-indigo-50 dark:bg-gray-800`
                    : `${theme.textClass} hover:bg-gray-50 dark:hover:bg-gray-800`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 px-3 mb-1">More Tools</div>
            {siblings.map((tool) => (
              <a
                key={tool.url}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="font-medium text-sm text-gray-900 dark:text-white">{tool.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{tool.description}</div>
              </a>
            ))}
          </div>
          <div className="px-4 pb-3">
            <a
              href="https://nullweb.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200/60 dark:border-indigo-700/40"
            >
              NullWeb.net
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
