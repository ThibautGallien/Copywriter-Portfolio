#!/usr/bin/env node

/**
 * Script de vérification du système de tracking
 * Lance ce script pour vérifier que tout est bien configuré
 *
 * Usage: node scripts/check-tracking.js
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Vérification du système de tracking...\n");

let hasErrors = false;
let hasWarnings = false;

// Vérifications
const checks = [
  {
    name: "Fichiers analytics",
    check: () => {
      const files = [
        "lib/analytics/index.ts",
        "lib/analytics/types.ts",
        "lib/analytics/gtag.ts",
        "lib/analytics/events.ts",
      ];

      const missing = files.filter(
        (f) => !fs.existsSync(path.join(process.cwd(), f))
      );

      if (missing.length > 0) {
        return {
          success: false,
          message: `Fichiers manquants : ${missing.join(", ")}`,
        };
      }

      return {
        success: true,
        message: "Tous les fichiers analytics sont présents",
      };
    },
  },
  {
    name: "Composants analytics",
    check: () => {
      const files = [
        "components/analytics/TrackedButton.tsx",
        "components/analytics/index.ts",
      ];

      const missing = files.filter(
        (f) => !fs.existsSync(path.join(process.cwd(), f))
      );

      if (missing.length > 0) {
        return {
          success: false,
          message: `Fichiers manquants : ${missing.join(", ")}`,
        };
      }

      return { success: true, message: "Composants analytics présents" };
    },
  },
  {
    name: "Hook useScrollTracking",
    check: () => {
      const file = "hooks/useScrollTracking.ts";

      if (!fs.existsSync(path.join(process.cwd(), file))) {
        return { success: false, message: "Hook manquant" };
      }

      return { success: true, message: "Hook de scroll tracking présent" };
    },
  },
  {
    name: "Configuration .env.example",
    check: () => {
      const file = ".env.example";

      if (!fs.existsSync(path.join(process.cwd(), file))) {
        return { success: false, message: "Fichier .env.example manquant" };
      }

      const content = fs.readFileSync(path.join(process.cwd(), file), "utf-8");

      if (!content.includes("NEXT_PUBLIC_GA_MEASUREMENT_ID")) {
        return {
          success: false,
          message: "Variable GA manquante dans .env.example",
        };
      }

      return {
        success: true,
        message: "Fichier .env.example correctement configuré",
      };
    },
  },
  {
    name: "Variable d'environnement GA",
    check: () => {
      const envFile = ".env.local";
      const envPath = path.join(process.cwd(), envFile);

      if (!fs.existsSync(envPath)) {
        return {
          success: false,
          warning: true,
          message:
            ".env.local n'existe pas. Crée-le avec : cp .env.example .env.local",
        };
      }

      const content = fs.readFileSync(envPath, "utf-8");

      if (!content.includes("NEXT_PUBLIC_GA_MEASUREMENT_ID=G-")) {
        return {
          success: false,
          warning: true,
          message:
            "NEXT_PUBLIC_GA_MEASUREMENT_ID pas configuré dans .env.local",
        };
      }

      return {
        success: true,
        message: "Variable GA configurée dans .env.local",
      };
    },
  },
  {
    name: "Integration dans layout",
    check: () => {
      const file = "app/layout.tsx";
      const filePath = path.join(process.cwd(), file);

      if (!fs.existsSync(filePath)) {
        return { success: false, message: "app/layout.tsx introuvable" };
      }

      const content = fs.readFileSync(filePath, "utf-8");

      if (!content.includes("GoogleAnalytics")) {
        return {
          success: false,
          message: "GoogleAnalytics pas importé dans layout.tsx",
        };
      }

      if (!content.includes("NEXT_PUBLIC_GA_MEASUREMENT_ID")) {
        return {
          success: false,
          message: "GA_MEASUREMENT_ID pas utilisé dans layout.tsx",
        };
      }

      return {
        success: true,
        message: "Google Analytics intégré dans le layout",
      };
    },
  },
  {
    name: "Tracking dans formulaire contact",
    check: () => {
      const file = "app/contact/page.tsx";
      const filePath = path.join(process.cwd(), file);

      if (!fs.existsSync(filePath)) {
        return { success: false, message: "app/contact/page.tsx introuvable" };
      }

      const content = fs.readFileSync(filePath, "utf-8");

      if (!content.includes("trackContactForm")) {
        return {
          success: false,
          warning: true,
          message: "trackContactForm pas appelé dans le formulaire contact",
        };
      }

      return {
        success: true,
        message: "Tracking actif sur formulaire contact",
      };
    },
  },
  {
    name: "Tracking newsletter",
    check: () => {
      const file = "app/page.tsx";
      const filePath = path.join(process.cwd(), file);

      if (!fs.existsSync(filePath)) {
        return { success: false, message: "app/page.tsx introuvable" };
      }

      const content = fs.readFileSync(filePath, "utf-8");

      if (!content.includes("trackNewsletterSignup")) {
        return {
          success: false,
          warning: true,
          message: "trackNewsletterSignup pas appelé dans la newsletter",
        };
      }

      return { success: true, message: "Tracking actif sur newsletter" };
    },
  },
  {
    name: "Documentation",
    check: () => {
      const files = [
        "TRACKING_QUICK_START.md",
        "TRACKING_SETUP.md",
        "IMPLEMENTATION_SUMMARY.md",
      ];

      const missing = files.filter(
        (f) => !fs.existsSync(path.join(process.cwd(), f))
      );

      if (missing.length > 0) {
        return {
          success: false,
          warning: true,
          message: `Documentation manquante : ${missing.join(", ")}`,
        };
      }

      return { success: true, message: "Documentation complète présente" };
    },
  },
];

// Exécute les vérifications
checks.forEach((check, index) => {
  const result = check.check();

  const icon = result.success ? "✅" : result.warning ? "⚠️" : "❌";
  const color = result.success
    ? "\x1b[32m"
    : result.warning
    ? "\x1b[33m"
    : "\x1b[31m";
  const reset = "\x1b[0m";

  console.log(`${color}${icon} ${check.name}${reset}`);
  console.log(`   ${result.message}\n`);

  if (!result.success) {
    if (result.warning) {
      hasWarnings = true;
    } else {
      hasErrors = true;
    }
  }
});

// Résumé
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

if (!hasErrors && !hasWarnings) {
  console.log(
    "🎉 \x1b[32mParfait ! Le système de tracking est correctement configuré.\x1b[0m\n"
  );
  console.log("📋 Prochaines étapes :");
  console.log("   1. Configure ton ID GA4 dans .env.local (si pas déjà fait)");
  console.log("   2. Lance le serveur : npm run dev");
  console.log("   3. Teste le tracking en ouvrant la console du navigateur");
  console.log("   4. Vérifie dans GA : Rapports > Temps réel\n");
  console.log("📖 Documentation : TRACKING_QUICK_START.md\n");
  process.exit(0);
} else if (hasWarnings && !hasErrors) {
  console.log(
    "⚠️  \x1b[33mLe système est installé mais nécessite une configuration.\x1b[0m\n"
  );
  console.log("📋 Action requise :");
  console.log("   1. Copie .env.example vers .env.local");
  console.log("   2. Configure NEXT_PUBLIC_GA_MEASUREMENT_ID avec ton ID GA4");
  console.log("   3. Relance ce script pour vérifier\n");
  console.log("📖 Documentation : TRACKING_QUICK_START.md\n");
  process.exit(1);
} else {
  console.log("❌ \x1b[31mDes erreurs ont été détectées.\x1b[0m\n");
  console.log("📋 Action requise :");
  console.log("   Vérifie les erreurs ci-dessus et corrige-les.");
  console.log("   Si tu viens d'installer le système, assure-toi que tous");
  console.log("   les fichiers ont été créés correctement.\n");
  console.log("📖 Documentation : IMPLEMENTATION_SUMMARY.md\n");
  process.exit(1);
}
