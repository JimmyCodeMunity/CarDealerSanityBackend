import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'transmission',
  title: 'Transmission',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Transmission i.e manual',
      type: 'string',
    }),
    
    
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
