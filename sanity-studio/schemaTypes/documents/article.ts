import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Artigos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
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
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      description: 'Um breve resumo do artigo que aparecerá nos resultados de busca e compartilhamentos sociais',
      validation: (Rule) => Rule.max(160).warning('O resumo não deve exceder 160 caracteres para SEO'),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem principal',
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
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: {type: 'category'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'isExpertReviewed',
      title: 'Revisado por especialista',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'reviewedBy',
      title: 'Revisado por',
      type: 'array',
      of: [{type: 'reference', to: {type: 'specialist'}}],
      hidden: ({document}) => !document?.isExpertReviewed,
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta título',
          type: 'string',
          description: 'Título para SEO (deixe em branco para usar o título do artigo)',
          validation: (Rule) => Rule.max(60).warning('Geralmente não deve exceder 60 caracteres'),
        },
        {
          name: 'metaDescription',
          title: 'Meta descrição',
          type: 'text',
          rows: 3,
          description: 'Descrição para SEO (deixe em branco para usar o resumo)',
          validation: (Rule) => Rule.max(160).warning('Geralmente não deve exceder 160 caracteres'),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category.title',
      media: 'mainImage',
      isReviewed: 'isExpertReviewed',
    },
    prepare(selection) {
      const {title, category, media, isReviewed} = selection
      return {
        title,
        subtitle: `${category || 'Sem categoria'} ${isReviewed ? '✓ Revisado' : ''}`,
        media,
      }
    },
  },
}) 