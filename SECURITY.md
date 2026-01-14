# 🛡️ Sécurité du site

## Mesures de sécurité en place

### 1. Headers de sécurité (next.config.js)
✅ **X-Frame-Options**: Protège contre le clickjacking
✅ **X-Content-Type-Options**: Empêche le MIME sniffing
✅ **Referrer-Policy**: Contrôle les informations envoyées
✅ **Permissions-Policy**: Désactive les APIs dangereuses
✅ **X-DNS-Prefetch-Control**: Optimise les DNS lookups

### 2. Protection anti-bot (lib/anti-bot.ts)
✅ **Honeypot**: Champ invisible pour piéger les bots
✅ **Rate limiting**: Max 5 requêtes/minute par IP
✅ **Timing check**: Formulaire doit prendre min 2 secondes
✅ **Validation IP**: Tracking des adresses

### 3. Validation des données
✅ **Email regex**: Validation format email
✅ **Sanitization**: Nettoyage automatique des inputs
✅ **Type checking**: TypeScript partout

### 4. APIs sécurisées
✅ **Variables d'environnement**: Clés jamais exposées côté client
✅ **HTTPS only**: Forced via Vercel
✅ **CORS**: Pas de requêtes cross-origin non autorisées

### 5. Dépendances
✅ **Next.js 13+**: Framework sécurisé par défaut
✅ **Pas de base de données**: Pas de risque SQL injection
✅ **Pas de fichiers uploadés**: Pas de risque malware

## Bonnes pratiques à suivre

### À FAIRE
- ✅ Toujours valider les inputs utilisateur
- ✅ Ne jamais exposer les clés API côté client
- ✅ Utiliser HTTPS partout
- ✅ Mettre à jour les dépendances régulièrement
- ✅ Limiter les permissions (Permissions-Policy)

### À NE PAS FAIRE
- ❌ Ne jamais commit le fichier .env
- ❌ Ne jamais désactiver les protections anti-bot
- ❌ Ne jamais accepter du HTML non sanitisé
- ❌ Ne jamais exposer d'infos sensibles dans le code
- ❌ Ne jamais désactiver HTTPS

## Commandes de sécurité

```bash
# Vérifier les vulnérabilités
npm audit

# Mettre à jour les dépendances
npm update

# Vérifier les dépendances obsolètes
npm outdated
```

## En cas de problème

1. **Bot spam détecté**: Vérifier les logs dans Vercel
2. **Rate limit atteint**: C'est normal si trop de requêtes
3. **Erreur Brevo**: Vérifier la clé API dans .env

## Score de sécurité estimé

🟢 **A+** - Le site suit les meilleures pratiques de sécurité

### Points forts
- Pas de base de données = pas de SQL injection
- Pas d'upload = pas de malware
- Next.js SSG = HTML statique = très sécurisé
- Headers de sécurité stricts
- Protection anti-bot multicouche

### Points d'attention
- Surveiller les tentatives de spam (logs Vercel)
- Mettre à jour Next.js régulièrement
- Vérifier les dépendances avec `npm audit`
