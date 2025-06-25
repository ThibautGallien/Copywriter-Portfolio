"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Zap, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface EmailResults {
  current: {
    monthlyOpens?: number;
    monthlyClicks?: number;
    monthlyRevenue?: number;
    yearlyRevenue?: number;
  };
  improved: {
    monthlyOpens?: number;
    monthlyClicks?: number;
    monthlyRevenue?: number;
    yearlyRevenue?: number;
  };
  difference: {
    monthly?: number;
    yearly?: number;
  };
}

const scenarios = [
  {
    id: "moderate",
    name: "Amélioration Modeste",
    description: "Optimisations de base",
    openIncrease: 12,
    clickIncrease: 8,
    color: "from-[#9B5DE5] to-[#7C3AED]",
    icon: TrendingUp,
  },
  {
    id: "significant",
    name: "Amélioration Significative",
    description: "Système complet",
    openIncrease: 25,
    clickIncrease: 18,
    color: "from-[#3A86FF] to-[#0EA5E9]",
    icon: Mail,
  },
  {
    id: "transformation",
    name: "Transformation Complète",
    description: "Refonte totale + stratégie",
    openIncrease: 40,
    clickIncrease: 30,
    color: "from-[#FFD400] to-[#F59E0B]",
    icon: Zap,
  },
];

export default function EmailROICalculator() {
  const [userInputs, setUserInputs] = useState({
    listSize: 2000,
    openRate: 18,
    clickRate: 2.5,
    averageOrder: 150,
    emailsPerMonth: 8,
  });

  const [selectedScenario, setSelectedScenario] = useState(scenarios[1]);
  const [results, setResults] = useState<EmailResults>({
    current: {},
    improved: {},
    difference: {},
  });

  useEffect(() => {
    calculateResults();
  }, [userInputs, selectedScenario]);

  const calculateResults = () => {
    const { listSize, openRate, clickRate, averageOrder, emailsPerMonth } =
      userInputs;

    // Calculs situation actuelle
    const currentOpens = (listSize * emailsPerMonth * openRate) / 100;
    const currentClicks = (currentOpens * clickRate) / 100;
    const currentMonthlyRevenue = currentClicks * averageOrder;
    const currentYearlyRevenue = currentMonthlyRevenue * 12;

    // Calculs situation améliorée
    const newOpenRate = Math.min(openRate + selectedScenario.openIncrease, 85); // Cap à 85%
    const newClickRate = Math.min(
      clickRate + selectedScenario.clickIncrease,
      45
    ); // Cap à 45%

    const improvedOpens = (listSize * emailsPerMonth * newOpenRate) / 100;
    const improvedClicks = (improvedOpens * newClickRate) / 100;
    const improvedMonthlyRevenue = improvedClicks * averageOrder;
    const improvedYearlyRevenue = improvedMonthlyRevenue * 12;

    const monthlyDifference = improvedMonthlyRevenue - currentMonthlyRevenue;
    const yearlyDifference = improvedYearlyRevenue - currentYearlyRevenue;

    setResults({
      current: {
        monthlyOpens: currentOpens,
        monthlyClicks: currentClicks,
        monthlyRevenue: currentMonthlyRevenue,
        yearlyRevenue: currentYearlyRevenue,
      },
      improved: {
        monthlyOpens: improvedOpens,
        monthlyClicks: improvedClicks,
        monthlyRevenue: improvedMonthlyRevenue,
        yearlyRevenue: improvedYearlyRevenue,
      },
      difference: {
        monthly: monthlyDifference,
        yearly: yearlyDifference,
      },
    });
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const formatMetric = (num: number) => {
    return new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="py-24 bg-[#0D0D0D] relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#FFD400] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#9B5DE5] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            Calculez le potentiel de
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              votre liste email
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez combien vous pourriez générer en optimisant vos emails
            avec mes systèmes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-8">
              {/* Inputs */}
              <div className="grid md:grid-cols-5 gap-4 mb-8">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Taille de votre liste
                    </label>
                    <input
                      type="number"
                      value={userInputs.listSize}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          listSize: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white text-lg font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Taux d'ouverture (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={userInputs.openRate}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          openRate: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white text-lg font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                      max="100"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Taux de clic (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={userInputs.clickRate}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          clickRate: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white text-lg font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                      max="100"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Panier moyen (€)
                    </label>
                    <input
                      type="number"
                      value={userInputs.averageOrder}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          averageOrder: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white text-lg font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Emails/mois
                    </label>
                    <input
                      type="number"
                      value={userInputs.emailsPerMonth}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          emailsPerMonth: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full p-2 bg-gray-700/50 border border-gray-600 rounded text-white text-lg font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Scenario Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-bold font-space-grotesk text-white mb-4 text-center">
                  Choisissez votre niveau d'amélioration :
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {scenarios.map((scenario) => (
                    <Card
                      key={scenario.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedScenario.id === scenario.id
                          ? "bg-gradient-to-br from-gray-800 to-gray-700 border-[#9B5DE5] shadow-lg transform scale-105"
                          : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                      }`}
                      onClick={() => setSelectedScenario(scenario)}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${scenario.color} flex items-center justify-center mx-auto mb-4`}
                        >
                          <scenario.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-white mb-2">
                          {scenario.name}
                        </h4>
                        <p className="text-sm text-gray-300 mb-3">
                          {scenario.description}
                        </p>
                        <div className="text-xs text-gray-400">
                          +{scenario.openIncrease}% ouverture, +
                          {scenario.clickIncrease}% clic
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-red-400">
                      <Calculator className="mr-2" size={24} />
                      Situation actuelle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-400">
                          Revenus mensuels
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {formatNumber(results.current.monthlyRevenue || 0)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Revenus annuels</p>
                        <p className="text-lg text-gray-300">
                          {formatNumber(results.current.yearlyRevenue || 0)}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-red-500/30">
                        <p className="text-xs text-gray-400">
                          {formatMetric(results.current.monthlyOpens || 0)}{" "}
                          ouvertures/mois
                          <br />
                          {formatMetric(
                            results.current.monthlyClicks || 0
                          )}{" "}
                          clics/mois
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-gray-800/80 to-gray-700/60 border border-[#9B5DE5]/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-[#9B5DE5]">
                      <selectedScenario.icon className="mr-2" size={24} />
                      Avec mes systèmes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-400">
                          Revenus mensuels
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {formatNumber(results.improved.monthlyRevenue || 0)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Revenus annuels</p>
                        <p className="text-lg text-gray-300">
                          {formatNumber(results.improved.yearlyRevenue || 0)}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-[#9B5DE5]/30">
                        <p className="text-xs text-gray-400">
                          {formatMetric(results.improved.monthlyOpens || 0)}{" "}
                          ouvertures/mois
                          <br />
                          {formatMetric(
                            results.improved.monthlyClicks || 0
                          )}{" "}
                          clics/mois
                        </p>
                      </div>
                    </div>
                    {(results.difference.yearly || 0) > 0 && (
                      <div className="mt-4 p-3 bg-[#9B5DE5]/20 rounded-lg">
                        <p className="text-[#9B5DE5] font-bold text-center">
                          +{formatNumber(results.difference.yearly || 0)}/an
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-sm sm:text-lg px-4 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                >
                  <Link href="https://calendly.com/hello-thibautgallien/30min">
                    <span className="hidden sm:inline">
                      Je veux ces résultats pour mon business
                    </span>
                    <span className="sm:hidden">Je veux ces résultats</span>
                  </Link>
                </Button>

                <p className="text-xs text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
                  Ces projections sont basées sur des améliorations moyennes
                  observées. Les résultats peuvent varier selon votre secteur,
                  votre audience et la qualité de mise en œuvre. Ceci n'est pas
                  une promesse de résultats mais un potentiel d'amélioration.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
