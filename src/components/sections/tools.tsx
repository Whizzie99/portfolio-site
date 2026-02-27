'use client'

import { motion } from 'framer-motion'
import type { ToolsQueryResult } from '@/sanity/types'

interface ToolsProps {
  data: ToolsQueryResult
}

const CATEGORY_LABELS: Record<string, string> = {
  'core-stack': 'Core Stack',
  'styling-ui': 'Styling & UI',
  'cms': 'Content Management System',
}

const FALLBACK_TOOLS: ToolsQueryResult = [
  { _id: 'f1', name: 'TypeScript', category: 'core-stack', icon: null },
  { _id: 'f2', name: 'React', category: 'core-stack', icon: null },
  { _id: 'f3', name: 'Next.js', category: 'core-stack', icon: null },
  { _id: 'f4', name: 'Node.js', category: 'core-stack', icon: null },
  { _id: 'f5', name: 'Tailwind CSS', category: 'styling-ui', icon: null },
  { _id: 'f6', name: 'Framer Motion', category: 'styling-ui', icon: null },
  { _id: 'f7', name: 'Shadcn UI', category: 'styling-ui', icon: null },
  { _id: 'f8', name: 'GSAP', category: 'styling-ui', icon: null },
  { _id: 'f9', name: 'Sanity', category: 'cms', icon: null },
]

export function Tools({ data }: ToolsProps) {
  const toolsList = data && data.length > 0 ? data : FALLBACK_TOOLS

  // Group by category
  const grouped = toolsList.reduce<Record<string, typeof toolsList>>((acc, tool) => {
    const key = tool.category ?? 'other'
    if (!acc[key]) acc[key] = []
    acc[key].push(tool)
    return acc
  }, {})

  const categories = Object.entries(grouped)

  return (
    <section id="process" className="py-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <h2 className="text-sm uppercase tracking-widest text-neutral-500">Toolkit</h2>
        </div>

        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map(([categoryKey, tools], idx) => (
            <motion.div
              key={categoryKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-50 mb-6">
                {CATEGORY_LABELS[categoryKey] ?? categoryKey}
              </h3>
              <ul className="space-y-4">
                {tools.map((tool) => (
                  <li
                    key={tool._id}
                    className="text-neutral-500 font-light flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
