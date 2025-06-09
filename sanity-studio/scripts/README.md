# Sanity Studio Scripts

Este diretório contém scripts úteis para o gerenciamento do conteúdo do Sanity Studio.

## Import Placeholder Content

O script `import-placeholder-content.js` importa dados de placeholder para o dataset de produção do Sanity. Isso é útil para testar e validar o modelo de conteúdo.

### Pré-requisitos

1. Você precisa ter um token de API do Sanity com permissões de escrita.
2. O arquivo `placeholder-content.ndjson` deve estar presente no diretório raiz do Sanity Studio.

### Como usar

1. Obtenha um token de API do Sanity em [https://sanity.io/manage](https://sanity.io/manage) navegando até seu projeto, depois em "API" e "Tokens".

2. Execute o script com o token como variável de ambiente:

```bash
# No macOS/Linux
export SANITY_TOKEN=seu_token_aqui
node scripts/import-placeholder-content.js

# No Windows (PowerShell)
$env:SANITY_TOKEN="seu_token_aqui"
node scripts/import-placeholder-content.js
```

3. O script importará todos os documentos definidos no arquivo NDJSON, substituindo documentos existentes com os mesmos IDs.

### Notas importantes

- Este script substitui documentos existentes com os mesmos IDs. Use com cuidado em ambientes de produção.
- As referências de imagem no arquivo NDJSON apontam para assets que podem não existir. Você precisará substituí-los por assets reais ou fazer upload das imagens correspondentes.
- Para ambientes de produção, considere criar um dataset separado para testes. 