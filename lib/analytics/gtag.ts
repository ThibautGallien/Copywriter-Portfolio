/**
 * Utilitaires pour Google Analytics (gtag)
 * Ce fichier centralise toutes les fonctions de tracking
 */

import { GAEventParams } from "./types";

/**
 * Déclare les fonctions gtag et dataLayer pour TypeScript
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Vérifie si gtag est disponible (côté client uniquement)
 */
export const isGtagAvailable = (): boolean => {
  return typeof window !== "undefined" && typeof window.gtag !== "undefined";
};

/**
 * Track une page view
 * Appelé automatiquement par Next.js lors de la navigation
 */
export const trackPageView = (url: string): void => {
  if (!isGtagAvailable()) return;

  window.gtag?.("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_path: url,
  });
};

/**
 * Track un événement personnalisé
 * @param eventName - Nom de l'événement
 * @param eventParams - Paramètres additionnels
 */
export const trackEvent = (
  eventName: string,
  eventParams?: GAEventParams
): void => {
  if (!isGtagAvailable()) {
    // En développement, log dans la console
    if (process.env.NODE_ENV === "development") {
      console.log("[GA Event]", eventName, eventParams);
    }
    return;
  }

  window.gtag?.("event", eventName, eventParams);
};

/**
 * Track une conversion
 * Utile pour suivre les objectifs dans GA4
 */
export const trackConversion = (
  conversionLabel: string,
  value?: number,
  currency: string = "EUR"
): void => {
  if (!isGtagAvailable()) return;

  window.gtag?.("event", "conversion", {
    send_to: `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}/${conversionLabel}`,
    value: value,
    currency: currency,
  });
};

/**
 * Track un utilisateur (pour identifier les visiteurs)
 * À utiliser après une inscription ou connexion
 */
export const trackUser = (userId: string): void => {
  if (!isGtagAvailable()) return;

  window.gtag?.("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    user_id: userId,
  });
};

/**
 * Track des propriétés utilisateur personnalisées
 */
export const setUserProperties = (properties: Record<string, any>): void => {
  if (!isGtagAvailable()) return;

  window.gtag?.("set", "user_properties", properties);
};
