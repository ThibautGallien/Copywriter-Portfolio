"use client";

import { motion } from "framer-motion";
import { TrendingUp, Mail, Target, DollarSign, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    icon: DollarSign,
    stat: "42:1",
    label: "ROI moyen de l'email marketing",
    description: "Chaque euro investi rapporte 42€ (DMA 2024)",
    color: "text-[#FFD400]",
    bgColor: "from-[#FFD400] to-[#F59E0B]",
  },
  {
    icon: TrendingUp,
    stat: "21,5%",
    label: "Taux d'ouverture moyen",
    description: "Tous secteurs confondus",
    color: "text-[#9B5DE5]",
    bgColor: "from-[#9B5DE5] to-[#7C3AED]",
  },
  {
    icon: Target,
    stat: "2,3%",
    label: "Taux de clic moyen",
    description: "Tous secteurs confondus",
    color: "text-[#3A86FF]",
    bgColor: "from-[#3A86FF] to-[#0EA5E9]",
  },
  {
    icon: Mail,
    stat: "99%",
    label: "Consultent leurs emails quotidiennement",
    description: "Votre audience est plus accessible que vous pensez",
    color: "text-[#06D6A0]",
    bgColor: "from-[#06D6A0] to-[#059669]",
  },
];

const caseStudies = [
  {
    company: "Dollar Shave Club",
    before: "Acquisition coûteuse",
    after: "Emails automatisés",
    impact: "+300% conversions",
    description:
      "Grâce aux emails automatisés, transformation totale de leur funnel de conversion",
  },
  {
    company: "BuzzFeed",
    before: "Dépendance réseaux sociaux",
    after: "Newsletter quotidienne",
    impact: "50% du trafic total",
    description:
      "L'email marketing est devenu leur principale source de trafic",
  },
  {
    company: "Airbnb",
    before: "Emails génériques",
    after: "Emails personnalisés",
    impact: "+25% réservations",
    description: "Personnalisation basée sur les comportements utilisateurs",
  },
];

export default function StatsProofSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0D0D0D] to-gray-900/20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FFD400] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
            L'email marketing n'est pas mort.
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Il est juste mal utilisé.
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Voici pourquoi l'email reste le canal marketing le plus rentable (et
            pourquoi votre liste pourrait être une mine d'or inexploitée)
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.bgColor} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold font-space-grotesk mb-2 ${stat.color}`}
                  >
                    {stat.stat}
                  </div>
                  <div className="text-white font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
              Ces entreprises ont transformé leur email en
              <span className="text-[#FFD400]"> machine à cash</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Études de cas réelles d'entreprises qui ont optimisé leur
              stratégie email marketing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-[#9B5DE5]/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-[#FFD400] mb-2">
                        {study.company}
                      </h4>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Avant :</span>
                        <span className="text-red-400 text-sm">
                          {study.before}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">Après :</span>
                        <span className="text-[#06D6A0] text-sm">
                          {study.after}
                        </span>
                      </div>
                      <div className="border-t border-gray-700 pt-3">
                        <div className="text-center">
                          <span className="text-[#9B5DE5] font-bold text-lg">
                            {study.impact}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                      {study.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-8 border border-[#9B5DE5]/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-8 h-8 text-[#FFD400] mr-3" />
              <h3 className="text-xl font-bold font-space-grotesk">
                Et si votre liste était la prochaine ?
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Ces résultats ne sont pas de la chance. C'est de la méthode, de la
              stratégie, et une exécution rigoureuse.
            </p>
            <div className="text-center">
              <span className="text-sm text-gray-400">
                Je ne vous promets pas de miracle. Je vous propose une approche
                proven qui fonctionne.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
