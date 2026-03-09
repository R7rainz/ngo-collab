"use client";

import React, { useEffect, useRef, useMemo } from "react";
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
  INUP: "Uttar Pradesh",
  INBR: "Bihar",
  INSK: "Sikkim",
  INAR: "Arunachal Pradesh",
  INAS: "Assam",
  INNL: "Nagaland",
  INML: "Meghalaya",
  INGJ: "Gujarat",
  INMP: "Madhya Pradesh",
  INCT: "Chhattisgarh",
  INJH: "Jharkhand",
  INWB: "West Bengal",
  INDH: "Dadra and Nagar Haveli and Daman and Diu",
  INTR: "Tripura",
  INMZ: "Mizoram",
  INMN: "Manipur",
  INMH: "Maharashtra",
  INOR: "Odisha",
  INTG: "Telangana",
  INAP: "Andhra Pradesh",
  INKA: "Karnataka",
  INGA: "Goa",
  INKL: "Kerala",
  INTN: "Tamil Nadu",
  INPY: "Puducherry",
  INAN: "Andaman & Nicobar",
  INLD: "Lakshadweep",
};

// Accurately split by geography to form the Indian Flag
const STATE_COLORS: Record<string, string> = {
  // Top Band - Saffron
  INJK: "#FF9933",
  INLA: "#FF9933",
  INHP: "#FF9933",
  INPB: "#FF9933",
  INCH: "#FF9933",
  INUT: "#FF9933",
  INHR: "#FF9933",
  INDL: "#FF9933",
  INRJ: "#FF9933",
  INUP: "#FF9933",
  INBR: "#FF9933",
  INSK: "#FF9933",
  INAR: "#FF9933",
  INAS: "#FF9933",
  INNL: "#FF9933",
  // Middle Band - White
  INGJ: "#FFFFFF",
  INMP: "#FFFFFF",
  INCT: "#FFFFFF",
  INJH: "#FFFFFF",
  INWB: "#FFFFFF",
  INDH: "#FFFFFF",
  INML: "#FFFFFF",
  INTR: "#FFFFFF",
  INMZ: "#FFFFFF",
  INMN: "#FFFFFF",
  // Bottom Band - Green
  INMH: "#138808",
  INOR: "#138808",
  INTG: "#138808",
  INAP: "#138808",
  INKA: "#138808",
  INGA: "#138808",
  INKL: "#138808",
  INTN: "#138808",
  INPY: "#138808",
  INAN: "#138808",
  INLD: "#138808",
};

interface IndiaMapProps {
  hoveredState: string | null;
  setHoveredState: (state: string | null) => void;
}

export default function IndiaMap({
  hoveredState,
  setHoveredState,
}: IndiaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prevHoveredIdRef = useRef<string | null>(null);

  const processedSvgContent = useMemo(() => {
    let rawSvg = require("../public/india-map.svg?raw");
    return (
      rawSvg
        .replace(/width="[^"]*"/g, "")
        .replace(/height="[^"]*"/g, "")
        .replace(/viewBox="[^"]*"/g, "")
        // THIS is the crucial fix: Strip out any hardcoded fills in the original SVG
        .replace(/fill="[^"]*"/g, "")
        .replace(
          /<svg /,
          '<svg viewBox="0 0 1000 1000" width="100%" height="100%" style="filter: drop-shadow(0 10px 30px rgba(0,0,0,0.5));" ',
        )
    );
  }, []);

  const applyHoverStyle = (path: SVGPathElement) => {
    path.parentNode?.appendChild(path); // Bring to front

    const id = path.id;
    // Force the style via JS so the SVG can't override it
    path.style.fill = STATE_COLORS[id] || "#FFFFFF";
    path.style.stroke = "#FFFFFF";
    path.style.strokeWidth = "2.5px";
    path.style.filter =
      "drop-shadow(0px 8px 16px rgba(0,0,0,0.8)) brightness(1.15)";
  };

  const applyDefaultStyle = (path: SVGPathElement) => {
    const id = path.id;
    // Apply the geographic flag color
    path.style.fill = STATE_COLORS[id] || "#FFFFFF";
    path.style.stroke = "rgba(0,0,0,0.2)";
    path.style.strokeWidth = "1px";
    path.style.filter = "none";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    const paths = svg.querySelectorAll("path[id]");
    paths.forEach((path) => {
      const id = path.id;
      if (!STATE_ID_TO_NAME[id]) return;

      const pathEl = path as SVGPathElement;
      applyDefaultStyle(pathEl);

      pathEl.style.cursor = "pointer";
      pathEl.style.transition =
        "fill 0.2s ease, stroke 0.2s ease, filter 0.2s ease";
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const svg = container.querySelector("svg");
    if (!svg) return;

    const prevId = prevHoveredIdRef.current;
    const currentId = hoveredState
      ? Object.keys(STATE_ID_TO_NAME).find(
          (k) => STATE_ID_TO_NAME[k] === hoveredState,
        ) || null
      : null;

    if (prevId && prevId !== currentId) {
      const prevPath = svg.querySelector(`path[id="${prevId}"]`);
      if (prevPath) applyDefaultStyle(prevPath as SVGPathElement);
    }

    if (currentId) {
      const currentPath = svg.querySelector(`path[id="${currentId}"]`);
      if (currentPath) applyHoverStyle(currentPath as SVGPathElement);
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
        className="w-full h-full [&>svg]:w-full [&>svg]:h-auto"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        dangerouslySetInnerHTML={{ __html: processedSvgContent }}
      />

      <AnimatePresence>
        {hoveredState && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full border border-white/20 pointer-events-none"
          >
            <p className="text-white text-xs font-semibold tracking-wide">
              {hoveredState}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
