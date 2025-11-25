"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, Building2, Mail, FileCheck, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { GodRays, MeshGradient } from "@paper-design/shaders-react"

export default function Hero() {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleExpand = () => {
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isExpanded])

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-20 bg-black">
        <div className="absolute inset-0">
          <GodRays
            colorBack="#000000"
            colors={["#FFFFFF40", "#E0E0E0", "#404040", "#808080"]}
            colorBloom="#FFFFFF"
            offsetX={0.85}
            offsetY={-1}
            intensity={1}
            spotty={0.45}
            midSize={10}
            midIntensity={0}
            density={0.12}
            bloom={0.15}
            speed={1}
            scale={1.6}
            frame={3332042.8159981333}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-5 text-center max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1] tracking-tight">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent">
              Bridge the Gap
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/50 font-normal max-w-md">
            Real-time poverty & education data for NGOs across India.
          </p>

          <AnimatePresence initial={false}>
            {!isExpanded && (
              <motion.div className="inline-block relative mt-6">
                <motion.div
                  style={{
                    borderRadius: "12px",
                  }}
                  layout
                  layoutId="cta-card"
                  className="absolute inset-0 bg-white items-center justify-center transform-gpu will-change-transform"
                ></motion.div>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  layout={false}
                  onClick={handleExpand}
                  className="group h-12 px-6 text-sm font-semibold text-black tracking-wide uppercase relative flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Register
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              layoutId="cta-card"
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: "24px",
              }}
              layout
              className="relative flex h-full w-full overflow-y-auto bg-[#050505] transform-gpu will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="absolute h-full inset-0 overflow-hidden pointer-events-none"
                style={{
                  borderRadius: "24px",
                }}
              >
                <MeshGradient
                  speed={0.5}
                  colors={["#050505", "#0a1628", "#0f172a", "#000000"]}
                  distortion={0.6}
                  swirl={0.08}
                  grainMixer={0}
                  grainOverlay={0}
                  className="inset-0 sticky top-0"
                  style={{ height: "100%", width: "100%" }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 flex flex-col lg:flex-row h-full w-full max-w-[1000px] mx-auto items-center p-6 sm:p-10 lg:p-14 gap-10 lg:gap-14"
              >
                <div className="flex-1 flex flex-col justify-center w-full">
                  <p className="text-xs font-medium text-blue-400/80 uppercase tracking-widest mb-4">
                    Join the Movement
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                    Data Drives
                    <span className="block text-white/40">Change</span>
                  </h2>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <blockquote className="text-lg sm:text-xl text-white/70 font-light leading-relaxed">
                      "Poverty is not an accident. Like slavery and apartheid, it is man-made and can be removed by the
                      actions of human beings."
                    </blockquote>
                    <cite className="block mt-4 text-sm text-white/40 font-medium not-italic">— Nelson Mandela</cite>
                  </div>

                  <div className="flex gap-8 mt-8 pt-6 border-t border-white/10">
                    <div>
                      <p className="text-2xl font-bold text-white">700+</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider mt-1">Districts</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">28</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider mt-1">States</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">Live</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider mt-1">Updates</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <form className="space-y-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label htmlFor="org-name" className="sr-only">
                          Organization Name
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="text"
                            id="org-name"
                            name="org-name"
                            placeholder="Organization Name"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="sr-only">
                          Official Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Official Email"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="registration" className="sr-only">
                          Registration No.
                        </label>
                        <div className="relative">
                          <FileCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="text"
                            id="registration"
                            name="registration"
                            placeholder="NGO Reg. No."
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="focus-area" className="sr-only">
                          Focus Area
                        </label>
                        <select
                          id="focus-area"
                          name="focus-area"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all appearance-none cursor-pointer text-sm"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                            backgroundSize: "1rem",
                          }}
                        >
                          <option value="" disabled selected>
                            Focus Area
                          </option>
                          <option value="education">Education</option>
                          <option value="poverty">Poverty</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="women">Women Empowerment</option>
                          <option value="children">Child Welfare</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="states" className="sr-only">
                          States of Operation
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-4 w-4 h-4 text-white/30" />
                          <textarea
                            id="states"
                            name="states"
                            rows={2}
                            placeholder="States of operation (e.g., Bihar, UP, MP)"
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.button
                onClick={handleClose}
                className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center text-white/50 bg-white/5 transition-colors hover:bg-white/10 hover:text-white rounded-full"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
