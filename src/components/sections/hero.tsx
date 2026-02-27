'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'
import type { HeroQueryResult } from '@/sanity/types'
import { usePreloader } from '@/components/providers/preloader-context'

interface HeroProps {
  data: HeroQueryResult
}

const FALLBACK_SUBTITLE =
  'specialized in Full Stack Development, React, Next.js, and crafting engaging digital experiences.'

export function Hero({ data }: HeroProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const { isComplete } = usePreloader()

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Title is always hardcoded — only subtitle comes from the CMS
  const subtitle = data?.subtitle ?? FALLBACK_SUBTITLE

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative group min-h-[60vh] sm:min-h-[85vh] flex flex-col justify-end pb-8 sm:pb-12 w-full"
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-32 -bottom-10 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 hidden dark:block"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.05), rgba(6, 182, 212, 0.03), transparent 70%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 -top-32 -bottom-10 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 dark:hidden"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.12), rgba(236, 72, 153, 0.08), rgba(6, 182, 212, 0.05), transparent 70%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col text-[#111111] dark:text-[#F3F3F3] sm:-ml-[0.5vw] pointer-events-none">

        <div className="overflow-hidden pb-2 pt-4 pointer-events-auto">
          <motion.h1
            initial={{ y: '100%' }}
            animate={isComplete ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18.5vw] leading-[0.78] tracking-tight font-medium"
          >
            Frontend
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-end w-full overflow-hidden pb-2 pt-4 pointer-events-auto">
          <motion.h1
            initial={{ y: '100%' }}
            animate={isComplete ? { y: 0 } : { y: '100%' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18.5vw] leading-[0.78] tracking-tight font-medium"
          >
            Engineer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isComplete ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:max-w-[280px] text-sm md:text-base font-medium leading-snug tracking-tight mt-6 md:mt-0 md:ml-6 md:mb-[1.5vw] dark:text-neutral-400 pl-1 md:pl-0"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
