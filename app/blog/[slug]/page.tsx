import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CTASection from '@/components/CTASection';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/data/blogPosts';
import styles from './BlogContent.module.css';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: 'Not Found' };

  return {
    title: post.metaTitle,
    description: post.metaDescription,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post || post.status === 'draft') {
    notFound();
  }

  // Calculate reading time (assuming 200 words per minute)
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const readingTime = Math.ceil(wordCount / 200);

  // Safely inject internal links AFTER complete </h2> blocks (never inside headings)
const injectInternalLinks = (content: string): string => {
  let modifiedContent = content;

  const makeParagraph = (url: string, anchor: string, template: 1 | 2) => {
    if (template === 1) {
      return (
        `<p>To improve your business's visibility in this area, consider working with a ` +
        `<a href="${url}">${anchor}</a> who understands the unique dynamics of the local market.</p>`
      );
    }
    return (
      `<p>For comprehensive search engine optimization strategies tailored to your business needs, ` +
      `partnering with an experienced <a href="${url}">${anchor}</a> can help you achieve sustainable ` +
      `growth in organic search results.</p>`
    );
  };

  // Collect full <h2>...</h2> blocks without using matchAll()
  const collectH2Blocks = (html: string): string[] => {
    const re = /<h2[^>]*>[\s\S]*?<\/h2>/gi;
    const blocks: string[] = [];
    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) !== null) {
      blocks.push(m[0]);
    }
    return blocks;
  };

  // 1) Inject first link after the first H2
  const h2Blocks1 = collectH2Blocks(modifiedContent);
  if (post.internalLink1Anchor && post.internalLink1Url && h2Blocks1.length >= 1) {
    const firstH2 = h2Blocks1[0];
    const linkParagraph = makeParagraph(post.internalLink1Url, post.internalLink1Anchor, 1);
    modifiedContent = modifiedContent.replace(firstH2, firstH2 + linkParagraph);
  }

  // 2) Inject second link after ~40% through the H2 headings
  const h2Blocks2 = collectH2Blocks(modifiedContent);
  if (post.internalLink2Anchor && post.internalLink2Url && h2Blocks2.length > 2) {
    const insertIndex = Math.floor(h2Blocks2.length * 0.4);
    const targetH2 = h2Blocks2[insertIndex];
    const linkParagraph = makeParagraph(post.internalLink2Url, post.internalLink2Anchor, 2);
    modifiedContent = modifiedContent.replace(targetH2, targetH2 + linkParagraph);
  }

  return modifiedContent;
};
 

  const contentWithLinks = injectInternalLinks(post.content);

  return (
    <>
      {/* Breadcrumb */}
      <div className="px-6 pt-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-text-secondary">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">→</span>
            <span className="text-brand line-clamp-1">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-text-secondary text-sm mb-8">
            {post.location && (
              <span className="px-3 py-1 bg-white/5 rounded-full capitalize">
                {post.location.replace('-', ' ')}
              </span>
            )}
            <span>{readingTime} min read</span>
            {post.publishedDate && (
              <span>
                {new Date(post.publishedDate).toLocaleDateString('en-GB', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: contentWithLinks }}
          />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />

      {/* Schema Markup */}
      {post.schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: post.schemaMarkup }}
        />
      )}
    </>
  );
}
