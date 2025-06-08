// Script para criar categorias no Sanity usando API REST

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Configurações do Sanity
const PROJECT_ID = 'lva42j9i';
const DATASET = 'production';
const API_VERSION = '2023-06-01';

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

// Função para fazer uma requisição HTTP
function httpRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            resolve(data);
          }
        } else {
          reject(new Error(`Status Code: ${res.statusCode}, Data: ${data}`));
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    if (postData) {
      req.write(JSON.stringify(postData));
    }
    req.end();
  });
}

// Função para verificar se uma categoria existe
async function checkCategoryExists(slug, token) {
  const options = {
    hostname: 'api.sanity.io',
    port: 443,
    path: `/v${API_VERSION}/data/query/${DATASET}?query=*[_type == "category" && slug.current == "${slug}"][0]`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  try {
    const result = await httpRequest(options);
    return result.result;
  } catch (error) {
    console.error(`Erro ao verificar categoria: ${error.message}`);
    return null;
  }
}

// Função para criar uma categoria
async function createCategory(category, token) {
  const options = {
    hostname: 'api.sanity.io',
    port: 443,
    path: `/v${API_VERSION}/data/mutate/${DATASET}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  const mutations = [
    {
      create: category
    }
  ];

  try {
    const result = await httpRequest(options, { mutations });
    console.log(`Categoria "${category.title}" criada com sucesso.`);
    return result;
  } catch (error) {
    console.error(`Erro ao criar categoria: ${error.message}`);
    return null;
  }
}

// Função para atualizar uma categoria
async function updateCategory(id, category, token) {
  const options = {
    hostname: 'api.sanity.io',
    port: 443,
    path: `/v${API_VERSION}/data/mutate/${DATASET}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  const mutations = [
    {
      patch: {
        id: id,
        set: category
      }
    }
  ];

  try {
    const result = await httpRequest(options, { mutations });
    console.log(`Categoria "${category.title}" atualizada com sucesso.`);
    return result;
  } catch (error) {
    console.error(`Erro ao atualizar categoria: ${error.message}`);
    return null;
  }
}

// Função principal
async function main() {
  console.log('='.repeat(80));
  console.log('CRIADOR DE CATEGORIAS PARA MEUGUIA.PET');
  console.log('='.repeat(80));
  console.log('\nEste script criará categorias para o seu projeto Sanity.\n');

  // Obter token de variável de ambiente ou arquivo
  let token = process.env.SANITY_TOKEN;
  
  if (!token) {
    console.log('Token não encontrado na variável de ambiente SANITY_TOKEN.');
    console.log('Para obter um token, acesse:');
    console.log('https://www.sanity.io/manage/project/lva42j9i/api');
    console.log('\nVá para a seção "API" > "Tokens" > "Add API token"');
    console.log('Crie um token com permissões "Editor" e salve-o em um arquivo chamado .sanity-token no diretório atual.\n');
    
    try {
      const tokenPath = path.join(process.cwd(), '.sanity-token');
      if (fs.existsSync(tokenPath)) {
        token = fs.readFileSync(tokenPath, 'utf8').trim();
        console.log('Token encontrado no arquivo .sanity-token.');
      } else {
        console.error('Arquivo .sanity-token não encontrado.');
        process.exit(1);
      }
    } catch (error) {
      console.error('Erro ao ler o token:', error);
      process.exit(1);
    }
  }

  // Criar categorias
  console.log('Iniciando criação de categorias...\n');
  
  for (const category of categories) {
    try {
      // Verificar se a categoria já existe
      const existingCategory = await checkCategoryExists(category.slug.current, token);
      
      if (existingCategory) {
        console.log(`Categoria "${category.title}" já existe. Atualizando...`);
        await updateCategory(existingCategory._id, category, token);
      } else {
        console.log(`Criando categoria "${category.title}"...`);
        await createCategory(category, token);
      }
    } catch (error) {
      console.error(`Erro ao processar categoria "${category.title}":`, error);
    }
  }
  
  console.log('\n='.repeat(80));
  console.log('CATEGORIAS CRIADAS COM SUCESSO!');
  console.log('='.repeat(80));
  console.log('\nAgora você pode verificar as categorias no Sanity Studio:');
  console.log('1. Acesse https://lva42j9i.api.sanity.io/v1/graphql/production/default');
  console.log('2. Ou execute "npm run dev" no diretório sanity-studio e acesse http://localhost:3333/');
}

// Executar o script
main().catch(error => {
  console.error('Erro:', error);
  process.exit(1);
}); 