# 📦 Bibliothèque de Composants

## Composants disponibles pour tes articles

Tous ces composants sont utilisables directement dans tes fichiers MDX.

---

## 🎯 Composants de base

### KeyPoint
Point clé avec icône pour mettre en avant une information.

```mdx
<KeyPoint
  title="Titre du point clé"
  description="Description détaillée"
  icon="check"
/>
```

**Icônes disponibles:** `check`, `alert`, `info`, `lightbulb`

---

### Example
Montre un bon ou mauvais exemple avec badge visuel.

```mdx
<Example good>
**Bon exemple :**
Montre ce qu'il faut faire
</Example>

<Example bad>
**Mauvais exemple :**
Montre ce qu'il ne faut PAS faire
</Example>
```

---

### Callout
Encart d'information coloré pour attirer l'attention.

```mdx
<Callout type="info">
💡 **Astuce :** Information utile
</Callout>
```

**Types disponibles:** `info` (bleu), `warning` (orange), `success` (vert), `danger` (rouge)

---

### ChecklistItem
Élément de checklist avec icône check.

```mdx
<ChecklistItem>Vérifier ce point important</ChecklistItem>
<ChecklistItem>Faire ceci ensuite</ChecklistItem>
<ChecklistItem>Ne pas oublier ça</ChecklistItem>
```

---

## 🎮 Composants interactifs

### ROICalculator
Calculateur de ROI personnalisable.

```mdx
<ROICalculator
  title="Calcule ta perte mensuelle"
  fields={[
    { label: "Chiffre d'affaires mensuel", placeholder: "10000", defaultValue: 10000 },
    { label: "Taux de fuite (%)", placeholder: "15", defaultValue: 15 }
  ]}
  resultLabel="Perte mensuelle estimée"
  resultSuffix="€"
/>
```

---

### Quiz
Quiz interactif avec résultats personnalisés.

```mdx
<Quiz
  title="Quel est ton niveau en copywriting ?"
  questions={[
    {
      question: "Connais-tu la différence entre features et bénéfices ?",
      options: [
        { text: "Oui, parfaitement", points: 10 },
        { text: "Vaguement", points: 5 },
        { text: "Non", points: 0 }
      ]
    },
    {
      question: "Utilises-tu des CTA dans tes contenus ?",
      options: [
        { text: "Toujours", points: 10 },
        { text: "Parfois", points: 5 },
        { text: "Jamais", points: 0 }
      ]
    }
  ]}
  results={[
    { min: 0, max: 10, title: "Débutant", description: "Tu débutes en copywriting. Pas de panique, tout le monde commence quelque part !" },
    { min: 11, max: 15, title: "Intermédiaire", description: "Tu as des bases solides. Continue d'apprendre !" },
    { min: 16, max: 20, title: "Expert", description: "Tu maîtrises le copywriting ! Bravo !" }
  ]}
/>
```

---

### Poll
Sondage simple avec résultats en temps réel.

```mdx
<Poll
  question="Quel est ton principal défi en marketing ?"
  options={[
    "Générer du trafic",
    "Convertir les visiteurs",
    "Fidéliser les clients",
    "Créer du contenu"
  ]}
/>
```

---

## 🎨 Composants de landing page

### InlineLandingPageCompact
CTA compact intégré dans l'article.

```mdx
<InlineLandingPageCompact
  title="🎯 Prêt à passer à l'action ?"
  description="Je t'aide à optimiser tes conversions avec des audits concrets."
  ctaText="Réserver un audit gratuit"
  ctaLink="https://calendly.com/hello-thibautgallien/30min"
/>
```

---

### InlineLandingPage
Landing page complète dans l'article (avec formulaire).

```mdx
<InlineLandingPage
  title="Télécharge le guide complet"
  description="Reçois le guide PDF de 25 pages avec tous les exemples et templates."
  leadMagnet="Guide CTA Complet"
  ctaText="Recevoir le guide gratuit"
/>
```

---

## 🎨 Comment créer un nouveau composant

### 1. Crée le fichier du composant

```tsx
// components/mdx/MonNouveauComposant.tsx
"use client";

export function MonNouveauComposant({ title }: { title: string }) {
  return (
    <div className="p-6 bg-blue-50 rounded-xl">
      <h3>{title}</h3>
    </div>
  );
}
```

### 2. Enregistre-le dans MDXComponents.tsx

```tsx
// components/mdx/MDXComponents.tsx
import { MonNouveauComposant } from "./MonNouveauComposant";

const components = {
  // ... autres composants
  MonNouveauComposant,  // ← Ajouter ici
};
```

### 3. Utilise-le dans tes articles

```mdx
<MonNouveauComposant title="Mon titre" />
```

---

## 💡 Idées de composants à créer

Besoin d'autres composants ? Voici quelques idées:

- **Comparateur** : Tableau comparatif de produits/services
- **Timeline** : Chronologie visuelle d'un processus
- **Témoignages** : Carrousel de témoignages clients
- **Statistiques animées** : Compteurs qui s'animent au scroll
- **Tabs** : Onglets pour organiser du contenu
- **Accordéon** : FAQ ou contenu repliable
- **Progress Bar** : Barre de progression d'un tutoriel
- **Video Player** : Lecteur vidéo avec tracking
- **Code Playground** : Éditeur de code interactif

Dis-moi ce dont tu as besoin et je le crée!
