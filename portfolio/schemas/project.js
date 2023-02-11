import { defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      description: 'Title of the project',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'summary',
      type: 'text',
    },
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    },
    {
      name: 'linkToBuild',
      title: 'linkToBuild',
      type: 'url',
    },
  ],
})
