import { defineType, defineField } from 'sanity'

export const tools = defineType({
  name: 'tool',
  title: 'Tools & Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Core Stack', value: 'core-stack' },
          { title: 'Styling & UI', value: 'styling-ui' },
          { title: 'Content Management System', value: 'cms' },
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon (URL or SVG variable)',
      type: 'string',
      description: 'Used to render the tool icon. Can be an SVG string or URL, depending on frontend implementation.',
    }),
  ],
})
