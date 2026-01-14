"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const url = pathname + searchParams.toString();

    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);

  // Ne rien afficher si l'ID n'est pas configuré
  if (!GA_MEASUREMENT_ID) {
    console.warn("Google Analytics ID non configuré");
    return null;
  }

  return (
    <>
      {/* Preconnect pour Google Analytics */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Configuration GA4 avec tracking avancé
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,

              // Tracking du scroll
              scroll_tracking: true,

              // Tracking des liens sortants
              link_attribution: true,

              // Tracking des fichiers téléchargés
              file_downloads: true,

              // Tracking vidéo
              video_engagement: true,

              // Enhanced measurement
              enhanced_measurement: {
                scrolls: true,
                outbound_clicks: true,
                site_search: true,
                video_engagement: true,
                file_downloads: true,
                page_changes: true,
              },

              // Custom parameters
              custom_map: {
                dimension1: 'funnel_type',
                dimension2: 'lead_source',
                dimension3: 'article_category'
              }
            });

            // Track erreurs JavaScript
            window.addEventListener('error', function(e) {
              gtag('event', 'exception', {
                description: e.message,
                fatal: false
              });
            });
          `,
        }}
      />
    </>
  );
}
