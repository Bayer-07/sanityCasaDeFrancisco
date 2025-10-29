import { defineField, defineType } from 'sanity'

export const segundoTextoType = defineType({
  name: 'segundoTexto',
  title: 'Texto Secundário',
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
      name: 'imagem',
      type: 'image',
    })
  ],
})