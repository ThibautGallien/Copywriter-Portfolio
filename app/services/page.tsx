/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle, 
  X, 
  Search, 
  Code, 
  BarChart3,
  AlertCircle,
  TrendingUp,
  Clock,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Link from "next/link";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    telegram: "",
    websiteUrl: "",
    monthlyRevenue: "",
    monthlyVisitors: "",
    businessType: "",
    currentFunnel: "",
    problemArea: "",
    whyApplying: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Candidature envoyée !", {
          description: "Je reviens vers toi sous 48h maximum 🚀",
        });
        setFormData({
          firstName: "",
          email: "",
          telegram: "",
          websiteUrl: "",
          monthlyRevenue: "",
          monthlyVisitors: "",
          businessType: "",
          currentFunnel: "",
          problemArea: "",
          whyApplying: "",
        });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D]">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative py-20">
        {/* HERO */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight">
              Je trouve ce qui bloque ton business et je le fixe en 3 semaines.
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Tu as du trafic. Tu as une offre. Mais ton CA stagne.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Quelque part dans ton système (ads, landing page, emails, checkout, offre), il y a 2-3 blocages majeurs qui te coûtent des centaines, voire des milliers d'euros par mois.
                </p>
                <p className="text-[#9B5DE5] font-semibold text-lg">
                  Je les trouve avec la data. Je les fixe. On mesure. Pas de bullshit, juste des chiffres.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* QUI JE SUIS */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              Qui je suis (et pourquoi tu devrais m'écouter)
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
              <p>
                Je m'appelle Thibaut.
              </p>
              <p>
                Ça fait 5 ans que je suis dans le marketing en ligne. J'ai commencé en 2020 pendant le COVID. J'ai tout testé : dropshipping, infoproduits, funnels, ads Facebook, copywriting, SEO, affiliation.
              </p>
              <p className="font-semibold text-white">
                J'ai réussi des trucs. J'ai foiré des trucs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    Ce que j'ai réussi
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Un funnel dans la séduction qui a cartonné (je n'y connaissais rien au départ, j'ai juste bien analysé la data)</li>
                    <li>• Un site d'affiliation qui convertit à 30% sur la landing page et génère des commissions mensuelles</li>
                    <li>• Des emails qui ouvrent à 45% sur une liste froide (aucun envoi depuis 6 mois avant ma relance)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500/10 to-red-700/10 border-red-500/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    Ce que j'ai foiré
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Un funnel dans "l'économie d'argent" → mauvais ciblage, j'ai vendu à des rats qui ne dépensent jamais</li>
                    <li>• Une boutique de drop en streetwear japonais → je n'y connais rien en design, je n'ai même pas atteint le breakeven</li>
                    <li>• Des infoproduits abandonnés faute de temps (j'étais étudiant à l'Institut Paul Bocuse puis 60h/semaine en restauration)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Entre 2023 et 2024, j'ai été le community manager de Tugan.ai. J'ai géré le Twitter, le support client, la recherche d'affiliés. Ça m'a redonné envie de refaire des funnels et de scaler des business en ligne.
              </p>
              <p>
                Aujourd'hui, je bosse à mi-temps dans un job alimentaire. Le reste du temps, je développe mes compétences en marketing et je fais des funnels.
              </p>
              <p className="text-white font-semibold">
                Mais voilà le problème :
              </p>
              <p>
                Je n'ai jamais vendu ce service officiellement. J'ai optimisé mes propres funnels. J'ai des résultats. Mais je n'ai aucun case study public. Aucun témoignage client.
              </p>
              <p className="text-[#FFD400] font-semibold">
                C'est pour ça que je fais cette offre gratuite.
              </p>
              <p>
                Je veux prouver que je peux trouver et fixer les problèmes de quelqu'un d'autre, pas juste les miens. Je veux 3 case studies solides avec de vrais chiffres. Ensuite, je vends ce service à 2000€.
              </p>
              <p className="text-[#9B5DE5] font-semibold text-lg">
                Si tu veux tenter le coup avec un mec qui a foiré, qui a réussi, qui sait analyser de la data et qui a tout à prouver, lis la suite.
              </p>
            </div>
          </motion.div>
        </section>

        {/* LE PROBLÈME */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              Le problème : tu perds de l'argent. Tu le sais. Mais pas où.
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
              <p>
                Ton problème, ce n'est pas le trafic. Tu sais faire venir des gens.
              </p>
              <p>
                Ton problème, ce n'est pas ton offre. Elle est solide. Les clients qui passent sont contents.
              </p>
              <p className="text-white font-semibold text-lg">
                Ton problème, c'est entre les deux.
              </p>
              <p>
                Entre le moment où quelqu'un clique sur ton lien et le moment où il sort sa carte bleue, il se passe 8 à 12 étapes. Ads. Landing page. Formulaire. Emails. Page de vente. Checkout. Onboarding. Premier email post-achat.
              </p>
              <p>
                À chaque étape, tu perds du monde. C'est normal.
              </p>
              <p className="text-red-400 font-semibold text-lg">
                Mais toi, tu perds TROP de monde.
              </p>
            </div>

            <Card className="bg-gray-900/80 border-[#FFD400]/30">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-white mb-4">
                  Exemple concret que je vois tout le temps :
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Un coach fait du Fb ads. Il paye 3€ par clic. Sur 100 clics (300€), 80 personnes arrivent sur sa landing page (20 se sont barrés avant, mauvaise connexion, page trop lente).
                  </p>
                  <p>
                    Sur ces 80, seulement 15 s'inscrivent à son webinaire gratuit. Pourquoi ? Le formulaire est en bas de page, invisible sur mobile. Mais surtout, sa cible s'en fiche de son webinaire gratuit, il ne le connait même pas <span className="text-red-400 font-semibold">Déjà là, il vient de perdre 195€ pour rien.</span>
                  </p>
                  <p>
                    Puis sur les 15 inscrits, 8 viennent au webinaire. Les 7 autres n'ont pas été convaincus par sa séquence mail.
                  </p>
                  <p>
                    Sur les 8 qui viennent, 2 achètent. Conversion correcte.
                  </p>
                  <p className="text-red-400 font-semibold">
                    Mais il a dépensé 300€ pour faire 2 ventes à 100€. Il est à -100€.
                  </p>
                  <p className="text-white font-semibold">
                    Le problème n'est pas sa pub. Le problème n'est pas son offre (enfin si un peu).
                  </p>
                  <p>
                    Le problème, c'est qu'il a 3 trous béants dans son funnel et il ne le sait même pas :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Sa cible ne le connaît pas et propose direct un webinaire</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Ses mails sont mauvais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Il n'a aucune relance post-webinaire pour les 6 qui n'ont pas acheté</span>
                    </li>
                  </ul>
                  <p className="text-[#9B5DE5] font-semibold text-lg mt-6">
                    Toi, c'est pareil. Tu as des trous. Tu ne sais juste pas lesquels.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* LA SOLUTION */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              La solution : je trouve tes trous. Je les bouche. On mesure l'avant/après.
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Voilà exactement ce que je fais, étape par étape.
            </p>

            <div className="space-y-8">
              {/* Phase 1 */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#9B5DE5] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">
                            Phase 1 : Le Diagnostic Complet
                          </h3>
                          <p className="text-gray-300">
                            Tu me donnes accès à tes analytics. Je passe 6 à 8 heures à tout analyser.
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          48-72h
                        </div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-white mb-3">Voilà ce que j'analyse concrètement :</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span><strong>Acquisition :</strong> Tes ads, ton ciblage, tes créas, tes sources de trafic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span><strong>Landing Page :</strong> Ton hook, ta structure, tes CTAs, ton design mobile, ta vitesse</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span><strong>Emails :</strong> Ta séquence de bienvenue, tes relances, ta délivrabilité</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span><strong>Page de Vente :</strong> Ton hook, ton offre, tes objections, ta structure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span><strong>Checkout :</strong> Ton formulaire, tes options de paiement, tes frais</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span><strong>Post-Achat :</strong> Ton onboarding, ta livraison, tes upsells</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-4 border-l-2 border-[#FFD400]">
                        <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Livrable</div>
                        <div className="text-sm text-white">
                          Rapport de 5-8 pages avec captures d'écran, chiffres précis, et estimation de combien chaque trou te coûte par mois
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </CardContent>
              </Card>

              {/* Phase 2 */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#3A86FF] to-[#0EA5E9] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">02</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">
                            Phase 2 : Validation + Priorisation
                          </h3>
                          <p className="text-gray-300">
                            Je te présente le diagnostic. On parle de chaque problème. Tu me dis ce que tu penses.
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          Call 30 min
                        </div>
                      </div>

                      <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                        <p>
                          Ensuite, tu choisis ce qu'on fixe en priorité.
                        </p>
                        <p>
                          Pourquoi ? Parce que parfois, tu vas me dire : "Ouais il y a un problème avec mon offre, je le sais, mais j'ai pas le temps de la refaire maintenant. Concentre-toi sur les emails et la LP, c'est plus rapide."
                        </p>
                        <p>
                          Ou alors : "Les ads je m'en occupe moi-même avec mon media buyer. Toi, fixe juste le reste."
                        </p>
                        <p className="text-[#9B5DE5] font-semibold">
                          Tu décides. Je te donne mon avis, mais c'est toi qui valides.
                        </p>
                        <p>
                          On se met d'accord sur ce qu'on implémente dans les 3 semaines qui suivent.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 3 */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#06D6A0] to-[#059669] flex items-center justify-center flex-shrink-0">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">
                            Phase 3 : Implémentation
                          </h3>
                          <p className="text-gray-300">
                            Tu me donnes les accès. Je fixe tout ce qu'on a validé ensemble.
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          3 semaines
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0]" />
                            Ce que je fais moi-même
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>• Copy (landing, emails, page de vente)</li>
                            <li>• Structure de page</li>
                            <li>• Automatisations emails basiques</li>
                            <li>• Paramétrage basique des ads</li>
                            <li>• Design simple</li>
                          </ul>
                        </div>

                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                            <X className="w-4 h-4 text-red-400" />
                            Ce que je ne fais PAS
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-300">
                            <li>• Dev complexe (intégrations custom)</li>
                            <li>• Créas graphiques ultra-avancées</li>
                            <li>• Refonte totale de l'offre</li>
                          </ul>
                          <p className="text-xs text-gray-400 mt-2">(Mais je peux briefer si tu as quelqu'un)</p>
                        </div>
                      </div>

                      <div className="space-y-4 text-sm text-gray-300">
                        <p>
                          Je te montre chaque modification avant de la mettre en ligne. Tu valides ou tu refuses. Mais c'est moi qui exécute.
                        </p>
                        <p className="text-white font-semibold">
                          À la fin des 3 semaines, tout est en place. Testé. Fonctionnel.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 4 */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#FFD400] to-[#F59E0B] flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">
                            Phase 4 : Tracking
                          </h3>
                          <p className="text-gray-300">
                            On laisse tourner pendant 2 mois. Je regarde les chiffres toutes les semaines.
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          60 jours
                        </div>
                      </div>

                      <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                        <p className="font-semibold text-white">Concrètement :</p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span>Je crée un Google Sheets avec les KPI importants (taux de conversion à chaque étape, CA, nombre de leads, taux d'ouverture emails, etc.)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span>Je te fais un point par email ou Telegram chaque semaine. On regarde ce qui monte, ce qui descend, ce qui stagne</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                            <span>Si un fix ne fonctionne pas, je le modifie. Pas de frais supplémentaires</span>
                          </li>
                        </ul>
                        <p className="text-[#9B5DE5] font-semibold">
                          L'objectif c'est que ça marche, pas que je facture des heures.
                        </p>
                        <p>
                          Au bout de 60 jours, tu reçois un rapport final. Avant/après. Avec le ROI exact.
                        </p>
                        <p className="text-white font-semibold">
                          Si j'ai fait mon job, tu as gagné plus que ce que le service te coûterait normalement (sauf que là, il te coûte rien puisque c'est gratuit).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* POURQUOI GRATUIT */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              Pourquoi gratuit ? (la vraie raison)
            </h2>

            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-8">
                <p className="text-xl text-[#9B5DE5] font-semibold mb-4">
                  Je vais te dire la vérité.
                </p>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Je n'ai jamais fait ça officiellement. Zéro case study public. Zéro témoignage.
                  </p>
                  <p className="text-white font-semibold">
                    Pourquoi ?
                  </p>
                  <p>
                    Parce que j'ai passé les 5 dernières années à analyser de la data, lire des analytics, décortiquer des funnels... mais toujours pour moi. Pour mes propres projets. Jamais de façon officielle pour quelqu'un d'autre.
                  </p>
                  <p>
                    Résultat : j'ai les compétences. J'ai l'expérience. Mais je n'ai aucune preuve sociale.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4">Ce que ça m'apporte</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                      <span>3 case studies solides avec de vrais chiffres</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                      <span>De la crédibilité pour vendre l'offre à 2000€ ensuite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                      <span>De l'expérience sur différents types de business</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4">Ce que ça t'apporte</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Un diagnostic complet (valeur 500-800€)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Une implémentation totale (valeur 1500-2000€)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Un tracking rigoureux pendant 2 mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Zéro risque financier</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900/50 border-gray-800 mt-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-3">Après les 3 gratuits :</h3>
                <p className="text-gray-300">
                  L'offre devient payante. <span className="text-[#FFD400] font-semibold">2000€</span> (1000€ upfront, 1000€ après validation du diagnostic).
                </p>
                <p className="text-gray-300 mt-2">
                  Avec les case studies et les résultats de mes 3 premiers clients comme preuve.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* L'OFFRE */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="inline-block bg-[#FFD400] text-black px-6 py-2 rounded-full font-bold mb-4">
                    3 Places Gratuites
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
                    L'Offre
                  </h2>
                  <p className="text-2xl text-gray-300 mb-2">
                    Valeur normale : <span className="line-through">2000€</span>
                  </p>
                  <p className="text-3xl font-bold text-[#06D6A0]">
                    Pour toi : 0€
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <h3 className="font-bold text-white text-lg">Ce que tu reçois :</h3>
                  {[
                    "Diagnostic complet en 48-72h avec analyse de toutes les étapes de ton funnel + rapport de 5-8 pages avec chiffres précis",
                    "Call de validation (30 min) pour présenter les résultats et choisir ensemble ce qu'on fixe en priorité",
                    "Implémentation totale (3 semaines) où je fixe tout ce qu'on a validé (copy, design, automatisations, structure, paramétrage ads si besoin)",
                    "Tracking rigoureux (60 jours) avec Google Sheets des KPI, points hebdomadaires par email/Telegram, ajustements si ça ne marche pas",
                    "Modifications illimitées : Si un fix ne fonctionne pas pendant les 60 jours, je le modifie autant de fois que nécessaire",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* CONDITIONS */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
              Tu es éligible si...
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    Conditions pour postuler
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    {[
                      "Tu fais minimum 5K€/mois de CA",
                      "Tu as minimum 500 visiteurs/mois sur ton site",
                      "Business 100% en ligne (coaching, formation, e-commerce, affiliation, SaaS)",
                      "Tu as déjà des clients (au moins 10-20 clients payants)",
                      "Tu es prêt à me donner les accès pour analyser et implémenter",
                      "Tu es prêt à implémenter mes recommandations",
                      "Tu t'engages à suivre le process jusqu'au bout (environ 11 semaines)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#06D6A0]">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-500/10 to-red-700/10 border-red-500/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-red-400" />
                    Tu N'es PAS éligible si
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    {[
                      "Tu n'as jamais vendu ton offre (= ton problème c'est de valider le produit)",
                      "Tu n'as aucun trafic (= ton problème c'est l'acquisition de zéro)",
                      "Tu veux juste un audit sans implémentation (= je ne fais pas de rapports PowerPoint)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-400">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* GARANTIES */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-8 text-center">
              Mes garanties
            </h2>

            <div className="space-y-6">
              {[
                {
                  number: "1",
                  text: "Si je ne trouve pas au moins 2 problèmes majeurs (= qui te coûtent chacun 500€+/mois), je te rends tes accès et on arrête là. Tu ne me dois rien.",
                  icon: Shield,
                },
                {
                  number: "2",
                  text: "Si mon implémentation casse quelque chose, je restore la version précédente en moins de 24h. Garantie de non-casse.",
                  icon: Clock,
                },
                {
                  number: "3",
                  text: "Si après 60 jours, mes fixes n'ont rien amélioré (= conversion identique ou pire), je reprends tout de zéro et on continue 30 jours de plus. Et si après ça marche toujours pas, je te dédommage en travaillant gratuitement sur un autre projet de ton choix (équivalent 20h de boulot).",
                  icon: TrendingUp,
                },
              ].map((guarantee, index) => (
                <Card key={index} className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#06D6A0] flex items-center justify-center flex-shrink-0">
                        <guarantee.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-2">Garantie #{guarantee.number}</div>
                        <p className="text-gray-300 leading-relaxed">{guarantee.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            
          </motion.div>
        </section>

        {/* SÉLECTION */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-8 text-center">
              Comment je sélectionne
            </h2>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-white font-semibold text-lg">
                    Je ne prends pas les 3 premiers qui postulent.
                  </p>
                  <p>
                    Je regarde ton business, tes chiffres, ton funnel. Je lis ta candidature.
                  </p>
                  <p className="text-[#9B5DE5] font-semibold">
                    Je prends les 3 profils où je suis certain à 90% de :
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Trouver des problèmes mesurables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Générer des résultats trackables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#06D6A0] mt-0.5 flex-shrink-0" />
                      <span>Créer un case study solide</span>
                    </li>
                  </ul>
                  <p>
                    Si je pense pouvoir t'aider, tu reçois un email dans les 48h.
                  </p>
                  <p>
                    Si je pense que ton problème n'est pas dans mon champ de compétences, je te le dis honnêtement et je te redirige vers quelqu'un d'autre si je peux.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* FORMULAIRE */}
        <section className="max-w-3xl mx-auto mb-24" id="postuler">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">
                Postule Maintenant
              </h2>
              <p className="text-gray-300">
                3 places seulement. Sélection sous 48h après réception du formulaire.
              </p>
            </div>

            <Card className="bg-gray-900/50 border-gray-800">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Telegram (optionnel)
                    </label>
                    <input
                      type="text"
                      name="telegram"
                      value={formData.telegram}
                      onChange={handleChange}
                      placeholder="@tonpseudo"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      URL du site *
                    </label>
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      required
                      placeholder="https://"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      CA mensuel moyen (3 derniers mois) *
                    </label>
                    <input
                      type="text"
                      name="monthlyRevenue"
                      value={formData.monthlyRevenue}
                      onChange={handleChange}
                      required
                      placeholder="Ex: 8000€"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre de visiteurs/mois (approximatif) *
                    </label>
                    <input
                      type="text"
                      name="monthlyVisitors"
                      value={formData.monthlyVisitors}
                      onChange={handleChange}
                      required
                      placeholder="Ex: 1500"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Type de business *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-[#9B5DE5] focus:outline-none"
                    >
                      <option value="">Sélectionne un type</option>
                      <option value="coaching">Coaching</option>
                      <option value="formation">Formation</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="affiliation">Affiliation</option>
                      <option value="saas">SaaS</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Décris ton funnel actuel en 2-3 lignes *
                    </label>
                    <textarea
                      name="currentFunnel"
                      value={formData.currentFunnel}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Ex: Landing → email → vente ? Pub → page produit → checkout ?"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Où penses-tu perdre de l'argent actuellement ? *
                    </label>
                    <textarea
                      name="problemArea"
                      value={formData.problemArea}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Si tu le sais pas, écris 'aucune idée'"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Pourquoi tu postules pour cette offre gratuite ? *
                    </label>
                    <textarea
                      name="whyApplying"
                      value={formData.whyApplying}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Réponse libre, 2-3 lignes max"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#9B5DE5] focus:outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Postuler Pour Une Place Gratuite"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    3 places seulement. Sélection sous 48h après réception du formulaire.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* FAQ */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-12 text-center">
              FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Combien de temps ça prend vraiment ?",
                  answer: "Diagnostic : 48-72h après réception de tes accès. Implémentation : 3 semaines (mais tu n'es actif que 2-3h au total pour valider). Tracking : 60 jours en background. Total du début à la fin : environ 10-11 semaines.",
                },
                {
                  question: "Je dois être dispo H24 ?",
                  answer: "Non. Je te demande 2 calls de 30 minutes (un pour qualifier après le formulaire, un pour valider les fixes). Et tes réponses sous 24-48h quand je te pose une question technique ou stratégique. Le reste, je gère seul.",
                },
                {
                  question: "Comment tu sélectionnes vraiment ?",
                  answer: "Je regarde 3 choses : Tes chiffres (CA, visiteurs) - Est-ce que j'ai assez de data pour trouver des problèmes mesurables ? Ton funnel actuel - Est-ce que je comprends comment fonctionne ton système ? Ta motivation (question 10 du formulaire) - Est-ce que tu es là juste pour du gratuit ou parce que tu veux vraiment régler ton problème ? Si les 3 matchent, tu es pris.",
                },
                {
                  question: "Et si tu casses mon site ?",
                  answer: "Je ne touche jamais à la prod sans avoir une version de backup. Si je plante quelque chose, je restore en 10 minutes. Et si ça fait baisser tes conversions, je reviens à la version d'avant et on repart sur une autre approche.",
                },
                {
                  question: "Tu vas vraiment trouver quelque chose ?",
                  answer: "Si tu fais 5K€/mois ou plus avec 500+ visiteurs/mois et que tu n'es pas déjà à 5%+ de conversion globale, alors oui, il y a forcément des trous. Je ne les ai jamais cherchés sans en trouver. Mais si je ne trouve rien (ça arrive sur des funnels ultra-optimisés), je te le dis honnêtement et on arrête là. Tu ne me dois rien (cf. garantie).",
                },
                {
                  question: "Pourquoi je te ferais confiance ?",
                  answer: "Bonne question. Honnêtement, tu ne devrais pas me faire confiance tout de suite. C'est pour ça que le diagnostic est gratuit. Tu vois ce que je trouve. Tu juges la qualité. Tu vois si je comprends vraiment ton business. Et après seulement, tu décides si tu veux que j'implémente. Si le diagnostic est nul, tu te barres. Aucune obligation.",
                },
                {
                  question: "Tu utilises l'IA pour analyser ?",
                  answer: "Oui, mais pas comme tu penses. Je ne balance pas ta data dans ChatGPT en mode 'dis-moi ce qui ne va pas'. J'analyse manuellement tes chiffres, ton funnel, tes pages. Je repère les patterns. Ensuite j'utilise l'IA comme assistant pour trier rapidement les hypothèses, croiser des données, et brainstormer des solutions. Mais c'est moi qui valide ce qui cloche vraiment en regardant les pages, les chiffres, le comportement user. L'IA me fait gagner du temps. Elle ne remplace pas mon analyse.",
                },
                {
                  question: "Qu'est-ce que tu ne fais PAS ?",
                  answer: "Je ne fais pas de dev complexe (intégrations custom, code avancé). Je ne fais pas de créas graphiques ultra-avancées (mais je peux faire des créas simples ou briefer un graphiste si tu en as un). Je ne refais pas ton offre de A à Z (je conseille, tu valides et exécutes). Si pendant le diagnostic je découvre que ton vrai problème est en dehors de mes compétences, je te le dis cash. Et je te redirige vers quelqu'un de compétent si je peux.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA FINAL */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-6">
                  Dernière Chose Avant De Postuler
                </h2>

                <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  <p>
                    Tu sens que ton business pourrait faire beaucoup plus avec le trafic que tu as déjà.
                  </p>
                  <p>
                    Tu sais qu'il y a un problème quelque part. Mais tu ne sais pas où regarder.
                  </p>
                  <p>
                    Tu en as marre de balancer de l'argent en pub sans voir les résultats suivre.
                  </p>
                  <p className="text-white font-semibold text-lg">
                    Je peux t'aider. Gratuitement. En échange de résultats mesurables que je pourrai partager.
                  </p>
                  <p>
                    Pas de bullshit. Pas de promesses de 10K€ en 30 jours. Juste un mec sérieux qui veut prouver qu'il peut trouver tes fuites et les colmater.
                  </p>
                  <p className="text-[#9B5DE5] font-semibold">
                    Si tu veux tenter, postule.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
                >
                  <a href="#postuler">
                    Postuler Pour Une Place Gratuite
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                  3 places seulement. Sélection sous 48h après réception du formulaire.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}