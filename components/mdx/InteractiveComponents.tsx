"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Calculator, CheckCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// ROI Calculator
export function ROICalculator({
  title = "Calcule ton ROI",
  fields,
  resultLabel = "Perte mensuelle estimée",
  resultSuffix = "€",
}: {
  title?: string;
  fields: Array<{ label: string; placeholder?: string; defaultValue?: number }>;
  resultLabel?: string;
  resultSuffix?: string;
}) {
  const [values, setValues] = useState<{ [key: string]: number }>(
    fields.reduce((acc, field, idx) => {
      acc[`field${idx}`] = field.defaultValue || 0;
      return acc;
    }, {} as { [key: string]: number })
  );

  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const fieldValues = Object.values(values);
    if (fieldValues.length >= 2) {
      const ca = fieldValues[0];
      const tauxFuite = fieldValues[1];
      const perte = (ca * tauxFuite) / 100;
      setResult(perte);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-8 p-8 rounded-xl"
      style={{
        background: "rgba(59, 130, 246, 0.04)",
        border: "1px solid rgba(59, 130, 246, 0.15)",
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: "rgba(59, 130, 246, 0.1)" }}
        >
          <Calculator className="w-6 h-6" style={{ color: "var(--accent-blue)" }} />
        </div>
        <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>{title}</h3>
      </div>

      <div className="space-y-4 mb-6">
        {fields.map((field, idx) => (
          <div key={idx}>
            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text)" }}>
              {field.label}
            </label>
            <Input
              type="number"
              placeholder={field.placeholder}
              defaultValue={field.defaultValue}
              onChange={(e) =>
                setValues({ ...values, [`field${idx}`]: Number(e.target.value) })
              }
              className="h-12"
            />
          </div>
        ))}
      </div>

      <Button
        onClick={calculate}
        className="w-full h-12 text-white font-bold"
        style={{ background: "var(--accent-blue)" }}
      >
        Calculer
      </Button>

      {result !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-6 rounded-xl text-center"
          style={{
            background: "rgba(20, 20, 22, 0.85)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>{resultLabel}</p>
          <p className="text-4xl font-bold" style={{ color: "#FF5F57" }}>
            -{result.toLocaleString("fr-FR")}
            {resultSuffix}
          </p>
          <p className="text-sm mt-2" style={{ color: "var(--text-dim)" }}>par mois</p>
        </motion.div>
      )}
    </motion.div>
  );
}

// Quiz Component
export function Quiz({
  title,
  questions,
  results,
}: {
  title: string;
  questions: Array<{
    question: string;
    options: Array<{ text: string; points: number }>;
  }>;
  results: Array<{ min: number; max: number; title: string; description: string }>;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (points: number) => {
    setScore(score + points);
    setSelectedOption(null);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setFinished(true), 300);
    }
  };

  const getResult = () => {
    return results.find((r) => score >= r.min && score <= r.max) || results[0];
  };

  const reset = () => {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
    setSelectedOption(null);
  };

  if (finished) {
    const result = getResult();
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="my-8 p-8 rounded-xl"
        style={{
          background: "rgba(59, 130, 246, 0.04)",
          border: "1px solid rgba(59, 130, 246, 0.15)",
        }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Résultat : {result.title}
          </h3>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>{result.description}</p>
        </div>
        <Button
          onClick={reset}
          className="w-full text-white"
          style={{ background: "var(--accent-blue)" }}
        >
          Recommencer
        </Button>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <motion.div
      key={currentQuestion}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="my-8 p-8 rounded-xl"
      style={{
        background: "rgba(59, 130, 246, 0.04)",
        border: "1px solid rgba(59, 130, 246, 0.15)",
      }}
    >
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold" style={{ color: "var(--accent-blue)" }}>
            Question {currentQuestion + 1}/{questions.length}
          </span>
          <div className="flex gap-1">
            {questions.map((_, idx) => (
              <div
                key={idx}
                className="w-2 h-2 rounded-full"
                style={{
                  background:
                    idx === currentQuestion
                      ? "var(--accent-blue)"
                      : idx < currentQuestion
                      ? "var(--accent-violet)"
                      : "rgba(255, 255, 255, 0.1)",
                }}
              />
            ))}
          </div>
        </div>
        <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>{question.question}</h3>
      </div>

      <div className="space-y-3">
        {question.options.map((option, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleAnswer(option.points)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-4 text-left rounded-xl transition-all"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(20, 20, 22, 0.5)",
              color: "var(--text-muted)",
            }}
          >
            {option.text}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

// Poll Component
export function Poll({
  question,
  options,
}: {
  question: string;
  options: string[];
}) {
  const [voted, setVoted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [votes, setVotes] = useState<{ [key: number]: number }>(
    options.reduce((acc, _, idx) => {
      acc[idx] = Math.floor(Math.random() * 50) + 10;
      return acc;
    }, {} as { [key: number]: number })
  );

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  const handleVote = (idx: number) => {
    if (!voted) {
      setSelectedOption(idx);
      setVotes({ ...votes, [idx]: votes[idx] + 1 });
      setVoted(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-8 p-8 rounded-xl"
      style={{
        background: "rgba(139, 92, 246, 0.04)",
        border: "1px solid rgba(139, 92, 246, 0.15)",
      }}
    >
      <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>{question}</h3>

      <div className="space-y-3">
        {options.map((option, idx) => {
          const percentage = ((votes[idx] / totalVotes) * 100).toFixed(0);
          const isSelected = selectedOption === idx;

          return (
            <motion.button
              key={idx}
              onClick={() => handleVote(idx)}
              disabled={voted}
              whileHover={!voted ? { scale: 1.02 } : {}}
              className="w-full p-4 text-left rounded-xl transition-all relative overflow-hidden"
              style={{
                border: isSelected
                  ? "1px solid rgba(139, 92, 246, 0.4)"
                  : "1px solid rgba(255, 255, 255, 0.08)",
                background: isSelected
                  ? "rgba(139, 92, 246, 0.06)"
                  : "rgba(20, 20, 22, 0.5)",
                cursor: voted ? "default" : "pointer",
              }}
            >
              {voted && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ background: "rgba(139, 92, 246, 0.1)" }}
                />
              )}
              <div className="relative flex items-center justify-between">
                <span className="font-medium" style={{ color: "var(--text)" }}>{option}</span>
                {voted && (
                  <span className="text-sm font-bold" style={{ color: "var(--accent-violet)" }}>
                    {percentage}%
                  </span>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {voted && (
        <p className="text-sm mt-4 text-center" style={{ color: "var(--text-dim)" }}>
          {totalVotes} votes • Merci d&apos;avoir participé !
        </p>
      )}
    </motion.div>
  );
}

// Progress Bar (lecture)
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    });
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50"
      style={{ width: `${progress}%`, background: "var(--accent-blue)" }}
    />
  );
}
