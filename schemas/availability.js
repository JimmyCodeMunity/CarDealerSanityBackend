import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'availability',
  title: 'Availability',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Availability Status i.e available',
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
