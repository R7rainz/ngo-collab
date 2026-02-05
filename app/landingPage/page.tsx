"use client";

import React, { useState } from "react";
import { TrendingUp, Users, GraduationCap, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Mock Data for the Interactive Map ---
const stateData: Record<string, any> = {
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
              className="flex-1 relative order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[600px] mx-auto group">
                <IndiaMap
                  hoveredState={hoveredState}
                  setHoveredState={setHoveredState}
                />
                {/* Compass Decoration */}
                <div className="absolute bottom-4 right-4 text-white/10 uppercase text-[10px] tracking-[0.5em] flex flex-col items-center">
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

// --- India Map Component with Proper State Boundaries ---
function IndiaMap({
  hoveredState,
  setHoveredState,
}: {
  hoveredState: string | null;
  setHoveredState: (state: string | null) => void;
}) {
  // More accurate India state paths with proper positioning
  const states = [
    // Northern States
    {
      name: "Jammu & Kashmir",
      d: "M168,25 Q175,15 195,12 Q220,10 240,18 Q255,25 260,40 Q262,55 255,70 L240,80 Q225,85 210,82 L190,75 Q175,70 168,55 Q165,40 168,25 Z",
      color: "#FF9933",
    },
    {
      name: "Himachal Pradesh",
      d: "M210,82 L225,85 L240,80 L250,95 Q248,108 238,115 L220,112 L208,105 Q205,95 210,82 Z",
      color: "#FFFFFF",
    },
    {
      name: "Punjab",
      d: "M175,95 L190,90 L208,105 L220,112 L215,128 L198,135 L180,130 Q172,118 175,95 Z",
      color: "#138808",
    },
    {
      name: "Uttarakhand",
      d: "M238,115 Q250,112 265,108 L280,120 Q282,135 272,148 L255,145 L240,138 Q235,125 238,115 Z",
      color: "#FF9933",
    },
    {
      name: "Haryana",
      d: "M180,130 L198,135 L215,128 L220,145 L210,162 L190,165 L178,155 Q175,142 180,130 Z",
      color: "#FFFFFF",
    },
    {
      name: "Delhi",
      d: "M198,155 L208,152 L212,162 L205,170 L195,168 Z",
      color: "#FF9933",
    },
    // Western States
    {
      name: "Rajasthan",
      d: "M95,145 L130,138 L165,142 L178,155 L190,165 L195,195 Q190,225 175,248 L140,268 Q110,265 85,245 Q70,220 72,190 Q75,160 95,145 Z",
      color: "#138808",
    },
    {
      name: "Gujarat",
      d: "M50,245 L85,245 Q110,265 115,285 L105,315 Q95,340 75,355 L55,350 Q30,335 25,310 Q22,280 30,260 Q40,248 50,245 Z",
      color: "#FF9933",
    },
    // Central States  
    {
      name: "Uttar Pradesh",
      d: "M195,165 L210,162 L240,138 L272,148 Q295,155 315,165 L330,185 Q335,205 325,225 L295,235 L260,230 L225,225 L200,215 Q192,195 195,165 Z",
      color: "#FFFFFF",
    },
    {
      name: "Madhya Pradesh",
      d: "M115,285 L140,268 L175,248 Q190,240 200,245 L225,250 L260,255 L280,265 Q290,285 285,310 L265,335 L235,345 L195,340 L160,330 L130,315 Q118,300 115,285 Z",
      color: "#138808",
    },
    {
      name: "Chhattisgarh",
      d: "M280,265 L305,258 L325,275 Q335,295 330,320 L310,345 L285,355 L265,345 L265,335 Q275,310 280,265 Z",
      color: "#FF9933",
    },
    // Eastern States
    {
      name: "Bihar",
      d: "M325,225 L355,218 Q375,225 385,240 L380,265 L355,275 L330,270 L320,250 Z",
      color: "#FFFFFF",
    },
    {
      name: "Jharkhand",
      d: "M305,258 L330,270 L355,275 L360,300 L340,320 L310,325 L295,310 Q300,280 305,258 Z",
      color: "#138808",
    },
    {
      name: "West Bengal",
      d: "M355,275 L380,265 Q395,275 405,295 L400,325 Q395,355 385,375 L365,385 L350,365 L345,335 L340,320 L360,300 Z",
      color: "#FF9933",
    },
    {
      name: "Odisha",
      d: "M295,310 L340,320 L345,335 L350,365 L340,395 Q315,405 290,400 L265,380 L260,355 L265,345 L285,355 L310,345 Z",
      color: "#FFFFFF",
    },
    // Northeast States
    {
      name: "Sikkim",
      d: "M385,210 L398,205 Q405,215 402,228 L390,235 L382,225 Z",
      color: "#138808",
    },
    {
      name: "Arunachal Pradesh",
      d: "M420,175 L455,165 Q475,175 485,195 L478,215 L450,225 L425,220 L415,200 Z",
      color: "#FF9933",
    },
    {
      name: "Assam",
      d: "M390,235 L402,228 L415,235 L425,245 L455,240 L465,255 L455,270 L430,275 L415,285 L395,280 L380,265 Q382,248 390,235 Z",
      color: "#FFFFFF",
    },
    {
      name: "Nagaland",
      d: "M465,255 L480,250 Q488,265 485,280 L472,290 L460,282 L455,270 Z",
      color: "#138808",
    },
    {
      name: "Manipur",
      d: "M460,282 L472,290 L475,310 L465,325 L450,320 L448,300 Z",
      color: "#FF9933",
    },
    {
      name: "Mizoram",
      d: "M448,320 L465,325 L470,345 Q465,365 455,375 L440,370 L435,350 Z",
      color: "#FFFFFF",
    },
    {
      name: "Tripura",
      d: "M420,310 L435,305 L440,325 L432,340 L418,335 Z",
      color: "#138808",
    },
    {
      name: "Meghalaya",
      d: "M395,280 L415,285 L430,295 L420,310 L400,305 L388,295 Z",
      color: "#FF9933",
    },
    // Southern States
    {
      name: "Maharashtra",
      d: "M75,355 L105,340 L130,345 L160,355 L195,365 L225,375 Q240,395 235,420 L210,440 L175,448 L140,442 L105,425 Q85,405 80,380 Z",
      color: "#FFFFFF",
    },
    {
      name: "Goa",
      d: "M102,450 L115,445 L120,460 L110,472 L98,468 Z",
      color: "#138808",
    },
    {
      name: "Karnataka",
      d: "M98,468 L140,442 L175,448 L195,465 Q200,495 190,525 L165,545 L130,548 Q105,535 95,510 L92,485 Z",
      color: "#FF9933",
    },
    {
      name: "Kerala",
      d: "M105,545 L130,548 L140,575 Q135,605 125,625 L108,620 Q98,595 100,570 Z",
      color: "#FFFFFF",
    },
    {
      name: "Tamil Nadu",
      d: "M130,548 L165,545 L195,560 Q210,590 205,620 L185,645 L155,650 L130,635 L125,625 L140,600 L140,575 Z",
      color: "#138808",
    },
    {
      name: "Telangana",
      d: "M195,365 L230,355 L265,365 L275,395 L260,420 L230,430 L210,420 L195,395 Z",
      color: "#FF9933",
    },
    {
      name: "Andhra Pradesh",
      d: "M195,465 L210,445 L230,430 L260,420 L290,435 Q310,465 305,495 L280,520 L245,535 L210,530 L195,510 Q188,485 195,465 Z",
      color: "#FFFFFF",
    },
  ];

  return (
    <svg
      viewBox="0 0 520 680"
      className="w-full h-full"
      style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.03))" }}
    >
      <defs>
        {/* Glow filter for hovered states */}
        <filter id="stateGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Subtle inner shadow for depth */}
        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="2" />
          <feOffset dx="0" dy="1" result="offsetblur" />
          <feFlood floodColor="rgba(0,0,0,0.3)" result="color" />
          <feComposite in2="offsetblur" operator="in" />
          <feComposite in2="SourceAlpha" operator="in" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse
        cx="250"
        cy="350"
        rx="180"
        ry="280"
        fill="url(#indiaGradient)"
        opacity="0.05"
      />

      {/* Render all states */}
      {states.map((state, index) => (
        <motion.path
          key={state.name}
          d={state.d}
          onMouseEnter={() => setHoveredState(state.name)}
          onMouseLeave={() => setHoveredState(null)}
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: 1,
            pathLength: 1,
            fill:
              hoveredState === state.name
                ? state.color
                : "rgba(255,255,255,0.04)",
            stroke:
              hoveredState === state.name
                ? "rgba(255,255,255,0.9)"
                : "rgba(255,255,255,0.15)",
            strokeWidth: hoveredState === state.name ? 2.5 : 0.8,
            filter: hoveredState === state.name ? "url(#stateGlow)" : "none",
          }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.02 },
            pathLength: { duration: 0.8, delay: index * 0.02 },
            fill: { duration: 0.25, ease: "easeOut" },
            stroke: { duration: 0.25, ease: "easeOut" },
            strokeWidth: { duration: 0.2, ease: "easeOut" },
            filter: { duration: 0.2 },
          }}
          style={{
            cursor: "pointer",
            fillOpacity: hoveredState === state.name ? 0.85 : 1,
          }}
          whileHover={{
            scale: 1.015,
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        />
      ))}

      {/* State name tooltip at bottom */}
      <AnimatePresence mode="wait">
        {hoveredState && (
          <motion.g>
            <motion.rect
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              x="160"
              y="655"
              width="200"
              height="30"
              rx="15"
              fill="rgba(255,255,255,0.1)"
              style={{ transformOrigin: "center" }}
            />
            <motion.text
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              x="260"
              y="675"
              textAnchor="middle"
              fill="white"
              fontSize="13"
              fontWeight="600"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              {hoveredState}
            </motion.text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
}

// --- Stat Card Component with smooth value transitions ---
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
