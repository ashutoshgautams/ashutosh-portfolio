import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define types
export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  author: string;
  excerpt: string;
  coverImage: string;
  readingTime: string;
  tags: string[];
}

export interface Post extends PostMetadata {
  content: string;
}

// Path to our content directory
const contentDirectory = path.join(process.cwd(), 'src/content/blog');

// Get all post slugs
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    return fileNames.map((fileName) => {
      return fileName.replace(/\.md$/, '');
    });
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return [];
  }
}

// Get all posts metadata
export function getAllPosts(): PostMetadata[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory);
    const allPostsData = fileNames.map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        ...(matterResult.data as Omit<PostMetadata, 'slug'>),
      };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error getting all posts:', error);
    return [];
  }
}

// Get a specific post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
      slug,
      content: contentHtml,
      ...(matterResult.data as Omit<PostMetadata, 'slug'>),
    };
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error);
    return null;
  }
}

// Get recent posts (limit by count)
export function getRecentPosts(count: number): PostMetadata[] {
  return getAllPosts().slice(0, count);
}

// Get posts by tag
export function getPostsByTag(tag: string): PostMetadata[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagsSet = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagsSet.add(tag);
    });
  });
  
  return Array.from(tagsSet);
}
