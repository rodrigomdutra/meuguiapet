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
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          lists: [
            {title: 'Bullet', value: 'bullet'},
            {title: 'Numbered', value: 'number'},
          ],
        },
      ],
    }),
    defineField({
      name: 'shortBio',
      title: 'Biografia curta',
      type: 'string',
      description: 'Uma breve descrição para listagens e cards (máximo 160 caracteres)',
      validation: (Rule) => Rule.max(160).warning('A biografia curta não deve exceder 160 caracteres'),
    }),
    defineField({
      name: 'crmv',
      title: 'CRMV',
      type: 'string',
      description: 'Número do registro no Conselho Regional de Medicina Veterinária',
    }),
    defineField({
      name: 'experience',
      title: 'Anos de experiência',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100),
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
      name: 'petExpertise',
      title: 'Experiência com tipos de pets',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Cães', value: 'Cães'},
          {title: 'Gatos', value: 'Gatos'},
          {title: 'Aves', value: 'Aves'},
          {title: 'Peixes', value: 'Peixes'},
          {title: 'Roedores', value: 'Roedores'},
          {title: 'Répteis', value: 'Répteis'},
          {title: 'Outros', value: 'Outros'},
        ],
        layout: 'list',
      },
    }),
    defineField({
      name: 'displayInDirectory',
      title: 'Exibir no diretório',
      type: 'boolean',
      description: 'Habilitar para exibir este especialista na lista pública',
      initialValue: true,
    }),
    defineField({
      name: 'acceptsNewPatients',
      title: 'Aceita novos pacientes',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informações de contato',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
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
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Destacado',
      type: 'boolean',
      description: 'Marque para destacar este especialista na página inicial',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortBio',
      media: 'image',
    },
  },
}) 