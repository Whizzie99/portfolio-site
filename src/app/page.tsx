import { sanityFetch, SanityLive } from '@/sanity/live'
import {
  heroQuery,
  aboutQuery,
  toolsQuery,
  projectsQuery,
  writingsQuery,
} from '@/sanity/queries'
import { HomeFragment } from '@/components/fragments/home-fragment'

export default async function Page() {
  const [
    { data: hero },
    { data: about },
    { data: tools },
    { data: projects },
    { data: writings },
  ] = await Promise.all([
    sanityFetch({ query: heroQuery }),
    sanityFetch({ query: aboutQuery }),
    sanityFetch({ query: toolsQuery }),
    sanityFetch({ query: projectsQuery }),
    sanityFetch({ query: writingsQuery }),
  ])

  return (
    <>
      <HomeFragment
        hero={hero}
        about={about}
        tools={tools}
        projects={projects}
        writings={writings}
      />
      <SanityLive />
    </>
  )
}