// This file has been replaced by the MDX content system in /content/blog/
// Blog utilities are now in /lib/blog.ts
// This stub exists only to prevent any residual imports from breaking.

export interface BlogPost {
  slug: string;
  title: string;
  content: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  schemaMarkup: string;
  status: 'draft' | 'published';
  publishedDate?: string;
  readingTime?: number;
  location?: string;
}

export const blogPosts: BlogPost[] = [];
export function getBlogPostBySlug(_slug: string): BlogPost | undefined { return undefined; }
export function getAllBlogPosts(): BlogPost[] { return []; }
export function getAllBlogSlugs(): string[] { return []; }
export function getBlogPostsByLocation(_location: string): BlogPost[] { return []; }
