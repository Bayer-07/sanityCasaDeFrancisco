import { defineField, defineType } from 'sanity'

export const primeiroTextoType = defineType({
  name: 'primeiroTexto',
  title: 'Texto Principal',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
    }),
    defineField({
      name: 'texto',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'fraseDeEfeito',
      type: 'string',
    })
  ],
})