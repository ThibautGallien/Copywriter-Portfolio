"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, TrendingUp, Zap } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

const keyPrinciples = [
  {
    principle: "Un verbe d'action clair",
    description: "Dites exactement quoi faire",
    icon: Target,
    color: "text-[#9B5DE5]",
  },
  {
    principle: "Un bénéfice explicite",
    description: "Montrez ce que l'utilisateur gagne en cliquant",
    icon: TrendingUp,
    color: "text-[#3A86FF]",
  },
  {
    principle: "Un contraste visuel",
    description: "Le bouton doit sauter aux yeux sans dénaturer votre charte",
    icon: Zap,
    color: "text-[#FFD400]",
  },
  {
    principle: "Un positionnement stratégique",
    description: "Visible là où le lecteur est prêt à agir",
    icon: CheckCircle,
    color: "text-[#06D6A0]",
  },
];

const finalRules = [
  {
    number: "1",
    rule: "1 page = 1 objectif = 1 action",
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    number: "2",
    rule: "Clarté + persuasion + simplicité = conversion",
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    number: "3",
    rule: "Testez, mesurez, optimisez en continu",
    color: "from-[#FFD400] to-[#F59E0B]",
  },
];

const ctaSuccess = {
  title: "Votre CTA n'est pas un détail technique",
  subtitle:
    "C'est votre vendeur digital le plus efficace. Traitez-la comme tel.",
  action:
    "Commencez simplement : un verbe d'action clair, un bénéfice visible, un design qui ressort. Le reste viendra avec vos tests.",
};

export default function ConclusionSection() {
  return (
    <ArticleSection title="Conclusion – Un bon Call to Action peut transformer vos ventes">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12"
      >
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p className="text-lg">
            Le CTA n'est pas un détail graphique. C'est le levier qui transforme
            vos lecteurs en prospects, puis vos prospects en clients.
          </p>

          <p>
            Bien pensé, il peut multiplier vos conversions sans que vous ayez
            besoin de plus de trafic. Mais pour ça, il doit être testé, optimisé
            et aligné avec la promesse de votre contenu.
          </p>

          <p>
            Si vos CTA ne rapportent rien aujourd'hui, ce n'est pas votre offre
            qui est en cause. C'est la façon dont vous guidez vos visiteurs. Et
            ça, ça se corrige.
          </p>
        </div>

        {/* Checklist récapitulative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-bold text-center mb-6 text-white">
              Checklist finale pour un CTA qui convertit
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {keyPrinciples.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <item.icon
                    className={`w-5 h-5 ${item.color} mt-1 flex-shrink-0`}
                  />
                  <div>
                    <span className="font-semibold text-white">
                      {item.principle} :
                    </span>
                    <span className="text-gray-300 ml-1">
                      {item.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Règles fondamentales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-12"
        >
          <h3 className="text-xl font-bold text-center mb-6 text-white">
            Retenez ces principes simples :
          </h3>
          <div className="space-y-4">
            {finalRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-lg"
              >
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${rule.color} flex items-center justify-center text-black font-bold`}
                >
                  {rule.number}
                </div>
                <span className="text-white font-medium">{rule.rule}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Message final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-xl p-8 border border-[#9B5DE5]/30">
            <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-white">
              {ctaSuccess.title}
            </h3>
            <p className="text-xl font-bold text-[#FFD400] mb-6">
              {ctaSuccess.subtitle}
            </p>
            <p className="text-gray-300 max-w-2xl mx-auto">
              {ctaSuccess.action}
            </p>
          </div>
        </motion.div>

        {/* Call to action final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-500/30 rounded-xl p-6">
            <p className="text-amber-300 font-medium mb-2">
              Vous voulez voir comment un audit rapide de vos CTA pourrait déjà
              augmenter vos conversions ?
            </p>
            <p className="text-gray-300 text-sm">
              Demandez un check-up gratuit et je vous envoie mes recommandations
              personnalisées.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </ArticleSection>
  );
}
