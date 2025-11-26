import { defineField, defineType } from 'sanity'

export const primeiroTextoType = defineType({
  name: 'primeiroTexto',
  title: 'Texto Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'texto',
      type: 'string',
    }),
    defineField({
      name: 'img',
      type: 'image',
    })
  ],
})