'use client'

import { motion } from 'framer-motion'
import type { AboutQueryResult } from '@/sanity/types'

interface AboutProps {
  data: AboutQueryResult
}

const FALLBACK_BIO =
  "Frontend Engineer with 5 years of experience building web applications using React, Next.js, and TypeScript. I've worked across startups and larger organizations, handling everything from translating design mockups to shipping production-ready code. Comfortable working with designers, product managers, and backend engineers to get things built and out the door. I care about writing clean code, making things accessible, and making sure the end user has a smooth experience."

export function About({ data }: AboutProps) {
  const bio = data?.bio ?? FALLBACK_BIO

  return (
    <section id="about" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 md:mb-0">About</h2>
        <p className="text-neutral-500 text-sm">Background &amp; Experience</p>
      </div>

      <div className="max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 leading-relaxed md:leading-snug"
        >
          {bio}
        </motion.p>

        {data?.resumeLink && (
          <motion.a
            href={data.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-10 text-sm font-medium text-neutral-900 dark:text-neutral-50 underline underline-offset-4 hover:opacity-60 transition-opacity"
          >
            View Resume ↗
          </motion.a>
        )}
      </div>
    </section>
  )
}
