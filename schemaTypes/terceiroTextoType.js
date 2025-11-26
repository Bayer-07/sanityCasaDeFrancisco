import { defineField, defineType } from 'sanity'

export const terceiroTextoType = defineType({
  name: 'terceiroTexto',
  title: 'Texto Terciário',
  type: 'document',
  fields: [
    defineField({
      name: 'textMenor',
      type: 'string',
    }),
    defineField({
      name: 'tituloMenor',
      type: 'string',
    }),
    defineField({
      name: 'tituloMaior',
      type: 'string',
    }),
    defineField({
      name: 'textoMaior',
      type: 'string',
    })
  ],
})