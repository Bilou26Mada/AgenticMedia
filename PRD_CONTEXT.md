# 📚 News Ledger — Product Requirements Document & Context

## 1. Vision & Objectif
**News Ledger** est une plateforme d'agrégation de signaux (News/Intel) destinée aux professionnels de la tech : Ingénieurs IA, Quants (Trading Algorithmique), et fondateurs Fintech.
Son but est d'éliminer le "bruit" des réseaux sociaux en centralisant des flux RSS hautement qualitatifs dans une interface minimaliste, sombre (glassmorphism), ultra-rapide et sans publicité.

---

## 2. Architecture Technique (Stack)
Ce projet repose sur une architecture server-side performante et gratuite (Zero-DB) :
- **Framework** : Next.js 14+ (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS + CSS modules marginaux (effets glassmorphism)
- **Extraction RSS** : `rss-parser` (exécuté 100% côté serveur)
- **Summarization Locale** : `node-summarizer` (Algorithme TF-IDF local, sans API Key externe)
- **Déploiement cible** : Vercel (Recommandé pour profiter de l'ISR natively)

---

## 3. Fonctionnalités Clés (Core Features)

### A. Agrégation RSS Sévère (Zero DB)
Les flux ne sont **pas** stockés dans une base de données. Ils sont lus à la volée via Server-Components et mis en cache via **ISR (Incremental Static Regeneration)** (`revalidate: 60`).
> **Où modifier ?** → `src/lib/feeds.ts`

### B. Classification par "Aujourd'hui" vs "Précédents"
Pour chaque flux, l'algorithme différencie instantanément les articles publiés dans les dernières 24h de ceux plus anciens, afin de créer un sentiment d'urgence visuel (Pastilles vertes "Aujourd'hui").
> **Où modifier ?** → `src/components/FeedCard.tsx`

### C. Intelligence Artificielle "On-the-fly" (Research Intel)
Pour les catégories *IA & Agents* et *Recherche*, le composant `ResearchHighlight.tsx` interroge l'API publique **arXiv**, récupère les 10 derniers papiers de recherche, puis utilise une **bibliothèque locale d'extraction de phrases clés TF-IDF** pour résumer les "Abstracts" arXiv (généralement imbuvables) en 2 phrases limpides. 
- *Avantage* : 0€ de coût LLM, extrêmement rapide.
> **Où modifier ?** → `src/lib/summarizer.ts` & `src/lib/arxiv.ts`

### D. Perfect SEO
Le projet est packagé avec une implémentation SEO "State-of-the-Art" :
- Meta tags dynamiques par catégorie (`generateMetadata()`)
- Open Graph, Twitter Cards
- Structuration JSON-LD (WebSite, BreadcrumbList)
- `sitemap.xml` et `robots.txt` autogénérés
> **Où modifier ?** → `src/app/layout.tsx` & `src/app/[category]/page.tsx`

---

## 4. UI / UX Philosophy ("Avant-Garde Glassmorphism")
* **Couleurs** : Background `#0d1117`, Cartes `#161b22`, Texte `#adbac7` (très discret).
* **Glow** : De légers halos (blur 100px) bleus donnent une profondeur 3D derrière le contenu de tête.
* **Navigation** : Full emojis + scroll horizontal caché (`scrollbar-hide`). Le Header flottant est semi-transparent (`backdrop-blur-md`).
* **Micro-intéractions** : Hover subtil sur les bordures (opacité) plutôt que des changements de couleurs brutaux.

---

## 5. Guide pour le futur Développeur

### 5.1. Comment ajouter une nouvelle Catégorie ?
1. Ouvre `src/lib/feeds.ts`.
2. Ajoute un objet dans le tableau `CATEGORIES` avec son `id`, `label` et un `emoji`.
3. Ajoute tes sources RSS dans le tableau `FEED_SOURCES` en liant le bon `category`.
4. Renseigne les métadonnées SEO dans la constante `CATEGORY_META` de `src/app/[category]/page.tsx`.

### 5.2. Gestion du Cache (IMPORTANT)
Actuellement, `revalidate` est défini à `60` secondes dans les pages. 
Pour Vercel en production standard, c'est idéal. Si tu ajoutes plus de composants lourds (comme le Summarizer ArXiv), tu pourrais vouloir augmenter ce cache à `3600` (1 heure) ou `86400` (24 heures) spécifiquement sur la requête de `arxiv.ts` en utilisant :
\`\`\`ts
fetch(url, { next: { revalidate: 86400 } })
\`\`\`

### 5.3. Remplacer `node-summarizer` par un vrai LLM ?
Si un jour tu souhaites brancher OpenAI ou Gemini, ouvre simplement `src/lib/summarizer.ts`. Garde la même interface `Promise<SummarizedPaper[]>`, et remplace l'appel TF-IDF local par un `fetch` vers ton API IA en passant le `paper.abstract` dans le prompt.

---
**Fait par Antigravity - Prêt pour le déploiement Production (2026).**
