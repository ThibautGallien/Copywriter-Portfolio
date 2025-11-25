/**
 * Types pour le système de tracking Google Analytics
 * Ces types assurent la cohérence et facilitent la maintenance
 */

export interface GAEventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Événements de conversion importants pour le funnel
 */
export enum ConversionEvent {
  // Formulaires
  CONTACT_FORM_SUBMIT = "contact_form_submit",
  NEWSLETTER_SIGNUP = "newsletter_signup",

  // CTA
  CTA_CLICK = "cta_click",
  AUDIT_REQUEST_CLICK = "audit_request_click",

  // Engagement
  SCROLL_DEPTH = "scroll_depth",
  TIME_ON_PAGE = "time_on_page",

  // Blog
  BLOG_READ = "blog_article_read",
  BLOG_CTA_CLICK = "blog_cta_click",

  // Services
  SERVICE_VIEW = "service_view",
  SERVICE_CONTACT = "service_contact",

  // Exit Intent
  EXIT_INTENT_SHOWN = "exit_intent_popup_shown",
  EXIT_INTENT_DISMISSED = "exit_intent_popup_dismissed",
  EXIT_INTENT_CONVERTED = "exit_intent_popup_converted",
}

/**
 * Paramètres personnalisés pour chaque type d'événement
 */
export interface ContactFormParams extends GAEventParams {
  form_location: string;
  service_interest?: string;
  form_type: "contact" | "audit" | "newsletter";
}

export interface CTAClickParams extends GAEventParams {
  cta_text: string;
  cta_location: string;
  cta_destination: string;
}

export interface ScrollDepthParams extends GAEventParams {
  depth_percentage: number;
  page_path: string;
}

export interface BlogEngagementParams extends GAEventParams {
  article_title: string;
  article_slug: string;
  read_percentage: number;
}

export interface ServiceInteractionParams extends GAEventParams {
  service_name: string;
  service_category: string;
  interaction_type: "view" | "contact" | "click";
}
