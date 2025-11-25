"use client"

import { motion } from "framer-motion"
import { Database, MapPin, TrendingUp, Users } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Access Real-Time Data",
    description: "Connect to live poverty and education statistics across 700+ districts in India",
    step: "01",
  },
  {
    icon: MapPin,
    title: "Identify Priority Regions",
    description: "Visualize data on interactive maps to find areas with the greatest need",
    step: "02",
  },
  {
    icon: TrendingUp,
    title: "Track Impact Metrics",
    description: "Monitor progress with dashboards showing before-and-after data in your focus areas",
    step: "03",
  },
  {
    icon: Users,
    title: "Collaborate with NGOs",
    description: "Join a network of organizations working together to maximize social impact",
    step: "04",
  },
]

export default function Features() {
  return (
    <section className="relative bg-black py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">How It Works</h2>
          <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto">
            From data access to measurable impact, here's your journey
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" style={{ position: "absolute" }}>
              <motion.line
                x1="50%"
                y1="25%"
                x2="50%"
                y2="75%"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </svg>
          </div>

          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-black font-bold text-lg">{feature.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>

                  {/* Hover Indicator */}
                  <div className="mt-6 flex items-center gap-2 text-sm text-white/40 group-hover:text-white/70 transition-colors">
                    <span className="w-8 h-[2px] bg-white/40 group-hover:w-12 group-hover:bg-white/70 transition-all" />
                    Learn more
                  </div>
                </div>

                {/* Arrow Between Cards - Mobile Only */}
                {index < features.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    className="md:hidden flex justify-center py-4"
                  >
                    <div className="w-[2px] h-8 bg-gradient-to-b from-white/20 to-transparent" />
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-black" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-black" />
            </div>
            <span className="text-sm text-white/70">
              <span className="font-semibold text-white">150+ NGOs</span> already making an impact
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
