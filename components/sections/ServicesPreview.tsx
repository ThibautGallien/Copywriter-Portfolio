'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    icon: Target,
    title: 'Landing Pages Optimisées',
    description: 'Des pages qui transforment vos visiteurs en clients dès la première visite. Structure narrative, éléments de persuasion et optimisation pour la conversion.',
    features: ['Analyse audience', 'Structure AIDA', 'Test A/B inclus'],
    price: 'À partir de 800€',
    color: 'from-[#9B5DE5] to-[#7C3AED]'
  },
  {
    icon: Mail,
    title: 'Newsletters Engageantes',
    description: 'Des newsletters qui se lisent comme des épisodes captivants. Ton unique, storytelling maîtrisé et engagement maximum.',
    features: ['Ligne éditoriale', 'Templates responsive', 'Métriques incluses'],
    price: 'À partir de 400€/mois',
    color: 'from-[#3A86FF] to-[#0EA5E9]'
  },
  {
    icon: Zap,
    title: 'Séquences Email Automatisées',
    description: 'Des séquences qui nurturent vos prospects automatiquement. Chaque email raconte une histoire qui rapproche de l\'achat.',
    features: ['Automation complète', 'Personnalisation', 'Suivi des résultats'],
    price: 'À partir de 1200€',
    color: 'from-[#FFD400] to-[#F59E0B]'
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              ⚡ MES SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            3 Services,
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              1 Objectif
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformer vos mots en machine de conversion avec un style narratif 
            qui marque les esprits et génère des résultats.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-[#9B5DE5] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-[#FFD400]">
                      {service.price}
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#3A86FF] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            asChild 
            size="lg" 
            className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8"
          >
            <Link href="/services">
              Découvrir tous mes services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}