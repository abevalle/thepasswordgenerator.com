import Link from 'next/link';

export const metadata = {
  title: 'Blog - The Password Generator',
  description: 'Security tips, password best practices, and cybersecurity insights',
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
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Security Blog
        </h1>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Tips, guides, and insights for better password security
        </p>
        
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <article className="glass-card p-6 rounded-xl transition-all hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}