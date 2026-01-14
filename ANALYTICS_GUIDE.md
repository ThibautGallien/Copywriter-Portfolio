# 📊 Guide Analytics & Tracking

## 🎯 Configuration complète

### 1. Google Analytics 4 (GA4)

#### Installation
1. Va sur https://analytics.google.com
2. Crée une propriété GA4
3. Copie ton **Measurement ID** (format: `G-XXXXXXXXXX`)
4. Ajoute dans ton `.env`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### Données trackées automatiquement
✅ **Pages vues** (toutes les pages)
✅ **Scroll** (25%, 50%, 75%, 100%)
✅ **Clics sortants** (liens externes)
✅ **Téléchargements** (PDF, fichiers)
✅ **Engagement vidéo** (si vidéos)
✅ **Recherche sur site** (si barre de recherche)
✅ **Erreurs JavaScript** (bugs)
✅ **Navigation entre pages** (parcours utilisateur)

#### Événements personnalisés disponibles

Utilise ces fonctions dans ton code:

```tsx
import { trackCTAClick, trackNewsletterSignup, trackLeadMagnetDownload } from "@/lib/analytics";

// Clic sur un CTA
trackCTAClick("Réserver un audit", "Header");

// Inscription newsletter
trackNewsletterSignup("Homepage");

// Téléchargement lead magnet
trackLeadMagnetDownload("Guide CTA", "Article blog");

// Réservation Calendly
trackCalendlyBooking("Audit gratuit");

// Utilisation calculateur
trackCalculatorUse("ROI Calculator", 5000);

// Complétion quiz
trackQuizCompletion("Quiz copywriting", 85);

// Vote poll
trackPollVote("Quel est ton défi ?", "Conversion");
```

#### Dimensions personnalisées (dans GA4)

Crée ces dimensions dans GA4:
- `funnel_type`: Type de funnel de l'utilisateur
- `lead_source`: Source du lead
- `article_category`: Catégorie de l'article lu

---

### 2. Microsoft Clarity (Heatmaps)

#### Pourquoi Clarity ?
- ✅ **100% GRATUIT** (vraiment, aucune limite)
- ✅ **Ultra-léger** (~3KB, n'impacte PAS les perfs)
- ✅ **Heatmaps** (clics, défilement)
- ✅ **Session recordings** (voir ce que font les visiteurs)
- ✅ **Insights automatiques** (rage clicks, dead clicks, etc.)
- ✅ **RGPD compliant**

#### Installation
1. Va sur https://clarity.microsoft.com
2. Crée un compte (gratuit)
3. Crée un nouveau projet
4. Copie ton **Project ID**
5. Ajoute dans ton `.env`:
```
NEXT_PUBLIC_CLARITY_ID=ton_project_id
```

#### Ce que tu peux voir
- **Heatmaps de clics**: Où les gens cliquent
- **Heatmaps de scroll**: Jusqu'où les gens scrollent
- **Session recordings**: Vidéos des sessions utilisateurs
- **Rage clicks**: Clics répétés (= frustration)
- **Dead clicks**: Clics sur éléments non-cliquables
- **Quick backs**: Retours rapides (= problème UX)

#### Utilisation
→ Visite https://clarity.microsoft.com/projects
→ Clique sur ton projet
→ Explore les dashboards et recordings

---

### 3. Sécurité Admin (/admin)

#### Fonctionnement
La page `/admin` est protégée par mot de passe.

#### Configuration
Ajoute dans ton `.env`:
```
NEXT_PUBLIC_ADMIN_PASSWORD=ton_mot_de_passe_fort
```

⚠️ **Sécurité:**
- Utilise un mot de passe fort (min 12 caractères)
- Change-le régulièrement
- Ne le partage jamais
- Le mot de passe est stocké côté client (sessionStorage)
- La session expire à la fermeture du navigateur

#### Amélioration future (optionnel)
Pour une sécurité maximale, tu peux:
- Utiliser NextAuth.js (OAuth Google, GitHub, etc.)
- Ajouter une authentification serveur
- Limiter les IPs autorisées

Mais pour un usage personnel, le mot de passe simple suffit.

---

## 📊 Événements à tracker manuellement

### Dans tes formulaires

```tsx
import { trackNewsletterSignup, trackFormError } from "@/lib/analytics";

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/newsletter", { ... });

    if (response.ok) {
      trackNewsletterSignup("Footer");
    } else {
      trackFormError("Newsletter", "API Error");
    }
  } catch (error) {
    trackFormError("Newsletter", "Network Error");
  }
};
```

### Dans tes CTAs

```tsx
import { trackCTAClick, trackOutboundLink } from "@/lib/analytics";

<Link
  href="https://calendly.com/..."
  onClick={() => {
    trackCTAClick("Réserver audit", "Article CTA");
    trackOutboundLink("https://calendly.com/...", "Réserver audit");
  }}
>
  Réserver un audit
</Link>
```

### Dans tes calculateurs

```tsx
import { trackCalculatorUse } from "@/lib/analytics";

const calculate = () => {
  const result = (ca * tauxFuite) / 100;
  setResult(result);

  trackCalculatorUse("ROI Calculator", result);
};
```

---

## 🎯 Objectifs à configurer dans GA4

### Conversions principales
1. **Newsletter signup** (conversion)
2. **Lead magnet download** (conversion)
3. **Calendly booking** (conversion)
4. **CTA click** (engagement)

### Comment les configurer
1. Va dans GA4 > Admin > Events
2. Clique sur "Create event"
3. Nomme ton événement (ex: `newsletter_signup`)
4. Active "Mark as conversion"

---

## 📈 KPIs à surveiller

### Trafic
- **Pages vues**: Combien de vues par page
- **Sessions**: Nombre de sessions
- **Utilisateurs uniques**: Visiteurs différents
- **Taux de rebond**: % qui partent immédiatement
- **Durée moyenne**: Temps passé sur le site

### Engagement
- **Scroll depth**: Jusqu'où les gens scrollent
- **CTA clicks**: Combien de clics sur les CTAs
- **Articles lus**: Quels articles sont les plus lus
- **Temps de lecture**: Combien de temps sur les articles

### Conversions
- **Newsletter signups**: Inscriptions newsletter
- **Lead magnets**: Téléchargements
- **Calendly bookings**: Réservations
- **Taux de conversion**: % visiteurs → leads

---

## 🔍 Analyse des données

### Dans GA4
**Rapports recommandés:**
- **Acquisition** > Aperçu: D'où viennent tes visiteurs
- **Engagement** > Pages et écrans: Pages les plus visitées
- **Events** > All events: Tous les événements trackés
- **Conversions**: Performance des conversions

**Segments utiles:**
- Visiteurs nouveaux vs récurrents
- Par source de trafic (Google, réseaux sociaux, direct)
- Par type d'appareil (mobile, desktop)

### Dans Clarity
**Analyses recommandées:**
- **Dashboard**: Vue d'ensemble (sessions, rage clicks, etc.)
- **Recordings**: Regarder des sessions individuelles
- **Heatmaps**: Où les gens cliquent et scrollent
- **Insights**: Problèmes UX détectés automatiquement

---

## 🚀 Optimisations basées sur les données

### Si taux de rebond élevé
→ Améliore le titre H1
→ Réduis le temps de chargement
→ Ajoute un CTA au-dessus de la ligne de flottaison

### Si peu de scroll
→ Le contenu est trop long
→ Ajoute des visuels
→ Améliore la hiérarchie (H2, H3)

### Si peu de clics sur CTA
→ Change le texte du CTA
→ Change la couleur
→ Change la position
→ Ajoute plus de CTAs

### Si peu de conversions
→ Simplifie le formulaire
→ Ajoute de la preuve sociale
→ Améliore la proposition de valeur

---

## 📊 Dashboard personnalisé (bonus)

Tu peux créer un dashboard Notion ou Google Sheets avec:
- KPIs principaux (trafic, conversions)
- Graphiques d'évolution
- Objectifs mensuels
- Actions à prendre

Connecte GA4 avec Looker Studio (gratuit) pour des dashboards automatiques.

---

## ⚠️ RGPD & Vie privée

### Ce qui est fait
✅ Tracking anonyme (pas d'IP stockées)
✅ Pas de cookies tiers
✅ Données hébergées chez Microsoft/Google (RGPD OK)
✅ Pas de tracking cross-site

### Ce qu'il faut ajouter (optionnel)
- Banner de consentement (si tu veux être 100% strict)
- Page "Politique de confidentialité"
- Mention dans les CGU

Pour 99% des sites perso/freelance, ce n'est pas nécessaire.

---

## 💡 Conseils

**Surveille ces métriques chaque semaine:**
- Trafic total
- Articles les plus lus
- Conversions (newsletter + lead magnets)
- Pages avec problèmes (Clarity)

**Ne te noie pas dans les données:**
- Focus sur 3-5 KPIs max
- Teste 1 amélioration à la fois
- Mesure l'impact avant/après

**Utilise les insights pour:**
- Créer du contenu sur les sujets populaires
- Améliorer les pages qui convertissent mal
- Corriger les problèmes UX (rage clicks, etc.)

---

## 🆘 Aide rapide

**Tester le tracking:**
1. Ouvre ton site
2. Ouvre la console (F12)
3. Fais des actions (clics, scroll, etc.)
4. Vérifie dans GA4 > Realtime

**Vérifier que Clarity fonctionne:**
1. Va sur https://clarity.microsoft.com
2. Ouvre ton projet
3. Vérifie qu'il y a des sessions

**Problème de tracking:**
→ Vérifie que les IDs sont dans `.env`
→ Vérifie que les variables commencent par `NEXT_PUBLIC_`
→ Rebuild le site: `npm run build`

---

Ton tracking est maintenant **au niveau des meilleurs sites** 🚀
