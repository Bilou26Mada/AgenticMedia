# News Ledger

Intelligence agrégée pour les professionnels de l'IA, du trading quantitatif et de la fintech.

## 🚀 Lancement Rapide

Ce projet utilise [Next.js](https://nextjs.org/) (App Router), Tailwind CSS et [node-summarizer](https://www.npmjs.com/package/node-summarizer).

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement (http://localhost:3000)
npm run dev

# 3. Créer le build de production
npm run build
npm start
```

## 🧠 Fonctionnalités

*   **Zéro Base de Données** : Fetch RSS à la volée avec cache ISR (`revalidate: 60`).
*   **Recherche AI (Extractive Summarization)** : L'API de recherche interroge arXiv (`agentic`, `llm`, `prompting`) et résume les *abstracts* via TF-IDF localement en 2 phrases, sans aucun appel API LLM coûteux.
*   **UI Avant-Garde** : Composants *Glassmorphism*, halos fluorescents et minimalisme radical.
*   **SEO Parfait** : Open Graph dynamique, JSON-LD (Breadcrumb + WebSite), sitemap et robots.txt.

## 📖 Documentation Développeur

Un document technique complet a été rédigé pour les développeurs reprenant le projet.  
👉 **Lisez absolument `PRD_CONTEXT.md` avant de modifier l'architecture.**

## ☁️ Déploiement Vercel

Le moyen le plus simple de déployer **News Ledger** avec l'ISR activé est d'utiliser Vercel :
1. Créez un projet sur [Vercel](https://vercel.com/new).
2. Liez votre dépôt GitHub.
3. Les paramètres Next.js sont détectés automatiquement. Cliquez sur **Deploy**.
