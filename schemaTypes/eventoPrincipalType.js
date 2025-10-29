import { defineField, defineType } from 'sanity'

export const eventoPrincipalType = defineType({
  name: 'eventos_principais',
  title: 'Eventos Principais',
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
      type: 'string',
    }),
  ],
})