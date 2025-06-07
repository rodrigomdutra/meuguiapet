# Prompt para Deployment do meuguia.pet no Vercel

## Visão Geral do Projeto

Você é encarregado de criar a plataforma meuguia.pet, a primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local. O site será construído como uma aplicação Next.js hospedada no Vercel, com foco em performance, SEO programático e experiência de usuário premium.

## Especificações Técnicas

### Stack Tecnológico
- **Framework**: Next.js (última versão estável)
- **Hosting**: Vercel
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS com componentes customizados
- **CMS Headless**: Sanity para gerenciamento de conteúdo
- **Analytics**: Vercel Analytics + Google Analytics 4
- **SEO**: Next SEO com Schema.org markup

### Arquitetura
- Site JAMstack com geração estática (ISR - Incremental Static Regeneration)
- Páginas programáticas geradas via templates dinâmicos
- API routes para recursos interativos (calculadoras, ferramentas)
- Banco de dados serverless (Vercel Postgres) para recursos como carteira de vacinação digital

## Estrutura do Site

### Página Inicial
- Hero section com benefícios claros do conteúdo brasileiro e cientificamente validado
- Navegação por categorias principais (saúde, alimentação, comportamento, etc.)
- Destaques de conteúdo popular e sazonal
- Seção para ferramenta gratuita (Carteira de Vacinação Pet Digital - versão free)

### Páginas de Categoria
- Templates para 10 categorias principais conforme pesquisa de palavras-chave:
  - Cuidados com Cães e Gatos
  - Rações e Alimentação
  - Acessórios e Brinquedos
  - Banho e Tosa
  - Saúde e Vacinação
  - Adestramento e Comportamento
  - Nomes de Pets
  - Quanto Custa Ter um Animal
  - Pets Exóticos
  - Tendências Pet Friendly

### Páginas Programáticas
- Templates dinâmicos para os 6 tipos de conteúdo programático:
  1. Guias Informativos (240 páginas planejadas)
  2. Comparativos de Produtos (320 páginas)
  3. Páginas por Localidade (540 páginas)
  4. Listas e Galerias (180 páginas)
  5. Calculadoras e Ferramentas (45 páginas)
  6. Páginas de Preços (120 páginas)

### Ferramentas Interativas
- **Carteira de Vacinação Pet Digital**:
  - Versão Free: controle básico de vacinas e procedimentos essenciais
  - Versão Premium: recursos avançados como acompanhamento de peso, histórico médico completo
- **Calculadoras**:
  - Calculadora de Nutrição Personalizada
  - Planejador Financeiro Pet
  - Gerador de Plano de Treinamento

## Design e Experiência do Usuário

### Identidade Visual
- **Paleta de Cores**:
  - Primárias: Verde-natureza (#3A7D44) e Azul-confiança (#2C5784)
  - Secundárias: Amarelo-solar (#F9CB40) e Laranja-energia (#E86A33)
  - Tons neutros: Areia (#E5D4B3) e Cinza-pedra (#4A5859)

- **Tipografia**:
  - Títulos: Fonte moderna e amigável (ex: Montserrat)
  - Corpo: Fonte altamente legível para leitura prolongada (ex: Source Sans Pro)

- **Elementos Visuais**:
  - Fotografias de pets brasileiros (não stock photos)
  - Ilustrações limpas para explicações técnicas
  - Infográficos com dados contextualizados para o Brasil

### Características de UX
- Design responsivo e mobile-first
- Carregamento rápido (Core Web Vitals otimizados)
- Navegação intuitiva com breadcrumbs e hierarquia clara
- Alta acessibilidade (WCAG AA)

## Funcionalidades Especiais

### Sistema de Usuários
- Cadastro simples para acessar ferramentas gratuitas
- Sistema de upgrade para versões premium das ferramentas
- Painel do usuário para gerenciar seus pets e informações

### Monetização
- Integração com sistemas de afiliados brasileiros (Lomadee, Awin)
- Sistema de anúncios nativos contextuais
- Paywall para produtos digitais premium
- Marketplace de serviços locais com sistema de comissão

### SEO Avançado
- URLs amigáveis e semânticas
- Schema markup específico para cada tipo de conteúdo
- Meta tags dinâmicas otimizadas por tipo de página
- Sitemap XML automatizado e robots.txt configurado
- Integração com Google Search Console

## Diferenciais Técnicos

1. **Contextualização Local**: Sistema para adaptar conteúdo por região do Brasil
2. **Validação por Especialistas**: Perfis de veterinários parceiros com badges em conteúdos revisados
3. **Conteúdo Visual Rico**: CDN otimizado para imagens e vídeos de alta qualidade
4. **Infraestrutura Escalável**: Preparado para suportar 500.000+ visitantes mensais

## Cronograma de Desenvolvimento

1. **Fase 1 (4 semanas)**: Desenvolvimento de arquitetura base, design system e templates principais
2. **Fase 2 (4 semanas)**: Implementação do CMS, ferramentas interativas básicas e primeiros conteúdos
3. **Fase 3 (4 semanas)**: Lançamento de MVP com 300 páginas de conteúdo e ferramentas gratuitas
4. **Fase 4 (contínuo)**: Expansão programática para atingir 1.445 páginas em 12 meses

## Requisitos para Deployment no Vercel

- Repositório GitHub conectado ao Vercel para CI/CD
- Configuração de variáveis de ambiente para APIs e serviços
- Domínio personalizado: meuguia.pet
- Configuração de HTTPS e redirecionamentos
- Monitoramento e alertas de performance

## Insights de Mercado para Orientação

### Oportunidades Identificadas
- Conteúdo sobre "banho e tosa" tem 74.000 buscas/mês
- Termos de saúde pet têm baixa competição e alto interesse
- Nomes de pets têm excelente relação volume/competição
- 90% dos concorrentes carecem de contexto brasileiro
- 83% não apresentam validação científica
- 58% oferecem experiência visual pobre

### Público-Alvo
- Predominantemente mulheres (65%)
- 25-45 anos
- Regiões metropolitanas do Brasil
- Classes B e C
- Alta conectividade digital
- Principais tomadores de decisão sobre pets no lar

Esta especificação fornece todas as informações necessárias para construir o meuguia.pet no Vercel, com foco em diferenciação de mercado, qualidade técnica e potencial de crescimento programático.
