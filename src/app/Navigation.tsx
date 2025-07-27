"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="nav-logo group">
            <span className="relative">
              The Password Generator
              <span className="nav-logo-glow"></span>
            </span>
          </Link>
          <div className="flex gap-8">
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-text">Generator</span>
              <span className="nav-link-underline"></span>
            </Link>
            <Link 
              href="/blog" 
              className={`nav-link ${isActive('/blog') ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-text">Blog</span>
              <span className="nav-link-underline"></span>
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-text">About</span>
              <span className="nav-link-underline"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}