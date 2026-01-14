#!/usr/bin/env node

/**
 * Script pour créer facilement un nouvel article de blog
 * Usage: node scripts/new-blog-post.js
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  console.log("\n📝 Créer un nouvel article de blog\n");

  // Questions
  const title = await question("Titre de l'article : ");
  const excerpt = await question("Description courte (excerpt) : ");
  const categories = await question(
    'Catégories (séparées par des virgules, ex: "Copywriting, Conversion") : '
  );
  const readingTime = await question("Temps de lecture estimé (en minutes) : ");
  const featured = await question("Article à la une ? (o/N) : ");
  const keywords = await question(
    'Mots-clés SEO (séparés par des virgules) : '
  );

  rl.close();

  // Générer le slug
  const slug = slugify(title);
  const today = new Date().toISOString().split("T")[0];

  // Préparer les catégories
  const categoriesArray = categories
    .split(",")
    .map((c) => `"${c.trim()}"`)
    .join(", ");

  // Préparer les mots-clés
  const keywordsArray = keywords
    .split(",")
    .map((k) => `"${k.trim()}"`)
    .join(", ");

  // Contenu du fichier MDX
  const content = `---
title: "${title}"
publishedAt: "${today}"
excerpt: "${excerpt}"
author: "Thibaut Gallien"
categories: [${categoriesArray}]
estimatedReadingTime: ${readingTime || 5}
featured: ${featured.toLowerCase() === "o" ? "true" : "false"}
metaTitle: "${title}"
metaDescription: "${excerpt}"
keywords: [${keywordsArray}]
---

<KeyPoint
  title="Point clé 1"
  description="Description du point clé"
  icon="check"
/>

<KeyPoint
  title="Point clé 2"
  description="Description du point clé"
  icon="lightbulb"
/>

## Introduction

Commence ton article ici...

## Section 1

Ton contenu ici...

### Sous-section

Utilise les composants personnalisés :

<Example good>
**Bon exemple :**
Montre ce qu'il faut faire
</Example>

<Example bad>
**Mauvais exemple :**
Montre ce qu'il ne faut pas faire
</Example>

<Callout type="info">
💡 **Astuce :** Ajoute des informations importantes dans des callouts
</Callout>

## Section 2

Continue ton contenu...

<ChecklistItem>Premier élément de la checklist</ChecklistItem>
<ChecklistItem>Deuxième élément de la checklist</ChecklistItem>
<ChecklistItem>Troisième élément de la checklist</ChecklistItem>

## Conclusion

Termine ton article avec un CTA...

<InlineLandingPageCompact
  title="🎯 Prêt à passer à l'action ?"
  description="Je t'aide à optimiser tes conversions avec des CTA qui transforment vraiment."
  ctaText="Réserver un audit gratuit"
  ctaLink="https://calendly.com/hello-thibautgallien/30min"
/>
`;

  // Chemin du fichier
  const filePath = path.join(
    __dirname,
    "..",
    "content",
    "blog",
    `${slug}.mdx`
  );

  // Vérifier si le fichier existe déjà
  if (fs.existsSync(filePath)) {
    console.log(`\n❌ Un article avec ce slug existe déjà : ${slug}`);
    process.exit(1);
  }

  // Créer le fichier
  fs.writeFileSync(filePath, content);

  console.log(`\n✅ Article créé avec succès !`);
  console.log(`📄 Fichier : content/blog/${slug}.mdx`);
  console.log(`🔗 URL : /blog/${slug}`);
  console.log(`\nTu peux maintenant éditer le fichier et ajouter ton contenu.\n`);
}

main().catch((error) => {
  console.error("Erreur:", error);
  process.exit(1);
});
