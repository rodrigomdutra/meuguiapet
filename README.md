# meuguia.pet

A primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local.

## 🚀 Stack Tecnológico

- **Frontend**: Next.js 14 (App Router) com TypeScript e Tailwind CSS
- **UI Components**: shadcn/ui
- **CMS**: Sanity.io
- **Deployment**: Vercel

## 📂 Estrutura do Projeto

```
meuguia.pet/
├── frontend/           # Aplicação Next.js
│   ├── src/
│   │   ├── app/        # Rotas e páginas
│   │   ├── components/ # Componentes React
│   │   ├── lib/        # Utilitários e cliente Sanity
│   │   └── styles/     # Estilos globais
│   └── public/         # Arquivos estáticos
├── sanity-studio/      # Painel administrativo Sanity
└── assets/            # Arquivos de design e recursos
```

## 🛠️ Setup do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js 18+ e npm/yarn
- Conta no Sanity.io
- Conta na Vercel (para deploy)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/meuguia-pet.git
cd meuguia-pet
```

2. Instale as dependências do frontend:

```bash
cd frontend
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env.local` na pasta `frontend` com o seguinte conteúdo:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
```

4. Instale as dependências do Sanity Studio:

```bash
cd ../sanity-studio
npm install
```

5. Execute o frontend em modo de desenvolvimento:

```bash
cd ../frontend
npm run dev
```

6. Execute o Sanity Studio em modo de desenvolvimento:

```bash
cd ../sanity-studio
npm run dev
```

## 🌐 Deploy

### Vercel

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente necessárias
3. Selecione a pasta `frontend` como diretório raiz para o projeto Next.js
4. Configure o Sanity Studio para deploy (opcional)

## 🧩 Principais Recursos

- **Design Responsivo**: Interface adaptada para dispositivos móveis e desktop
- **SEO Otimizado**: Meta tags e estrutura otimizadas para indexação
- **Performance**: Next.js App Router com renderização no servidor para desempenho rápido
- **Conteúdo Gerenciável**: Sanity CMS para edição de conteúdo sem código
- **Tipografia Moderna**: Montserrat e Source Sans Pro para melhor legibilidade
- **Paleta de Cores Personalizada**: Combinações verde, azul, amarelo e laranja que refletem o mundo pet

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 👥 Colaboradores

- [Seu Nome](https://github.com/seu-usuario) - Desenvolvedor Frontend
- [Nome do Designer](https://github.com/designer) - UI/UX Designer

---

Desenvolvido com ❤️ para a comunidade pet brasileira. 