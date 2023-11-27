import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Add Vehicle',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brand'}}],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year of Manufacture',
      type: 'string',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'array',
      of: [{type: 'reference', to: {type: 'availability'}}],
    }),
    
    defineField({
      name: 'drive',
      title: 'Drive',
      type: 'string',
    }),
    defineField({
      name: 'engine',
      title: 'Engine Size',
      type: 'string',
    }),
    defineField({
      name: 'mileage',
      title: 'Mileage',
      type: 'string',
    }),
    defineField({
      name: 'horsepower',
      title: 'Horse Power',
      type: 'string',
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'array',
      of: [{type: 'reference', to: {type: 'transmission'}}],
    }),
    defineField({
      name: 'fuel',
      title: 'Fuel Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'fuel'}}],
    }),
    defineField({
      name: 'torque',
      title: 'Torque',
      type: 'string',
    }),
    defineField({
      name: 'aspiration',
      title: 'Aspiration',
      type: 'string',
    }),
    defineField({
      name: 'acceleration',
      title: 'Acceleration(0-100)',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'frontImage',
      title: 'Front image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backImage',
      title: 'Back image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'insideImage',
      title: 'Inside image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'dashImage',
      title: 'Dashboard image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    
    
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
