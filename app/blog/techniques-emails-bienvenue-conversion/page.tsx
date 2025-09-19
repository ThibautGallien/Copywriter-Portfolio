"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  CheckCircle,
  AlertTriangle,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const articleMeta = {
  title:
    "Email de bienvenue : le guide complet pour convertir vos nouveaux abonnés",
  publishedAt: "2024-06-25",
  estimatedReadingTime: 8,
  author: "Thibaut Gallien",
  categories: ["Email Marketing", "Conversion"],
  categoryColors: ["#9B5DE5", "#3A86FF"],
};

const tableOfContents = [
  {
    id: "pourquoi-important",
    title: "Pourquoi l'email de bienvenue est votre atout le plus rentable",
  },
  {
    id: "erreurs-frequentes",
    title: "Les erreurs qui détruisent vos emails de bienvenue",
  },
  {
    id: "structure-efficace",
    title: "La structure d'un email de bienvenue qui marche",
  },
  { id: "sequence-complete", title: "La séquence de bienvenue (3 à 5 emails)" },
  { id: "bonnes-pratiques", title: "Bonnes pratiques & optimisation" },
  { id: "exemples-inspirants", title: "Exemples inspirants" },
  { id: "conversion", title: "Email de bienvenue & conversion" },
  { id: "checklist", title: "Checklist pratique" },
];

const keyPoints = [
  {
    icon: TrendingUp,
    title: "Taux d'ouverture supérieur à 50%",
    description:
      "L'email de bienvenue a le plus haut taux d'ouverture de tous vos emails",
  },
  {
    icon: Target,
    title: "ROI de 30 à 40€ par euro investi",
    description: "L'email marketing reste le canal le plus rentable",
  },
  {
    icon: Users,
    title: "Premier contact décisif",
    description:
      "Votre première impression conditionne toute la relation client",
  },
];

const commonMistakes = [
  "Vendre direct sans avoir dit bonjour",
  "Envoyer trop tard (plus de 24h après l'inscription)",
  "Multiplier les objectifs dans un seul email",
  "Zéro personnalisation",
  "Pas de désinscription claire",
];

const emailStructure = [
  {
    title: "Objet & pré-header",
    description: "Soyez direct et engageant, pas racoleur",
    example: "Bienvenue [Prénom] ! Voici ton guide offert",
  },
  {
    title: "Introduction",
    description: "Remerciez et rappelez le contexte",
    example: "Tu viens de t'inscrire pour recevoir [bonus, ebook, newsletter]",
  },
  {
    title: "Corps",
    description: "Une seule idée = une seule action",
    example: "Partagez votre mission en 2 phrases max",
  },
  {
    title: "CTA",
    description: "Un seul appel à l'action, bien visible",
    example: "Télécharge ton guide ici",
  },
  {
    title: "P.S. malin",
    description: "Zone la plus lue après l'objet",
    example: "Rappeler d'ajouter votre adresse aux contacts",
  },
];

const sequenceEmails = [
  {
    title: "Email 1 → Livraison + accueil",
    description: "Délivrez la promesse immédiatement (ebook, checklist, vidéo)",
    timing: "Immédiat",
  },
  {
    title: "Email 2 → Storytelling / valeurs",
    description: "Partagez votre histoire ou la mission de votre marque",
    timing: "J+1",
  },
  {
    title: "Email 3 → Contenu utile",
    description: "Donnez un conseil concret, rapide à appliquer",
    timing: "J+3",
  },
  {
    title: "Email 4 → Introduction subtile de l'offre",
    description: "Transition naturelle vers votre produit/service",
    timing: "J+5",
  },
  {
    title: "Email 5 → Lever les freins",
    description: "Répondez aux objections et partagez des preuves",
    timing: "J+7",
  },
];

const checklistItems = [
  "Mon email part immédiatement après l'inscription",
  "L'objet est clair, engageant, sans clickbait",
  "Le pré-header complète l'objet au lieu de le répéter",
  "Je remercie mon abonné et je rappelle le contexte",
  "Je tiens ma promesse dès le premier mail",
  "Mon email suit la règle d'or : 1 idée = 1 action",
  "J'ai inséré un seul CTA bien visible",
  "Le design est simple et lisible",
  "Mon texte est personnalisé",
  "J'ai inclus un P.S. malin",
  "Le lien de désinscription est visible et conforme RGPD",
  "Mon email est optimisé pour mobile",
  "J'ai prévu une suite (séquence de 3 à 5 emails)",
];

export default function EmailBienvenuePage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back to blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-[#9B5DE5] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(articleMeta.publishedAt).toLocaleDateString("fr-FR")}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {articleMeta.estimatedReadingTime} min de lecture
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {articleMeta.author}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 leading-tight">
            {articleMeta.title}
          </h1>

          <div className="flex gap-2 mb-8">
            {articleMeta.categories.map((category, idx) => (
              <span
                key={category}
                className="px-3 py-1 text-sm rounded-full border"
                style={{
                  backgroundColor: `${articleMeta.categoryColors[idx]}20`,
                  borderColor: `${articleMeta.categoryColors[idx]}40`,
                  color: articleMeta.categoryColors[idx],
                }}
              >
                {category}
              </span>
            ))}
          </div>

          <p className="text-xl text-gray-300 leading-relaxed">
            Vous croyez qu'un email de bienvenue, c'est juste un petit "merci de
            t'être inscrit" ? Faux. Mal fait, il flingue votre première
            impression et votre abonné disparaît aussitôt. Bien fait, il pose
            les fondations d'une relation qui peut vous rapporter pendant des
            mois.
          </p>
        </motion.header>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {keyPoints.map((point, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6 text-center">
                  <point.icon className="w-8 h-8 text-[#9B5DE5] mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-gray-400">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border-[#9B5DE5]/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold font-space-grotesk mb-4">
                Sommaire
              </h2>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.id}`}
                    className="block text-gray-300 hover:text-[#9B5DE5] transition-colors duration-300 py-1"
                  >
                    {index + 1}. {item.title}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </motion.div>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {/* Section 1: Pourquoi important */}
          <section id="pourquoi-important" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Pourquoi l'email de bienvenue est votre atout le plus rentable
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Un chiffre pour commencer : l'email de bienvenue affiche en
              moyenne un taux d'ouverture supérieur à 50%. Autrement dit, un
              lecteur sur deux ouvre ce message. Comparez ça à vos newsletters
              classiques qui dépassent rarement les 20%…
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Et l'email marketing dans son ensemble ? Chaque euro investi
              rapporte en moyenne 30 à 40€. C'est simple : il n'existe pas de
              canal plus rentable. Et c'est malheureusement le plus sous-évalué.
            </p>

            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#FFD400] mb-4">
                  Les bénéfices concrets d'un email de bienvenue
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Première impression :</strong> c'est votre
                      "bonjour", votre poignet tendu pour serrer la main
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Confiance :</strong> vous expliquez pourquoi il
                      reçoit ce mail et tenez votre promesse
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Engagement :</strong> vous orientez vers une
                      action simple dès le départ
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Délivrabilité :</strong> améliore vos chances
                      d'atterrir dans la boîte principale
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-[#FFD400]/20 to-[#F59E0B]/20 border border-[#FFD400]/30 rounded-xl p-6 mb-8">
              <p className="text-center font-medium">
                La séquence de bienvenue n'est pas une perte de temps. C'est
                même l'inverse :{" "}
                <span className="text-[#FFD400] font-bold">
                  l'email de bienvenue est le seul moment où votre lecteur
                  attend votre message
                </span>
                .
              </p>
            </div>
          </section>

          {/* Section 2: Erreurs fréquentes */}
          <section id="erreurs-frequentes" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Les erreurs qui détruisent vos emails de bienvenue
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Votre email de bienvenue n'est pas "un détail technique". C'est
              votre premier rendez-vous avec votre abonné. Et pourtant, 80% des
              business le sabotent.
            </p>

            <Card className="bg-red-900/20 border border-red-500/30 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Les erreurs les plus fréquentes
                </h3>
                <ul className="space-y-3">
                  {commonMistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-400 font-bold">×</span>
                      <span className="text-gray-300">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-red-900/20 border border-red-500/30">
                <CardContent className="p-6">
                  <h4 className="font-bold text-red-400 mb-3">
                    ❌ Mauvais email
                  </h4>
                  <div className="bg-gray-800/50 rounded p-4 text-sm">
                    <p className="font-medium mb-2">
                      Objet : Bienvenue ! -10% sur ta première commande
                    </p>
                    <p className="mb-2">Merci pour ton inscription.</p>
                    <p className="mb-2">
                      Clique ici pour profiter de ton offre.
                    </p>
                    <p>
                      Découvre aussi nos produits, nos best-sellers, nos réseaux
                      sociaux.
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    Trop de liens, aucune explication, aucune valeur
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-green-900/20 border border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="font-bold text-green-400 mb-3">
                    ✅ Bon email
                  </h4>
                  <div className="bg-gray-800/50 rounded p-4 text-sm">
                    <p className="font-medium mb-2">
                      Objet : Bienvenue [Prénom] !
                    </p>
                    <p className="mb-2">
                      Merci d'avoir rejoint [Nom de la marque].
                    </p>
                    <p className="mb-2">
                      Dans ce premier email, tu trouveras [ton bonus].
                    </p>
                    <p className="mb-2">
                      Dans les prochains jours, je vais te montrer [valeur].
                    </p>
                    <p>Aujourd'hui, je te propose : [CTA unique].</p>
                  </div>
                  <p className="text-sm text-gray-400 mt-3">
                    Clair, simple, personnalisé
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Structure efficace */}
          <section id="structure-efficace" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              La structure d'un email de bienvenue qui marche
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Un bon email de bienvenue, c'est comme une conversation réussie :
              vous dites bonjour, vous expliquez pourquoi vous êtes là, vous
              donnez de la valeur, puis vous proposez une suite claire.
            </p>

            <div className="space-y-6">
              {emailStructure.map((section, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#9B5DE5] mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 mb-3">{section.description}</p>
                    <div className="bg-gray-800/50 rounded p-3 text-sm text-gray-400">
                      <strong>Exemple :</strong> {section.example}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-[#9B5DE5]/20 to-[#3A86FF]/20 border border-[#9B5DE5]/30 rounded-xl p-6 mt-8">
              <p className="text-center font-medium">
                Un bon email de bienvenue, ce n'est pas un patchwork.
                <span className="text-[#9B5DE5] font-bold">
                  {" "}
                  C'est une flèche : un seul message, une seule direction.
                </span>
              </p>
            </div>
          </section>

          {/* Section 4: Séquence complète */}
          <section id="sequence-complete" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              La séquence de bienvenue (3 à 5 emails)
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Un seul email, c'est bien. Une séquence de bienvenue, c'est mieux
              : vous guidez votre abonné pas à pas, vous construisez la
              relation, vous préparez la vente.
            </p>

            <p className="text-lg font-medium text-[#FFD400] mb-8">
              Durée idéale : 5 à 7 jours. Court pour garder l'attention, assez
              long pour installer la confiance.
            </p>

            <div className="space-y-6">
              {sequenceEmails.map((email, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-white">
                            {email.title}
                          </h3>
                          <span className="text-xs bg-[#FFD400]/20 text-[#FFD400] px-2 py-1 rounded">
                            {email.timing}
                          </span>
                        </div>
                        <p className="text-gray-300">{email.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 5: Bonnes pratiques */}
          <section id="bonnes-pratiques" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Bonnes pratiques & optimisation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#9B5DE5] mb-4">
                    Personnalisation
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Appelez votre lecteur par son prénom</li>
                    <li>• Adaptez le contenu selon le segment</li>
                    <li>
                      • Observez son comportement pour personnaliser la suite
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#3A86FF] mb-4">
                    Design simple
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Pas besoin d'un template bling-bling</li>
                    <li>• Texte clair, espacé, facile à lire sur mobile</li>
                    <li>• Une flèche, pas une armoire Ikea mal construite</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#FFD400] mb-4">
                    Tests A/B
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Testez vos objets d'email</li>
                    <li>• Variez le timing (immédiat vs +1h, +1 jour)</li>
                    <li>
                      • Expérimentez avec le CTA : texte, emplacement, ton
                    </li>
                    <li>• Gardez les gagnants, supprimez les perdants</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#06D6A0] mb-4">
                    RGPD & Délivrabilité
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Lien de désinscription visible et propre</li>
                    <li>• Double opt-in recommandé</li>
                    <li>• Encouragez l'ajout aux contacts</li>
                    <li>• Collecte avec un vrai consentement</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-[#9B5DE5]/20 to-[#3A86FF]/20 border border-[#9B5DE5]/30 rounded-xl p-6 mt-8">
              <p className="text-center">
                <span className="font-bold text-[#9B5DE5]">
                  Plus vous respectez votre lecteur, plus vos emails sont lus.
                </span>
                <br />
                Et plus ils sont lus, plus la relation se développe. Et plus la
                relation se développe, plus il dépense.
              </p>
            </div>
          </section>

          {/* Section 6: Exemples inspirants */}
          <section id="exemples-inspirants" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Exemples inspirants
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Les bonnes pratiques, c'est utile. Mais rien ne vaut des exemples
              concrets pour visualiser ce qu'un bon email de bienvenue peut
              donner.
            </p>

            <div className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#9B5DE5] mb-4">
                    Cabaïa (e-commerce)
                  </h3>
                  <div className="bg-gray-800/50 rounded p-4 mb-4">
                    <p className="font-medium mb-2">
                      Objet : "Bienvenue dans la famille Cabaïa 🎒"
                    </p>
                    <p className="text-sm text-gray-400 mb-2">Corps :</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Ton fun, identité de marque forte</li>
                      <li>
                        • Mise en avant de la promesse (sacs colorés, garantie à
                        vie)
                      </li>
                      <li>• CTA unique : découvrir la collection</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-400">
                    ➡️ Exemple parfait d'email qui crée un lien émotionnel
                    immédiat avec son univers
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#3A86FF] mb-4">
                    HubSpot (SaaS)
                  </h3>
                  <div className="bg-gray-800/50 rounded p-4 mb-4">
                    <p className="font-medium mb-2">
                      Objet : "Bienvenue sur HubSpot — vos premiers pas"
                    </p>
                    <p className="text-sm text-gray-400 mb-2">Corps :</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Clair, pédagogique, orienté onboarding</li>
                      <li>• Délivre immédiatement des ressources utiles</li>
                      <li>• CTA : "Connectez-vous à votre compte"</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-400">
                    ➡️ Exemple B2B : valeur immédiate + guidage concret vers
                    l'utilisation du produit
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#FFD400] mb-4">
                    Coach fictif (infopreneur)
                  </h3>
                  <div className="bg-gray-800/50 rounded p-4 mb-4">
                    <p className="font-medium mb-2">
                      Objet : "Bienvenue ! Voici ta checklist anti-erreurs"
                    </p>
                    <p className="text-sm text-gray-400 mb-2">Corps :</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Remerciement personnalisé</li>
                      <li>• Livraison du lead magnet promis</li>
                      <li>• Histoire courte pour créer du lien</li>
                      <li>• P.S. : invitation à répondre pour engagement</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-400">
                    ➡️ Exemple simple, humain, qui montre de l'expertise sans
                    vendre trop tôt
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 7: Conversion */}
          <section id="conversion" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Email de bienvenue & conversion
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Un email de bienvenue n'est pas une page de vente déguisée. Mais
              ce n'est pas non plus une lettre d'amour sans suite. L'équilibre
              se joue ici : créer de la confiance tout en préparant la
              conversion.
            </p>

            <Card className="bg-gray-900/50 border-gray-800 mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#9B5DE5] mb-4">
                  Comment orienter doucement vers l'achat
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#9B5DE5] font-bold text-lg">1.</span>
                    <span>
                      Commencez par livrer de la valeur (bonus, conseil,
                      ressource)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#3A86FF] font-bold text-lg">2.</span>
                    <span>
                      Glissez des signaux subtils : "Si tu veux aller plus
                      loin…"
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#FFD400] font-bold text-lg">3.</span>
                    <span>
                      Introduisez votre offre comme une suite logique, pas une
                      rupture
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/30">
                <CardContent className="p-6">
                  <h4 className="font-bold text-green-400 mb-3">
                    ✅ Stratégie "donner avant de demander"
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Donnez d'abord : un outil pratique, une astuce</li>
                    <li>• Montrez que vous pouvez aider avant d'être payé</li>
                    <li>
                      • Résultat : quand vous proposez votre produit, il est
                      déjà convaincu
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30">
                <CardContent className="p-6">
                  <h4 className="font-bold text-red-400 mb-3">
                    ❌ Ce qu'il faut éviter
                  </h4>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>
                      • Si votre premier mail vend direct → vous tuez la
                      confiance
                    </li>
                    <li>
                      • Si vous ne mettez jamais de CTA → vous perdez des ventes
                    </li>
                    <li>
                      • L'équilibre : commencer par un cadeau, mener vers une
                      offre
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 8: Checklist */}
          <section id="checklist" className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Checklist pratique
            </h2>

            <p className="text-gray-300 leading-relaxed mb-8">
              Avant d'appuyer sur "envoyer", passez votre email de bienvenue au
              crash test. Cochez chaque point ci-dessous :
            </p>

            <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {checklistItems.map((item, index) => (
                    <label
                      key={index}
                      className="flex items-start gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 accent-[#9B5DE5]"
                      />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </label>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#9B5DE5]/20 rounded-lg">
                  <p className="text-center font-medium">
                    Si vous ne cochez pas toutes les cases, votre email de
                    bienvenue risque de passer inaperçu.
                    <br />
                    <span className="text-[#9B5DE5] font-bold">
                      Si vous les cochez toutes, vous posez la première brique
                      d'un système qui rapporte.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold font-space-grotesk mb-6 text-white">
              Conclusion
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Un bon email de bienvenue, ce n'est pas sorcier. Retenez juste
                deux règles simples :
              </p>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#9B5DE5] text-white flex items-center justify-center font-bold text-sm">
                      1
                    </span>
                    <span>
                      <strong>1 email = 1 idée = 1 action</strong>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#3A86FF] text-white flex items-center justify-center font-bold text-sm">
                      2
                    </span>
                    <span>
                      <strong>
                        Une séquence bien pensée = confiance + revenus
                        récurrents
                      </strong>
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-xl font-medium text-center">
                Votre email de bienvenue n'est pas un "bonus".
                <br />
                <span className="text-[#FFD400] font-bold">
                  C'est la fondation de votre système. Ne le ratez pas.
                </span>
              </p>
            </div>
          </section>
        </motion.article>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 border border-[#9B5DE5]/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4">
                📩 Vous voulez savoir si votre séquence actuelle tient la route
                ?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Réservez votre diagnostic gratuit et je vous montre comment
                transformer vos emails en machine à revenus prévisibles.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
              >
                <Link href="https://calendly.com/hello-thibautgallien/30min">
                  Réserver mon diagnostic gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center border-t border-gray-800 pt-8"
        >
          <Link
            href="/blog"
            className="flex items-center text-gray-400 hover:text-[#9B5DE5] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au blog
          </Link>

          <div className="flex gap-4">
            <Button
              asChild
              variant="outline"
              className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]"
            >
              <Link href="/contact">Me contacter</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90"
            >
              <Link href="/services">
                Mes services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
