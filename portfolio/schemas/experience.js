import { defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'job Title',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'company',
      title: 'company',
      type: 'text',
    },
    {
      name: 'dataStarted',
      title: 'dataStarted',
      type: 'date',
    },
    {
      name: 'dataEnded',
      title: 'dataEnded',
      type: 'date',
    },
    {
      name: 'isCurrentWorkingHere',
      title: 'isCurrentWorkingHere',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]
    },
    {
      name: 'points',
      title: 'points',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ],
})
