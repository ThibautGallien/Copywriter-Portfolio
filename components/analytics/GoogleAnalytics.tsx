"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [shouldLoad, setShouldLoad] = useState(false);

  // Charger GA seulement après interaction utilisateur
  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoad(true);
    };

    // Charger au scroll, au clic, ou après 3 secondes
    const timer = setTimeout(() => setShouldLoad(true), 3000);
    window.addEventListener("scroll", handleInteraction, { once: true });
    window.addEventListener("click", handleInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !shouldLoad) return;

    const url = pathname + searchParams.toString();

    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID, shouldLoad]);

  // Ne rien afficher si l'ID n'est pas configuré ou si on ne doit pas charger encore
  if (!GA_MEASUREMENT_ID || !shouldLoad) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              send_page_view: true,
              enhanced_measurement: {
                scrolls: true,
                outbound_clicks: true,
                file_downloads: true,
              },
            });
          `,
        }}
      />
    </>
  );
}
