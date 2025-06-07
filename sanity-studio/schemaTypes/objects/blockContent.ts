import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for content in the blog. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'body',
 *    title: 'Body',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Conteúdo rico',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
        {title: 'Check', value: 'check'},
      ],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
          {title: 'Highlight', value: 'highlight'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Abrir em nova aba',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Link interno',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Referência',
                to: [
                  {type: 'article'},
                  {type: 'category'},
                  {type: 'specialist'},
                ],
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto alternativo',
          description: 'Importante para SEO e acessibilidade',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Legenda',
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Destaque',
      fields: [
        {
          name: 'icon',
          type: 'string',
          title: 'Ícone',
          options: {
            list: [
              {title: 'Nenhum', value: 'none'},
              {title: 'Info', value: 'info'},
              {title: 'Aviso', value: 'warning'},
              {title: 'Erro', value: 'error'},
              {title: 'Sucesso', value: 'success'},
              {title: 'Dica', value: 'tip'},
            ],
          },
          initialValue: 'info',
        },
        {
          name: 'content',
          type: 'array',
          title: 'Conteúdo',
          of: [
            {
              type: 'block',
              styles: [{title: 'Normal', value: 'normal'}],
              lists: [],
              marks: {
                decorators: [
                  {title: 'Strong', value: 'strong'},
                  {title: 'Emphasis', value: 'em'},
                ],
                annotations: [],
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          title: 'icon',
          subtitle: 'content.0.children.0.text',
        },
        prepare({title, subtitle}) {
          return {
            title: `Destaque: ${title}`,
            subtitle: subtitle || '',
          }
        },
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'youtube',
      title: 'YouTube',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'URL do YouTube',
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Legenda',
        },
      ],
      preview: {
        select: {
          title: 'caption',
          subtitle: 'url',
        },
      },
    }),
    defineArrayMember({
      type: 'object',
      name: 'table',
      title: 'Tabela',
      fields: [
        {
          name: 'rows',
          type: 'array',
          title: 'Linhas',
          of: [
            {
              type: 'object',
              name: 'row',
              title: 'Linha',
              fields: [
                {
                  name: 'cells',
                  type: 'array',
                  title: 'Células',
                  of: [{type: 'string'}],
                },
              ],
              preview: {
                select: {
                  title: 'cells',
                },
                prepare({title}) {
                  return {
                    title: title ? title.join(', ') : '',
                  }
                },
              },
            },
          ],
        },
        {
          name: 'hasHeaderRow',
          type: 'boolean',
          title: 'Possui linha de cabeçalho',
          initialValue: true,
        },
      ],
      preview: {
        select: {
          rows: 'rows',
        },
        prepare({rows}) {
          return {
            title: 'Tabela',
            subtitle: rows ? `${rows.length} linha(s)` : 'Sem linhas',
          }
        },
      },
    }),
  ],
}) 