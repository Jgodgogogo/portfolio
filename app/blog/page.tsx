import { client } from '@/sanity/lib/client'
import { blogPostsQuery } from '@/lib/sanity.queries'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await client.fetch(blogPostsQuery)

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
          Blog
        </h1>
        
        <div className="space-y-8">
          {posts?.map((post: any) => (
            <article key={post._id} className="border-b border-neutral-200 dark:border-neutral-800 pb-8">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              {post.description && (
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {post.description}
                </p>
              )}
              
              {post.publishedAt && (
                <time className="text-sm text-neutral-500 dark:text-neutral-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              )}
            </article>
          ))}
          
          {(!posts || posts.length === 0) && (
            <div className="text-center py-12">
              <p className="text-neutral-600 dark:text-neutral-400">
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 