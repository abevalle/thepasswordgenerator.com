// Server-only helpers for reading blog posts from Strapi.
// Requires STRAPI_API_TOKEN (read-only token). STRAPI_URL is optional.

const STRAPI_URL = process.env.STRAPI_URL ?? 'https://strapi.sacramento.valle.us';
const COLLECTION = 'password-generator-posts';
const REVALIDATE_SECONDS = 3600;

type StrapiSeo = {
  metaTitle?: string | null;
  metDescription?: string | null;
  metaKeywords?: string | null;
};

type StrapiPostRaw = {
  documentId: string;
  title: string | null;
  slug: string | null;
  excerpt: string | null;
  content: string | null;
  publishedAt: string | null;
  createdAt: string;
  SEO?: StrapiSeo[] | null;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  seo: { title: string; description: string; keywords: string };
};

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function toPost(raw: StrapiPostRaw): BlogPost | null {
  if (!raw.slug || !raw.title) return null;
  const content = raw.content ?? '';
  const excerpt = raw.excerpt ?? '';
  const seo = raw.SEO?.[0];
  return {
    slug: raw.slug,
    title: raw.title,
    excerpt,
    content,
    date: raw.publishedAt ?? raw.createdAt,
    readTime: estimateReadTime(content),
    seo: {
      title: seo?.metaTitle || `${raw.title} - The Password Generator`,
      description: seo?.metDescription || excerpt,
      keywords: seo?.metaKeywords || '',
    },
  };
}

async function strapiFetch(query: string): Promise<StrapiPostRaw[]> {
  const token = process.env.STRAPI_API_TOKEN;
  if (!token) {
    console.warn('STRAPI_API_TOKEN is not set; blog posts will be empty');
    return [];
  }
  const res = await fetch(`${STRAPI_URL}/api/${COLLECTION}?${query}`, {
    headers: { Authorization: `Bearer ${token}` },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) {
    console.error(`Strapi request failed: ${res.status} ${res.statusText}`);
    return [];
  }
  const json = (await res.json()) as { data?: StrapiPostRaw[] };
  return json.data ?? [];
}

/** All published posts, newest first. */
export async function getPosts(): Promise<BlogPost[]> {
  const raw = await strapiFetch(
    'fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=content&fields[4]=publishedAt&fields[5]=createdAt' +
      '&sort[0]=publishedAt:desc&pagination[pageSize]=100',
  );
  return raw.map(toPost).filter((p): p is BlogPost => p !== null);
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const raw = await strapiFetch(
    `filters[slug][$eq]=${encodeURIComponent(slug)}&populate=SEO&pagination[pageSize]=1`,
  );
  return raw[0] ? toPost(raw[0]) : null;
}
