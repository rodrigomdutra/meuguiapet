import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'specialist',
  title: 'Especialistas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
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
      name: 'bio',
      title: 'Biografia',
      type: 'blockContent',
    }),
    defineField({
      name: 'shortBio',
      title: 'Biografia curta',
      type: 'text',
      rows: 3,
      description: 'Uma breve descrição para listagens e cards (máximo 160 caracteres)',
      validation: (Rule) => Rule.max(160).warning('A biografia curta não deve exceder 160 caracteres'),
    }),
    defineField({
      name: 'crmv',
      title: 'CRMV',
      type: 'string',
      description: 'Número de registro no Conselho Regional de Medicina Veterinária',
    }),
    defineField({
      name: 'specialties',
      title: 'Especialidades',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informações de contato',
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
          name: 'website',
          title: 'Website',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Redes sociais',
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
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          description: 'URL completa do perfil no LinkedIn',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Exibir este especialista na seção de destaques',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      crmv: 'crmv',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, media, crmv, featured} = selection
      return {
        title,
        subtitle: `${crmv ? `CRMV: ${crmv}` : 'Sem CRMV'} ${featured ? '⭐ Destacado' : ''}`,
        media,
      }
    },
  },
}) 