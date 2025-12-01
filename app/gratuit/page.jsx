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
} from "lucide-react";
import { toast } from "sonner";

export default function GratuitPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    telegram: "",
    websiteUrl: "",
    monthlyRevenue: "",
    monthlyVisitors: "",
    problemArea: "",
    videoTestimonyCommitment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("📤 Données du formulaire à envoyer:", formData);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(
        "📥 Réponse du serveur:",
        response.status,
        response.statusText
      );

      if (response.ok) {
        toast.success("Candidature envoyée !", {
          description: "Je reviens vers vous sous 48h maximum 🚀",
        });
        setFormData({
          firstName: "",
          email: "",
          telegram: "",
          websiteUrl: "",
          monthlyRevenue: "",
          monthlyVisitors: "",
          problemArea: "",
          videoTestimonyCommitment: "",
        });
      } else {
        const errorData = await response.json();
        console.error("❌ Erreur serveur:", errorData);
        console.error("❌ Message d'erreur:", errorData.error);
        throw new Error(errorData.error || "Erreur lors de l'envoi");
      }
    } catch (error) {
      console.error("❌ Erreur catch:", error);
      toast.error("Erreur lors de l'envoi", {
        description: "Réessayez ou contactez-moi directement.",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-full font-bold mb-6 text-lg"
            >
              1 PLACE GRATUITE • 2 PLACES À -50%
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-black font-sora mb-6 leading-tight text-neutral-900">
              Je cherche 1 "Succès Story" pour valider ma nouvelle méthodologie
              Data-Driven
            </h1>

            <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-4">
              Vous avez le trafic. Vous avez l'offre. Mais votre conversion
              plafonne.
            </p>

            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Je propose une intervention complète (Audit + Fix + Tracking)
              d'une valeur de 2 000€, entièrement{" "}
              <span className="font-semibold text-neutral-900">OFFERTE</span>,
              pour le business qui correspondra parfaitement à mes critères de
              test.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
              <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4">
                📉 Le Constat
              </p>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Le problème n'est pas ce que vous gagnez. C'est ce que vous
                perdez.
              </h3>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  Vous générez déjà du chiffre d'affaires. Mais vous savez
                  pertinemment que pour 100 visiteurs, trop repartent sans
                  acheter. Ce n'est pas de la magie, c'est mathématique.
                </p>
                <p>
                  Entre votre publicité et votre page de remerciement, il y a
                  des{" "}
                  <span className="font-semibold text-neutral-900">
                    frictions invisibles
                  </span>
                  .
                </p>
                <div className="mt-6 space-y-2 text-neutral-600">
                  <p className="flex items-start gap-2">
                    <span className="text-neutral-400">→</span>
                    <span>Un titre qui ne résonne pas.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-neutral-400">→</span>
                    <span>Un checkout trop long.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-neutral-400">→</span>
                    <span>Une séquence mail qui arrive trop tard.</span>
                  </p>
                </div>
                <p className="text-emerald-600 font-semibold text-lg mt-6">
                  Chaque friction vous coûte de la marge. Chaque jour.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* L'INSIGHT */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-8 md:p-12">
              <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4 text-center">
                📉 L'Insight
              </p>
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-8 text-center text-neutral-900">
                "Vous pensez avoir un problème d'acquisition.{" "}
                <span className="text-emerald-600">
                  Les chiffres disent souvent le contraire.
                </span>
                "
              </h2>
              <div className="space-y-4 text-neutral-700 leading-relaxed max-w-3xl mx-auto">
                <p>
                  Votre coût par clic augmente. Votre trafic est là. Mais votre
                  chiffre d'affaires stagne.
                </p>
                <p className="text-neutral-900 font-medium">
                  Le problème n'est pas votre produit. Ce n'est pas Facebook
                  Ads.
                </p>
                <p className="text-neutral-900 font-semibold text-lg">
                  Le problème, c'est ce qui se passe après le clic.
                </p>
                <p>
                  Une promesse mal alignée. Un checkout confus. Une séquence
                  mail qui n'éduque pas.
                </p>
              </div>
            </div>
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
            <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4 text-center">
              🎁 L'Offre
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-sora mb-8 text-center text-neutral-900">
              Ce que je mets sur la table
            </h2>
            <p className="text-center text-neutral-600 mb-12 text-lg">
              Valeur : <span className="line-through">2 000€</span> →{" "}
              <span className="font-bold text-emerald-600">OFFERT</span>
            </p>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm mb-8"
            >
              <h3 className="font-bold text-xl text-neutral-900 mb-6">
                Je ne suis pas là pour "essayer". Je suis là pour implémenter un
                système de correction basé sur la Data.
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Search className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      L'Audit "Deep Dive" (Jours 1-3)
                    </h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      J'analyse vos Analytics pour trouver les 3 goulots
                      d'étranglement précis qui tuent votre rentabilité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      La Correction Chirurgicale (Semaines 1-3)
                    </h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Je réécris, je restructure, je simplifie. Je fais le
                      travail "sale" d'optimisation à votre place.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      Le Tracking de Performance (30 Jours)
                    </h4>
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      Je surveille les résultats quotidiennement pour m'assurer
                      que la courbe monte.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-amber-50 to-white border border-amber-200 rounded-2xl p-8"
            >
              <h3 className="font-bold text-xl text-neutral-900 mb-6">
                Ce que vous mettez sur la table
              </h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                En échange de cette prestation complète, je ne demande pas
                d'argent. Je demande de la{" "}
                <span className="font-semibold text-neutral-900">Preuve</span>.
              </p>
              <ul className="space-y-3 text-neutral-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Un accès transparent à vos chiffres (sous NDA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>
                    Un témoignage vidéo authentique à la fin du tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>
                    L'autorisation d'utiliser les résultats (avant/après) pour
                    mon futur marketing
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* POURQUOI C'EST GRATUIT */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4 text-center">
              👤 La Vérité
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-sora mb-8 text-center text-neutral-900">
              Pourquoi c'est gratuit ?
            </h2>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p className="text-lg font-semibold text-neutral-900">
                  "Où est l'arnaque ?"
                </p>
                <p>
                  Il n'y en a pas. Je suis Thibaut, Expert en Conversion
                  Data-Driven. J'ai 5 ans d'expérience et j'ai analysé plus de
                  100 funnels.
                </p>
                <p>
                  Aujourd'hui, je lance une nouvelle offre d'optimisation
                  radicale destinée aux Infopreneurs et SaaS.
                </p>
                <p className="text-neutral-900 font-medium">
                  Avant de commercialiser cette offre au grand public à 2 000€
                  (puis 5 000€), je veux constituer un dossier de preuves "Béton
                  Armé".
                </p>
                <p>
                  Je ne cherche pas à "apprendre" sur votre business. Je cherche
                  à démontrer l'efficacité de ma méthode sur un business qui
                  tourne déjà.
                </p>
                <p className="text-emerald-600 font-semibold text-lg">
                  C'est un échange gagnant-gagnant : Vous gagnez de la marge
                  nette gratuite. Je gagne une étude de cas irréfutable.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ÊTES-VOUS ÉLIGIBLE */}
        <section className="max-w-5xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4 text-center">
              ✅ Le Filtre
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-8 text-center text-neutral-900">
              Êtes-vous éligible ?
            </h2>
            <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
              Je ne peux pas aider tout le monde. Pour que ma méthode
              fonctionne, j'ai besoin de matière.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg text-neutral-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  Vous êtes le candidat idéal si :
                </h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  {[
                    "Vous générez au moins 5 000€ / mois (Idéalement 15k+)",
                    "Vous avez un trafic constant (>500 visiteurs/mois) pour que les tests soient significatifs",
                    "Vous vendez un produit digital (Formation, Coaching, SaaS) ou E-com à forte marge",
                    "Vous êtes prêt à implémenter rapidement (ou à me laisser faire)",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-emerald-600">✓</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-red-50 to-white border border-red-200 rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg text-neutral-900 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-red-500" />
                  Ne postulez pas si :
                </h3>
                <ul className="space-y-3 text-sm text-neutral-700">
                  {[
                    "Vous lancez votre business demain (Zéro data = Zéro optimisation possible)",
                    "Vous n'avez pas de budget pub ou de trafic organique",
                    'Vous cherchez un "stagiaire" pour tout faire. Je suis un consultant spécialisé',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2"
                    >
                      <span className="text-red-500">✗</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
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
              <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4">
                📝 Formulaire de Candidature
              </p>
              <h2 className="text-3xl md:text-5xl font-bold font-sora mb-6 text-neutral-900">
                Postuler maintenant
              </h2>
              <p className="text-neutral-600">
                Les candidatures incomplètes ne seront pas traitées.
              </p>
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Telegram (optionnel)
                  </label>
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="@votrepseudo"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    URL de votre site / Funnel *
                  </label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    required
                    placeholder="https://"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    CA Mensuel Moyen (3 derniers mois) *
                  </label>
                  <input
                    type="text"
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 8 000€"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Trafic Mensuel (Visites Uniques) *
                  </label>
                  <input
                    type="text"
                    name="monthlyVisitors"
                    value={formData.monthlyVisitors}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 1500"
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Quel est votre plus gros problème actuel ? *
                  </label>
                  <select
                    name="problemArea"
                    value={formData.problemArea}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  >
                    <option value="" disabled>
                      Sélectionnez un problème
                    </option>
                    <option value="acquisition">Acquisition</option>
                    <option value="conversion">Conversion</option>
                    <option value="retention">Rétention</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-900 mb-2">
                    Si je vous offre cette prestation, vous engagez-vous
                    formellement à fournir un témoignage vidéo en cas de succès
                    ? *
                  </label>
                  <select
                    name="videoTestimonyCommitment"
                    value={formData.videoTestimonyCommitment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none transition-all"
                  >
                    <option value="" disabled>
                      Sélectionnez une réponse
                    </option>
                    <option value="oui">Oui</option>
                    <option value="non">Non</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-6 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting
                    ? "Envoi en cours..."
                    : "Envoyer ma candidature"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </motion.button>

                <p className="text-xs text-neutral-500 text-center">
                  Réponse sous 48h. Si vous n'êtes pas sélectionné pour la place
                  gratuite, vous serez peut-être éligible à l'offre Bêta (-50%).
                </p>
              </form>
            </motion.div>
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
            <p className="text-neutral-600 text-sm uppercase tracking-wider font-semibold mb-4 text-center">
              🛡️ FAQ Rapide
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-sora mb-12 text-center text-neutral-900">
              Questions Fréquentes
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: "Garantie de Sécurité",
                  answer:
                    "Je travaille sur des duplicatas ou des versions de pré-production quand c'est possible. Rien n'est mis en ligne sans votre validation finale.",
                },
                {
                  question: "Pourquoi 30 jours de tracking ?",
                  answer:
                    "C'est la durée standard pour obtenir une significativité statistique sur les changements apportés. 60 jours est trop long et dilue l'impact de mon intervention.",
                },
                {
                  question: "Que se passe-t-il si ça ne marche pas ?",
                  answer:
                    "Vous ne m'avez rien payé. Vous avez perdu un peu de temps, j'ai perdu beaucoup de temps. Mais vu mes critères de sélection, le risque est minime : je ne choisis que des funnels où je vois déjà les fuites avant de commencer.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm"
                >
                  <h3 className="font-bold text-neutral-900 mb-3">
                    {item.question}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
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
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-sora mb-6 text-neutral-900">
                Prêt à identifier vos fuites de conversion ?
              </h2>

              <div className="space-y-4 text-neutral-700 leading-relaxed max-w-3xl mx-auto mb-8">
                <p>
                  Votre business pourrait générer significativement plus avec le
                  trafic que vous avez déjà.
                </p>
                <p>
                  Vous savez qu'il y a un problème quelque part. Mais identifier
                  précisément où demande une expertise spécifique.
                </p>
                <p className="text-neutral-900 font-semibold text-lg">
                  Je peux vous aider. Gratuitement. En échange de résultats
                  mesurables et d'un témoignage.
                </p>
                <p>
                  Une approche professionnelle, basée sur les données. Pas de
                  promesses irréalistes. Juste une méthodologie éprouvée pour
                  identifier vos points de friction et les corriger.
                </p>
              </div>

              <motion.a
                href="#postuler"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 px-8 rounded-full transition-all"
              >
                Postuler maintenant
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <p className="text-sm text-neutral-600 mt-4">
                1 place gratuite • 2 places à -50% • Sélection sous 48h
              </p>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
