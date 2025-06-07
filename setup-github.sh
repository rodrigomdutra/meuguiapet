#!/bin/bash

# This script helps set up your GitHub repository
# Replace YOUR_USERNAME with your GitHub username

echo "Setting up GitHub repository for meuguiapet..."

# Create a new repository on GitHub.com first, then run:
# git remote add origin https://github.com/YOUR_USERNAME/meuguiapet.git
# git push -u origin main

echo "======================================"
echo "Instructions:"
echo "1. Create a new repository on GitHub.com named 'meuguiapet'"
echo "2. Run the following commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/meuguiapet.git"
echo "   git push -u origin main"
echo ""
echo "Replace YOUR_USERNAME with your GitHub username."
echo "======================================"

echo "Would you like to run these commands now? (y/n)"
read answer

if [ "$answer" = "y" ]; then
    echo "Enter your GitHub username:"
    read github_username
    
    git remote add origin "https://github.com/$github_username/meuguiapet.git"
    git push -u origin main
    
    echo "Repository pushed to GitHub!"
else
    echo "OK! Run the commands manually when you're ready."
fi 