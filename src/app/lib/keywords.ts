export type KeywordLink = {
  keyword: string
  url: string
  external?: boolean
}

export const KEYWORD_LINKS: KeywordLink[] = [
  { keyword: 'password generator', url: '/' },
  { keyword: 'passphrase generator', url: '/' },
  { keyword: 'random password', url: '/' },
  { keyword: 'memorable password', url: '/' },
  { keyword: 'leetspeak password', url: '/' },
  { keyword: 'strong password', url: '/' },
  { keyword: 'easy password', url: '/' },
  { keyword: 'FAQ', url: '/faq' },
  { keyword: 'privacy policy', url: '/privacy' },
  { keyword: 'terms of service', url: '/terms' },
  { keyword: 'about', url: '/about' },
]

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/**
 * Replace the first occurrence of each keyword in a body of HTML/markdown-rendered text
 * with an anchor tag pointing at the configured URL. Designed for post-render injection
 * into blog content, never for user-controlled input.
 */
export function linkKeywords(input: string, links: KeywordLink[] = KEYWORD_LINKS): string {
  const seen = new Set<string>()
  let output = input

  for (const link of links) {
    if (seen.has(link.keyword.toLowerCase())) continue
    const pattern = new RegExp(`\\b(${escapeRegex(link.keyword)})\\b`, 'i')
    if (!pattern.test(output)) continue

    const attrs = link.external
      ? ' target="_blank" rel="noopener noreferrer"'
      : ''
    output = output.replace(
      pattern,
      `<a href="${link.url}" class="text-indigo-600 dark:text-indigo-400 hover:underline"${attrs}>$1</a>`
    )
    seen.add(link.keyword.toLowerCase())
  }

  return output
}
