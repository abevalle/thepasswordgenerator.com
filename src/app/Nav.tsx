"use client"

import NullWebNav from './NullWebNav'

export default function Nav() {
  return (
    <NullWebNav
      theme={{
        brand: 'Password Generator',
        brandUrl: '/',
        primaryColor: '#6366F1',
        bgClass: 'bg-white/80 dark:bg-gray-900/80',
        textClass: 'text-gray-700 dark:text-gray-200',
        activeClass: 'text-indigo-600 dark:text-indigo-400',
      }}
      navLinks={[
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'About', href: '/about' },
      ]}
    />
  )
}
