"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, X, CheckCircle, TrendingDown, Search, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";

// Lead magnet modal component
function ChecklistModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        toast.success("Checklist envoyée !", {
          description: "Vérifie ta boîte mail (et les spams) 📧",
        });
        setEmail("");
        setName("");
        onClose();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi", {
        description: "Réessaye ou contacte-moi directement.",
      });
    }

    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 border border-[#9B5DE5]/30 rounded-2xl p-6 md:p-8 max-w-lg w-full relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>

          <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
            Les 7 leaks qui coûtent le plus cher
          </h2>
          <p className="text-gray-300 mb-6">
            Checklist PDF gratuite pour identifier rapidement les points critiques de ton funnel.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Prénom"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
            >
              {isSubmitting ? "Envoi..." : "Recevoir la checklist"}
            </Button>

            <p className="text-xs text-gray-400 text-center">
              Pas de spam. Désinscription en 1 clic.
            </p>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default function NewHomePage() {
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0D0D0D]">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Copy */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-6">
                  <span className="text-sm font-medium text-[#9B5DE5] bg-[#9B5DE5]/10 px-4 py-2 rounded-full border border-[#9B5DE5]/20">
                    Revenue Recovery Sprint
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight">
                  Je trouve et fixe les leaks de ton funnel
                </h1>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Diagnostic en 48h. Implémentation en 3 semaines. Tracking sur 60 jours.
                  <br />
                  <span className="text-[#FFD400]">
                    Tu sais exactement où part ton argent, et comment le récupérer.
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                  >
                    <Link href="/gratuit">
                      Je cherche 3 clients pilotes
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  <Button
                    onClick={() => setIsChecklistOpen(true)}
                    variant="outline"
                    size="lg"
                    className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-colors"
                  >
                    Télécharger la checklist
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
                    100% gratuit pour les 3 premiers
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
                    Minimum 5K€/mois requis
                  </span>
                </div>
              </motion.div>

              {/* Right - Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative">
                  {/* Main card */}
                  <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-0">
                      {/* Process preview */}
                      <div className="p-6 border-b border-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center">
                            <Search className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Phase 1 : Diagnostic</div>
                            <div className="text-xs text-gray-400">48 heures</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300 space-y-1">
                          <div>• Analyse complète des analytics</div>
                          <div>• Audit de la landing page</div>
                          <div>• Test du funnel (desktop + mobile)</div>
                          <div>• Rapport détaillé 15-20 pages</div>
                        </div>
                      </div>

                      <div className="p-6 border-b border-gray-800">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#3A86FF] to-[#0EA5E9] flex items-center justify-center">
                            <Code className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Phase 2 : Implémentation</div>
                            <div className="text-xs text-gray-400">3 semaines</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300 space-y-1">
                          <div>• Correction des leaks identifiés</div>
                          <div>• Code, copy, design si nécessaire</div>
                          <div>• Setup tracking & automatisations</div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#FFD400] to-[#F59E0B] flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-black" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">Phase 3 : Tracking</div>
                            <div className="text-xs text-gray-400">60 jours</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-300 space-y-1">
                          <div>• Suivi hebdomadaire des métriques</div>
                          <div>• Dashboard de tracking</div>
                          <div>• Rapport final avec ROI exact</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-[#FFD400] text-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    3 places gratuites
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION : PROBLÈME */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
              Le problème que je résous
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tu as du trafic. Tu as une offre. Mais quelque chose ne marche pas comme prévu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                problem: "Taux de conversion trop bas",
                detail: "Ta landing page ne convertit pas assez. Tu sens qu'il y a un problème mais tu ne sais pas quoi.",
                icon: TrendingDown,
              },
              {
                problem: "Argent qui s'évapore",
                detail: "Tu paies pour du trafic mais une grosse partie ne se transforme jamais en client.",
                icon: "💸",
              },
              {
                problem: "Pas de visibilité",
                detail: "Tu ne sais pas précisément où sont les problèmes. Tout est flou, rien n'est tracké correctement.",
                icon: "🔍",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">
                      {typeof item.icon === "string" ? item.icon : <item.icon className="w-8 h-8 text-red-400" />}
                    </div>
                    <h3 className="font-bold text-white mb-3">{item.problem}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION : SOLUTION */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
              Ma méthode en 3 phases
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Un process structuré pour identifier, corriger et mesurer l'impact des optimisations.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                phase: "01",
                title: "Diagnostic",
                duration: "48 heures",
                description: "J'analyse ton funnel dans les moindres détails pour trouver ce qui ne va pas.",
                points: [
                  "Audit complet des analytics (Google Analytics, pixels, CRM)",
                  "Test du parcours utilisateur sur tous les appareils",
                  "Analyse de la landing page (structure, clarté, CTA)",
                  "Examen des emails et automatisations",
                  "Inspection de la page de paiement",
                ],
                deliverable: "Rapport de 15-20 pages avec les leaks identifiés et chiffrés",
                color: "from-[#9B5DE5] to-[#7C3AED]",
              },
              {
                phase: "02",
                title: "Implémentation",
                duration: "3 semaines",
                description: "Je corrige les problèmes identifiés. Code, copy, design, tracking.",
                points: [
                  "Correction des leaks prioritaires",
                  "Modifications techniques si nécessaires (code, bugs)",
                  "Réécriture du copy (landing, emails, CTA)",
                  "Optimisations visuelles",
                  "Mise en place du tracking précis",
                ],
                deliverable: "Funnel corrigé avec un système de tracking opérationnel",
                color: "from-[#3A86FF] to-[#0EA5E9]",
              },
              {
                phase: "03",
                title: "Tracking",
                duration: "60 jours",
                description: "On mesure l'impact exact des changements. Dashboard + rapports réguliers.",
                points: [
                  "Suivi hebdomadaire des métriques clés",
                  "Dashboard de tracking (Google Sheets ou Notion)",
                  "Rapports d'étape toutes les 2 semaines",
                  "Alertes si dégradation",
                  "Rapport final avec ROI précis",
                ],
                deliverable: "Tu sais exactement ce qui a marché et combien ça a rapporté",
                color: "from-[#FFD400] to-[#F59E0B]",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-bold text-2xl">{phase.phase}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">{phase.title}</h3>
                            <p className="text-gray-300">{phase.description}</p>
                          </div>
                          <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                            {phase.duration}
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                          {phase.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-gray-800/50 rounded-lg p-4 border-l-2 border-[#FFD400]">
                          <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Livrable</div>
                          <div className="text-sm text-white">{phase.deliverable}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION : GARANTIES */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
              Ce que je garantis
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Garantie diagnostic</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Si je ne trouve pas au moins 2 leaks majeurs dans ton funnel, l'intervention est gratuite.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Garantie implémentation</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Si l'implémentation est de mauvaise qualité, je rembourse 1000€.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-6">
                <h3 className="font-bold mb-3">Ce que je ne garantis pas</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Je ne garantis pas de montant spécifique récupéré. Pourquoi ? Parce que ça dépend de ton offre, ton trafic, ton marché, et plein de variables hors de mon contrôle.
                  <br /><br />
                  Ce que je garantis, c'est le process : trouver les leaks, les fixer proprement, et tracker les résultats avec précision.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* SECTION : POUR QUI */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6 text-center">
              Tu es éligible si...
            </h2>
            <p className="text-center text-gray-300 mb-12">
              J'ai besoin de data exploitable pour trouver les leaks. Sans ça, je ne peux rien faire.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#06D6A0] mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Tu es éligible
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#06D6A0]">✓</span>
                    <span>Tu fais minimum 5 000€/mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#06D6A0]">✓</span>
                    <span>Tu as un funnel qui tourne (landing + offre + paiement)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#06D6A0]">✓</span>
                    <span>Tu as minimum 500 visiteurs qualifiés/mois</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#06D6A0]">✓</span>
                    <span>Tu as des analytics installés (ou prêt à les installer)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#06D6A0]">✓</span>
                    <span>Tu es en plateau ou sous-performance depuis 3+ mois</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-red-400 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Tu n'es pas éligible
                </h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Tu fais moins de 5K/mois (pas assez de data)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Tu as moins de 500 visiteurs/mois (volume insuffisant)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Tu n'as pas encore de funnel (tu dois d'abord construire)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Ton offre est bancale (je fixe les leaks, pas l'offre)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    <span>Tu veux juste un audit PDF (je fixe, pas juste un rapport)</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION : ABOUT */}
        <section className="py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full flex items-center justify-center border border-gray-800 relative overflow-hidden mx-auto">
                <div className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center shadow-2xl">
                  <img
                    src="/profile-pic.webp"
                    alt="Thibaut"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
                  Thibaut Gallien
                </h2>
                <p className="text-xl text-gray-300">
                  Je trouve où ton funnel fuit. Et je le fixe.
                </p>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Entrepreneur depuis 2020, ex-community manager chez Tugan.ai. 5 ans d'expérience en copywriting et optimisation de funnels.
                </p>

                <p>
                  J'ai vu trop d'entrepreneurs gaspiller leur argent en cherchant plus de trafic alors que leur funnel actuel laisse filer des milliers d'euros.
                </p>

                <p className="text-[#9B5DE5] font-semibold">
                  Ma conviction : la data > l'instinct. Toujours.
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
              >
                <Link href="/about">
                  En savoir plus
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SECTION : CTA FINAL */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30 max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                  Je cherche 3 clients pilotes
                </h2>

                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  J'ai besoin de case studies avant de lancer l'offre payante (valeur 2000€).
                  En échange de ton témoignage : intervention 100% gratuite.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
                  >
                    <Link href="/gratuit">
                      Candidater pour une place gratuite
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>

                  <Button
                    onClick={() => setIsChecklistOpen(true)}
                    variant="outline"
                    size="lg"
                    className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]"
                  >
                    Ou télécharge la checklist
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
                  <div>✓ 100% gratuit</div>
                  <div>✓ Valeur 2000€</div>
                  <div>✓ Minimum 5K/mois</div>
                  <div>✓ Sélection sous 48h</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>

      <ChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />
    </div>
  );
}