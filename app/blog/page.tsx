'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, User, Tag, TrendingUp, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Les 7 Triggers Psychologiques qui Transforment un Visiteur en Acheteur',
    excerpt: 'Découvrez les leviers psychologiques utilisés par les meilleurs copywriters pour déclencher l\'achat. Exemples concrets et techniques applicables immédiatement.',
    category: 'Conversion',
    readTime: '8 min',
    publishedAt: '2024-01-15',
    slug: 'triggers-psychologiques-conversion',
    featured: true,
    tags: ['Psychologie', 'Conversion', 'Landing Page']
  },
  {
    id: 2,
    title: 'Email Marketing : Comment Écrire des Objets qui Font Ouvrir à Coup Sûr',
    excerpt: 'Les secrets des lignes d\'objet irrésistibles. Plus de 50 exemples testés et validés pour booster votre taux d\'ouverture.',
    category: 'Email Marketing',
    readTime: '6 min',
    publishedAt: '2024-01-12',
    slug: 'email-objets-irresistibles',
    featured: false,
    tags: ['Email', 'Subject Lines', 'Marketing']
  },
  {
    id: 3,
    title: 'Storytelling en Copywriting : La Méthode Manga pour Captiver',
    excerpt: 'Comment j\'applique les techniques narratives des mangas à mes copy pour créer des textes impossibles à ignorer.',
    category: 'Storytelling',
    readTime: '10 min',
    publishedAt: '2024-01-10',
    slug: 'storytelling-methode-manga',
    featured: true,
    tags: ['Storytelling', 'Créativité', 'Manga']
  },
  {
    id: 4,
    title: 'Landing Page : Les 12 Éléments Obligatoires pour Convertir',
    excerpt: 'Checklist complète des éléments indispensables sur une landing page qui convertit. Templates et exemples inclus.',
    category: 'Landing Page',
    readTime: '12 min',
    publishedAt: '2024-01-08',
    slug: 'landing-page-elements-conversion',
    featured: false,
    tags: ['Landing Page', 'UX', 'Conversion']
  },
  {
    id: 5,
    title: 'Newsletter : 5 Formats qui Génèrent 10x Plus d\'Engagement',
    excerpt: 'Sortez du format classique ! Découvrez les structures de newsletter qui transforment vos abonnés en fans engagés.',
    category: 'Newsletter',
    readTime: '7 min',
    publishedAt: '2024-01-05',
    slug: 'newsletter-formats-engagement',
    featured: false,
    tags: ['Newsletter', 'Engagement', 'Content']
  },
  {
    id: 6,
    title: 'Copywriting vs ChatGPT : Pourquoi l\'Humain Reste Indispensable',
    excerpt: 'L\'IA peut-elle remplacer un copywriter ? Mon analyse honest sur les limites de l\'IA et la valeur unique du copywriting humain.',
    category: 'Industrie',
    readTime: '9 min',
    publishedAt: '2024-01-03',
    slug: 'copywriting-vs-chatgpt',
    featured: false,
    tags: ['IA', 'Futur', 'Métier']
  }
];

const categories = [
  { name: 'Tous', count: 12, active: true },
  { name: 'Conversion', count: 4, active: false },
  { name: 'Email Marketing', count: 3, active: false },
  { name: 'Storytelling', count: 2, active: false },
  { name: 'Landing Page', count: 2, active: false },
  { name: 'Newsletter', count: 1, active: false }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
              📝 Blog
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Conseils
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              Copywriting
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Techniques, analyses et retours d'expérience pour transformer vos mots en euros. 
            Du concret, testé sur le terrain.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category, index) => (
            <Button
              key={category.name}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={`${
                category.active
                  ? 'bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90'
                  : 'border-gray-700 hover:border-[#9B5DE5] hover:text-[#9B5DE5]'
              } transition-all duration-300`}
            >
              {category.name}
              <span className={`ml-2 text-xs ${category.active ? 'text-white/80' : 'text-gray-400'}`}>
                ({category.count})
              </span>
            </Button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="w-5 h-5 text-[#FFD400]" />
              <h2 className="text-2xl font-bold font-space-grotesk">
                Articles Populaires
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 border-gray-800 hover:border-[#9B5DE5]/30 transition-all duration-300 h-full group cursor-pointer">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-3">
                        <Badge 
                          variant="secondary" 
                          className="bg-[#9B5DE5]/20 text-[#9B5DE5] border-[#9B5DE5]/30"
                        >
                          {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                          <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-space-grotesk leading-tight group-hover:text-[#9B5DE5] transition-colors duration-300">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge 
                              key={tag} 
                              variant="outline" 
                              className="text-xs border-gray-700 text-gray-400"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-[#3A86FF] hover:text-[#3A86FF] hover:bg-[#3A86FF]/10 p-0"
                        >
                          Lire
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="w-5 h-5 text-[#3A86FF]" />
            <h2 className="text-2xl font-bold font-space-grotesk">
              Tous les Articles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className="text-xs border-gray-700 text-gray-400"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-lg font-space-grotesk leading-tight group-hover:text-[#9B5DE5] transition-colors duration-300">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('fr-FR')}
                      </span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-[#3A86FF] hover:text-[#3A86FF] hover:bg-[#3A86FF]/10 p-0 h-auto"
                      >
                        Lire
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-[#FFD400]" />
              <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk">
                Conseils Copywriting Privés
              </h2>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Recevez chaque semaine mes meilleures techniques, analyses de campagnes 
              et astuces exclusives directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#9B5DE5] focus:outline-none text-white placeholder-gray-400"
              />
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity px-6 whitespace-nowrap"
              >
                S'abonner
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              Pas de spam, désinscription en 1 clic. Vos données restent privées.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}