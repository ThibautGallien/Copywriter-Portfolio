# 🎮 Guide des Composants Interactifs

> Comment ajouter de l'interactivité et des landing pages dans tes articles MDX

---

## 📋 Table des Matières

1. [Composants de Base](#composants-de-base)
2. [Composants Interactifs](#composants-interactifs)
3. [Landing Pages Intégrées](#landing-pages-intégrées)
4. [Snippets VSCode](#snippets-vscode)
5. [Exemples Concrets](#exemples-concrets)

---

## 🎨 Composants de Base

Ces composants sont déjà disponibles dans tous tes articles MDX.

### KeyPoint

**Quand l'utiliser** : Pour mettre en avant un point clé, un conseil, ou un apprentissage important.

```mdx
<KeyPoint
  title="Ce que tu dois retenir"
  description="Les 3 premières secondes de ta landing page déterminent 70% de ton taux de conversion."
  icon="lightbulb"
/>
```

**Options icon** : `check`, `alert`, `info`, `lightbulb`

**Snippet** : `keypoint`

---

### Callout

**Quand l'utiliser** : Pour attirer l'attention sur une information importante, un avertissement, ou un conseil.

```mdx
<Callout type="warning">
  **Attention** : Ne jamais mettre plus de 2 CTAs sur une même page.
</Callout>
```

**Options type** : `info`, `warning`, `success`, `danger`

**Snippet** : `callout`

---

### Example

**Quand l'utiliser** : Pour montrer des exemples de bonnes et mauvaises pratiques côte à côte.

```mdx
<Example good={true}>
  **À faire** : "Clique ici pour doubler ton CA en 90 jours (garanti)"
</Example>

<Example bad={true}>
  **À éviter** : "Cliquez ici pour en savoir plus"
</Example>
```

**Snippets** : `example-good`, `example-bad`

---

### ChecklistItem

**Quand l'utiliser** : Pour créer des listes d'action avec des icônes de validation.

```mdx
<ul>
  <ChecklistItem>Analyser les 5 premières secondes de ta page</ChecklistItem>
  <ChecklistItem>Identifier le message principal (1 seul)</ChecklistItem>
  <ChecklistItem>Vérifier que le CTA est visible sans scroll</ChecklistItem>
</ul>
```

**Snippet** : `checklist`

---

## 🎮 Composants Interactifs

Ces composants ajoutent de l'engagement et de l'interaction dans tes articles.

### ROICalculator

**Quand l'utiliser** : Pour démontrer le potentiel de gain/économie de ton lecteur.

```mdx
<ROICalculator
  title="Calcule ton potentiel de CA perdu"
  fields={[
    { label: "Ton CA mensuel actuel", placeholder: "10000", suffix: "€" },
    { label: "Ton taux de conversion actuel", placeholder: "2", suffix: "%" },
  ]}
  resultLabel="CA que tu perds chaque mois"
  resultSuffix="€"
  calculate={(values) => {
    const ca = parseFloat(values[0]) || 0;
    const taux = parseFloat(values[1]) || 0;
    // Hypothèse : 30% de perte moyenne
    return Math.round(ca * 0.30);
  }}
/>
```

**Snippet** : `roi`

**Conseils** :
- Utilise des calculs réalistes basés sur tes données
- Garde 2-4 champs maximum
- Les suffixes (€, %, etc.) rendent le calcul plus clair

---

### Quiz

**Quand l'utiliser** : Pour engager le lecteur et personnaliser le message selon son profil.

```mdx
<Quiz
  title="Quel est ton niveau de copywriting ?"
  questions={[
    {
      question: "Combien de temps passes-tu sur un titre de landing page ?",
      answers: [
        { text: "5 minutes max", score: 0 },
        { text: "15-30 minutes", score: 1 },
        { text: "1 heure ou plus", score: 2 },
      ],
    },
    {
      question: "Combien de variantes testes-tu avant de choisir ?",
      answers: [
        { text: "Aucune, je prends la première", score: 0 },
        { text: "2-3 variantes", score: 1 },
        { text: "5+ variantes", score: 2 },
      ],
    },
  ]}
  results={[
    {
      min: 0,
      max: 1,
      title: "Débutant - Tu perds du CA",
      description: "Tu ne passes pas assez de temps sur tes copies. Un titre médiocre peut te faire perdre 50% de conversions.",
    },
    {
      min: 2,
      max: 3,
      title: "Intermédiaire - Tu peux optimiser",
      description: "Tu as les bases, mais tu peux aller plus loin. Teste plus de variantes et analyse les données.",
    },
    {
      min: 4,
      max: 10,
      title: "Expert - Tu maîtrises",
      description: "Tu sais ce que tu fais. Continue comme ça et documente tes process.",
    },
  ]}
/>
```

**Snippet** : `quiz`

**Conseils** :
- 2-5 questions max (sinon ça devient lourd)
- Les scores doivent être cohérents (ex: 0, 1, 2 par question)
- Les résultats doivent donner de la valeur (pas juste "tu es nul")

---

### Poll

**Quand l'utiliser** : Pour poser une question rapide et engager sans effort.

```mdx
<Poll
  question="Quelle est ta plus grosse galère en copywriting ?"
  options={[
    "Trouver des idées de titres",
    "Structurer mes pages",
    "Écrire des CTA qui convertissent",
    "Tester et analyser mes résultats",
  ]}
/>
```

**Snippet** : `poll`

**Conseils** :
- 3-4 options max
- Les options doivent être mutuellement exclusives
- Pose des questions qui t'aident à comprendre ton audience

---

### ReadingProgress

**Quand l'utiliser** : Sur tous les articles longs (8+ minutes de lecture).

```mdx
<ReadingProgress />
```

Place ce composant **tout en haut de l'article**, juste après le frontmatter.

**Snippet** : `progress`

**Effet** : Barre de progression fixe en haut de la page qui se remplit au scroll.

---

## 🎯 Landing Pages Intégrées

Ces composants te permettent de capturer des emails directement dans tes articles.

### InlineLandingPage (Full)

**Quand l'utiliser** : Pour proposer un lead magnet en fin d'article ou à un moment stratégique.

```mdx
<InlineLandingPage
  title="Télécharge ma checklist des 127 funnels"
  description="Les 7 erreurs que j'ai trouvées dans 94% des funnels analysés, et comment les corriger en 48h."
  leadMagnet="checklist-127-funnels"
  ctaText="Télécharger gratuitement"
  icon="download"
  variant="default"
/>
```

**Options variant** :
- `default` : Vert (émeraude) - Pour lead magnets classiques
- `premium` : Orange/ambre - Pour contenus premium
- `urgent` : Rouge - Pour offres limitées

**Options icon** : `download`, `sparkles`, `check`

**Snippet** : `lp-full`

---

### InlineLandingPageCompact

**Quand l'utiliser** : Pour proposer un lead magnet au milieu d'un article sans casser le flow de lecture.

```mdx
<InlineLandingPageCompact
  text="💡 Reçois mon template de page de vente"
  leadMagnet="template-page-vente"
  ctaText="Télécharger"
/>
```

**Snippet** : `lp-compact`

**Conseils** :
- Utilise la version compacte dans le corps de l'article
- Utilise la version full en fin d'article ou après une section majeure
- Le `leadMagnet` sert d'identifiant (utilise des slugs clairs)

---

## ⚡ Snippets VSCode

Tous les composants ont des snippets pour écrire plus vite.

### Comment les utiliser ?

1. Dans un fichier `.mdx`, tape le préfixe du snippet
2. Appuie sur `Tab`
3. Remplis les champs (navigue avec `Tab`)

### Liste des snippets

| Snippet | Composant |
|---------|-----------|
| `keypoint` | KeyPoint |
| `callout` | Callout |
| `example-good` | Example (bonne pratique) |
| `example-bad` | Example (mauvaise pratique) |
| `checklist` | Liste avec ChecklistItem |
| `roi` | ROI Calculator |
| `quiz` | Quiz |
| `poll` | Poll |
| `progress` | Reading Progress |
| `lp-full` | Inline Landing Page Full |
| `lp-compact` | Inline Landing Page Compact |
| `blog-template` | Template complet d'article |
| `section-example` | Section avec exemples good/bad |

---

## 💡 Exemples Concrets

### Exemple 1 : Article avec Quiz et ROI Calculator

```mdx
---
title: "Pourquoi ton funnel ne convertit pas (et comment le corriger)"
publishedAt: "2024-12-15"
excerpt: "94% des funnels que j'ai analysés ont les mêmes 7 erreurs. Découvre lesquelles."
categories: ["Funnel", "Conversion"]
estimatedReadingTime: 10
---

<ReadingProgress />

## Avant de commencer : Teste ton niveau

<Quiz
  title="Quel type de funnel as-tu ?"
  questions={[
    {
      question: "Ton taux de conversion moyen",
      answers: [
        { text: "Moins de 1%", score: 0 },
        { text: "1-3%", score: 1 },
        { text: "Plus de 3%", score: 2 },
      ],
    },
  ]}
  results={[
    { min: 0, max: 0, title: "Urgent", description: "Tu perds beaucoup d'argent." },
    { min: 1, max: 2, title: "Optimisable", description: "Tu peux faire mieux." },
  ]}
/>

## Les 7 erreurs classiques

### Erreur 1 : Titre faible

<Example bad={true}>
  "Bienvenue sur notre site"
</Example>

<Example good={true}>
  "Multiplie ton CA par 2 en 90 jours (ou remboursé)"
</Example>

## Combien tu perds vraiment ?

<ROICalculator
  title="Calcule ton CA perdu"
  fields={[
    { label: "CA mensuel", placeholder: "10000", suffix: "€" },
    { label: "Taux de conversion", placeholder: "2", suffix: "%" },
  ]}
  resultLabel="Tu perds par mois"
  resultSuffix="€"
  calculate={(values) => {
    const ca = parseFloat(values[0]) || 0;
    const taux = parseFloat(values[1]) || 0;
    return Math.round(ca * 0.30);
  }}
/>

## Télécharge ma checklist complète

<InlineLandingPage
  title="Les 7 erreurs + mes corrections détaillées"
  description="Template prêt à l'emploi pour auditer ton funnel en 30 minutes."
  leadMagnet="checklist-7-erreurs"
  ctaText="Télécharger la checklist"
  icon="download"
  variant="default"
/>
```

---

### Exemple 2 : Article avec Poll et LP Compact

```mdx
---
title: "Comment écrire un CTA qui convertit"
publishedAt: "2024-12-15"
excerpt: "Le CTA représente 40% de ta conversion. Voici comment l'optimiser."
categories: ["Copywriting"]
estimatedReadingTime: 6
---

<ReadingProgress />

## Ton CTA actuel est-il bon ?

<Poll
  question="Quel type de CTA utilises-tu le plus ?"
  options={[
    "Cliquez ici",
    "En savoir plus",
    "Télécharger",
    "Des CTA personnalisés",
  ]}
/>

## Les 3 éléments d'un bon CTA

1. **Action claire** : Dis exactement ce qui va se passer
2. **Bénéfice immédiat** : Montre la valeur
3. **Urgence** : Donne une raison d'agir maintenant

<Example good={true}>
  "Télécharge ton audit gratuit (2 min)"
</Example>

<InlineLandingPageCompact
  text="🎁 Reçois mes 27 templates de CTA"
  leadMagnet="templates-cta"
  ctaText="Télécharger"
/>

## Conclusion

...
```

---

## 🚀 Workflow Recommandé

1. **Commence avec le template**
   ```
   cp content/blog/_TEMPLATE.mdx content/blog/mon-article.mdx
   ```

2. **Ajoute ReadingProgress en haut**
   ```mdx
   <ReadingProgress />
   ```

3. **Structure ton contenu**
   - Introduction avec KeyPoint
   - Sections avec Examples
   - Quiz/Poll au milieu (engagement)
   - ROI Calculator si pertinent

4. **Termine avec une LP**
   - InlineLandingPage en fin d'article
   - Propose un lead magnet lié au sujet

5. **Teste l'article**
   ```bash
   npm run dev
   # Ouvre http://localhost:3000/blog/mon-article
   ```

---

## ⚠️ Bonnes Pratiques

### ✅ À FAIRE

- Utilise ReadingProgress sur articles 8+ minutes
- Limite à 1-2 composants interactifs par article
- Place les LP à des moments stratégiques
- Teste tes calculateurs avec des valeurs réelles
- Garde les quiz courts (2-5 questions max)

### ❌ À ÉVITER

- Surcharger l'article avec trop de composants
- Placer plusieurs LP Full dans le même article
- Utiliser des calculs trop complexes dans le ROI Calculator
- Créer des quiz trop longs (fatigue du lecteur)
- Oublier de tester sur mobile

---

## 🔧 Configuration Requise

### API Route Lead Magnet

Pour que les LP fonctionnent, tu dois configurer l'envoi d'emails dans :
```
app/api/lead-magnet/route.ts
```

**Options** :
1. **SendGrid** (recommandé - facile à setup)
2. **ConvertKit** (si tu as déjà une liste)
3. **Brevo** (ex-Sendinblue - gratuit jusqu'à 300 emails/jour)
4. **Resend** (simple et moderne)

Le fichier contient des exemples commentés pour chaque service.

---

## 🎯 Prochaines Étapes

1. ✅ Tous les composants sont prêts à l'emploi
2. ✅ Les snippets sont configurés
3. ⏳ Configure l'API route pour les lead magnets
4. ⏳ Écris ton premier article avec interactivité
5. ⏳ Teste sur mobile

---

**Besoin d'aide ?** Relis ce guide ou check les exemples dans `/content/blog/`.
