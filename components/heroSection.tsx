"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  Database,
  TrendingUp,
  Users,
  Phone,
  User,
  Calendar,
  FileText,
  Target,
  Globe,
  CheckCircle2,
  Briefcase,
  IndianRupee,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GodRays } from "@paper-design/shaders-react";

// Focus areas for multi-select
const focusAreas = [
  { id: "education", label: "Education", icon: "📚" },
  { id: "healthcare", label: "Healthcare", icon: "🏥" },
  { id: "environment", label: "Environment", icon: "🌱" },
  { id: "women", label: "Women Empowerment", icon: "👩" },
  { id: "children", label: "Child Welfare", icon: "👶" },
  { id: "elderly", label: "Elderly Care", icon: "👴" },
  { id: "disability", label: "Disability Support", icon: "♿" },
  { id: "livelihood", label: "Livelihood", icon: "💼" },
  { id: "rural", label: "Rural Development", icon: "🏘️" },
  { id: "disaster", label: "Disaster Relief", icon: "🆘" },
];

// Indian states for dropdown
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu & Kashmir",
  "Ladakh",
];

const organizationTypes = [
  "Registered Trust",
  "Society",
  "Section 8 Company",
  "Non-Profit Organization",
  "Community Based Organization",
  "Self Help Group",
];

const teamSizeOptions = [
  "1-5 members",
  "6-15 members",
  "16-50 members",
  "51-100 members",
  "100+ members",
];

const budgetRanges = [
  "Below ₹5 Lakhs",
  "₹5-25 Lakhs",
  "₹25-50 Lakhs",
  "₹50 Lakhs - 1 Crore",
  "₹1-5 Crores",
  "Above ₹5 Crores",
];

export default function HeroSection() {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedFocusAreas, setSelectedFocusAreas] = useState<string[]>([]);
  const totalSteps = 4;

  const handleExpand = () => setIsExpanded(true);
  const handleClose = () => {
    setIsExpanded(false);
    setCurrentStep(1);
    setSelectedFocusAreas([]);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsExpanded(false);
      setCurrentStep(1);
      router.push("/landingPage");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleFocusArea = (id: string) => {
    setSelectedFocusAreas((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    document.body.style.overflow = isExpanded ? "hidden" : "unset";
  }, [isExpanded]);

  const stepTitles = [
    "Organization Details",
    "Contact Information",
    "Location & Focus",
    "Organization Profile",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GodRays
            colorBack="#000000"
            colors={["#FF9933", "#FFFFFF", "#138808"]}
            intensity={0.4}
            speed={0.5}
            scale={1.5}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <motion.div
          animate={{ opacity: 0.05, rotate: 360 }}
          transition={{
            rotate: { duration: 150, repeat: Infinity, ease: "linear" },
          }}
          className="absolute z-0 pointer-events-none"
        >
          <AshokaChakra size={900} color="#FFFFFF" />
        </motion.div>
        <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933]" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#138808]" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">
              National Social Portal
            </span>
          </motion.div>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white">
            Bridge the Gap
          </h1>
          <p className="text-lg sm:text-2xl text-white/40 font-light max-w-2xl leading-relaxed">
            Intelligence for the growth of Bharat.
          </p>
          {!isExpanded && (
            <motion.button
              layoutId="modal"
              onClick={handleExpand}
              className="group h-16 px-10 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest flex items-center gap-4 mt-8"
            >
              Register Organization <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-black py-24 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold tracking-[0.3em] text-[#FF9933] uppercase mb-12">
            The Mission Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
              { icon: Database, title: "Real-Time Intelligence", step: "01" },
              { icon: MapPin, title: "Priority Mapping", step: "02" },
              { icon: TrendingUp, title: "Impact Analysis", step: "03" },
              { icon: Users, title: "Strategic Network", step: "04" },
            ].map((f, i) => (
              <div
                key={i}
                className="group bg-black p-12 hover:bg-white/[0.02] transition-colors relative"
              >
                <span className="absolute top-8 right-8 text-4xl font-bold text-white/[0.03]">
                  {f.step}
                </span>
                <f.icon className="w-10 h-10 text-white/30 group-hover:text-[#FF9933] mb-6 transition-colors" />
                <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                <p className="text-white/40 text-sm">
                  Access live metrics for granular national development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Modal */}
      <AnimatePresence>
        {isExpanded && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div
              layoutId="modal"
              className="relative w-full max-w-5xl my-4 overflow-hidden bg-[#050505] sm:rounded-[40px] border border-white/10 flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]"
            >
              {/* Left Panel - Progress & Info */}
              <div className="lg:w-[320px] p-8 sm:p-10 flex flex-col justify-between bg-white/[0.01] border-b lg:border-b-0 lg:border-r border-white/10">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                    Join the <br />
                    <span className="text-white/20 italic">Network.</span>
                  </h2>
                  <p className="text-white/40 text-sm mt-4">
                    Register your organization to access real-time intelligence
                    and connect with NGOs across India.
                  </p>

                  {/* Progress Steps */}
                  <div className="mt-10 space-y-4">
                    {stepTitles.map((title, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            currentStep > index + 1
                              ? "bg-[#138808] text-white"
                              : currentStep === index + 1
                              ? "bg-white text-black"
                              : "bg-white/10 text-white/30"
                          }`}
                        >
                          {currentStep > index + 1 ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            index + 1
                          )}
                        </div>
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            currentStep === index + 1
                              ? "text-white font-medium"
                              : "text-white/30"
                          }`}
                        >
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block border-t border-white/10 pt-8 mt-8">
                  <p className="text-2xl font-bold text-white">700+</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                    Districts Covered
                  </p>
                </div>
              </div>

              {/* Right Panel - Form */}
              <div className="flex-1 p-8 sm:p-10 bg-white/[0.02] overflow-y-auto max-h-[70vh] lg:max-h-none">
                <form onSubmit={handleSubmit} className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">
                      {stepTitles[currentStep - 1]}
                    </h3>
                    <span className="text-xs text-white/40">
                      Step {currentStep} of {totalSteps}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex-1 space-y-5"
                    >
                      {/* Step 1: Organization Details */}
                      {currentStep === 1 && (
                        <>
                          <CustomInput
                            icon={Building2}
                            placeholder="Organization Name"
                            name="orgName"
                          />
                          <CustomInput
                            icon={Mail}
                            placeholder="Official Email"
                            type="email"
                            name="email"
                          />
                          <CustomInput
                            icon={FileText}
                            placeholder="Registration Number (Optional)"
                            name="regNumber"
                          />
                          <CustomSelect
                            icon={Briefcase}
                            placeholder="Organization Type"
                            options={organizationTypes}
                            name="orgType"
                          />
                          <CustomInput
                            icon={Calendar}
                            placeholder="Year Founded (e.g., 2015)"
                            name="yearFounded"
                          />
                        </>
                      )}

                      {/* Step 2: Contact Information */}
                      {currentStep === 2 && (
                        <>
                          <CustomInput
                            icon={User}
                            placeholder="Contact Person Name"
                            name="contactName"
                          />
                          <CustomInput
                            icon={Phone}
                            placeholder="Phone Number"
                            type="tel"
                            name="phone"
                          />
                          <CustomInput
                            icon={Briefcase}
                            placeholder="Designation (e.g., Founder, Director)"
                            name="designation"
                          />
                          <CustomInput
                            icon={Mail}
                            placeholder="Alternate Email (Optional)"
                            type="email"
                            name="altEmail"
                          />
                          <CustomInput
                            icon={Globe}
                            placeholder="Website URL (Optional)"
                            name="website"
                          />
                        </>
                      )}

                      {/* Step 3: Location & Focus Areas */}
                      {currentStep === 3 && (
                        <>
                          <CustomSelect
                            icon={MapPin}
                            placeholder="State"
                            options={indianStates}
                            name="state"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <CustomInput
                              icon={MapPin}
                              placeholder="District"
                              name="district"
                            />
                            <CustomInput
                              icon={MapPin}
                              placeholder="City/Town"
                              name="city"
                            />
                          </div>
                          <CustomInput
                            icon={MapPin}
                            placeholder="PIN Code"
                            name="pincode"
                          />

                          <div className="mt-6">
                            <label className="text-sm text-white/50 mb-3 block">
                              Focus Areas (Select all that apply)
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {focusAreas.map((area) => (
                                <button
                                  key={area.id}
                                  type="button"
                                  onClick={() => toggleFocusArea(area.id)}
                                  className={`p-3 rounded-xl text-left text-sm flex items-center gap-2 transition-all duration-200 ${
                                    selectedFocusAreas.includes(area.id)
                                      ? "bg-[#FF9933]/20 border-[#FF9933]/50 text-white border"
                                      : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                                  }`}
                                >
                                  <span>{area.icon}</span>
                                  <span>{area.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </>
                      )}

                      {/* Step 4: Organization Profile */}
                      {currentStep === 4 && (
                        <>
                          <CustomSelect
                            icon={Users}
                            placeholder="Team Size"
                            options={teamSizeOptions}
                            name="teamSize"
                          />
                          <CustomSelect
                            icon={IndianRupee}
                            placeholder="Annual Budget Range"
                            options={budgetRanges}
                            name="budget"
                          />
                          <CustomInput
                            icon={Heart}
                            placeholder="Beneficiaries Served (Approx. number)"
                            name="beneficiaries"
                          />
                          <CustomInput
                            icon={Target}
                            placeholder="Operating Districts (e.g., 5 districts)"
                            name="operatingDistricts"
                          />

                          <div className="mt-4 p-4 rounded-2xl bg-[#138808]/10 border border-[#138808]/20">
                            <p className="text-sm text-white/70">
                              By registering, you agree to join India&apos;s largest
                              NGO intelligence network and contribute to
                              national development data.
                            </p>
                          </div>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex gap-4 mt-8 pt-6 border-t border-white/10">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="h-14 px-6 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    )}
                    <button
                      type="submit"
                      className="flex-1 h-14 rounded-xl bg-white text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                    >
                      {currentStep === totalSteps ? (
                        <>
                          Complete Registration
                          <CheckCircle2 className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 p-2 text-white/30 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function AshokaChakra({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="0.1"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="12"
          y1="12"
          x2={12 + 10 * Math.cos((i * 15 * Math.PI) / 180)}
          y2={12 + 10 * Math.sin((i * 15 * Math.PI) / 180)}
        />
      ))}
    </svg>
  );
}

function CustomInput({
  icon: Icon,
  ...props
}: {
  icon: any;
  placeholder?: string;
  type?: string;
  name?: string;
}) {
  return (
    <div className="relative group">
      <Icon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-white/50 transition-colors" />
      <input
        {...props}
        className="w-full h-14 pl-14 pr-5 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all"
      />
    </div>
  );
}

function CustomSelect({
  icon: Icon,
  placeholder,
  options,
  name,
}: {
  icon: any;
  placeholder: string;
  options: string[];
  name?: string;
}) {
  return (
    <div className="relative group">
      <Icon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-white/50 transition-colors pointer-events-none" />
      <select
        name={name}
        className="w-full h-14 pl-14 pr-5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all appearance-none cursor-pointer"
        defaultValue=""
      >
        <option value="" disabled className="bg-[#0a0a0a] text-white/30">
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0a0a0a] text-white">
            {option}
          </option>
        ))}
      </select>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-white/30"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
