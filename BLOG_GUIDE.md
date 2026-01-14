# Guide de création d'articles de blog

## Créer un nouvel article

### Méthode 1 : Script automatique (recommandé)

Lance la commande :
```bash
npm run new-post
```

Le script te posera quelques questions et créera automatiquement le fichier MDX avec la structure de base.

### Méthode 2 : Manuellement

1. Crée un nouveau fichier dans `content/blog/` avec le format : `nom-de-ton-article.mdx`
2. Copie le contenu de `content/blog/_TEMPLATE.mdx`
3. Remplis les métadonnées en haut du fichier

## Structure d'un article

```mdx
---
title: "Titre de ton article"
publishedAt: "2024-01-15"
excerpt: "Description courte pour la liste des articles"
author: "Thibaut Gallien"
categories: ["Copywriting", "Conversion"]
estimatedReadingTime: 10
featured: true
metaTitle: "Titre SEO optimisé"
metaDescription: "Description pour les moteurs de recherche"
keywords: ["keyword1", "keyword2", "keyword3"]
---

Ton contenu ici...
```

## Composants disponibles

### KeyPoint
Point clé avec icône :
```mdx
<KeyPoint
  title="Titre du point"
  description="Description du point"
  icon="check"
/>
```
Icônes disponibles : `check`, `alert`, `info`, `lightbulb`

### Example
Exemple bon ou mauvais :
```mdx
<Example good>
**Bon exemple :**
Ce qu'il faut faire
</Example>

<Example bad>
**Mauvais exemple :**
Ce qu'il ne faut pas faire
</Example>
```

### Callout
Encart d'information :
```mdx
<Callout type="info">
💡 Information importante
</Callout>
```
Types : `info`, `warning`, `success`, `danger`

### ChecklistItem
Élément de checklist :
```mdx
<ChecklistItem>Vérifier ce point</ChecklistItem>
```

### InlineLandingPageCompact
CTA intégré dans l'article :
```mdx
<InlineLandingPageCompact
  title="🎯 Titre du CTA"
  description="Description courte"
  ctaText="Texte du bouton"
  ctaLink="https://calendly.com/..."
/>
```

## Après la création

1. **Vérifie le fichier** : Ouvre `content/blog/ton-article.mdx`
2. **Écris ton contenu** en utilisant les composants ci-dessus
3. **Teste localement** : `npm run dev` puis va sur `http://localhost:3000/blog/ton-slug`
4. **Build et déploie** : L'article sera automatiquement intégré

## Conseils

- **Slug** : Sera généré automatiquement depuis le titre
- **Images** : Place-les dans `public/blog/` et référence-les avec `/blog/image.jpg`
- **SEO** : Remplis bien `metaTitle`, `metaDescription` et `keywords`
- **Lecture** : Estime le temps de lecture (environ 200 mots par minute)
- **Featured** : Met `true` pour afficher l'article à la une sur la page blog

## Exemples d'articles existants

Regarde ces articles pour t'inspirer :
- `content/blog/call-to-action-guide-complet.mdx`
- `content/blog/127-funnels-analyses-94-pourcent-meme-probleme.mdx`
