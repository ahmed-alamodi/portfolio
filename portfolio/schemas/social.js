import { defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      description: 'platform for social media',
    },
    {
      name: 'url',
      title: 'url',
      type: 'url',
    },
  ],
})
