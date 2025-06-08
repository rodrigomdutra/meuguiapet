// Script para criar categorias no Sanity
// Execute com: SANITY_TOKEN=seu_token_aqui node scripts/create-categories.js

const { createClient } = require('@sanity/client');

// Verifica se o token foi fornecido
if (!process.env.SANITY_TOKEN) {
  console.error('⚠️ Erro: Token não fornecido!');
  console.error('Execute o script com o token como variável de ambiente:');
  console.error('SANITY_TOKEN=seu_token_aqui node scripts/create-categories.js');
  process.exit(1);
}

// Configure o cliente Sanity com suas credenciais
const client = createClient({
  projectId: 'lva42j9i',
  dataset: 'production',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2023-06-01',
});

// Lista de categorias para criar
const categories = [
  {
    _type: 'category',
    title: 'Saúde e Bem-estar',
    slug: { _type: 'slug', current: 'saude-bem-estar' },
    description: 'Dicas e informações sobre cuidados de saúde, prevenção de doenças e bem-estar do seu pet.',
    order: 10,
    featured: true,
  },
  {
    _type: 'category',
    title: 'Alimentação',
    slug: { _type: 'slug', current: 'alimentacao' },
    description: 'Tudo sobre nutrição adequada, dietas e alimentos saudáveis para diferentes tipos de pets.',
    order: 20,
    featured: true,
  },
  {
    _type: 'category',
    title: 'Comportamento',
    slug: { _type: 'slug', current: 'comportamento' },
    description: 'Entenda o comportamento do seu pet, dicas de treinamento e como lidar com problemas comportamentais.',
    order: 30,
    featured: true,
  },
  {
    _type: 'category',
    title: 'Raças',
    slug: { _type: 'slug', current: 'racas' },
    description: 'Conheça as características, temperamento e necessidades específicas de diferentes raças.',
    order: 40,
    featured: false,
  },
  {
    _type: 'category',
    title: 'Cuidados Básicos',
    slug: { _type: 'slug', current: 'cuidados-basicos' },
    description: 'Guias para banho, tosa, higiene e cuidados essenciais do dia a dia.',
    order: 50,
    featured: true,
  },
  {
    _type: 'category',
    title: 'Adoção',
    slug: { _type: 'slug', current: 'adocao' },
    description: 'Informações sobre o processo de adoção, como escolher o pet ideal e preparar seu lar.',
    order: 60,
    featured: false,
  },
  {
    _type: 'category',
    title: 'Produtos e Acessórios',
    slug: { _type: 'slug', current: 'produtos-acessorios' },
    description: 'Recomendações de produtos, brinquedos, camas e outros itens essenciais para pets.',
    order: 70,
    featured: false,
  },
  {
    _type: 'category',
    title: 'Emergências',
    slug: { _type: 'slug', current: 'emergencias' },
    description: 'O que fazer em situações de emergência, primeiros socorros e quando procurar ajuda veterinária.',
    order: 80,
    featured: false,
  },
];

// Verificar se o token é válido
async function validateToken() {
  try {
    console.log('Verificando token de API...');
    // Tenta buscar um documento qualquer para ver se o token é válido
    await client.fetch('*[_type == "category"][0]');
    console.log('Token validado com sucesso!');
    return true;
  } catch (error) {
    console.error('Erro ao validar token:', error.message);
    console.error('Verifique se o token é válido e possui permissões de edição.');
    return false;
  }
}

// Função para criar categorias
async function createCategories() {
  console.log('Iniciando criação de categorias...');
  
  // Validar token primeiro
  const isTokenValid = await validateToken();
  if (!isTokenValid) {
    console.error('Não foi possível continuar devido a erro de autenticação.');
    process.exit(1);
  }
  
  for (const category of categories) {
    try {
      // Verificar se a categoria já existe (pelo slug)
      const existingCategory = await client.fetch(
        `*[_type == "category" && slug.current == $slug][0]`,
        { slug: category.slug.current }
      );
      
      if (existingCategory) {
        console.log(`Categoria "${category.title}" já existe. Atualizando...`);
        await client
          .patch(existingCategory._id)
          .set(category)
          .commit();
        console.log(`Categoria "${category.title}" atualizada com sucesso.`);
      } else {
        console.log(`Criando categoria "${category.title}"...`);
        const result = await client.create(category);
        console.log(`Categoria "${category.title}" criada com ID: ${result._id}`);
      }
    } catch (error) {
      console.error(`Erro ao criar/atualizar categoria "${category.title}":`, error.message);
    }
  }
  
  console.log('Processo de criação de categorias concluído.');
}

// Executar a função
createCategories()
  .catch((err) => {
    console.error('Erro:', err);
    process.exit(1);
  }); 