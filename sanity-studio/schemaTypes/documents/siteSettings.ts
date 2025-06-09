import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Configurações do Site',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição do Site',
      type: 'text',
      description: 'Descrição usada para SEO e compartilhamentos sociais',
      validation: (Rule) => Rule.max(160).warning('A descrição não deve exceder 160 caracteres para SEO'),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
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
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Menu Principal',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navItem',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Título',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              type: 'string',
              title: 'Link',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'link',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'footerNavigation',
      title: 'Menu do Rodapé',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'footerColumn',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Título da Coluna',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'links',
              type: 'array',
              title: 'Links',
              of: [
                {
                  type: 'object',
                  name: 'navItem',
                  fields: [
                    {
                      name: 'title',
                      type: 'string',
                      title: 'Título',
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: 'link',
                      type: 'string',
                      title: 'Link',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Redes Sociais',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          description: 'Nome de usuário no Instagram (sem @)',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          description: 'URL completa da página ou perfil no Facebook',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
          description: 'URL completa do canal no YouTube',
        },
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informações de Contato',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'E-mail',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Telefone',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Endereço',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO Global',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta título padrão',
          type: 'string',
          description: 'Usado quando não há um título específico definido',
          validation: (Rule) => Rule.max(60).warning('Geralmente não deve exceder 60 caracteres'),
        },
        {
          name: 'metaDescription',
          title: 'Meta descrição padrão',
          type: 'text',
          rows: 3,
          description: 'Usado quando não há uma descrição específica definida',
          validation: (Rule) => Rule.max(160).warning('Geralmente não deve exceder 160 caracteres'),
        },
        {
          name: 'ogImage',
          title: 'Imagem para redes sociais',
          type: 'image',
          description: 'Imagem usada quando o conteúdo é compartilhado em redes sociais',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
    prepare({title, media}) {
      return {
        title: title || 'Configurações do Site',
        media,
      }
    },
  },
}) 