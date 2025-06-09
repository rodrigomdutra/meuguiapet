import type {StructureBuilder} from 'sanity/structure'

// Define the singleton document types
const SINGLETON_TYPES = ['siteSettings']

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Conteúdo')
    .items([
      // Singleton for site settings
      S.listItem()
        .title('Configurações do Site')
        .icon(() => '⚙️')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // Articles section with filtered views
      S.listItem()
        .title('Artigos')
        .icon(() => '📄')
        .child(
          S.list()
            .title('Artigos')
            .items([
              S.listItem()
                .title('Todos os artigos')
                .child(
                  S.documentList()
                    .title('Todos os artigos')
                    .filter('_type == "article"')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('Artigos em destaque')
                .child(
                  S.documentList()
                    .title('Artigos em destaque')
                    .filter('_type == "article" && featured == true')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('Artigos revisados por especialistas')
                .child(
                  S.documentList()
                    .title('Artigos revisados por especialistas')
                    .filter('_type == "article" && isExpertReviewed == true')
                    .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
                ),
              S.listItem()
                .title('Por categoria')
                .child(
                  S.documentTypeList('category')
                    .title('Categorias')
                    .child(categoryId =>
                      S.documentList()
                        .title('Artigos')
                        .filter('_type == "article" && category._ref == $categoryId')
                        .params({categoryId})
                    )
                ),
            ])
        ),

      // Categories
      S.listItem()
        .title('Categorias')
        .icon(() => '🏷️')
        .child(
          S.list()
            .title('Categorias')
            .items([
              S.listItem()
                .title('Todas as categorias')
                .child(
                  S.documentList()
                    .title('Todas as categorias')
                    .filter('_type == "category"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('Categorias destacadas')
                .child(
                  S.documentList()
                    .title('Categorias destacadas')
                    .filter('_type == "category" && featured == true')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
            ])
        ),

      // Specialists
      S.listItem()
        .title('Especialistas')
        .icon(() => '👩‍⚕️')
        .child(
          S.list()
            .title('Especialistas')
            .items([
              S.listItem()
                .title('Todos os especialistas')
                .child(
                  S.documentList()
                    .title('Todos os especialistas')
                    .filter('_type == "specialist"')
                ),
              S.listItem()
                .title('Especialistas destacados')
                .child(
                  S.documentList()
                    .title('Especialistas destacados')
                    .filter('_type == "specialist" && featured == true')
                ),
              S.listItem()
                .title('Por especialidade')
                .child(
                  S.documentList()
                    .title('Especialistas')
                    .filter('_type == "specialist"')
                    .defaultOrdering([{field: 'name', direction: 'asc'}])
                    .menuItems([
                      S.menuItem()
                        .title('Filtrar por especialidade')
                        .icon(() => '🔍')
                        .action(() => {
                          // This would typically be handled by a custom component
                          // For now, it's just a placeholder
                        }),
                    ])
                ),
            ])
        ),

      // Filter out singleton types from the default document list
      ...S.documentTypeListItems().filter(
        listItem => !SINGLETON_TYPES.includes(listItem.getId() as string)
      ),
    ]) 