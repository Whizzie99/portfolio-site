'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SpotlightItem } from '@/components/common/spotlight-item'
import type { ProjectsQueryResult } from '@/sanity/types'

interface ProjectsProps {
  data: ProjectsQueryResult
}

const FALLBACK_PROJECTS: ProjectsQueryResult = [
  {
    _id: 'f1',
    title: 'Exotics',
    description: 'A premium 3D configurator and e-commerce platform.',
    slug: null,
    liveUrl: '#',
    githubUrl: null,
    techStack: null,
    bgImage: null,
  },
  {
    _id: 'f2',
    title: 'Portfolio v2',
    description: 'Minimalist personal site with smooth scrolling.',
    slug: null,
    liveUrl: '#',
    githubUrl: null,
    techStack: null,
    bgImage: null,
  },
  {
    _id: 'f3',
    title: 'Finance Dashboard',
    description: 'Modern analytics and financial tracking interface.',
    slug: null,
    liveUrl: '#',
    githubUrl: null,
    techStack: null,
    bgImage: null,
  },
]

export function Projects({ data }: ProjectsProps) {
  const projects = data && data.length > 0 ? data : FALLBACK_PROJECTS

  return (
    <section id="work" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
        <h2 className="text-sm uppercase tracking-widest text-neutral-500 mb-4 md:mb-0">
          Selected Works
        </h2>
        <p className="text-neutral-500 text-sm">Case studies &amp; projects</p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => {
          // Derive year from Sanity date or fall back to a simple label
          const href = project.liveUrl ?? (project.slug ? `/projects/${project.slug}` : '#')

          return (
            <SpotlightItem
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              key={project._id}
              href={href}
              newTab={true}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-neutral-200 dark:border-neutral-800 first:border-t-0 last:border-b-0 transition-colors -mx-6 px-6 sm:mx-0 sm:px-0"
              innerClassName="flex flex-col md:flex-row md:items-center justify-between"
            >
              <div className="space-y-2">
                <h3 className="text-2xl md:text-4xl font-light text-neutral-900 dark:text-neutral-50 group-hover:pl-4 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-neutral-500 md:ml-0 group-hover:pl-4 transition-all lg:max-w-[60%] duration-300 delay-75">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center gap-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors">
                {project.techStack && project.techStack.length > 0 && (
                  <span className="text-sm hidden md:block">
                    {project.techStack.slice(0, 2).join(', ')}
                  </span>
                )}
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </SpotlightItem>
          )
        })}
      </div>
    </section>
  )
}
