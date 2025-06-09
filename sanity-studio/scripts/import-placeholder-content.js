#!/usr/bin/env node
const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Configure the client
const client = createClient({
  projectId: 'lva42j9i',
  dataset: 'production',
  token: process.env.SANITY_TOKEN, // Get this from sanity.io/manage
  useCdn: false,
})

// Path to the NDJSON file
const filePath = path.join(__dirname, '../placeholder-content.ndjson')

// Read the NDJSON file
const importFile = async () => {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    const documents = data
      .split('\n')
      .filter(Boolean)
      .map(line => JSON.parse(line))

    console.log(`Found ${documents.length} documents to import`)

    // Process each document
    for (const doc of documents) {
      console.log(`Processing document: ${doc._id} (${doc._type})`)
      
      // Create transaction
      const transaction = client.transaction()
      
      // Create or replace document
      transaction.createOrReplace(doc)
      
      // Commit transaction
      await transaction.commit()
      
      console.log(`Imported document: ${doc._id}`)
    }

    console.log('Import completed successfully!')
  } catch (error) {
    console.error('Import failed:', error)
  }
}

// Run the import
importFile() 