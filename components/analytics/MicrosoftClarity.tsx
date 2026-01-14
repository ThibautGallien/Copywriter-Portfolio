"use client";

import Script from "next/script";

/**
 * Microsoft Clarity - Heatmaps et session recordings GRATUITS
 *
 * Avantages:
 * - 100% gratuit, illimité
 * - Ultra léger (~3KB)
 * - Heatmaps, recordings, analytics
 * - Respecte le RGPD
 * - N'impacte PAS les performances
 *
 * Configuration:
 * 1. Crée un compte sur https://clarity.microsoft.com
 * 2. Crée un projet
 * 3. Copie ton Project ID
 * 4. Ajoute dans .env: NEXT_PUBLIC_CLARITY_ID=ton_project_id
 */
export default function MicrosoftClarity() {
  const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

  if (!CLARITY_ID) {
    console.warn("Microsoft Clarity ID non configuré");
    return null;
  }

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `,
      }}
    />
  );
}
