# 🔐 Configuration .env - Guide Complet

## 📋 Template complet pour ton .env

Crée un fichier `.env` à la racine avec ce contenu:

```env
# ========================================
# TELEGRAM (Notifications - Optionnel)
# ========================================
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# ========================================
# BREVO (Email Marketing - OBLIGATOIRE)
# ========================================
# Clé API Brevo - https://app.brevo.com/settings/keys/api
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxx

# Email expéditeur vérifié dans Brevo
BREVO_SENDER_EMAIL=hello@thibautgallien.com

# ID de la liste pour les inscriptions newsletter
BREVO_NEWSLETTER_LIST_ID=3

# ID de la liste pour les lead magnets
BREVO_LEAD_MAGNET_LIST_ID=4

# ID du template email pour l'envoi des lead magnets
# Créer dans Brevo > Campaigns > Templates
BREVO_LEAD_MAGNET_TEMPLATE_ID=1

# ========================================
# GOOGLE ANALYTICS (Tracking - OBLIGATOIRE)
# ========================================
# Obtenir sur https://analytics.google.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# ========================================
# MICROSOFT CLARITY (Heatmaps - OBLIGATOIRE)
# ========================================
# C'est l'ID dans ton script Clarity
NEXT_PUBLIC_CLARITY_ID=v1hqv95hqc

# ========================================
# ADMIN (Protection page /admin - OBLIGATOIRE)
# ========================================
NEXT_PUBLIC_ADMIN_PASSWORD=ton_mot_de_passe_fort_ici

# ========================================
# NEXT.JS
# ========================================
NODE_ENV=development
```

---

## 🚀 Configuration par priorité

### 🔴 OBLIGATOIRE (pour que le site fonctionne)

**1. BREVO_API_KEY**
- Où ? https://app.brevo.com/settings/keys/api
- Pourquoi ? Formulaires newsletter et lead magnets
- Format : `xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxx`

**2. BREVO_SENDER_EMAIL**
- Où ? L'email que tu as vérifié dans Brevo
- Pourquoi ? Email expéditeur pour tes envois
- Format : `hello@thibautgallien.com`

**3. NEXT_PUBLIC_GA_MEASUREMENT_ID**
- Où ? https://analytics.google.com
- Pourquoi ? Tracking des visiteurs
- Format : `G-XXXXXXXXXX`

**4. NEXT_PUBLIC_CLARITY_ID**
- Où ? Le script que Clarity t'a donné
- Pourquoi ? Heatmaps et session recordings
- Format : `v1hqv95hqc` (tu l'as déjà!)

**5. NEXT_PUBLIC_ADMIN_PASSWORD**
- Où ? Tu choisis
- Pourquoi ? Protéger /admin
- Format : Minimum 12 caractères, complexe

---

### 🟡 RECOMMANDÉ (améliore l'expérience)

**BREVO_NEWSLETTER_LIST_ID**
- Où ? Dans Brevo > Contacts > Listes
- Pourquoi ? Organiser tes contacts newsletter
- Format : Un chiffre (ex: `3`)

**BREVO_LEAD_MAGNET_LIST_ID**
- Où ? Dans Brevo > Contacts > Listes
- Pourquoi ? Organiser tes lead magnets
- Format : Un chiffre (ex: `4`)

**BREVO_LEAD_MAGNET_TEMPLATE_ID**
- Où ? Dans Brevo > Campaigns > Templates
- Pourquoi ? Email automatique pour lead magnets
- Format : Un chiffre (ex: `1`)

---

### ⚪ OPTIONNEL (si tu veux)

**TELEGRAM_BOT_TOKEN**
- Où ? https://t.me/BotFather
- Pourquoi ? Recevoir des notifications Telegram
- Format : `123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ`

**TELEGRAM_CHAT_ID**
- Où ? https://t.me/userinfobot
- Pourquoi ? Ton ID Telegram
- Format : `123456789`

---

## 📝 Guide étape par étape

### 1. Créer le fichier .env

```bash
# À la racine du projet
touch .env

# Ou sur Windows, crée un nouveau fichier texte nommé ".env"
```

### 2. Copier le template

Copie le template complet du début de ce document.

### 3. Remplir les valeurs obligatoires

#### A. Google Analytics (5 min)
1. Va sur https://analytics.google.com
2. Crée une propriété GA4 si tu n'en as pas
3. Va dans Admin > Data Streams
4. Copie le Measurement ID (G-XXXXXXXXXX)
5. Colle dans `.env` → `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

#### B. Microsoft Clarity (3 min)
1. Tu l'as déjà ! → `v1hqv95hqc`
2. Colle dans `.env` → `NEXT_PUBLIC_CLARITY_ID=v1hqv95hqc`

#### C. Brevo (10 min)
1. Va sur https://app.brevo.com
2. Settings > API Keys > Create a new API Key
3. Copie la clé (commence par `xkeysib-`)
4. Colle dans `.env` → `BREVO_API_KEY=xkeysib-xxx`
5. Note ton email vérifié → `BREVO_SENDER_EMAIL=hello@thibautgallien.com`
6. Va dans Contacts > Lists
7. Note les IDs des listes (ou crée-les)
8. Campaigns > Templates > Crée un template email
9. Note le template ID

#### D. Mot de passe Admin (1 min)
1. Choisis un mot de passe fort (min 12 caractères)
2. Exemple : `MonFunnel2024Secure!`
3. Colle dans `.env` → `NEXT_PUBLIC_ADMIN_PASSWORD=MonFunnel2024Secure!`

### 4. Vérifier que tout fonctionne

```bash
# Lance le site en local
npm run dev

# Teste:
# 1. Va sur /admin → mot de passe demandé ✅
# 2. Inscris-toi à la newsletter (test) → email reçu ✅
# 3. Ouvre la console (F12) → GA4 tracking visible ✅
# 4. Va sur clarity.microsoft.com → sessions visibles ✅
```

---

## ⚠️ Sécurité

### ✅ À FAIRE
- ✅ Créer un `.env` à la racine
- ✅ NE JAMAIS commit le `.env` (déjà dans .gitignore)
- ✅ Utiliser des mots de passe forts
- ✅ Changer les mots de passe régulièrement

### ❌ À NE PAS FAIRE
- ❌ Partager ton `.env` publiquement
- ❌ Commit le `.env` sur Git
- ❌ Utiliser des mots de passe faibles
- ❌ Réutiliser des mots de passe

---

## 🔄 Mettre à jour les variables

### En local
1. Modifie `.env`
2. Redémarre le serveur : `npm run dev`

### En production (Vercel)
1. Va sur https://vercel.com
2. Ton projet > Settings > Environment Variables
3. Ajoute toutes les variables du `.env`
4. Redéploie le site

**⚠️ Important :** Les variables `NEXT_PUBLIC_*` sont visibles côté client. Ne jamais mettre de secrets dedans!

---

## 🆘 Dépannage

### "Brevo API error"
→ Vérifie que `BREVO_API_KEY` est correct
→ Vérifie que l'email est vérifié dans Brevo

### "GA4 ne track pas"
→ Vérifie que la variable commence par `NEXT_PUBLIC_`
→ Rebuild: `npm run build`

### "Clarity ne montre rien"
→ Attends 5-10 minutes (délai normal)
→ Visite ton site en navigation privée

### "Admin ne marche pas"
→ Vérifie `NEXT_PUBLIC_ADMIN_PASSWORD` dans `.env`
→ Rebuild le site
→ Vide le cache du navigateur

---

## 📊 Variables utilisées où

| Variable | Utilisée dans | Type |
|----------|---------------|------|
| TELEGRAM_BOT_TOKEN | Contact form | Serveur |
| TELEGRAM_CHAT_ID | Contact form | Serveur |
| BREVO_API_KEY | API routes | Serveur |
| BREVO_SENDER_EMAIL | API routes | Serveur |
| BREVO_*_LIST_ID | API routes | Serveur |
| BREVO_*_TEMPLATE_ID | API routes | Serveur |
| NEXT_PUBLIC_GA_MEASUREMENT_ID | GoogleAnalytics.tsx | Client |
| NEXT_PUBLIC_CLARITY_ID | MicrosoftClarity.tsx | Client |
| NEXT_PUBLIC_ADMIN_PASSWORD | /admin | Client |

**Serveur** = Secret, jamais exposé
**Client** = Visible dans le code source (OK pour IDs publics)

---

## ✅ Checklist finale

Avant de déployer, vérifie:

- [ ] `.env` existe à la racine
- [ ] Toutes les variables obligatoires sont remplies
- [ ] Le site fonctionne en local (`npm run dev`)
- [ ] Les formulaires marchent (test newsletter)
- [ ] GA4 track les pages (console)
- [ ] Clarity enregistre les sessions
- [ ] /admin est protégé par mot de passe
- [ ] Variables ajoutées dans Vercel
- [ ] Build réussit (`npm run build`)

---

**Tout est clair ? Besoin d'aide pour une variable spécifique ?**
