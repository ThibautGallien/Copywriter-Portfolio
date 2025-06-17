"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-[#9B5DE5]/20 to-[#3A86FF]/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/6 w-20 h-20 bg-gradient-to-br from-[#FFD400]/30 to-[#9B5DE5]/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-white rounded-full"></div>

        {/* Abstract geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path d="M20,20 L180,20 L150,80 L50,80 Z" fill="url(#gradient1)" />
            <path
              d="M30,100 L170,100 L140,160 L60,160 Z"
              fill="url(#gradient2)"
            />
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9B5DE5" />
                <stop offset="100%" stopColor="#3A86FF" />
              </linearGradient>
              <linearGradient
                id="gradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#3A86FF" />
                <stop offset="100%" stopColor="#FFD400" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-space-grotesk leading-tight">
                <span className="block text-white">Your Heading</span>
                <span className="block text-white">Goes Here</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-gray-800 text-white transition-all duration-300 text-lg px-8 py-6 rounded-lg"
              >
                <Link href="/contact">
                  Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {/* Avatar placeholders */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-[#9B5DE5] to-[#3A86FF] border-2 border-[#0D0D0D] flex items-center justify-center"
                  >
                    <span className="text-white font-semibold text-sm">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-sm">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-[#FFD400] text-[#FFD400]"
                    />
                  ))}
                </div>
                <p className="text-gray-400">
                  Over 500 Happy Clients & Counting
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Abstract geometric design */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Main geometric composition */}
              <div className="relative w-full max-w-lg h-full">
                {/* Large background shape */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#9B5DE5]/10 to-[#3A86FF]/10 rounded-3xl border border-gray-800 backdrop-blur-sm"></div>

                {/* Floating geometric elements */}
                <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-[#9B5DE5] to-[#7C3AED] rounded-2xl transform rotate-12 shadow-2xl"></div>

                <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-[#3A86FF] to-[#0EA5E9] rounded-xl transform -rotate-6 shadow-xl"></div>

                <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-[#FFD400] to-[#F59E0B] rounded-2xl transform rotate-45 shadow-xl"></div>

                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white rounded-lg transform -rotate-12 shadow-lg"></div>

                {/* Central circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#9B5DE5] to-[#3A86FF] rounded-full shadow-2xl"></div>

                {/* Small accent circles */}
                <div className="absolute top-1/6 right-1/6 w-4 h-4 bg-[#FFD400] rounded-full"></div>
                <div className="absolute bottom-1/6 left-1/6 w-6 h-6 bg-[#9B5DE5] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex items-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#9B5DE5] rounded-full"></div>
            <span>Better Results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#3A86FF] rounded-full"></div>
            <span>More Results</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FFD400] rounded-full"></div>
            <span>Faster Results</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
