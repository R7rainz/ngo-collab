"use client";

import React, { useState } from "react";
import { TrendingUp, Users, GraduationCap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Data for the Interactive Map ---
const stateData: Record<string, any> = {
  // New/Split Territories
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

  // Existing States
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
            {/* Left: Intelligence Display */}
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

            {/* Right: The Interactive Map */}
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
                {/* Compass Decoration */}
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

// --- Simplified & Geographically Accurate Data ---
const MAP_DATA = [
  // NORTH
  { id: "LD", name: "Ladakh", color: "#FF9933", d: "M368 62 L395 75 L420 80 L445 120 L440 145 L415 150 L385 140 L350 120 L335 85 Z" },
  { id: "JK", name: "Jammu & Kashmir", color: "#FF9933", d: "M320 65 L368 62 L335 85 L350 120 L325 135 L300 120 L290 90 Z" },
  { id: "HP", name: "Himachal Pradesh", color: "#FFFFFF", d: "M325 135 L350 120 L360 145 L340 170 L315 160 Z" },
  { id: "PB", name: "Punjab", color: "#138808", d: "M290 140 L315 160 L310 185 L280 180 L260 160 Z" },
  { id: "UT", name: "Uttarakhand", color: "#FF9933", d: "M340 170 L360 145 L390 155 L380 190 L335 185 Z" },
  { id: "HR", name: "Haryana", color: "#FFFFFF", d: "M280 180 L310 185 L315 205 L290 220 L270 200 Z" },
  { id: "DL", name: "Delhi", color: "#000088", d: "M305 200 L315 200 L315 210 L305 210 Z" },

  // WEST
  { id: "RJ", name: "Rajasthan", color: "#FF9933", d: "M260 160 L280 180 L270 200 L290 220 L285 260 L240 290 L180 260 L160 220 L200 180 Z" },
  { id: "GJ", name: "Gujarat", color: "#FFFFFF", d: "M160 280 L240 290 L245 340 L210 360 L180 340 L160 350 L130 320 L160 310 L140 290 Z" },

  // CENTRAL
  { id: "UP", name: "Uttar Pradesh", color: "#138808", d: "M315 205 L335 185 L380 190 L420 230 L400 260 L350 265 L320 240 Z" },
  { id: "MP", name: "Madhya Pradesh", color: "#FFFFFF", d: "M285 260 L320 240 L350 265 L360 310 L330 350 L270 340 L245 340 L240 290 Z" },
  { id: "CG", name: "Chhattisgarh", color: "#138808", d: "M360 310 L410 300 L420 340 L380 380 L360 370 L330 350 Z" },

  // EAST
  { id: "BR", name: "Bihar", color: "#FF9933", d: "M400 260 L445 260 L455 290 L410 300 L350 265 Z" },
  { id: "JH", name: "Jharkhand", color: "#FFFFFF", d: "M410 300 L455 290 L440 330 L410 340 L360 310 Z" },
  { id: "WB", name: "West Bengal", color: "#138808", d: "M445 260 L465 240 L480 280 L460 350 L440 330 L455 290 Z" },
  { id: "OR", name: "Odisha", color: "#FF9933", d: "M410 340 L440 330 L460 350 L430 400 L380 380 L420 340 Z" },

  // NORTHEAST
  { id: "SK", name: "Sikkim", color: "#FF9933", d: "M465 240 L485 240 L480 255 L465 250 Z" },
  { id: "AR", name: "Arunachal Pradesh", color: "#FFFFFF", d: "M510 235 L560 250 L540 280 L500 260 Z" },
  { id: "AS", name: "Assam", color: "#138808", d: "M480 255 L510 235 L500 260 L540 280 L520 300 L480 280 Z" },
  { id: "ML", name: "Meghalaya", color: "#FFFFFF", d: "M480 280 L520 300 L500 310 L480 290 Z" },
  { id: "NL", name: "Nagaland", color: "#FF9933", d: "M540 280 L560 285 L550 310 L520 300 Z" },
  { id: "MN", name: "Manipur", color: "#FFFFFF", d: "M520 300 L550 310 L540 340 L520 330 Z" },
  { id: "MZ", name: "Mizoram", color: "#138808", d: "M520 330 L540 340 L530 380 L510 360 Z" },
  { id: "TR", name: "Tripura", color: "#FF9933", d: "M500 310 L520 330 L510 350 L490 330 Z" },

  // SOUTH
  { id: "MH", name: "Maharashtra", color: "#FF9933", d: "M210 360 L245 340 L270 340 L330 350 L360 370 L340 430 L280 450 L230 430 Z" },
  { id: "TG", name: "Telangana", color: "#FFFFFF", d: "M340 430 L360 370 L400 390 L410 440 L360 460 Z" },
  { id: "AP", name: "Andhra Pradesh", color: "#138808", d: "M360 460 L410 440 L400 390 L380 380 L430 400 L400 500 L360 520 L330 490 Z" },
  { id: "KA", name: "Karnataka", color: "#FFFFFF", d: "M230 430 L280 450 L340 430 L360 460 L330 490 L310 560 L260 540 Z" },
  { id: "GA", name: "Goa", color: "#138808", d: "M260 540 L270 530 L280 545 L265 550 Z" },
  { id: "KL", name: "Kerala", color: "#FF9933", d: "M280 570 L310 560 L320 620 L290 640 Z" },
  { id: "TN", name: "Tamil Nadu", color: "#FFFFFF", d: "M310 560 L330 490 L360 520 L350 580 L320 620 Z" },

  // ISLANDS
  { id: "AN", name: "Andaman & Nicobar", color: "#138808", d: "M550 500 L560 500 L560 530 L550 530 Z M555 540 L565 540 L565 560 L555 560 Z" },
  { id: "LK", name: "Lakshadweep", color: "#FF9933", d: "M180 580 L190 580 L190 590 L180 590 Z M195 600 L205 600 L205 610 L195 610 Z" }
];

// --- India Map Component with Proper State Boundaries ---
function IndiaMap({
  hoveredState,
  setHoveredState,
}: {
  hoveredState: string | null;
  setHoveredState: (state: string | null) => void;
}) {
  return (
    <svg
      viewBox="0 0 650 700"
      className="w-full h-full drop-shadow-2xl"
      style={{ filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.2))" }}
    >
      <defs>
        {/* Enhanced Glow Effect */}
        <filter id="hoverGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Subtle Texture/Gradient for the whole map */}
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
        </linearGradient>
      </defs>

      {/* Background Aura */}
      <circle cx="325" cy="350" r="250" fill="url(#mapGradient)" opacity="0.1" />

      <g strokeLinecap="round" strokeLinejoin="round">
        {MAP_DATA.map((state, i) => {
          const isHovered = hoveredState === state.name;

          return (
            <motion.path
              key={state.id}
              d={state.d}
              onMouseEnter={() => setHoveredState(state.name)}
              onMouseLeave={() => setHoveredState(null)}

              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                fill: isHovered ? state.color : "#2a2a2a", // Dark theme base
                stroke: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.2)",
                strokeWidth: isHovered ? 2 : 0.5,
                filter: isHovered ? "url(#hoverGlow)" : "none",
                // Bring hovered element to front
                zIndex: isHovered ? 10 : 1
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                opacity: { delay: i * 0.015, duration: 0.5 }
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              style={{
                cursor: "pointer",
                outline: "none",
                transformOrigin: "center"
              }}
            />
          );
        })}
      </g>

      {/* Internal Tooltip (optional, keeping it for direct context) */}
      <AnimatePresence>
        {hoveredState && (
          <motion.foreignObject
            x="225"
            y="650"
            width="200"
            height="40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-center items-center h-full">
              <div className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20">
                <p className="text-white text-xs font-semibold tracking-wide">{hoveredState}</p>
              </div>
            </div>
          </motion.foreignObject>
        )}
      </AnimatePresence>
    </svg>
  );
}

// --- Stat Card Component ---
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
