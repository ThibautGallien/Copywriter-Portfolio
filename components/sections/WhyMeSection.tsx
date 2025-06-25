"use client";

import { motion } from "framer-motion";
import {
  Target,
  Settings,
  BarChart3,
  TrendingUp,
  Mail,
  Edit,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Target,
    title: "Stratégie",
    description:
      "Chaque séquence, chaque email, chaque envoi sert un objectif de vente ou de fidélisation défini ensemble.",
    color: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    icon: Settings,
    title: "Automatisation",
    description:
      "Votre système tourne en continu grâce à des scénarios déclenchés au bon moment, sans action manuelle de votre part.",
    color: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Vous suivez ce qui fonctionne (et ce qui ne fonctionne pas) grâce à des rapports simples, clairs, orientés décision.",
    color: "from-[#FFD400] to-[#F59E0B]",
  },
  {
    icon: TrendingUp,
    title: "Optimisation",
    description:
      "Vos performances s'améliorent en continu grâce à des tests réguliers et des ajustements ciblés.",
    color: "from-[#06D6A0] to-[#059669]",
  },
  {
    icon: Mail,
    title: "Newsletter",
    description:
      "Vous restez présent dans l'esprit de vos prospects grâce à des mails réguliers qui renforcent la relation et préparent la vente.",
    color: "from-[#9B5DE5] to-[#3A86FF]",
  },
  {
    icon: Edit,
    title: "Copywriting",
    description:
      "Chaque mot est pensé pour vendre et renforcer la confiance de votre audience, en respectant votre ton, vos valeurs et votre audience.",
    color: "from-[#FF6B6B] to-[#EE5A52]",
  },
];

export default function WhyMeSection() {
  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-6">
            Pourquoi me confier
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              votre stratégie email ?
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold font-space-grotesk mb-2 text-white">
                        {reason.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed text-left">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
