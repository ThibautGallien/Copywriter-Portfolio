// hooks/useExitIntent.ts
"use client";

import { useState, useEffect, useCallback } from "react";

interface UseExitIntentOptions {
  delay?: number;
  enabled?: boolean;
  storageKey?: string;
  sensitivity?: number; // Pour le scroll mobile
}

export function useExitIntent({
  delay = 5000,
  enabled = true,
  storageKey = "exitPopupShown",
  sensitivity = 50,
}: UseExitIntentOptions = {}) {
  const [isTriggered, setIsTriggered] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Check if already shown in session
  useEffect(() => {
    if (!enabled) return;

    const hasShownInSession = sessionStorage.getItem(storageKey);
    if (hasShownInSession) {
      setHasShown(true);
      return;
    }

    // Délai minimum avant activation
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, enabled, storageKey]);

  // Exit intent detection
  useEffect(() => {
    if (!isReady || hasShown || !enabled) return;

    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Détecter si la souris sort par le haut de la fenêtre
      if (e.clientY <= 0 && e.relatedTarget === null) {
        trigger();
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = lastScrollY - currentScrollY;

      // Clear previous timeout
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Si scroll rapide vers le haut et qu'on est dans le premier quart de la page
      if (scrollDiff > sensitivity && currentScrollY < window.innerHeight / 4) {
        // Délai pour éviter les faux positifs
        scrollTimeout = setTimeout(() => {
          trigger();
        }, 300);
      }
      lastScrollY = currentScrollY;
    };

    const handleBeforeUnload = () => {
      trigger();
    };

    // Détection de tentative de fermeture d'onglet (Ctrl+W, Cmd+W)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "w") {
        trigger();
      }
    };

    // Event listeners
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("keydown", handleKeyDown);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isReady, hasShown, enabled, sensitivity]);

  const trigger = useCallback(() => {
    if (!hasShown && isReady) {
      setIsTriggered(true);
      setHasShown(true);
      sessionStorage.setItem(storageKey, "true");

      // Analytics tracking
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "exit_intent_triggered", {
          event_category: "engagement",
          event_label: "popup_shown",
        });
      }
    }
  }, [hasShown, isReady, storageKey]);

  const reset = useCallback(() => {
    setIsTriggered(false);
    setHasShown(false);
    sessionStorage.removeItem(storageKey);
  }, [storageKey]);

  const dismiss = useCallback(() => {
    setIsTriggered(false);
  }, []);

  return {
    isTriggered,
    hasShown,
    isReady,
    trigger,
    reset,
    dismiss,
  };
}
