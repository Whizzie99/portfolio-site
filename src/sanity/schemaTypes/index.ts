import { type SchemaTypeDefinition } from 'sanity'

import { hero } from './hero'
import { about } from './about'
import { tools } from './tools'
import { project } from './project'
import { writing } from './writing'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, tools, project, writing],
}
