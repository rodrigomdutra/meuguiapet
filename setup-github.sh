#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}====================================================${NC}"
echo -e "${GREEN}Setting up GitHub repository for meuguia.pet...${NC}"
echo -e "${BLUE}====================================================${NC}"

# Check if git is initialized
if [ ! -d .git ]; then
  echo -e "${GREEN}Initializing git repository...${NC}"
  git init
  git add .
  git commit -m "Initial commit: Setup meuguia.pet project"
fi

# Ask for GitHub details
echo -e "${GREEN}Enter your GitHub username:${NC}"
read github_username

echo -e "${GREEN}Enter the repository name (default: meuguia-pet):${NC}"
read repo_name
repo_name=${repo_name:-meuguia-pet}

# Ask if the repository already exists
echo -e "${GREEN}Does the repository already exist on GitHub? (y/n)${NC}"
read repo_exists

if [ "$repo_exists" = "y" ]; then
  echo -e "${GREEN}Connecting to existing repository...${NC}"
else
  echo -e "${BLUE}====================================================${NC}"
  echo -e "${GREEN}To create a new repository on GitHub:${NC}"
  echo -e "${BLUE}====================================================${NC}"
  echo -e "1. Go to https://github.com/new"
  echo -e "2. Repository name: ${repo_name}"
  echo -e "3. Description: meuguia.pet - Plataforma de conteúdo pet brasileira"
  echo -e "4. Set as Public or Private as preferred"
  echo -e "5. Do NOT initialize with README, .gitignore, or license"
  echo -e "6. Click 'Create repository'"
  echo -e "${BLUE}====================================================${NC}"
  
  echo -e "${GREEN}Have you created the repository? (y/n)${NC}"
  read created_repo
  
  if [ "$created_repo" != "y" ]; then
    echo -e "${RED}Please create the repository before continuing.${NC}"
    exit 1
  fi
fi

# Setup remote origin
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/${github_username}/${repo_name}.git"

# Add .env.local to .gitignore if not already present
if ! grep -q "^.env.local$" .gitignore; then
  echo ".env.local" >> .gitignore
  echo ".env.development.local" >> .gitignore
  echo ".env.production.local" >> .gitignore
  git add .gitignore
  git commit -m "Add environment files to gitignore"
fi

# Create example .env.local file for frontend
mkdir -p frontend/.env
cat > frontend/.env.local.example << EOL
# Sanity.io Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03

# Application Configuration
NEXT_PUBLIC_SITE_URL=https://meuguia.pet
EOL

echo -e "${GREEN}Created frontend/.env.local.example${NC}"

# Push to GitHub
echo -e "${GREEN}Push to GitHub? (y/n)${NC}"
read should_push

if [ "$should_push" = "y" ]; then
  git push -u origin main
  echo -e "${GREEN}Repository pushed to GitHub!${NC}"
  
  # Vercel deployment instructions
  echo -e "${BLUE}====================================================${NC}"
  echo -e "${GREEN}Next steps for Vercel deployment:${NC}"
  echo -e "${BLUE}====================================================${NC}"
  echo -e "1. Go to https://vercel.com/new"
  echo -e "2. Import your GitHub repository: ${github_username}/${repo_name}"
  echo -e "3. Configure the project:"
  echo -e "   - Root Directory: frontend"
  echo -e "   - Framework Preset: Next.js"
  echo -e "   - Environment Variables: Add the values from frontend/.env.local.example"
  echo -e "4. Click 'Deploy'"
  echo -e "${BLUE}====================================================${NC}"
else
  echo -e "${GREEN}OK! You can push to GitHub later with:${NC}"
  echo -e "git push -u origin main"
fi

echo -e "${GREEN}GitHub setup complete!${NC}" 