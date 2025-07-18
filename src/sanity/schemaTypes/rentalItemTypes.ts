import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const rentalItemType = defineType({
  name: 'rentalItem',
  title: 'Rental Item',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'rentalItem',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'rentalItem',
      },
    }),
    defineField({
      name: 'price',
      type: 'string',
      
    }),
    defineField({
      name: 'availability',
      type: 'boolean',
      
    }),
    // defineField({
    //   name: 'author',
    //   type: 'reference',
    //   to: {type: 'author'},
    // }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    // defineField({
    //   name: 'body',
    //   type: 'blockContent',
    // }),
  ],
  preview: {
    select: {
      title: 'rentalItem',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
