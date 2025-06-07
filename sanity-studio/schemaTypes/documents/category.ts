import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Categorias',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Ícone',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image',
      title: 'Imagem de capa',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Importante para SEO e acessibilidade',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Ordem de exibição',
      type: 'number',
      description: 'Categorias com valores menores aparecem primeiro na listagem',
      initialValue: 100,
    }),
    defineField({
      name: 'featured',
      title: 'Destacada',
      type: 'boolean',
      description: 'Exibir esta categoria na seção de destaques',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, media, featured} = selection
      return {
        title,
        subtitle: featured ? '⭐ Destacada' : '',
        media,
      }
    },
  },
}) 