import { defineField, defineType } from 'sanity'

export const eventoType = defineType({
  name: 'eventos',
  title: 'Eventos',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
      name: 'local',
      type: 'string',
    }),
    defineField({
      name: 'dataEHora',
      type: 'datetime',
    }),
    defineField({
      name: 'descricao',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'imagem1',
      type: 'image',
    }),
    defineField({
      name: 'imagem2',
      type: 'image',
    }),
    defineField({
      name: 'imagem3',
      type: 'image',
    }),
  ],
})