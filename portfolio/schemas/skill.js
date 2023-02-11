import { defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      description: 'Title of skill',
    },
    {
      name: 'progress',
      title: 'progress',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      name: 'image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
