import {defineField, defineType} from 'sanity'

export const landingImageType = defineType({
  name: 'landingImage',
  title: 'Landing Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})

export const landingVideoType = defineType({
  name: 'landingVideo',
  title: 'Landing Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoFile',
      type: 'file',
      title: 'Upload Video File',
      options: {
        accept: 'video/mp4',
      },
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Order',
      description: 'Used to manually sort videos (lower number = higher priority)',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
