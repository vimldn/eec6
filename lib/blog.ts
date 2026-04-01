import { join } from 'path';
import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const CONTENT_DIR = join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedDate: string;
  readingTime: number;
  category: string;
  tags: string[];
  contentHtml: string;
}

export interface BlogPostMeta extends Omit<BlogPost, 'contentHtml'> {}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = join(CONTENT_DIR, `${slug}.md`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processed = await remark().use(html, { sanitize: false }).process(content);
    const contentHtml = processed.toString();

    return {
      slug,
      title: data.title ?? slug,
      metaTitle: data.metaTitle ?? data.title ?? slug,
      metaDescription: data.metaDescription ?? data.excerpt ?? '',
      excerpt: data.excerpt ?? '',
      publishedDate: data.publishedDate ?? '',
      readingTime: estimateReadingTime(content),
      category: data.category ?? 'SEO',
      tags: data.tags ?? [],
      contentHtml,
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  try {
    return readdirSync(CONTENT_DIR)
      .filter((f) => f.endsWith('.md'))
      .map((f) => f.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => {
      try {
        const fullPath = join(CONTENT_DIR, `${slug}.md`);
        const fileContents = readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
          slug,
          title: data.title ?? slug,
          metaTitle: data.metaTitle ?? data.title ?? slug,
          metaDescription: data.metaDescription ?? data.excerpt ?? '',
          excerpt: data.excerpt ?? '',
          publishedDate: data.publishedDate ?? '',
          readingTime: estimateReadingTime(content),
          category: data.category ?? 'SEO',
          tags: data.tags ?? [],
        } as BlogPostMeta;
      } catch {
        return null;
      }
    })
    .filter((p): p is BlogPostMeta => p !== null)
    .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}
