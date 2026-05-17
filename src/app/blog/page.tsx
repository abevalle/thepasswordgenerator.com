import Link from 'next/link';
import Footer from '../footer';

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

const blogPosts = [
  {
    slug: 'two-factor-authentication-guide',
    title: 'Two-Factor Authentication: The Complete Guide for 2025',
    excerpt: 'Everything you need to know about 2FA, from setup to advanced security strategies.',
    date: '2025-01-12',
    readTime: '10 min read',
  },
  {
    slug: 'password-vs-passphrase',
    title: 'Password vs Passphrase: Which is More Secure in 2025?',
    excerpt: 'A comprehensive comparison of traditional passwords versus passphrases for modern security.',
    date: '2025-01-11',
    readTime: '7 min read',
  },
  {
    slug: 'why-strong-passwords-matter',
    title: 'Why Strong Passwords Matter in 2025',
    excerpt: 'Learn why using strong, unique passwords is more critical than ever in today\'s digital landscape.',
    date: '2025-01-10',
    readTime: '5 min read',
  },
  {
    slug: 'how-often-change-passwords',
    title: 'How Often Should You Change Your Passwords? The 2025 Guide',
    excerpt: 'Modern password rotation strategies that actually improve security without causing fatigue.',
    date: '2025-01-09',
    readTime: '6 min read',
  },
  {
    slug: 'password-manager-guide',
    title: 'The Complete Guide to Password Managers',
    excerpt: 'Everything you need to know about choosing and using a password manager to secure your digital life.',
    date: '2025-01-08',
    readTime: '8 min read',
  },
  {
    slug: 'password-security-remote-workers',
    title: 'Password Security for Remote Workers: Essential Guide 2025',
    excerpt: 'Unique password security challenges and solutions for the remote workforce.',
    date: '2025-01-07',
    readTime: '8 min read',
  },
  {
    slug: 'biometric-vs-password-authentication',
    title: 'Biometric vs Password Authentication: Which is Better in 2025?',
    excerpt: 'Comprehensive comparison of biometric and password authentication methods.',
    date: '2025-01-06',
    readTime: '9 min read',
  },
  {
    slug: 'common-password-mistakes',
    title: '10 Common Password Mistakes to Avoid',
    excerpt: 'Discover the most common password security mistakes and how to avoid them.',
    date: '2025-01-05',
    readTime: '6 min read',
  },
  {
    slug: 'creating-passwords-different-accounts',
    title: 'Creating Strong Passwords for Different Account Types: A Strategic Guide',
    excerpt: 'Tailored password strategies for different types of accounts and security requirements.',
    date: '2025-01-04',
    readTime: '7 min read',
  },
  {
    slug: 'password-breach-what-to-do',
    title: 'Password Breach: Your Complete Emergency Response Guide',
    excerpt: 'Step-by-step emergency response plan for when your passwords are compromised.',
    date: '2025-01-03',
    readTime: '8 min read',
  },
  {
    slug: 'password-generators-how-they-work',
    title: 'How Password Generators Work: The Complete Technical Guide',
    excerpt: 'Deep dive into the technology, mathematics, and security behind password generators.',
    date: '2025-01-02',
    readTime: '10 min read',
  },
  {
    slug: 'enterprise-password-management',
    title: 'Enterprise Password Management: Best Practices for Organizations',
    excerpt: 'Comprehensive guide for implementing password management at enterprise scale.',
    date: '2025-01-01',
    readTime: '11 min read',
  },
  {
    slug: 'psychology-of-passwords',
    title: 'The Psychology of Passwords: Why We Make Bad Security Choices',
    excerpt: 'Understanding the cognitive biases and psychological factors behind poor password choices.',
    date: '2024-12-31',
    readTime: '9 min read',
  },
];

export default function BlogPage() {
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