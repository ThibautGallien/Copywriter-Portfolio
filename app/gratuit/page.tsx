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
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function GratuitPage() {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
            <div className="inline-block bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] text-white px-6 py-3 rounded-full font-bold mb-6 text-lg">
              3 PLACES GRATUITES
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6 leading-tight">
              Je trouve ce qui bloque ton business et je le fixe en 3 semaines
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-4">
              Tu as du trafic. Tu as une offre. Mais ton CA stagne.
            </p>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Diagnostic complet + Implémentation + Tracking 60 jours. Valeur
              2000€, gratuit pour mes 3 premiers clients.
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
                  Quelque part dans ton système (ads, landing page, emails,
                  checkout, offre), il y a 2-3 blocages majeurs qui te coûtent
                  des centaines, voire des milliers d'euros par mois.
                </p>
                <p className="text-[#9B5DE5] font-semibold text-lg">
                  Je les trouve avec la data. Je les fixe. On mesure. Pas de
                  bullshit, juste des chiffres.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* L'OFFRE EN UN COUP D'ŒIL */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              L'Offre en un Coup d'Œil
            </h2>

            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <p className="text-2xl text-gray-300 mb-2">
                    Valeur normale : <span className="line-through">2000€</span>
                  </p>
                  <p className="text-4xl font-black text-[#06D6A0] mb-4">
                    Pour toi : 0€
                  </p>
                  <p className="text-gray-400">
                    En échange : témoignage + case study avec résultats réels
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-bold text-white text-lg text-center mb-6">
                    Ce que tu reçois :
                  </h3>
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

        {/* QUI JE SUIS - VERSION COURTE */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              Qui je suis
            </h2>

            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-8">
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Je m'appelle{" "}
                    <span className="text-white font-semibold">Thibaut</span>.
                  </p>
                  <p>
                    5 ans d'expérience en marketing digital. J'ai tout testé :
                    dropshipping, infoproduits, funnels, ads, copywriting, SEO,
                    affiliation.
                  </p>
                  <p className="text-white font-semibold">
                    J'ai réussi des trucs. J'ai foiré des trucs. J'ai appris des
                    deux.
                  </p>
                  <p>
                    Mes résultats : landing page à 30% de conversion, emails qui
                    ouvrent à 45% sur liste froide, funnel séduction qui a
                    cartonné sans connaissance du secteur.
                  </p>
                  <p className="text-[#FFD400] font-semibold">
                    Mais je n'ai jamais vendu ce service officiellement. Zéro
                    case study public.
                  </p>
                  <p>
                    C'est pour ça que je fais cette offre gratuite : je veux
                    prouver que je peux trouver et fixer les problèmes de
                    quelqu'un d'autre. Je veux 3 case studies solides. Ensuite,
                    je vends à 2000€.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#06D6A0]" />
                    Ce que j'ai réussi
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Landing page à 30% de conversion</li>
                    <li>• Emails à 45% d'ouverture (liste froide)</li>
                    <li>• Funnel séduction qui a cartonné</li>
                    <li>• 5 ans d'expérience, 100+ funnels analysés</li>
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
                    <li>• Funnel "économie d'argent" (mauvais ciblage)</li>
                    <li>
                      • Boutique drop streetwear (pas atteint le breakeven)
                    </li>
                    <li>
                      • Infoproduits abandonnés (manque de temps à cause des
                      études)
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
              Tu perds de l'argent. Tu le sais. Mais pas où.
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed mb-8">
              <p>
                Ton problème, ce n'est pas le trafic. Tu sais faire venir des
                gens.
              </p>
              <p>
                Ton problème, ce n'est pas ton offre. Elle est solide. Les
                clients qui passent sont contents.
              </p>
              <p className="text-white font-semibold text-xl">
                Ton problème, c'est entre les deux.
              </p>
              <p>
                Entre le moment où quelqu'un clique sur ton lien et le moment où
                il sort sa carte bleue, il se passe 8 à 12 étapes.
              </p>
              <p className="text-red-400 font-semibold text-lg">
                À chaque étape, tu perds du monde. C'est normal. Mais toi, tu
                perds TROP de monde.
              </p>
            </div>

            <Card className="bg-gray-900/80 border-[#FFD400]/30">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-white mb-4">
                  Exemple concret :
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Un coach fait du Fb ads. Il paye 3€ par clic. Sur 100 clics
                    (300€), 80 personnes arrivent sur sa landing page.
                  </p>
                  <p>
                    Sur ces 80, seulement 15 s'inscrivent à son webinaire
                    gratuit. Pourquoi ? Formulaire invisible sur mobile + sa
                    cible ne le connaît pas.{" "}
                    <span className="text-red-400 font-semibold">
                      Déjà là, il vient de perdre 195€ pour rien.
                    </span>
                  </p>
                  <p>
                    Puis sur les 15 inscrits, 8 viennent au webinaire. Les 7
                    autres n'ont pas été convaincus par sa séquence mail.
                  </p>
                  <p>
                    Sur les 8 qui viennent, 2 achètent. Conversion correcte.
                  </p>
                  <p className="text-red-400 font-semibold">
                    Mais il a dépensé 300€ pour faire 2 ventes à 100€. Il est à
                    -100€.
                  </p>
                  <p className="text-white font-semibold">
                    Le problème ? 3 trous béants dans son funnel :
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>
                        Sa cible ne le connaît pas et propose direct un
                        webinaire
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Ses mails sont mauvais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Il n'a aucune relance post-webinaire</span>
                    </li>
                  </ul>
                  <p className="text-[#9B5DE5] font-semibold text-lg mt-6">
                    Toi, c'est pareil. Tu as des trous. Tu ne sais juste pas
                    lesquels.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* LA SOLUTION - 4 PHASES */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-8 text-center">
              La solution : je trouve tes trous. Je les bouche. On mesure.
            </h2>

            <div className="space-y-8">
              {/* Phase 1 */}
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#9B5DE5] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold font-space-grotesk text-white mb-2">
                            Phase 1 : Diagnostic Complet
                          </h3>
                          <p className="text-gray-300">
                            Je passe 6-8h à analyser ton funnel complet
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          48-72h
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">
                        Rapport de 5-8 pages avec chiffres précis et estimation
                        de combien chaque trou te coûte par mois
                      </p>
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
                            On décide ensemble ce qu'on fixe en priorité
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          Call 30 min
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        Tu choisis. Je te donne mon avis, mais c'est toi qui
                        valides.
                      </p>
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
                            Je fixe tout ce qu'on a validé ensemble
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          3 semaines
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        Copy, structure, automatisations. Je te montre chaque
                        modification avant de la mettre en ligne.
                      </p>
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
                            Suivi rigoureux pendant 60 jours
                          </p>
                        </div>
                        <div className="text-sm text-gray-400 whitespace-nowrap ml-4">
                          60 jours
                        </div>
                      </div>
                      <p className="text-sm text-gray-300">
                        Points hebdomadaires. Si un fix ne marche pas, je le
                        modifie. L'objectif : que ça marche.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        {/* CONDITIONS D'ÉLIGIBILITÉ */}
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
                      "Tu n'as jamais vendu ton offre",
                      "Tu n'as aucun trafic",
                      "Tu veux juste un audit sans implémentation",
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
              Mes Garanties
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
                  text: "Si après 60 jours, mes fixes n'ont rien amélioré (= conversion identique ou pire), je reprends tout de zéro et on continue 30 jours de plus.",
                  icon: TrendingUp,
                },
              ].map((guarantee, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-[#06D6A0]/10 to-[#059669]/10 border-[#06D6A0]/30"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#06D6A0] flex items-center justify-center flex-shrink-0">
                        <guarantee.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="font-bold text-white mb-2">
                          Garantie #{guarantee.number}
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {guarantee.text}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                3 places seulement. Sélection sous 48h après réception du
                formulaire.
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
                    {isSubmitting
                      ? "Envoi en cours..."
                      : "Postuler Pour Une Place Gratuite"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                  </Button>

                  <p className="text-xs text-gray-400 text-center">
                    3 places seulement. Sélection sous 48h après réception du
                    formulaire.
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
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Combien de temps ça prend vraiment ?",
                  answer:
                    "Diagnostic : 48-72h. Implémentation : 3 semaines. Tracking : 60 jours en background. Total : environ 10-11 semaines du début à la fin.",
                },
                {
                  question: "Je dois être dispo H24 ?",
                  answer:
                    "Non. 2 calls de 30 min + tes réponses sous 24-48h quand je te pose une question. Le reste, je gère seul.",
                },
                {
                  question: "Comment tu sélectionnes vraiment ?",
                  answer:
                    "Je regarde tes chiffres (CA, visiteurs), ton funnel, et ta motivation. Si les 3 matchent et que je suis certain à 90% de pouvoir t'aider, tu es pris.",
                },
                {
                  question: "Et si tu casses mon site ?",
                  answer:
                    "Je ne touche jamais à la prod sans backup. Si je plante quelque chose, je restore en 10 minutes.",
                },
                {
                  question: "Tu vas vraiment trouver quelque chose ?",
                  answer:
                    "Si tu fais 5K€/mois ou plus avec 500+ visiteurs/mois et que tu n'es pas à 5%+ de conversion globale, il y a forcément des trous. Si je ne trouve rien, je te le dis et on arrête là (cf. garantie).",
                },
                {
                  question: "Pourquoi je te ferais confiance ?",
                  answer:
                    "Tu ne devrais pas tout de suite. C'est pour ça que le diagnostic est gratuit. Tu vois ce que je trouve, tu juges la qualité, et après tu décides. Si c'est nul, tu te barres. Aucune obligation.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-white mb-3">
                      {item.question}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
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
                  Prêt à Trouver Où Tu Perds de l'Argent ?
                </h2>

                <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  <p>
                    Tu sens que ton business pourrait faire beaucoup plus avec
                    le trafic que tu as déjà.
                  </p>
                  <p>
                    Tu sais qu'il y a un problème quelque part. Mais tu ne sais
                    pas où regarder.
                  </p>
                  <p className="text-white font-semibold text-lg">
                    Je peux t'aider. Gratuitement. En échange de résultats
                    mesurables.
                  </p>
                  <p>
                    Pas de bullshit. Pas de promesses de 10K€ en 30 jours. Juste
                    un mec sérieux qui veut prouver qu'il peut trouver tes
                    fuites et les colmater.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
                >
                  <a href="#postuler">
                    Postuler Maintenant
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-gray-400 mt-4">
                  3 places seulement. Sélection sous 48h.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
