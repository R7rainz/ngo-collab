"use client";

import React, { useState } from "react";
import { TrendingUp, Users, GraduationCap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import IndiaMap from "../../components/IndiaMap";

const stateData: Record<string, any> = {
  "Ladakh": {
    schools: "110",
    literacy: "74.3%",
    poverty: "11%",
    activeNGOs: 15,
  },
  "Andaman & Nicobar": {
    schools: "320",
    literacy: "86.3%",
    poverty: "1%",
    activeNGOs: 12,
  },
  "Lakshadweep": {
    schools: "45",
    literacy: "91.8%",
    poverty: "2%",
    activeNGOs: 5,
  },
  "Jammu & Kashmir": {
    schools: "450",
    literacy: "68.7%",
    poverty: "10%",
    activeNGOs: 32,
  },
  "Himachal Pradesh": {
    schools: "380",
    literacy: "83.8%",
    poverty: "8%",
    activeNGOs: 28,
  },
  Punjab: {
    schools: "620",
    literacy: "76.7%",
    poverty: "8%",
    activeNGOs: 45,
  },
  Chandigarh: {
    schools: "85",
    literacy: "87.4%",
    poverty: "4%",
    activeNGOs: 12,
  },
  Uttarakhand: {
    schools: "410",
    literacy: "79.6%",
    poverty: "11%",
    activeNGOs: 38,
  },
  Haryana: {
    schools: "580",
    literacy: "76.6%",
    poverty: "11%",
    activeNGOs: 52,
  },
  Delhi: {
    schools: "320",
    literacy: "86.2%",
    poverty: "9%",
    activeNGOs: 68,
  },
  Rajasthan: {
    schools: "1.4k",
    literacy: "67.1%",
    poverty: "14%",
    activeNGOs: 78,
  },
  "Uttar Pradesh": {
    schools: "1.2k",
    literacy: "67.7%",
    poverty: "37%",
    activeNGOs: 84,
  },
  Bihar: {
    schools: "850",
    literacy: "61.8%",
    poverty: "51%",
    activeNGOs: 42,
  },
  Sikkim: {
    schools: "120",
    literacy: "82.2%",
    poverty: "8%",
    activeNGOs: 12,
  },
  "Arunachal Pradesh": {
    schools: "180",
    literacy: "66.9%",
    poverty: "35%",
    activeNGOs: 15,
  },
  Nagaland: {
    schools: "150",
    literacy: "80.1%",
    poverty: "19%",
    activeNGOs: 18,
  },
  Manipur: {
    schools: "160",
    literacy: "79.8%",
    poverty: "36%",
    activeNGOs: 20,
  },
  Mizoram: {
    schools: "140",
    literacy: "91.6%",
    poverty: "20%",
    activeNGOs: 16,
  },
  Tripura: {
    schools: "170",
    literacy: "87.7%",
    poverty: "14%",
    activeNGOs: 22,
  },
  Meghalaya: {
    schools: "190",
    literacy: "75.5%",
    poverty: "12%",
    activeNGOs: 24,
  },
  Assam: {
    schools: "520",
    literacy: "73.2%",
    poverty: "32%",
    activeNGOs: 48,
  },
  "West Bengal": {
    schools: "980",
    literacy: "77.1%",
    poverty: "20%",
    activeNGOs: 88,
  },
  Jharkhand: {
    schools: "620",
    literacy: "67.6%",
    poverty: "37%",
    activeNGOs: 45,
  },
  Odisha: {
    schools: "780",
    literacy: "73.5%",
    poverty: "33%",
    activeNGOs: 62,
  },
  Chhattisgarh: {
    schools: "540",
    literacy: "71.0%",
    poverty: "40%",
    activeNGOs: 38,
  },
  "Madhya Pradesh": {
    schools: "1.1k",
    literacy: "70.6%",
    poverty: "32%",
    activeNGOs: 72,
  },
  Gujarat: {
    schools: "920",
    literacy: "79.3%",
    poverty: "17%",
    activeNGOs: 95,
  },
  "Dadra and Nagar Haveli and Daman and Diu": {
    schools: "35",
    literacy: "78.2%",
    poverty: "5%",
    activeNGOs: 5,
  },
  Maharashtra: {
    schools: "2.5k",
    literacy: "82.3%",
    poverty: "17%",
    activeNGOs: 120,
  },
  Goa: {
    schools: "85",
    literacy: "87.4%",
    poverty: "5%",
    activeNGOs: 18,
  },
  Karnataka: {
    schools: "1.8k",
    literacy: "75.4%",
    poverty: "13%",
    activeNGOs: 95,
  },
  Kerala: {
    schools: "680",
    literacy: "94.0%",
    poverty: "7%",
    activeNGOs: 85,
  },
  "Tamil Nadu": {
    schools: "2.1k",
    literacy: "80.1%",
    poverty: "11%",
    activeNGOs: 110,
  },
  "Andhra Pradesh": {
    schools: "1.2k",
    literacy: "67.4%",
    poverty: "9%",
    activeNGOs: 78,
  },
  Telangana: {
    schools: "780",
    literacy: "66.5%",
    poverty: "8%",
    activeNGOs: 65,
  },
  Puducherry: {
    schools: "95",
    literacy: "85.4%",
    poverty: "4%",
    activeNGOs: 10,
  },
  Default: { schools: "--", literacy: "--", poverty: "--", activeNGOs: 0 },
};

export default function LandingPage() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const currentStats =
    stateData[hoveredState || "Default"] || stateData["Default"];

  return (
    <main className="bg-black min-h-screen">
      <section className="relative bg-[#020202] py-24 sm:py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 w-full order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-10"
              >
                <h2 className="text-sm font-bold tracking-[0.3em] text-[#138808] uppercase mb-4">
                  Ground Intelligence
                </h2>
                <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter mb-6">
                  Explore the <br />
                  <span className="text-white/20">Data Landscape.</span>
                </h3>
                <p className="text-white/40 max-w-md font-light leading-relaxed">
                  Hover over a state to pull real-time social metrics from our
                  verified NGO database.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="grid grid-cols-2 gap-4"
              >
                <StatCard
                  icon={GraduationCap}
                  label="Schools Needing Aid"
                  value={currentStats.schools}
                  color="text-[#FF9933]"
                  isActive={hoveredState !== null}
                />
                <StatCard
                  icon={Activity}
                  label="Literacy Rate"
                  value={currentStats.literacy}
                  color="text-white"
                  isActive={hoveredState !== null}
                />
                <StatCard
                  icon={TrendingUp}
                  label="Poverty Gap"
                  value={currentStats.poverty}
                  color="text-[#138808]"
                  isActive={hoveredState !== null}
                />
                <StatCard
                  icon={Users}
                  label="Active NGOs"
                  value={currentStats.activeNGOs}
                  color="text-blue-400"
                  isActive={hoveredState !== null}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    Selected Region:
                  </span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={hoveredState || "default"}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm font-bold text-white"
                  >
                    {hoveredState || "Hover on map"}
                  </motion.span>
                </AnimatePresence>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 relative order-1 lg:order-2 w-full"
            >
              <div className="relative w-full max-w-[650px] mx-auto group">
                <IndiaMap
                  hoveredState={hoveredState}
                  setHoveredState={setHoveredState}
                />
                <div className="absolute bottom-4 right-4 text-white/10 uppercase text-[10px] tracking-[0.5em] flex flex-col items-center pointer-events-none">
                  <span>N</span>
                  <div className="w-px h-10 bg-white/10 my-2" />
                  <span>S</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
  isActive,
}: {
  icon: any;
  label: string;
  value: string | number;
  color: string;
  isActive: boolean;
}) {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Icon
        className={`w-5 h-5 mb-4 ${color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">
        {label}
      </p>
      <AnimatePresence mode="wait">
        <motion.p
          key={String(value)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-2xl font-bold text-white"
        >
          {value}
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
