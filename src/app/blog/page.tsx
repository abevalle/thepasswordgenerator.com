import Link from 'next/link';
import Footer from '../footer';
import { getPosts } from '../lib/strapi';

export const metadata = {
  title: 'Blog — The Password Generator',
  description:
    'Security tips, password best practices, and cybersecurity insights. Long-form guides on passphrases, 2FA, breach response, and more.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — The Password Generator',
    description:
      'Long-form guides on password security, passphrases, 2FA, and breach response.',
    url: 'https://thepasswordgenerator.com/blog',
    type: 'website',
  },
};

export default async function BlogPage() {
  const blogPosts = await getPosts();
  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
          Security Blog
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Tips, guides, and insights for better password security.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="h-full flex flex-col rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 p-6 shadow-xl border border-gray-200/60 dark:border-gray-700/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-center">
                    <time className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-xs text-indigo-600 dark:text-indigo-400">{post.readTime}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}