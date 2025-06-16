'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Coffee, Zap, Target, Heart, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: BookOpen,
    title: 'Storytelling Narratif',
    description: 'Chaque texte raconte une histoire. Parce que les humains ne retiennent que les récits qui les touchent.'
  },
  {
    icon: Target,
    title: 'Conversion Avant Tout',
    description: 'Un texte beau qui ne convertit pas, c\'est juste de l\'art. Moi, je fais du business avec des mots.'
  },
  {
    icon: Zap,
    title: 'Style Unique',
    description: 'Fini le copywriting fade et formaté. Mon style s\'inspire des codes narratifs des mangas pour marquer les esprits.'
  },
  {
    icon: Heart,
    title: 'Approche Humaine',
    description: 'Derrière chaque projet, il y a un entrepreneur avec ses rêves. Je m\'investis comme si c\'était les miens.'
  }
];

const achievements = [
  {
    number: '150+',
    label: 'Projets réalisés',
    color: 'text-[#9B5DE5]'
  },
  {
    number: '89%',
    label: 'Taux de conversion moyen',
    color: 'text-[#3A86FF]'
  },
  {
    number: '3.2x',
    label: 'Amélioration moyenne des ventes',
    color: 'text-[#FFD400]'
  }
];

export default function AboutPage() {
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
              🎯 À Propos
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Thibaut,
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Copywriter Narratif
            </span>
          </h1>
        </motion.div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-[400px] bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-3xl flex items-center justify-center border border-gray-800">
                {/* Avatar placeholder - replace with actual image */}
                <div className="w-48 h-48 bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white font-space-grotesk">T</span>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFD400] rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#9B5DE5] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 text-[#FFD400] text-2xl animate-bounce">⚡</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk">
              Le copywriting, c'est 
              <span className="text-[#9B5DE5]"> mon dojo</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Depuis 5 ans, je transforme des mots en euros pour mes clients. Mais pas n'importe comment : 
                avec un style narratif inspiré des codes manga qui fait que vos prospects ne peuvent pas 
                s'arrêter de lire.
              </p>
              
              <p>
                Là où d'autres copywriters recyclent les mêmes formules, moi je raconte des histoires. 
                Là où ils alignent des bullet points, moi je construis des arcs narratifs qui mènent 
                à l'achat.
              </p>
              
              <p>
                <strong className="text-[#FFD400]">Ma mission ?</strong> Faire en sorte que vos clients 
                attendent vos emails comme le prochain épisode de leur série préférée.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">
                  Travailler ensemble
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors duration-300">
                  <div className={`text-4xl md:text-5xl font-bold font-space-grotesk mb-2 ${achievement.color}`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {achievement.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              Mes Valeurs
              <span className="text-[#9B5DE5]"> de Combat</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ce qui guide chacune de mes créations et fait la différence dans mes collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-[#9B5DE5]/30 transition-colors duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold font-space-grotesk mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Touch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <Card className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-800">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
                    Quelques infos
                    <span className="text-[#FFD400]"> bonus</span>
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p className="flex items-center gap-3">
                      <Coffee className="w-5 h-5 text-[#9B5DE5]" />
                      Amateur de café et de longues sessions d'écriture nocturnes
                    </p>
                    <p className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-[#3A86FF]" />
                      Lecteur compulsif de mangas (One Piece, Attack on Titan, Solo Leveling...)
                    </p>
                    <p className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-[#FFD400]" />
                      Formé aux techniques de persuasion et de psychologie cognitive
                    </p>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="inline-block p-6 bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl border border-gray-700">
                    <p className="text-lg font-medium mb-2">
                      "Le copywriting, c'est de la psychologie appliquée avec des mots qui vendent."
                    </p>
                    <p className="text-sm text-gray-400">
                      — Ma philosophie en une phrase
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk mb-4">
              On fait équipe ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Si vous cherchez quelqu'un qui sort des sentiers battus pour transformer 
              vos mots en machine à conversion, on devrait discuter.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-8"
            >
              <Link href="/contact">
                Démarrons votre projet
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}