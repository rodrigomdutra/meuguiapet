#!/bin/bash

# Cores para saída
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Importação de Conteúdo de Placeholder ===${NC}"
echo -e "${YELLOW}Este script irá importar conteúdo de placeholder para o seu dataset Sanity.${NC}"
echo ""

# Verificar se o token foi fornecido
if [ -z "$SANITY_TOKEN" ]; then
  echo -e "${YELLOW}Token Sanity não encontrado no ambiente.${NC}"
  echo "Você deseja gerar um novo token? (s/n)"
  read response
  
  if [ "$response" = "s" ] || [ "$response" = "S" ]; then
    node scripts/generate-token.js
    exit 0
  else
    echo "Por favor, defina a variável SANITY_TOKEN e execute este script novamente."
    echo "Exemplo: export SANITY_TOKEN=seu_token_aqui"
    exit 1
  fi
fi

echo -e "${GREEN}Iniciando importação de conteúdo...${NC}"
node scripts/import-placeholder-content.js 