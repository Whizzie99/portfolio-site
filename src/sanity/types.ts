// Manually typed results matching our GROQ queries

export interface SanityImage {
  asset: { url: string } | null
  alt?: string | null
}

// heroQuery result
export type HeroQueryResult = {
  _id: string
  title: string | null
  subtitle: string | null
  ctaText: string | null
  bgImage: SanityImage | null
} | null

// aboutQuery result
export type AboutQueryResult = {
  _id: string
  heading: string | null
  bio: string | null
  resumeLink: string | null
  profileImage: SanityImage | null
} | null

// toolsQuery result item
export interface ToolItem {
  _id: string
  name: string | null
  category: 'core-stack' | 'styling-ui' | 'cms' | null
  icon: string | null
}

export type ToolsQueryResult = ToolItem[]

// projectsQuery result item
export interface ProjectItem {
  _id: string
  title: string | null
  slug: string | null
  description: string | null
  liveUrl: string | null
  githubUrl: string | null
  techStack: string[] | null
  bgImage: SanityImage | null
}

export type ProjectsQueryResult = ProjectItem[]

// writingsQuery result item
export interface WritingItem {
  _id: string
  title: string | null
  slug: string | null
  publishedAt: string | null
  excerpt: string | null
}

export type WritingsQueryResult = WritingItem[]
