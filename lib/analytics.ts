/**
 * Helper pour tracker des événements Google Analytics
 */

// Déclaration TypeScript pour gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track un événement personnalisé
 */
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

/**
 * Track une conversion
 */
export const trackConversion = (conversionLabel: string, value?: number) => {
  trackEvent("conversion", {
    send_to: conversionLabel,
    value: value,
    currency: "EUR",
  });
};

/**
 * Track un clic sur un CTA
 */
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent("cta_click", {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
};

/**
 * Track une inscription newsletter
 */
export const trackNewsletterSignup = (source: string) => {
  trackEvent("newsletter_signup", {
    source: source,
  });
};

/**
 * Track un téléchargement de lead magnet
 */
export const trackLeadMagnetDownload = (leadMagnetName: string, source: string) => {
  trackEvent("lead_magnet_download", {
    lead_magnet: leadMagnetName,
    source: source,
  });
};

/**
 * Track un scroll sur l'article (25%, 50%, 75%, 100%)
 */
export const trackArticleScroll = (articleTitle: string, scrollDepth: number) => {
  trackEvent("article_scroll", {
    article_title: articleTitle,
    scroll_depth: scrollDepth,
  });
};

/**
 * Track le temps passé sur un article
 */
export const trackArticleReadTime = (articleTitle: string, timeSpent: number) => {
  trackEvent("article_read_time", {
    article_title: articleTitle,
    time_spent: timeSpent, // en secondes
  });
};

/**
 * Track une réservation Calendly
 */
export const trackCalendlyBooking = (bookingType: string) => {
  trackEvent("calendly_booking", {
    booking_type: bookingType,
  });
};

/**
 * Track l'utilisation d'un calculateur
 */
export const trackCalculatorUse = (calculatorType: string, result: number) => {
  trackEvent("calculator_use", {
    calculator_type: calculatorType,
    result: result,
  });
};

/**
 * Track la complétion d'un quiz
 */
export const trackQuizCompletion = (quizTitle: string, score: number) => {
  trackEvent("quiz_completion", {
    quiz_title: quizTitle,
    score: score,
  });
};

/**
 * Track un vote dans un poll
 */
export const trackPollVote = (pollQuestion: string, selectedOption: string) => {
  trackEvent("poll_vote", {
    poll_question: pollQuestion,
    selected_option: selectedOption,
  });
};

/**
 * Track une erreur de formulaire
 */
export const trackFormError = (formName: string, errorType: string) => {
  trackEvent("form_error", {
    form_name: formName,
    error_type: errorType,
  });
};

/**
 * Track le départ vers un lien externe
 */
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent("outbound_click", {
    url: url,
    link_text: linkText,
  });
};
