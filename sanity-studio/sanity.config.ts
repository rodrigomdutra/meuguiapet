import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './structure/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'meuguia.pet',

  projectId: 'lva42j9i',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure,
      // Filter out singleton document types from the global "New document" menu
      defaultDocumentNode: (S, {schemaType}) => {
        // For singleton types, make the document read-only
        if (schemaType === 'siteSettings') {
          return S.document().views([S.view.form()])
        }
        return S.document()
      },
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
}) 