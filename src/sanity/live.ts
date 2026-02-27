import { defineLive } from 'next-sanity/live'
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Live API requires this apiVersion
    apiVersion: 'vX'
  })
})
