#!/usr/bin/env node
// Extracts the hard-coded blog posts from src/app/blog into one Strapi-ready
// JSON file per post (scripts/strapi/posts/<slug>.json).
//
// Usage: node scripts/strapi/extract-posts.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const slugPage = readFileSync(join(root, 'src/app/blog/[slug]/page.tsx'), 'utf8');
const listPage = readFileSync(join(root, 'src/app/blog/page.tsx'), 'utf8');

// Pull `const blogPosts: Record<string, BlogPost> = { ... };` out of the TSX and
// evaluate just that object literal. Bodies are template strings with no `${}`.
function extractObject(src, declRegex) {
  const m = src.match(declRegex);
  if (!m) throw new Error(`Could not find declaration: ${declRegex}`);
  const start = src.indexOf(m[0]) + m[0].length;
  // find matching close: the first "\n};" or "\n];" after start
  const end = src.indexOf(m[0].trimEnd().endsWith('[') ? '\n];' : '\n};', start);
  if (end === -1) throw new Error('Could not find end of declaration');
  const literal = (m[0].trimEnd().endsWith('[') ? '[' : '{') + src.slice(start, end) + (m[0].trimEnd().endsWith('[') ? ']' : '}');
  return new Function(`return (${literal});`)();
}

const posts = extractObject(slugPage, /const blogPosts: Record<string, BlogPost> = \{/);
const listing = extractObject(listPage, /const (?:blogPosts|posts)[^=]*= \[/);
const excerpts = Object.fromEntries(listing.map((p) => [p.slug, p.excerpt]));

const outDir = join(root, 'scripts/strapi/posts');
mkdirSync(outDir, { recursive: true });

const slugs = Object.keys(posts);
for (const slug of slugs) {
  const p = posts[slug];
  const body = p.content.trim();
  // The body repeats the title as an H1; Strapi will render the title field, so drop it.
  const content = body.startsWith('# ') ? body.replace(/^# [^\n]*\n+/, '') : body;
  const keywords = [...new Set([...slug.split('-').filter((w) => w.length > 2), 'password', 'security'])].join(', ');
  const data = {
    title: p.title,
    slug: p.slug,
    excerpt: excerpts[slug] ?? '',
    content,
    SEO: [
      {
        metaTitle: `${p.title} - The Password Generator`,
        metDescription: excerpts[slug] ?? '',
        metaKeywords: keywords,
      },
    ],
  };
  writeFileSync(join(outDir, `${slug}.json`), JSON.stringify({ data }, null, 2) + '\n');
  if (!excerpts[slug]) console.warn(`warn: no excerpt on listing page for ${slug}`);
}
console.log(`wrote ${slugs.length} posts to ${outDir}`);
