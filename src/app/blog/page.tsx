import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Ashutosh Gautam',
  description: 'Articles, tutorials, and insights on web development, 3D experiences, and creative digital solutions.',
};

export default function Blog() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="heading-1 mb-4">Blog</h1>
          <p className="text-xl text-light/70 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, 3D experiences, and creative digital solutions.
          </p>
        </div>

        {/* Tags Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            <Link 
              href="/blog"
              className="px-4 py-2 bg-dark/50 hover:bg-primary-600 border border-gray-800 hover:border-primary-500 rounded-full text-sm transition-colors duration-300"
            >
              All
            </Link>
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                className="px-4 py-2 bg-dark/50 hover:bg-primary-600 border border-gray-800 hover:border-primary-500 rounded-full text-sm transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-dark/50 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-800 hover:border-primary-500 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-dark/50 text-light/30 text-lg">
                  Blog Image Placeholder
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${encodeURIComponent(tag.toLowerCase())}`}
                      className="text-xs px-2 py-1 bg-dark/80 text-primary-400 rounded-full hover:bg-primary-600 hover:text-light transition-colors duration-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-center mb-2 text-sm text-light/50">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readingTime}</span>
                </div>
                
                <h2 className="text-xl font-display font-semibold mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-light/70 mb-4">
                  {post.excerpt}
                </p>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center transition-colors duration-300"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
