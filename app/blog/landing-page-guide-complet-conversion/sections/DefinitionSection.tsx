"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleSection, Highlight } from "@/components/blog/BlogComponents";

export default function DefinitionSection() {
  return (
    <ArticleSection id="definition" title="Qu'est-ce qu'une Landing Page ?">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p className="text-gray-300 leading-relaxed mb-6">
          Une landing page, ou page d'atterrissage, est une page web créée pour
          un objectif unique : inciter le visiteur à réaliser une action
          précise. Il peut s'agir de remplir un formulaire, télécharger un livre
          blanc, s'inscrire à une newsletter ou encore acheter un produit.
        </p>

        <p className="text-gray-300 leading-relaxed mb-8">
          Contrairement aux autres pages d'un site, une landing page supprime
          les distractions pour concentrer toute l'attention sur la conversion.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h4 className="font-bold text-[#9B5DE5] mb-3">Page d'accueil</h4>
              <p className="text-sm text-gray-300">
                Porte d'entrée générale de votre site. Présente votre univers,
                vos services, propose plusieurs chemins de navigation.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-6">
              <h4 className="font-bold text-[#FFD400] mb-3">Landing page</h4>
              <p className="text-sm text-gray-300">
                Page isolée, construite autour d'un seul message et d'un seul
                appel à l'action. Tout est pensé pour guider vers une décision
                précise.
              </p>
            </CardContent>
          </Card>
        </div>

        <Highlight>
          Chaque élément d'une landing page doit répondre à une question :
          <span className="text-[#FFD400] font-bold">
            "Est-ce que cela rapproche le visiteur de l'action attendue ?"
          </span>
        </Highlight>
      </motion.div>
    </ArticleSection>
  );
}
