'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SpotlightItem } from '@/components/common/spotlight-item'
import type { WritingsQueryResult } from '@/sanity/types'

interface BlogProps {
  data: WritingsQueryResult
}

const FALLBACK_POSTS: WritingsQueryResult = [
  { _id: 'f1', title: 'Building Real-Time Interfaces', slug: null, publishedAt: '2024-11-01', excerpt: null },
  { _id: 'f2', title: 'The Case for Micro-Animations', slug: null, publishedAt: '2024-08-01', excerpt: null },
  { _id: 'f3', title: 'Lessons in State Management', slug: null, publishedAt: '2024-05-01', excerpt: null },
]

function formatDate(dateString: string | null): string {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export function Blog({ data }: BlogProps) {
  const posts = data && data.length > 0 ? data : FALLBACK_POSTS

  return (
    <section className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 md:mb-0">Writing</h2>
        <p className="text-neutral-500 text-sm">Thoughts &amp; learnings</p>
      </div>

      <div className="flex flex-col">
        {posts.map((post, index) => {
          const href = post.slug ? `/writing/${post.slug}` : '#'
          return (
            <SpotlightItem
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={post._id}
              href={href}
              className="group flex items-center justify-between py-8 border-b border-neutral-200 dark:border-neutral-800 first:border-t-0 last:border-b-0 transition-colors -mx-6 px-6 sm:mx-0 sm:px-0"
              innerClassName="flex items-center justify-between"
            >
              <h3 className="text-xl md:text-2xl font-light text-neutral-900 dark:text-neutral-50 group-hover:pl-4 transition-all duration-300">
                {post.title}
              </h3>

              <div className="flex items-center gap-6">
                <span className="text-neutral-500 text-sm hidden sm:block">
                  {formatDate(post.publishedAt)}
                </span>
                <ArrowUpRight className="w-5 h-5 text-neutral-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </SpotlightItem>
          )
        })}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-neutral-500 italic text-sm">More writing coming soon. Re-igniting the spark.</p>
        </motion.div>
      </div>
    </section>
  )
}
