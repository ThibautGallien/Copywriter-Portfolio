"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ArticleSection } from "@/components/blog/BlogComponents";

export default function ConclusionSection() {
  return (
    <ArticleSection title="Conclusion">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Une landing page efficace, ce n'est pas sorcier. Retenez ces
            principes simples :
          </p>

          <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#9B5DE5] flex-shrink-0" />
                <span>
                  <strong>1 page = 1 objectif = 1 action</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#3A86FF] flex-shrink-0" />
                <span>
                  <strong>Clarté + persuasion + simplicité = conversion</strong>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#FFD400] flex-shrink-0" />
                <span>
                  <strong>Testez, mesurez, optimisez en continu</strong>
                </span>
              </li>
            </ul>
          </div>

          <p className="text-xl font-medium text-center">
            Votre landing page n'est pas un détail technique.
            <br />
            <span className="text-[#FFD400] font-bold">
              C'est votre vendeur digital le plus efficace. Traitez-la comme
              tel.
            </span>
          </p>
        </div>
      </motion.div>
    </ArticleSection>
  );
}
