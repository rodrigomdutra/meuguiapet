# Prompt para Desenvolvimento do meuguia.pet com Vercel AI

## Contexto do Projeto

Você é o desenvolvedor líder encarregado de construir o meuguia.pet, a primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local. Nosso objetivo é criar um site de alta performance com SEO otimizado usando Next.js, Vercel e Sanity como CMS headless.

## Especificações Técnicas

### Stack
- **Framework**: Next.js (App Router)
- **Linguagem**: TypeScript
- **Estilo**: Tailwind CSS com componentes personalizados
- **CMS**: Sanity.io (já configurado)
- **Hospedagem**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics 4

## Esquema de Conteúdo do Sanity

O esquema do Sanity já está configurado com os seguintes tipos de documentos:

1. **Artigos (article)**: 
   - Possui título, slug, resumo, imagem principal, categoria
   - Suporta revisão por especialistas (isExpertReviewed, reviewedBy)
   - Contém campos SEO personalizados

2. **Categorias (category)**:
   - Inclui título, slug, descrição, ícone, imagem de capa
   - Suporta ordem de exibição e destaque na home

3. **Especialistas (specialist)**:
   - Contém nome, slug, foto, biografia
   - Armazena credenciais profissionais (CRMV)
   - Inclui informações de contato e redes sociais

4. **Conteúdo Rico (blockContent)**:
   - Suporta diversos tipos de conteúdo formatado
   - Inclui imagens, destaques, vídeos do YouTube, tabelas
   - Permite links internos e externos

## Requisitos Funcionais

1. **Página Inicial**:
   - Hero section destacando conteúdo brasileiro e cientificamente validado
   - Navegação por categorias principais
   - Destaques de conteúdo popular e sazonal
   - Seção para ferramentas gratuitas

2. **Páginas de Categorias**:
   - Listar artigos por categoria
   - Mostrar descrição e imagem da categoria
   - Implementar paginação e filtros

3. **Páginas de Artigos**:
   - Renderizar o conteúdo rico do Sanity
   - Exibir badge de "Revisado por especialista" quando aplicável
   - Mostrar informações do especialista revisor
   - Implementar esquema de SEO estruturado (Schema.org)

4. **Páginas de Especialistas**:
   - Perfil detalhado com biografia e credenciais
   - Listar artigos revisados pelo especialista
   - Incluir informações de contato e redes sociais

5. **Ferramentas Interativas**:
   - Carteira de Vacinação Pet Digital (versão gratuita)
   - Calculadoras específicas para pets (nutrição, finanças)

## Requisitos Técnicos

1. **Performance**:
   - Implementar geração estática com ISR (Incremental Static Regeneration)
   - Otimizar Core Web Vitals e pontuação no Lighthouse
   - Usar carregamento de imagens otimizado

2. **SEO**:
   - Implementar meta tags dinâmicas baseadas nos dados do Sanity
   - Criar sitemap.xml e robots.txt automatizados
   - Utilizar Schema.org para rich snippets
   - Implementar URLs amigáveis baseadas nos slugs

3. **Responsividade**:
   - Design mobile-first
   - Adaptação para todos os dispositivos
   - Menu de navegação otimizado para mobile

4. **Acessibilidade**:
   - Seguir diretrizes WCAG AA
   - Usar textos alternativos para imagens
   - Garantir contraste adequado e navegação via teclado

## Identidade Visual

- **Paleta de Cores**:
  - Primárias: Verde (#3A7D44) e Azul (#2C5784)
  - Secundárias: Amarelo (#F9CB40) e Laranja (#E86A33)
  - Neutros: Areia (#E5D4B3) e Cinza (#4A5859)

- **Tipografia**:
  - Títulos: Montserrat
  - Corpo: Source Sans Pro

## Instruções para Desenvolvimento

1. Configure o projeto Next.js com App Router e Tailwind CSS
2. Integre o Sanity como fonte de dados utilizando o cliente SDK
3. Desenvolva os componentes principais (layout, cabeçalho, rodapé)
4. Implemente as páginas dinâmicas baseadas nos tipos de documentos do Sanity
5. Crie os templates para renderização do conteúdo rico (blockContent)
6. Desenvolva as ferramentas interativas como componentes isolados
7. Otimize o SEO e a performance conforme os requisitos
8. Configure a integração com Vercel Analytics e Google Analytics 4

## Entregáveis

1. Código fonte completo no GitHub
2. Site implantado na Vercel
3. Documentação técnica para manutenção
4. Guia de uso para gerenciamento de conteúdo no Sanity

Por favor, desenvolva este projeto utilizando as melhores práticas de desenvolvimento web moderno, garantindo código limpo, modular e bem documentado. 