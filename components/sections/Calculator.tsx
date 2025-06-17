"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Results {
  current: {
    customers?: number;
    monthlyRevenue?: number;
    yearlyRevenue?: number;
  };
  improved: {
    customers?: number;
    monthlyRevenue?: number;
    yearlyRevenue?: number;
  };
  excellent: {
    customers?: number;
    monthlyRevenue?: number;
    yearlyRevenue?: number;
  };
  difference: {
    monthly?: number;
    yearly?: number;
    excellent?: number;
  };
}

export default function ROICalculator() {
  const [userInputs, setUserInputs] = useState({
    averageOrder: 100,
    conversionRate: 2,
    monthlyVisitors: 1000,
  });

  const [results, setResults] = useState<Results>({
    current: {},
    improved: {},
    excellent: {},
    difference: {},
  });

  const benchmarks = {
    goodConversionRate: 8,
    excellentConversionRate: 15,
  };

  useEffect(() => {
    calculateResults();
  }, [userInputs]);

  const calculateResults = () => {
    const { averageOrder, conversionRate, monthlyVisitors } = userInputs;

    const currentCustomers = (monthlyVisitors * conversionRate) / 100;
    const currentRevenue = currentCustomers * averageOrder;
    const currentYearlyRevenue = currentRevenue * 12;

    const improvedCustomers =
      (monthlyVisitors * benchmarks.goodConversionRate) / 100;
    const improvedRevenue = improvedCustomers * averageOrder;
    const improvedYearlyRevenue = improvedRevenue * 12;

    const excellentCustomers =
      (monthlyVisitors * benchmarks.excellentConversionRate) / 100;
    const excellentRevenue = excellentCustomers * averageOrder;
    const excellentYearlyRevenue = excellentRevenue * 12;

    const monthlyDifference = improvedRevenue - currentRevenue;
    const yearlyDifference = improvedYearlyRevenue - currentYearlyRevenue;
    const excellentDifference = excellentYearlyRevenue - currentYearlyRevenue;

    setResults({
      current: {
        customers: currentCustomers,
        monthlyRevenue: currentRevenue,
        yearlyRevenue: currentYearlyRevenue,
      },
      improved: {
        customers: improvedCustomers,
        monthlyRevenue: improvedRevenue,
        yearlyRevenue: improvedYearlyRevenue,
      },
      excellent: {
        customers: excellentCustomers,
        monthlyRevenue: excellentRevenue,
        yearlyRevenue: excellentYearlyRevenue,
      },
      difference: {
        monthly: monthlyDifference,
        yearly: yearlyDifference,
        excellent: excellentDifference,
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
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] font-bold text-sm tracking-wider uppercase">
              📊 CALCULATEUR
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            Calculez l'impact du
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] bg-clip-text text-transparent">
              {" "}
              copywriting
            </span>
            <br />
            sur votre business
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entrez vos données actuelles et découvrez le potentiel de croissance
            avec un copywriting optimisé.
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
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Visiteurs mensuels
                    </label>
                    <input
                      type="number"
                      value={userInputs.monthlyVisitors}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          monthlyVisitors: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-xl font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Taux de conversion actuel (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={userInputs.conversionRate}
                      onChange={(e) =>
                        setUserInputs({
                          ...userInputs,
                          conversionRate: parseFloat(e.target.value) || 0,
                        })
                      }
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-xl font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                      max="100"
                    />
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/50 border-gray-700">
                  <CardContent className="p-6">
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
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white text-xl font-bold focus:border-[#9B5DE5] focus:outline-none"
                      min="0"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-red-400">
                      <Calculator className="mr-2" size={24} />
                      Situation actuelle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-white mb-2">
                      {formatNumber(results.current.monthlyRevenue || 0)}
                      <span className="text-sm text-gray-400">/mois</span>
                    </p>
                    <p className="text-lg text-gray-300">
                      {formatNumber(results.current.yearlyRevenue || 0)}
                      <span className="text-sm">/an</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#9B5DE5]/30 to-[#7C3AED]/20 border border-[#9B5DE5]/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-[#9B5DE5]">
                      <TrendingUp className="mr-2" size={24} />
                      Avec copywriting optimisé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-white mb-2">
                      {formatNumber(results.improved.monthlyRevenue || 0)}
                      <span className="text-sm text-gray-400">/mois</span>
                    </p>
                    <p className="text-lg text-gray-300">
                      {formatNumber(results.improved.yearlyRevenue || 0)}
                      <span className="text-sm">/an</span>
                    </p>
                    {(results.difference.yearly || 0) > 0 && (
                      <div className="mt-3 p-2 bg-[#9B5DE5]/20 rounded">
                        <p className="text-[#9B5DE5] font-bold">
                          +{formatNumber(results.difference.yearly || 0)}/an
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#FFD400]/30 to-[#F59E0B]/20 border border-[#FFD400]/50">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-[#FFD400]">
                      <Zap className="mr-2" size={24} />
                      Performance d'élite
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-white mb-2">
                      {formatNumber(results.excellent.monthlyRevenue || 0)}
                      <span className="text-sm text-gray-400">/mois</span>
                    </p>
                    <p className="text-lg text-gray-300">
                      {formatNumber(results.excellent.yearlyRevenue || 0)}
                      <span className="text-sm">/an</span>
                    </p>
                    {(results.difference.excellent || 0) > 0 && (
                      <div className="mt-3 p-2 bg-[#FFD400]/20 rounded">
                        <p className="text-[#FFD400] font-bold">
                          +{formatNumber(results.difference.excellent || 0)}/an
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
                  className="bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] hover:opacity-90 transition-opacity text-lg px-8"
                >
                  <Link href="/contact">
                    Démarrer l'optimisation de mon copywriting
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
