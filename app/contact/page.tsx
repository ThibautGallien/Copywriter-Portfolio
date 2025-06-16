'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Mail, MessageCircle, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Direct',
    description: 'Pour les projets urgents',
    contact: 'hello@thibaut-copywriter.fr',
    color: 'from-[#9B5DE5] to-[#7C3AED]'
  },
  {
    icon: MessageCircle,
    title: 'Discussion Rapide',
    description: 'Questions et devis express',
    contact: 'WhatsApp / Telegram',
    color: 'from-[#3A86FF] to-[#0EA5E9]'
  },
  {
    icon: Calendar,
    title: 'Rendez-vous Stratégique',
    description: 'Pour les gros projets',
    contact: 'Calendly (30 min)',
    color: 'from-[#FFD400] to-[#F59E0B]'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message envoyé avec succès ! Je vous réponds sous 24h.', {
      description: 'Surveillez votre boîte mail (et les spams) 📧',
    });
    
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      timeline: '',
      message: '',
      newsletter: false
    });
  };

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
              💬 Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-6">
            Parlons de votre
            <br />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              prochain projet
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Prêt à transformer vos mots en machine de conversion ? 
            Racontez-moi tout sur votre projet !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold font-space-grotesk mb-6">
              Choisissez votre
              <span className="text-[#9B5DE5]"> mode de contact</span>
            </h2>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold font-space-grotesk mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-2">
                          {method.description}
                        </p>
                        <p className="text-sm text-[#9B5DE5] font-medium">
                          {method.contact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-2xl p-6 border border-gray-800"
            >
              <h3 className="font-semibold font-space-grotesk mb-3 text-[#FFD400]">
                ⚡ Réponse Garantie
              </h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Réponse sous 24h maximum
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Devis gratuit et détaillé
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9B5DE5]" />
                  Conseils personnalisés
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-space-grotesk">
                  Briefez-moi votre projet
                </CardTitle>
                <CardDescription>
                  Plus vous êtes précis, plus je peux vous aider efficacement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom / Prénom *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Votre nom"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="votre@email.com"
                        required
                        className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Entreprise / Projet</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Nom de votre entreprise ou projet"
                      className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service souhaité *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Choisissez un service" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="landing-page">Landing Page Optimisée</SelectItem>
                          <SelectItem value="newsletter">Newsletter Engageante</SelectItem>
                          <SelectItem value="email-sequence">Séquence Email Automatisée</SelectItem>
                          <SelectItem value="multiple">Plusieurs services</SelectItem>
                          <SelectItem value="other">Autre (à préciser)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget envisagé</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                          <SelectValue placeholder="Votre budget" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="500-1000">500€ - 1000€</SelectItem>
                          <SelectItem value="1000-2500">1000€ - 2500€</SelectItem>
                          <SelectItem value="2500-5000">2500€ - 5000€</SelectItem>
                          <SelectItem value="5000+">Plus de 5000€</SelectItem>
                          <SelectItem value="flexible">Flexible selon recommandations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Délai souhaité</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5]">
                        <SelectValue placeholder="Quand avez-vous besoin du projet ?" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="urgent">Urgent (moins d'une semaine)</SelectItem>
                        <SelectItem value="2-weeks">Dans les 2 semaines</SelectItem>
                        <SelectItem value="month">Dans le mois</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Parlez-moi de votre projet, vos objectifs, votre audience cible, vos défis actuels... Plus vous êtes précis, mieux je peux vous aider !"
                      rows={6}
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-[#9B5DE5] resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                      className="border-gray-700 data-[state=checked]:bg-[#9B5DE5] data-[state=checked]:border-[#9B5DE5]"
                    />
                    <Label htmlFor="newsletter" className="text-sm text-gray-300">
                      Je veux recevoir vos conseils copywriting (max 1 email/semaine, promis !)
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity"
                  >
                    {isSubmitting ? (
                      <>
                        Envoi en cours...
                        <div className="w-4 h-4 ml-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        Envoyer mon brief
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl p-8 md:p-12 border border-gray-800">
            <h2 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4">
              Questions fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left mt-8">
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  💰 Comment se passent les paiements ?
                </h3>
                <p className="text-sm text-gray-300">
                  50% à la commande, 50% à la livraison. Facture en bonne et due forme, 
                  paiement par virement ou Stripe.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  ⏱️ Combien de révisions incluses ?
                </h3>
                <p className="text-sm text-gray-300">
                  2 séries de révisions incluses dans tous mes forfaits. 
                  Au-delà, facturation à l'heure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  📈 Garantissez-vous les résultats ?
                </h3>
                <p className="text-sm text-gray-300">
                  Je m'engage sur la qualité et la méthode. Les résultats dépendent 
                  aussi de votre mise en œuvre et de votre marché.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FFD400] mb-2">
                  🤝 Travaillez-vous en exclusivité ?
                </h3>
                <p className="text-sm text-gray-300">
                  Pour les gros projets (>3000€), je peux proposer une exclusivité 
                  sectorielle. À discuter ensemble.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}