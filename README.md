name: Deploy Website

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout Repository
        uses: actions/checkout@v4

      - name: ⚙️ Setup GitHub Pages
        uses: actions/configure-pages@v5

      - name: 🏗️ Build Static Site
        run: mkdir -p _site && cp -r * _site

      - name: 🔧 Fix Permissions for CNAME
        run: |
          echo "daxgigandet.com" > _site/CNAME
          chmod -R 755 _site

      - name: 📤 Upload Build Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: 🚀 Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4