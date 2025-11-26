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
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    })
  ],
})