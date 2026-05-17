import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const country = request.geo?.country ?? 'unknown'

  if (request.cookies.get('geo')?.value !== country) {
    response.cookies.set('geo', country, {
      path: '/',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
    })
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|icons|.*\\.svg|.*\\.png).*)',
  ],
}
