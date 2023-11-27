import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fuel',
  title: 'Fuel Type',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Type Of fuel i.e petrol,diesel',
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
