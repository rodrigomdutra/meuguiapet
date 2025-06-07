#!/bin/bash

# Navigate to the frontend directory
echo "Changing to frontend directory..."
cd frontend

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js app
echo "Building Next.js application..."
npm run build

# Return to root
cd ..

# Create a symlink for Vercel to find the output
echo "Creating output symlink..."
ln -sf frontend/.next .next 