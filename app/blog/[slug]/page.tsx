import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import styles from './BlogContent.module.css';

interface PageProps {
  params: { slug: string };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-secondary">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">→</span>
            <span className="text-brand line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article header */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-wider text-brand font-medium mb-4 block">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-text-secondary text-sm">
            {post.publishedDate && (
              <span>
                {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </div>

      <CTASection />
    </>
  );
}
