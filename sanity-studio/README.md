# Sanity Studio - meuguia.pet

Este é o Sanity Studio para o projeto meuguia.pet, uma plataforma de conteúdo sobre cuidados com animais de estimação.

## Estrutura do Projeto

O projeto segue as melhores práticas do Sanity:

### Estrutura de Diretórios

```
sanity-studio/
├── schemaTypes/           # Definições de esquemas
│   ├── documents/         # Tipos de documentos
│   ├── objects/           # Tipos de objetos reutilizáveis
│   └── index.ts           # Exportação de esquemas
├── structure/             # Configuração da estrutura do desk
│   └── deskStructure.ts   # Estrutura personalizada do desk
├── scripts/               # Scripts utilitários
│   ├── import-content.sh  # Script para importar conteúdo de placeholder
│   └── README.md          # Documentação dos scripts
└── sanity.config.ts       # Configuração principal do Sanity
```

### Tipos de Documentos

- **article**: Artigos de conteúdo
- **category**: Categorias para organização de conteúdo
- **specialist**: Especialistas e veterinários
- **siteSettings**: Configurações globais do site (singleton)

## Conteúdo de Placeholder

Para facilitar o desenvolvimento e testes, este projeto inclui scripts para importar conteúdo de placeholder no Sanity Studio.

### Como importar conteúdo de placeholder

1. Certifique-se de que você está no diretório `sanity-studio`
2. Execute o script de importação:

```bash
./scripts/import-content.sh
```

3. Se você não tiver um token do Sanity configurado, o script irá guiá-lo na criação de um.

4. Após a importação, você terá acesso a:
   - Configurações do site
   - Categorias: Cães, Gatos, Alimentação, Saúde
   - Especialistas: Dra. Ana Silva, Dr. Carlos Santos
   - Artigos: Guia de Alimentação para Cães, Comportamento dos Gatos, Primeiros Socorros

### Notas importantes

- O conteúdo de placeholder substitui documentos existentes com os mesmos IDs
- As referências de imagem precisam ser substituídas por assets reais
- Para ambientes de produção, considere criar um dataset separado para testes

## Características Implementadas

1. **Estrutura de Desk Personalizada**:
   - Visualizações filtradas para artigos, categorias e especialistas
   - Documento singleton para configurações do site
   - Organização hierárquica de conteúdo

2. **Esquemas Ricos**:
   - Suporte para conteúdo rico com blocos personalizados
   - Validação de campos para garantir qualidade do conteúdo
   - Campos para SEO e metadados

3. **Visualização Prévia**:
   - Configurações de preview personalizadas para cada tipo de documento

## Desenvolvimento

### Instalação

```bash
npm install
```

### Execução Local

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
```

## Boas Práticas

- Use o Structure Builder para organizar o conteúdo de forma intuitiva
- Mantenha os esquemas bem documentados
- Utilize validações para garantir a integridade dos dados
- Crie tipos de objetos reutilizáveis para componentes comuns 