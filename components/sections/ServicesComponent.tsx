// Services Component
import { Mail, TrendingUp, Users, CheckCircle } from "lucide-react";
const ServicesSection = () => {
  const services = [
    {
      icon: <Mail className="text-green-400" size={40} />,
      title: "COPYWRITING",
      subtitle: "Des mots qui vendent",
      description:
        "Pages de vente, emails, landing pages... Du copywriting qui transforme vos visiteurs en clients fidèles.",
      features: [
        "Pages de vente haute conversion",
        "Séquences email automatisées",
        "Landing pages optimisées",
        "Copy publicitaire",
      ],
      price: "À partir de 1500€",
      cta: "Découvrir",
    },
    {
      icon: <TrendingUp className="text-blue-400" size={40} />,
      title: "STRATÉGIE",
      subtitle: "Votre plan de bataille",
      description:
        "Audit complet, stratégie marketing et plan d'action pour exploser vos ventes.",
      features: [
        "Audit marketing complet",
        "Stratégie sur mesure",
        "Plan d'action détaillé",
        "Suivi et optimisation",
      ],
      price: "À partir de 2500€",
      cta: "Découvrir",
    },
    {
      icon: <Users className="text-purple-400" size={40} />,
      title: "FORMATION",
      subtitle: "Apprenez à le faire vous-même",
      description:
        "Formations complètes pour maîtriser le copywriting et l'automatisation marketing.",
      features: [
        "Modules vidéo HD",
        "Exercices pratiques",
        "Templates prêts à l'emploi",
        "Support illimité",
      ],
      price: "À partir de 497€",
      cta: "Découvrir",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">NOS OFFRES</h2>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <div className="bg-green-500 text-black px-6 py-3 rounded-full font-bold text-2xl">
                K
              </div>
              <div className="bg-purple-500 text-white px-6 py-3 rounded-full font-bold text-2xl">
                K
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 text-white card-hover"
            >
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-lg text-gray-300 mb-4">{service.subtitle}</p>
                <p className="text-gray-400 mb-6">{service.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <p className="text-2xl font-bold text-green-400 mb-4">
                  {service.price}
                </p>
                <button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
