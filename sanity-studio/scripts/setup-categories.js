// Script para ajudar a configurar as categorias no Sanity

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('='.repeat(80));
console.log('CONFIGURADOR DE CATEGORIAS PARA MEUGUIA.PET');
console.log('='.repeat(80));
console.log('\nEste script irá guiá-lo na criação de categorias para o seu projeto Sanity.\n');

// Função para obter o token do usuário
async function getToken() {
  console.log('Para criar um token de API Sanity:');
  console.log('1. Acesse https://www.sanity.io/manage/project/lva42j9i/api');
  console.log('2. Vá para a seção "API"');
  console.log('3. Clique em "Tokens"');
  console.log('4. Clique em "Add API token"');
  console.log('5. Dê um nome como "Categories Script"');
  console.log('6. Escolha as permissões "Editor"');
  console.log('7. Copie o token gerado\n');
  
  return new Promise((resolve) => {
    rl.question('Quando tiver copiado o token, cole-o aqui e pressione Enter: ', (token) => {
      resolve(token.trim());
    });
  });
}

// Função principal
async function main() {
  try {
    // Obter o token
    const token = await getToken();
    
    if (!token) {
      console.error('Token não fornecido. Operação cancelada.');
      process.exit(1);
    }
    
    // Executar o script de criação de categorias
    console.log('\nCriando categorias no Sanity...');
    process.env.SANITY_TOKEN = token;
    
    // Método alternativo se a execSync não funcionar com variáveis de ambiente
    try {
      execSync(`SANITY_TOKEN="${token}" node scripts/create-categories.js`, { stdio: 'inherit' });
    } catch (e) {
      // Se falhar, tentamos executar diretamente
      console.log('Tentando método alternativo...');
      require('./create-categories');
    }
    
    console.log('\n='.repeat(80));
    console.log('CATEGORIAS CONFIGURADAS COM SUCESSO!');
    console.log('='.repeat(80));
    console.log('\nAgora você pode verificar as categorias no Sanity Studio:');
    console.log('1. Execute "npm run dev" no diretório sanity-studio');
    console.log('2. Acesse http://localhost:3333/');
    console.log('3. Vá para a seção "Categorias"\n');
    
  } catch (error) {
    console.error('Erro ao executar o script:', error);
  } finally {
    rl.close();
  }
}

main();
