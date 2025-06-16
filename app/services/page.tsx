'use client';

import { motion } from 'framer-motion';
import { Zap, Mail, Target, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const services = [
  {
    icon: Target,
    title: 'Landing Pages Optimisées',
    subtitle: 'Convertir dès la première visite',
    description: 'Des pages de destination qui transforment vos visiteurs en clients. Structure narrative, éléments de persuasion et optimisation pour la conversion.',
    features: [
      'Analyse de votre audience cible',
      'Structure AIDA personnalisée',
      'Éléments de preuve sociale',
      'CTA optimisés pour la conversion',
      'Version desktop et mobile',
      'Test A/B inclus'
    ],
    price: 'À partir de 800€',
    duration: '7-10 jours',
    color: 'from-[#9B5DE5] to-[#7C3AED]'
  },
  {
    icon: Mail,
    title: 'Newsletters Engageantes',
    subtitle: 'Fidéliser avec style',
    description: 'Des newsletters qui se lisent comme des épisodes captivants. Ton unique, storytelling maîtrisé et engagement maximum.',
    features: [
      'Ligne éditoriale personnalisée',
      'Templates responsive',
      'Storytelling narratif',
      'Segmentation stratégique',
      'Métriques et optimisation',
      'Formation à l\'envoi'
    ],
    price: 'À partir de 400€/mois',
    duration: 'Collaboration mensuelle',
    color: 'from-[#3A86FF] to-[#0EA5E9]'
  },
  {
    icon: Zap,
    title: 'Séquences Email Automatisées',
    subtitle: 'Vendre pendant que vous dormez',
    description: 'Des séquences qui nurturent vos prospects automatiquement. Chaque email raconte une histoire qui rapproche de l\'achat.',
    features: [
      'Séquence de bienvenue',
      'Nurturing automatisé',
      'Relances de panier abandonné',
      'Séquence de vente',
      'Personnalisation avancée',
      'Intégration avec votre outil'
    ],
    price: 'À partir de 1200€',
    duration: '10-14 jours',
    color: 'from-[#FFD400] to-[#F59E0B]'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Brief & Stratégie',
    description: 'On définit ensemble vos objectifs, votre audience et le ton à adopter.'
  },
  {
    step: '02',
    title: 'Recherche & Structure',
    description: 'J\'analyse votre marché et je structure le contenu pour maximiser l\'impact.'
  },
  {
    step: '03',
    title: 'Rédaction & Révisions',
    description: 'Création du contenu avec mon style narratif unique, puis ajustements selon vos retours.'
  },
  {
    step: '04',
    title: 'Livraison & Suivi',
    description: 'Remise des livrables finaux avec conseils d\'implémentation et suivi des résultats.'
  }
];

export default function ServicesPage() {
  return (
    <div className="relative pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 -left-64 w-96 h-96 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-32 -right-64 w-96 h-96 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              ⚡ Mes Services
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Transformez vos mots
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              en conversions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Trois services, un objectif : faire de votre contenu une arme de conversion massive. 
            Avec un style narratif qui marque les esprits.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-space-grotesk mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-[#FFD400] font-medium">
                    {service.subtitle}
                  </CardDescription>
                  <p className="text-gray-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#9B5DE5] mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-[#FFD400]">{service.price}</div>
                      <div className="text-xs text-gray-400">{service.duration}</div>
                    </div>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                  >
                    <Link href="/contact">
                      Démarrer ce projet
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Mon Process
              <span className="text-[#9B5DE5]"> Step-by-Step</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Une méthode éprouvée pour transformer vos idées en contenu qui convertit. 
              Transparent, efficace, et toujours orienté résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-[#9B5DE5]/30 transition-colors duration-300">
                  <div className="text-[#FFD400] font-bold text-2xl font-space-grotesk mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-2 font-space-grotesk">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Prêt à transformer votre contenu ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment mon style narratif unique 
              peut booster vos conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8"
              >
                <Link href="/contact">
                  Travailler avec moi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-gray-700 hover:border-[#9B5DE5] transition-colors px-8"
              >
                <Link href="/about">
                  En savoir plus sur moi
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}