"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ExitIntentPopupProps {
  delay?: number; // Délai minimum avant que le popup puisse s'afficher (en ms)
}

export default function ExitIntentPopup({
  delay = 5000,
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Vérifier si le popup a déjà été affiché dans cette session
    const hasShownInSession = sessionStorage.getItem("exitPopupShown");
    if (hasShownInSession) return;

    // Délai minimum avant activation
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isReady || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Détecter si la souris sort par le haut de la fenêtre
      if (e.clientY <= 0 && e.relatedTarget === null) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    // Ajouter l'event listener
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isReady, hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    setIsVisible(false);
    // Le lien Calendly s'ouvrira automatiquement
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <Card className="bg-gray-900 border-[#9B5DE5]/30 shadow-2xl">
              <CardContent className="p-0">
                {/* Header avec bouton fermer */}
                <div className="relative p-6 pb-4">
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-400" />
                  </button>

                  {/* Titre accrocheur */}
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FFD400] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-black" />
                    </div>
                    <h2 className="text-2xl font-bold font-space-grotesk text-white mb-2">
                      Attendez !
                    </h2>
                    <p className="text-lg text-[#FFD400] font-semibold">
                      Récupérez votre audit gratuit avant de partir
                    </p>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="px-6 pb-6">
                  {/* Proposition de valeur */}
                  <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-xl p-4 mb-6">
                    <h3 className="font-bold text-white mb-3 text-center">
                      30 minutes qui peuvent changer votre business
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Découvrez pourquoi vos emails ne convertissent pas",
                        "Obtenez un plan d'action personnalisé",
                        "Voyez le potentiel inexploité de votre liste",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Urgence */}
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-red-400" />
                      <span className="text-red-300 font-semibold text-sm">
                        Dernière chance
                      </span>
                    </div>
                    <p className="text-xs text-gray-300">
                      Plus que 2 places disponibles ce trimestre. Si vous partez
                      maintenant, vous devrez attendre 3 mois pour la prochaine
                      opportunité.
                    </p>
                  </div>

                  {/* CTA Principal */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-bold hover:opacity-90 transition-opacity mb-4"
                    onClick={handleCTAClick}
                  >
                    <Link href="https://calendly.com/hello-thibautgallien/30min">
                      Réserver mon audit gratuit maintenant
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  {/* Garanties */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="text-xs text-[#06D6A0]">✓ 100% gratuit</div>
                    <div className="text-xs text-[#06D6A0]">
                      ✓ Aucun engagement
                    </div>
                    <div className="text-xs text-[#06D6A0]">
                      ✓ Conseils actionnables
                    </div>
                    <div className="text-xs text-[#06D6A0]">
                      ✓ 30 minutes seulement
                    </div>
                  </div>

                  {/* Lien de fermeture discret */}
                  <div className="text-center mt-4">
                    <button
                      onClick={handleClose}
                      className="text-xs text-gray-500 hover:text-gray-400 transition-colors underline"
                    >
                      Non merci, je préfère rater cette opportunité
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
