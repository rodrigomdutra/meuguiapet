#!/bin/bash

# This script removes private files from Git tracking without deleting them from the file system

echo "Removing private files from Git tracking..."

# Remove assets directory from Git tracking
git rm --cached -r assets/

# Remove research directory from Git tracking
git rm --cached -r research/

# Remove project-case.md from Git tracking
git rm --cached project-case.md

echo "Done! These files still exist in your local filesystem but will no longer be tracked by Git."
echo "Remember to commit the changes to .gitignore and .gitattributes."
echo "Run: git commit -m \"Remove private files from Git tracking\"" 