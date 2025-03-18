import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Define the type for params
interface BlogPostParams {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: BlogPostParams): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Ashutosh Gautam`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

// Generate static paths at build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <div className="pt-28 pb-20">
      <article className="container-custom max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className="text-sm px-3 py-1 bg-dark/80 text-primary-400 rounded-full hover:bg-primary-600 hover:text-light transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
          
          <h1 className="heading-1 mb-6">{post.title}</h1>
          
          <div className="flex items-center text-light/60 mb-8">
            <span>{post.date}</span>
            <span className="mx-3">•</span>
            <span>{post.readingTime}</span>
            <span className="mx-3">•</span>
            <span>By {post.author}</span>
          </div>
          
          <div className="h-80 relative rounded-lg overflow-hidden mb-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center bg-dark/50 text-light/30 text-lg">
              Blog Image Placeholder
            </div>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Author Bio */}
        <div className="mt-16 p-8 bg-dark/50 backdrop-blur-lg rounded-lg border border-gray-800">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center text-light/30">
              Profile
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
              <p className="text-light/70 mb-4">
                Ashutosh is a web developer specializing in creating immersive 3D web experiences using Three.js, Next.js, and TypeScript.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-primary-400 hover:text-primary-300">
                  Twitter
                </a>
                <a href="#" className="text-primary-400 hover:text-primary-300">
                  GitHub
                </a>
                <a href="#" className="text-primary-400 hover:text-primary-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
          
          <div className="flex space-x-4">
            <button className="text-light/70 hover:text-primary-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
