import type {StructureBuilder} from 'sanity/structure'

// Define the singleton document types
const SINGLETON_TYPES = ['siteSettings']

// Define pet types for filtering
const PET_TYPES = ['Cães', 'Gatos', 'Aves', 'Peixes', 'Roedores', 'Répteis', 'Outros']

// Função para normalizar os IDs (remover acentos e caracteres especiais)
const normalizeId = (str: string) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Conteúdo')
    .items([
      // Singleton for site settings
      S.listItem()
        .title('Configurações do Site')
        .icon(() => '⚙️')
        .id('siteSettings-singleton')
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
        .id('articles-section')
        .child(
          S.list()
            .title('Artigos')
            .items([
              S.listItem()
                .title('Todos os artigos')
                .id('all-articles')
                .child(
                  S.documentList()
                    .title('Todos os artigos')
                    .filter('_type == "article"')
                ),
              S.divider(),
              S.listItem()
                .title('Artigos por categoria')
                .id('articles-by-category')
                .child(
                  S.documentTypeList('category')
                    .title('Artigos por categoria')
                    .child(categoryId =>
                      S.documentList()
                        .title('Artigos')
                        .filter('_type == "article" && category._ref == $categoryId')
                        .params({categoryId})
                    )
                ),
              S.divider(),
              S.listItem()
                .title('Artigos por tipo de pet')
                .id('articles-by-pet-type')
                .child(
                  S.list()
                    .title('Tipos de pet')
                    .items(
                      PET_TYPES.map(petType =>
                        S.listItem()
                          .title(petType)
                          .id(`articles-pet-type-${normalizeId(petType)}`)
                          .child(
                            S.documentList()
                              .title(`Artigos sobre ${petType}`)
                              .filter('_type == "article" && $petType in petTypes')
                              .params({petType})
                          )
                      )
                    )
                ),
              S.divider(),
              S.listItem()
                .title('Artigos destacados')
                .id('featured-articles')
                .child(
                  S.documentList()
                    .title('Artigos destacados')
                    .filter('_type == "article" && featured == true')
                ),
            ])
        ),

      // Categories
      S.listItem()
        .title('Categorias')
        .id('categories')
        .child(S.documentTypeList('category').title('Categorias')),

      // Specialists
      S.listItem()
        .title('Especialistas')
        .icon(() => '👨‍⚕️')
        .id('specialists-section')
        .child(
          S.list()
            .title('Especialistas')
            .items([
              S.listItem()
                .title('Todos os especialistas')
                .id('all-specialists')
                .child(
                  S.documentList()
                    .title('Todos os especialistas')
                    .filter('_type == "specialist"')
                ),
              S.divider(),
              S.listItem()
                .title('Especialistas por tipo de pet')
                .id('specialists-by-pet-type')
                .child(
                  S.list()
                    .title('Tipos de pet')
                    .items(
                      PET_TYPES.map(petType =>
                        S.listItem()
                          .title(petType)
                          .id(`specialists-pet-type-${normalizeId(petType)}`)
                          .child(
                            S.documentList()
                              .title(`Especialistas em ${petType}`)
                              .filter('_type == "specialist" && $petType in petExpertise')
                              .params({petType})
                          )
                      )
                    )
                ),
            ])
        ),
    ]) 