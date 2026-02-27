import { defineQuery } from 'next-sanity'

// Hero — singleton document (take first)
export const heroQuery = defineQuery(`*[_type == "hero"][0]{
  _id,
  title,
  subtitle,
  ctaText,
  bgImage{
    asset->{url},
    alt
  }
}`)

// About — singleton document (take first)
export const aboutQuery = defineQuery(`*[_type == "about"][0]{
  _id,
  heading,
  bio,
  resumeLink,
  profileImage{
    asset->{url},
    alt
  }
}`)

// Tools — all documents, ordered by category
export const toolsQuery = defineQuery(`*[_type == "tool"] | order(_createdAt asc){
  _id,
  name,
  category,
  icon
}`)

// Projects — all documents
export const projectsQuery = defineQuery(`*[_type == "project"] | order(_createdAt asc){
  _id,
  title,
  "slug": slug.current,
  description,
  liveUrl,
  githubUrl,
  techStack,
  bgImage{
    asset->{url},
    alt
  }
}`)

// Writings/Blog — all posts, newest first
export const writingsQuery = defineQuery(`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  excerpt
}`)
