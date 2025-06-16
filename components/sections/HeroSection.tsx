'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const stats = [
  { number: '150+', label: 'Projets réalisés', icon: TrendingUp },
  { number: '89%', label: 'Taux de conversion moyen', icon: Star },
  { number: '3.2x', label: 'Amélioration des ventes', icon: Zap }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FFD400] rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#9B5DE5] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-[#3A86FF] rounded-full animate-bounce"></div>
        
        {/* Floating manga-style effects */}
        <div className="absolute top-20 right-20 text-[#FFD400] text-4xl font-bold opacity-20 animate-pulse">
          ⚡
        </div>
        <div className="absolute bottom-32 left-16 text-[#9B5DE5] text-2xl font-bold opacity-20 animate-bounce">
          POW!
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-gradient-to-r from-[#9B5DE5]/20 to-[#3A86FF]/20 border border-[#9B5DE5]/30 rounded-full px-6 py-2">
              <span className="text-[#FFD400] font-bold text-sm tracking-wider">
                🚀 COPYWRITER NARRATIF
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-space-grotesk leading-tight mb-8"
          >
            <span className="block">Copywriting</span>
            <span className="block bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Style Manga
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Je transforme vos mots en{' '}
            <span className="text-[#FFD400] font-semibold">euros sonnants et trébuchants</span>
            {' '}avec un style narratif inspiré des mangas qui fait que vos prospects{' '}
            <span className="text-[#9B5DE5] font-semibold">ne peuvent pas s'arrêter de lire.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 group"
            >
              <Link href="/contact">
                Travailler avec moi
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5] transition-all duration-300 text-lg px-8 py-6"
            >
              <Link href="/services">
                Voir mes services
              </Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-6 border border-gray-800 hover:border-[#9B5DE5]/30 transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-6 h-6 text-[#9B5DE5] group-hover:text-[#FFD400] transition-colors duration-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold font-space-grotesk text-[#FFD400] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gradient-to-b from-[#9B5DE5] to-[#3A86FF] rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}