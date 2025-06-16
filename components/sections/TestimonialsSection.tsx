'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Marie L.',
    role: 'Fondatrice E-commerce',
    company: 'BeautyNova',
    content: 'Thibaut a transformé ma landing page avec son style narratif unique. Résultat : +127% de conversions en 3 semaines. Son approche manga donne vraiment une personnalité à mes textes !',
    rating: 5,
    avatar: 'ML'
  },
  {
    name: 'Thomas R.',
    role: 'Directeur Marketing',
    company: 'TechStart',
    content: 'Ses newsletters sont addictives ! Nos abonnés attendent chaque email comme un nouvel épisode. Le taux d\'ouverture est passé de 18% à 47%. Du jamais vu.',
    rating: 5,
    avatar: 'TR'
  },
  {
    name: 'Sarah K.',
    role: 'Coach Business',
    company: 'Mindset Pro',
    content: 'Thibaut a créé une séquence de 7 emails qui me génère 15k€/mois en automatique. Son style storytelling transforme vraiment les prospects en clients fidèles.',
    rating: 5,
    avatar: 'SK'
  }
];

export default function TestimonialsSection() {
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
              ⭐ TÉMOIGNAGES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
            Ils ont testé,
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              ils approuvent
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que mes clients disent de leur expérience avec mon copywriting narratif.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD400] text-[#FFD400]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-[#9B5DE5]/20 absolute -top-2 -left-2" />
                    <p className="text-gray-300 leading-relaxed relative z-10">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold font-space-grotesk text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold font-space-grotesk mb-3 text-[#FFD400]">
              Garantie Satisfaction
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Si vous n'êtes pas satisfait de votre projet dans les 7 jours suivant la livraison, 
              je reprends le travail jusqu'à ce que ça vous convienne. C'est ma garantie qualité.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}