// components/sections/ROICalculator.tsx
"use client";

import { useState, useEffect } from "react";
import { Calculator, TrendingUp, Zap } from "lucide-react";

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

const ROICalculator = () => {
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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Calculez l'impact du copywriting sur votre business
            </h2>
            <p className="text-xl text-gray-300">
              Entrez vos données actuelles et découvrez le potentiel de
              croissance
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            {/* Inputs */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-700 p-6 rounded-xl">
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
                  className="w-full p-3 bg-gray-600 rounded-lg text-white text-xl font-bold"
                  min="0"
                />
              </div>

              <div className="bg-gray-700 p-6 rounded-xl">
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
                  className="w-full p-3 bg-gray-600 rounded-lg text-white text-xl font-bold"
                  min="0"
                  max="100"
                />
              </div>

              <div className="bg-gray-700 p-6 rounded-xl">
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
                  className="w-full p-3 bg-gray-600 rounded-lg text-white text-xl font-bold"
                  min="0"
                />
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-900/30 border border-red-500/50 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <Calculator className="text-red-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-red-400">
                    Situation actuelle
                  </h3>
                </div>
                <p className="text-2xl font-bold mb-2">
                  {formatNumber(results.current.monthlyRevenue || 0)}
                  <span className="text-sm text-gray-400">/mois</span>
                </p>
                <p className="text-lg text-gray-300">
                  {formatNumber(results.current.yearlyRevenue || 0)}
                  <span className="text-sm">/an</span>
                </p>
              </div>

              <div className="bg-green-900/30 border border-green-500/50 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-green-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-green-400">
                    Avec copywriting optimisé
                  </h3>
                </div>
                <p className="text-2xl font-bold mb-2">
                  {formatNumber(results.improved.monthlyRevenue || 0)}
                  <span className="text-sm text-gray-400">/mois</span>
                </p>
                <p className="text-lg text-gray-300">
                  {formatNumber(results.improved.yearlyRevenue || 0)}
                  <span className="text-sm">/an</span>
                </p>
                {(results.difference.yearly || 0) > 0 && (
                  <div className="mt-3 p-2 bg-green-500/20 rounded">
                    <p className="text-green-400 font-bold">
                      +{formatNumber(results.difference.yearly || 0)}/an
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-purple-900/30 border border-purple-500/50 p-6 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <Zap className="text-purple-400 mr-2" size={24} />
                  <h3 className="text-xl font-bold text-purple-400">
                    Performance d'élite
                  </h3>
                </div>
                <p className="text-2xl font-bold mb-2">
                  {formatNumber(results.excellent.monthlyRevenue || 0)}
                  <span className="text-sm text-gray-400">/mois</span>
                </p>
                <p className="text-lg text-gray-300">
                  {formatNumber(results.excellent.yearlyRevenue || 0)}
                  <span className="text-sm">/an</span>
                </p>
                {(results.difference.excellent || 0) > 0 && (
                  <div className="mt-3 p-2 bg-purple-500/20 rounded">
                    <p className="text-purple-400 font-bold">
                      +{formatNumber(results.difference.excellent || 0)}/an
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all text-lg">
                Démarrer l'optimisation de mon copywriting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
