'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const highlights = [
  {
    icon: BookOpen,
    title: 'Style Narratif',
    description: 'Inspiré des codes manga pour créer des textes impossibles à ignorer'
  },
  {
    icon: Target,
    title: 'Orienté Résultats',
    description: 'Chaque mot est choisi pour maximiser vos conversions'
  },
  {
    icon: Zap,
    title: 'Approche Unique',
    description: 'Fini le copywriting fade, place au storytelling qui marque'
  }
];

export default function AboutPreview() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Avatar & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-[400px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-3xl flex items-center justify-center border border-gray-800">
                {/* Avatar placeholder */}
                <div className="w-48 h-48 bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white font-space-grotesk">T</span>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFD400] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#9B5DE5] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 text-[#FFD400] text-2xl animate-bounce">⚡</div>
              <div className="absolute bottom-1/4 -right-8 text-[#3A86FF] text-xl animate-pulse">💥</div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
                  🎯 QUI SUIS-JE
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6">
                Thibaut,
                <br />
                <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
                  Copywriter Narratif
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Depuis 5 ans, je transforme des mots en euros pour mes clients. 
                Mais pas n'importe comment : avec un{' '}
                <span className="text-[#9B5DE5] font-semibold">style narratif inspiré des codes manga</span>{' '}
                qui fait que vos prospects ne peuvent pas s'arrêter de lire.
              </p>

              <p>
                Là où d'autres copywriters recyclent les mêmes formules, 
                moi je raconte des histoires. Là où ils alignent des bullet points, 
                moi je construis des{' '}
                <span className="text-[#FFD400] font-semibold">arcs narratifs qui mènent à l'achat.</span>
              </p>

              <p className="text-[#3A86FF] font-medium">
                Ma mission ? Faire en sorte que vos clients attendent vos emails 
                comme le prochain épisode de leur série préférée.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk text-sm mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
              >
                <Link href="/about">
                  En savoir plus sur moi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}