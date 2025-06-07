# MeuGuia.Pet

Um portal de conteúdo sobre pets integrando Sanity CMS e Next.js, voltado para o mercado brasileiro.

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

- **/frontend**: Aplicação Next.js com App Router
- **/sanity-studio**: CMS Sanity para gerenciamento de conteúdo

## Tecnologias Utilizadas

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **CMS**: Sanity Studio v3
- **Implantação**: Vercel (frontend) e Sanity Cloud (CMS)

## Configuração de Desenvolvimento

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn
- Conta na Sanity.io

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

O site estará disponível em `http://localhost:3000`

### Sanity Studio

```bash
cd sanity-studio
npm install
npm run dev
```

O Sanity Studio estará disponível em `http://localhost:3333`

## Modelos de Conteúdo

O projeto inclui os seguintes modelos de conteúdo no Sanity:

- **Artigos**: Conteúdo principal do portal
- **Categorias**: Organização dos artigos por temas
- **Especialistas**: Veterinários e profissionais que validam o conteúdo

## Implantação

Para implantar o projeto:

1. Configure suas variáveis de ambiente conforme `.env.example`
2. Implante o frontend na Vercel
3. Implante o Sanity Studio usando `sanity deploy`

## Recursos Adicionais

- Documentação Tailwind CSS: `frontend/docs/tailwind-guidelines.md`
- Exemplos de componentes: `/frontend/src/app/exemplos/page.tsx`

## Licença

Este projeto é proprietário e de uso restrito. 