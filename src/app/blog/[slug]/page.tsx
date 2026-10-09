import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPost, getPosts } from '../../lib/strapi';

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found - The Password Generator',
    };
  }

  return {
    title: { absolute: post.seo.title },
    description: post.seo.description,
    keywords: post.seo.keywords || undefined,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatContent(content: string) {
  const lines = content.trim().split('\n');
  const elements = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={i} className="text-3xl md:text-4xl font-bold mb-6 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
          {line.substring(2)}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl md:text-3xl font-semibold mb-4 mt-6 text-gray-900 dark:text-white">
          {line.substring(3)}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-xl md:text-2xl font-semibold mb-3 mt-4 text-gray-800 dark:text-gray-200">
          {line.substring(4)}
        </h3>
      );
    } else if (line.startsWith('- ')) {
      const listItems = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith('- ')) {
        listItems.push(
          <li key={j} className="mb-2">
            {formatInlineText(lines[j].substring(2))}
          </li>
        );
        j++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2 pl-4">
          {listItems}
        </ul>
      );
      i = j - 1;
    } else if (line.match(/^\d+\. /)) {
      const listItems = [];
      let j = i;
      while (j < lines.length && lines[j].match(/^\d+\. /)) {
        listItems.push(
          <li key={j} className="mb-2">
            {formatInlineText(lines[j].replace(/^\d+\. /, ''))}
          </li>
        );
        j++;
      }
      elements.push(
        <ol key={i} className="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2 pl-4">
          {listItems}
        </ol>
      );
      i = j - 1;
    } else if (line.trim() === '') {
      elements.push(<div key={i} className="mb-4" />);
    } else {
      elements.push(
        <p key={i} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {formatInlineText(line)}
        </p>
      );
    }
  }
  
  return elements;
}

function formatInlineText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\`[^\`]+\`)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-gray-900 dark:text-white font-semibold">{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-indigo-600 dark:text-indigo-400 font-mono text-sm">{part.slice(1, -1)}</code>;
    }
    return part;
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }
  
  return (
    <article className="min-h-screen px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline mb-8 transition-colors">
          &larr; Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-rose-600">
            {post.title}
          </h1>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="rounded-2xl bg-white/60 backdrop-blur-lg dark:bg-gray-800/50 p-6 sm:p-10 shadow-xl border border-gray-200/60 dark:border-gray-700/60">
          {formatContent(post.content)}
        </div>

        <footer className="mt-12 text-center">
          <Link href="/blog" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline transition-colors">
            &larr; Back to all posts
          </Link>
        </footer>
      </div>
    </article>
  );
}