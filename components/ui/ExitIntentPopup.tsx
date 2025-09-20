"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useExitIntent } from "@/hooks/useExitIntent";

interface ExitPopupProps {
  delay?: number;
  enabled?: boolean;
}

export default function ExitPopup({
  delay = 5000,
  enabled = true,
}: ExitPopupProps) {
  const { isTriggered, dismiss } = useExitIntent({
    delay,
    enabled,
    sensitivity: 60, // Plus sensible sur mobile
  });

  const handleCTAClick = () => {
    // Analytics tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "exit_intent_conversion", {
        event_category: "popup",
        event_label: "audit_booking",
      });
    }
    dismiss();
  };

  const handleClose = () => {
    // Analytics tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "exit_intent_dismissed", {
        event_category: "popup",
        event_label: "user_closed",
      });
    }
    dismiss();
  };

  if (!enabled) return null;

  return (
    <AnimatePresence>
      {isTriggered && (
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
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20"
            style={{ maxHeight: "90vh", overflowY: "auto" }}
          >
            <Card className="bg-gray-900 border-[#9B5DE5]/30 shadow-2xl">
              <CardContent className="p-6">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>

                {/* Header */}
                <div className="text-center mb-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold font-space-grotesk text-white mb-2"
                  >
                    Attendez ! 👋
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-[#FFD400] font-semibold"
                  >
                    30 minutes pour débloquer votre email marketing
                  </motion.p>
                </div>

                {/* Value Proposition */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-xl p-4 mb-6"
                >
                  <h3 className="font-bold text-white mb-3 text-center">
                    Dans cet audit gratuit, vous découvrirez :
                  </h3>
                  <div className="space-y-2">
                    {[
                      "Pourquoi vos emails ne convertissent pas",
                      "3 optimisations immédiates à faire",
                      "Le potentiel de revenus de votre liste",
                      "Un plan d'action personnalisé",
                    ].map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Urgence */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <span className="text-red-300 font-semibold text-sm">
                      Seulement 2 places restantes ce mois
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Si vous partez maintenant, vous devrez attendre le mois
                    prochain pour une consultation gratuite.
                  </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="space-y-4"
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#FFD400] to-[#F59E0B] text-black font-bold hover:opacity-90 transition-opacity"
                    onClick={handleCTAClick}
                  >
                    <Link href="https://calendly.com/hello-thibautgallien/30min">
                      Réserver mon audit gratuit
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  {/* Guarantees */}
                  <div className="grid grid-cols-2 gap-2 text-center text-xs text-[#06D6A0]">
                    <div>✓ 100% gratuit</div>
                    <div>✓ Aucun engagement</div>
                    <div>✓ 30 minutes seulement</div>
                    <div>✓ Conseils actionnables</div>
                  </div>

                  {/* Dismiss link */}
                  <div className="text-center">
                    <button
                      onClick={handleClose}
                      className="text-xs text-gray-500 hover:text-gray-400 transition-colors"
                    >
                      Non merci, je préfère rater cette opportunité
                    </button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
