#!/usr/bin/env node
const { execSync } = require('child_process')

console.log('Gerando token para importação de conteúdo...')
console.log('Por favor, siga as instruções no navegador que será aberto.')
console.log('Após criar o token, copie-o e use-o para executar o script de importação.')

try {
  execSync('npx @sanity/cli login', { stdio: 'inherit' })
  console.log('\n\nAgora execute o comando abaixo para criar um token:')
  console.log('npx @sanity/cli manage')
  console.log('\n1. Navegue até seu projeto')
  console.log('2. Vá para "API"')
  console.log('3. Selecione "Tokens"')
  console.log('4. Clique em "Add API token"')
  console.log('5. Dê um nome como "Import Token" e selecione permissões de "Editor"')
  console.log('6. Copie o token gerado')
  
  console.log('\n\nPara importar o conteúdo, execute:')
  console.log('export SANITY_TOKEN=seu_token_aqui')
  console.log('node scripts/import-placeholder-content.js')
} catch (error) {
  console.error('Erro ao executar o comando:', error)
} 