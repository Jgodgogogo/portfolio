import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'link',
      title: 'Company Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Date (Newest)',
      name: 'dateDesc',
      by: [{field: 'startDate', direction: 'desc'}],
    },
    {
      title: 'Date (Oldest)',
      name: 'dateAsc',
      by: [{field: 'startDate', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'title',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare(selection) {
      const {title, subtitle, startDate, endDate} = selection
      const start = new Date(startDate).getFullYear()
      const end = endDate ? new Date(endDate).getFullYear() : 'Present'
      return {
        title,
        subtitle: `${subtitle} (${start} - ${end})`,
      }
    },
  },
}) 