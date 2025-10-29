import { defineField, defineType } from 'sanity'

export const terceiroTextoType = defineType({
  name: 'terceiroTexto',
  title: 'Texto Terciário',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      type: 'string',
    }),
    defineField({
      name: 'textMenor',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'textoMaior',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    })
  ],
})