"use client";

import { Button } from "@/components/ui/button";
import { trackCTAClick } from "@/lib/analytics";
import Link from "next/link";
import { ComponentProps } from "react";

interface TrackedButtonProps extends ComponentProps<typeof Button> {
  ctaText: string;
  ctaLocation: string;
  href?: string;
  onClick?: () => void;
}

/**
 * Bouton avec tracking automatique des clics
 * Envoie automatiquement les événements à Google Analytics
 */
export function TrackedButton({
  ctaText,
  ctaLocation,
  href,
  onClick,
  children,
  ...buttonProps
}: TrackedButtonProps) {
  const handleClick = () => {
    // Track le clic
    trackCTAClick({
      cta_text: ctaText,
      cta_location: ctaLocation,
      cta_destination: href || "action",
    });

    // Exécute le onClick si fourni
    if (onClick) {
      onClick();
    }
  };

  // Si c'est un lien
  if (href) {
    return (
      <Button asChild {...buttonProps} onClick={handleClick}>
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  // Si c'est un bouton classique
  return (
    <Button {...buttonProps} onClick={handleClick}>
      {children}
    </Button>
  );
}
