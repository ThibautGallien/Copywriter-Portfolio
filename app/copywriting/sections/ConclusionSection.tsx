"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function ConclusionSection() {
  return (
    <ArticleSection title="Ce qu'il faut retenir sur le copywriting">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-6 text-neutral-600 leading-relaxed">
          <p>
            Le copywriting n'est pas un talent mystérieux réservé aux
            "créatifs". C'est une compétence technique basée sur la psychologie
            d'achat et la clarté du message.
          </p>

          <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
            <h4 className="font-bold text-emerald-700 mb-4">
              Trois choses comptent vraiment :
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-600">
                  Parler de{" "}
                  <strong className="text-neutral-900">bénéfices</strong> (pas
                  de caractéristiques)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-600">
                  Lever les{" "}
                  <strong className="text-neutral-900">objections</strong> avant
                  qu'elles arrivent dans la tête du prospect
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                <span className="text-neutral-600">
                  Rendre l'
                  <strong className="text-neutral-900">
                    action la plus simple et évidente
                  </strong>{" "}
                  possible
                </span>
              </li>
            </ul>
          </div>

          <Highlight>
            Si tu retiens un seul truc de cet article, c'est celui-ci : un bon
            copy est un copy qui fait acheter, pas un copy qui "sonne bien".
            <span className="text-emerald-600 font-bold">
              {" "}
              Mesure tout. Teste systématiquement. Arrête de chercher la formule
              magique. Elle n'existe pas.
            </span>
          </Highlight>

          <p>
            Ce qui existe, ce sont des principes psychologiques prouvés et des
            tests A/B rigoureux. Commence petit. Réécrire 3 titres cette
            semaine. Tester 2 lignes d'objet email le mois prochain. Observer
            les chiffres. Ajuster.
          </p>

          <p className="text-xl font-medium text-center text-neutral-900">
            Le copywriting, c'est ça :
            <span className="text-emerald-600 font-bold">
              {" "}
              des itérations constantes basées sur des données réelles.
            </span>
          </p>
        </div>
      </motion.div>
    </ArticleSection>
  );
}
