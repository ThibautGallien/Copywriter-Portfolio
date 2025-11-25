/**
 * Fonctions de tracking pour événements spécifiques
 * Ce fichier contient des helpers pour tracker les actions importantes du funnel
 */

import { trackEvent } from "./gtag";
import {
  ConversionEvent,
  ContactFormParams,
  CTAClickParams,
  ScrollDepthParams,
  BlogEngagementParams,
  ServiceInteractionParams,
} from "./types";

/**
 * Track la soumission d'un formulaire de contact
 */
export const trackContactForm = (params: ContactFormParams): void => {
  trackEvent(ConversionEvent.CONTACT_FORM_SUBMIT, params);
};

/**
 * Track l'inscription à la newsletter
 */
export const trackNewsletterSignup = (location: string): void => {
  trackEvent(ConversionEvent.NEWSLETTER_SIGNUP, {
    form_location: location,
    form_type: "newsletter",
  });
};

/**
 * Track le clic sur un CTA
 */
export const trackCTAClick = (params: CTAClickParams): void => {
  trackEvent(ConversionEvent.CTA_CLICK, params);
};

/**
 * Track une demande d'audit gratuit
 */
export const trackAuditRequest = (location: string, ctaText: string): void => {
  trackEvent(ConversionEvent.AUDIT_REQUEST_CLICK, {
    cta_location: location,
    cta_text: ctaText,
    conversion_action: "audit_request",
  });
};

/**
 * Track la profondeur de scroll
 * Utile pour mesurer l'engagement sur les pages
 */
export const trackScrollDepth = (params: ScrollDepthParams): void => {
  trackEvent(ConversionEvent.SCROLL_DEPTH, params);
};

/**
 * Track la lecture d'un article de blog
 */
export const trackBlogRead = (params: BlogEngagementParams): void => {
  trackEvent(ConversionEvent.BLOG_READ, params);
};

/**
 * Track un clic sur un CTA dans un article de blog
 */
export const trackBlogCTA = (
  articleTitle: string,
  ctaText: string,
  ctaDestination: string
): void => {
  trackEvent(ConversionEvent.BLOG_CTA_CLICK, {
    article_title: articleTitle,
    cta_text: ctaText,
    cta_destination: ctaDestination,
  });
};

/**
 * Track l'interaction avec la page services
 */
export const trackServiceInteraction = (
  params: ServiceInteractionParams
): void => {
  const eventType =
    params.interaction_type === "view"
      ? ConversionEvent.SERVICE_VIEW
      : ConversionEvent.SERVICE_CONTACT;

  trackEvent(eventType, params);
};

/**
 * Track les événements d'exit intent
 */
export const trackExitIntent = (
  action: "shown" | "dismissed" | "converted",
  additionalParams?: Record<string, any>
): void => {
  const eventMap = {
    shown: ConversionEvent.EXIT_INTENT_SHOWN,
    dismissed: ConversionEvent.EXIT_INTENT_DISMISSED,
    converted: ConversionEvent.EXIT_INTENT_CONVERTED,
  };

  trackEvent(eventMap[action], additionalParams);
};
