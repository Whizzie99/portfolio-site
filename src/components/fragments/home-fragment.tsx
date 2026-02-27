'use client'

import { SmoothScrollProvider } from '@/components/providers/smooth-scroll'
import { Header } from '@/components/common/header'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Tools } from '@/components/sections/tools'
import { Projects } from '@/components/sections/projects'
import { Blog } from '@/components/sections/blog'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/common/footer'

import type {
  HeroQueryResult,
  AboutQueryResult,
  ToolsQueryResult,
  ProjectsQueryResult,
  WritingsQueryResult,
} from '@/sanity/types'

interface HomeFragmentProps {
  hero: HeroQueryResult
  about: AboutQueryResult
  tools: ToolsQueryResult
  projects: ProjectsQueryResult
  writings: WritingsQueryResult
}

export function HomeFragment({ hero, about, tools, projects, writings }: HomeFragmentProps) {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen overflow-x-hidden bg-linear-to-br from-[#E2E8F0] via-[#F8FAFC] to-[#CBD5E1] dark:bg-none dark:bg-[#0a0a0a] selection:bg-neutral-900 selection:text-[#F3F3F3] dark:selection:bg-[#F3F3F3] dark:selection:text-[#111111]">
        <Header />
        <div className="w-full px-6 md:px-12 lg:px-24 pt-24 md:pt-32">
          <Hero data={hero} />
          <About data={about} />
          <Tools data={tools} />
          <Projects data={projects} />
          {/* <Blog data={writings} /> */}
          <Contact />
        </div>
        <Footer />
      </main>
    </SmoothScrollProvider>
  )
}
