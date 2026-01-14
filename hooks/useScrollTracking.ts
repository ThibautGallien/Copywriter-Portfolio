"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "@/lib/analytics";

/**
 * Hook pour tracker la profondeur de scroll sur une page
 * Envoie des événements à 25%, 50%, 75% et 100% de scroll
 */
export function useScrollTracking(pagePath: string) {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Définir les seuils à tracker
      const depths = [25, 50, 75, 100];

      for (const depth of depths) {
        if (scrollPercentage >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth(depth, pagePath);
        }
      }
    };

    // Ajouter l'event listener avec throttling
    let timeoutId: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, 300);
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [pagePath]);
}
