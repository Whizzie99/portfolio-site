'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'
import { projectId, dataset } from './src/sanity/env'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Studio',

  basePath: '/studio',

  projectId,
  dataset,

  plugins: [structureTool()],

  schema,
})
