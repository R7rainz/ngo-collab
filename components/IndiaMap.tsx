"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATE_ID_TO_NAME: Record<string, string> = {
  INJK: "Jammu & Kashmir",
  INLA: "Ladakh",
  INHP: "Himachal Pradesh",
  INPB: "Punjab",
  INCH: "Chandigarh",
  INUT: "Uttarakhand",
  INHR: "Haryana",
  INDL: "Delhi",
  INRJ: "Rajasthan",
  INGJ: "Gujarat",
  INDH: "Dadra and Nagar Haveli and Daman and Diu",
  INUP: "Uttar Pradesh",
  INMP: "Madhya Pradesh",
  INBR: "Bihar",
  INSK: "Sikkim",
  INAR: "Arunachal Pradesh",
  INNL: "Nagaland",
  INMN: "Manipur",
  INMZ: "Mizoram",
  INTR: "Tripura",
  INML: "Meghalaya",
  INAS: "Assam",
  INWB: "West Bengal",
  INJH: "Jharkhand",
  INOR: "Odisha",
  INCT: "Chhattisgarh",
  INMH: "Maharashtra",
  INGA: "Goa",
  INKA: "Karnataka",
  INTG: "Telangana",
  INAP: "Andhra Pradesh",
  INKL: "Kerala",
  INTN: "Tamil Nadu",
  INPY: "Puducherry",
  INAN: "Andaman & Nicobar",
  INLD: "Lakshadweep",
};

const STATE_COLORS: Record<string, string> = {
  INJK: "#FF9933",
  INLA: "#FF9933",
  INHP: "#FFFFFF",
  INPB: "#138808",
  INCH: "#000088",
  INUT: "#FF9933",
  INHR: "#FFFFFF",
  INDL: "#000088",
  INRJ: "#FF9933",
  INGJ: "#FFFFFF",
  INDH: "#138808",
  INUP: "#138808",
  INMP: "#FFFFFF",
  INBR: "#FF9933",
  INSK: "#FF9933",
  INAR: "#FFFFFF",
  INNL: "#FF9933",
  INMN: "#FFFFFF",
  INMZ: "#138808",
  INTR: "#FF9933",
  INML: "#FFFFFF",
  INAS: "#138808",
  INWB: "#138808",
  INJH: "#FFFFFF",
  INOR: "#FF9933",
  INCT: "#138808",
  INMH: "#FF9933",
  INGA: "#138808",
  INKA: "#FFFFFF",
  INTG: "#FFFFFF",
  INAP: "#138808",
  INKL: "#FF9933",
  INTN: "#FFFFFF",
  INPY: "#138808",
  INAN: "#138808",
  INLD: "#FF9933",
};

interface IndiaMapProps {
  hoveredState: string | null;
  setHoveredState: (state: string | null) => void;
}

export default function IndiaMap({ hoveredState, setHoveredState }: IndiaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevHoveredIdRef = useRef<string | null>(null);

  const applyHoverStyle = (path: SVGPathElement, color: string) => {
    path.setAttribute("fill", color);
    path.setAttribute("stroke", "rgba(255,255,255,1)");
    path.setAttribute("stroke-width", "1.5");
    path.style.filter = "drop-shadow(0 0 8px rgba(255,255,255,0.5))";
  };

  const applyDefaultStyle = (path: SVGPathElement) => {
    path.setAttribute("fill", "#2a2a2a");
    path.setAttribute("stroke", "rgba(255,255,255,0.2)");
    path.setAttribute("stroke-width", "0.5");
    path.style.filter = "none";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    svg.setAttribute("viewBox", "0 0 1000 1000");
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.filter = "drop-shadow(0 10px 30px rgba(0,0,0,0.2))";

    const paths = svg.querySelectorAll("path[id]");
    paths.forEach((path) => {
      const id = path.id;
      if (!STATE_ID_TO_NAME[id]) return;
      (path as SVGPathElement).style.cursor = "pointer";
      (path as SVGPathElement).style.transition = "fill 0.15s ease, stroke 0.15s ease, filter 0.15s ease";
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    const prevId = prevHoveredIdRef.current;
    const currentId = hoveredState 
      ? Object.keys(STATE_ID_TO_NAME).find(k => STATE_ID_TO_NAME[k] === hoveredState) || null 
      : null;

    if (prevId && prevId !== currentId) {
      const prevPath = svg.querySelector(`path[id="${prevId}"]`);
      if (prevPath) applyDefaultStyle(prevPath as SVGPathElement);
    }

    if (currentId) {
      const currentPath = svg.querySelector(`path[id="${currentId}"]`);
      if (currentPath) applyHoverStyle(currentPath as SVGPathElement, STATE_COLORS[currentId] || "#2a2a2a");
    }

    prevHoveredIdRef.current = currentId;
  }, [hoveredState]);

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as SVGPathElement;
    if (target.tagName.toLowerCase() === "path" && target.id) {
      const stateName = STATE_ID_TO_NAME[target.id];
      if (stateName && stateName !== hoveredState) {
        setHoveredState(stateName);
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  return (
    <div className="relative w-full max-w-[650px] mx-auto">
      <div
        ref={containerRef}
        className="w-full h-full"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        dangerouslySetInnerHTML={{ __html: require("../public/india-map.svg?raw") }}
      />

      <AnimatePresence>
        {hoveredState && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20"
          >
            <p className="text-white text-xs font-semibold tracking-wide">{hoveredState}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
