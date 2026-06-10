"use client"

import { useState } from "react"
import { X, ChevronRight, ChevronLeft, MessageCircle, Building, Road, Home, GraduationCap, Wrench, FlaskConical } from "lucide-react"

const PROJECT_TYPES = [
  { label: "Hotel / Hospitality", icon: Building, msg: "Hotel/Hospitality project" },
  { label: "Road / Infrastructure", icon: Road, msg: "Road or infrastructure project" },
  { label: "Residential Building", icon: Home, msg: "Residential building project" },
  { label: "Educational Facility", icon: GraduationCap, msg: "Educational facility project" },
  { label: "Structural Design", icon: Wrench, msg: "Structural design project" },
  { label: "Geotechnical Services", icon: FlaskConical, msg: "Geotechnical investigation" },
]

const VALUE_RANGES = [
  { label: "Under ₦50 Million", value: "under ₦50M" },
  { label: "₦50M – ₦200M", value: "₦50M–₦200M" },
  { label: "₦200M – ₦1 Billion", value: "₦200M–₦1B" },
  { label: "₦1 Billion+", value: "over ₦1B" },
  { label: "Not sure yet", value: "budget not yet defined" },
]

const LOCATIONS = [
  "Lagos State",
  "Ogun State",
  "Ondo State",
  "Benue State",
  "Abuja (FCT)",
  "Other State",
]

export function QuoteWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [projectType, setProjectType] = useState("")
  const [projectTypeMsg, setProjectTypeMsg] = useState("")
  const [valueRange, setValueRange] = useState("")
  const [location, setLocation] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const reset = () => {
    setStep(0); setProjectType(""); setProjectTypeMsg(""); setValueRange(""); setLocation(""); setName(""); setPhone("")
  }

  const close = () => { setOpen(false); setTimeout(reset, 400) }

  const submit = () => {
    const text = `Hello Envostructs, my name is ${name}. I'd like to request a quote for a ${projectTypeMsg} (approximate value: ${valueRange}) in ${location}. Please contact me at ${phone}.`
    window.open(`https://wa.me/2348034770098?text=${encodeURIComponent(text)}`, "_blank")
    close()
  }

  const canProceed = [
    !!projectType,
    !!valueRange,
    !!location,
    name.length > 1 && phone.length > 7,
  ]

  const STEPS = [
    {
      label: "Project Type",
      subtitle: "What type of project do you need?",
      content: (
        <div className="grid grid-cols-2 gap-2">
          {PROJECT_TYPES.map(({ label, icon: Icon, msg }) => (
            <button
              key={label}
              onClick={() => { setProjectType(label); setProjectTypeMsg(msg) }}
              className="flex flex-col items-center gap-2 p-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200"
              style={{
                borderColor: projectType === label ? "#F59E0B" : "rgba(255,255,255,0.1)",
                backgroundColor: projectType === label ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.05)",
                color: projectType === label ? "#F59E0B" : "rgba(255,255,255,0.7)",
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="text-center leading-tight text-xs">{label}</span>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Project Value",
      subtitle: "Approximate project budget?",
      content: (
        <div className="space-y-2">
          {VALUE_RANGES.map(({ label, value }) => (
            <button
              key={label}
              onClick={() => setValueRange(value)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200"
              style={{
                borderColor: valueRange === value ? "#F59E0B" : "rgba(255,255,255,0.1)",
                backgroundColor: valueRange === value ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.05)",
                color: valueRange === value ? "#F59E0B" : "rgba(255,255,255,0.7)",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Location",
      subtitle: "Where is the project located?",
      content: (
        <div className="grid grid-cols-2 gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc}
              onClick={() => setLocation(loc)}
              className="px-3 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200"
              style={{
                borderColor: location === loc ? "#F59E0B" : "rgba(255,255,255,0.1)",
                backgroundColor: location === loc ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.05)",
                color: location === loc ? "#F59E0B" : "rgba(255,255,255,0.7)",
              }}
            >
              {loc}
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Your Details",
      subtitle: "How should we reach you?",
      content: (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 border outline-none transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: name ? "#F59E0B" : "rgba(255,255,255,0.15)" }}
          />
          <input
            type="tel"
            placeholder="Phone / WhatsApp number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 border outline-none transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: phone ? "#F59E0B" : "rgba(255,255,255,0.15)" }}
          />
          <div className="p-3 rounded-xl text-xs text-white/40 leading-relaxed" style={{ backgroundColor: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.2)" }}>
            Clicking "Send via WhatsApp" will open WhatsApp with your details pre-filled.
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* Trigger button — bottom left */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-105"
        style={{
          backgroundColor: "#003366",
          opacity: 1,
          border: "2px solid rgba(245,158,11,0.4)",
        }}
        aria-label="Get a quick quote"
      >
        <Wrench className="w-4 h-4 text-amber-400" />
        <span className="hidden sm:inline">Get a Quote</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={close}
        >
          <div
            className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#0a0e1a", border: "1px solid rgba(255,255,255,0.1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between" style={{ backgroundColor: "#003366" }}>
              <div>
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">Quick Quote</p>
                <p className="text-white font-black text-base leading-tight mt-0.5">{STEPS[step].subtitle}</p>
              </div>
              <button onClick={close} className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Step indicator */}
            <div className="flex gap-1 px-5 pt-4">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className="h-1 rounded-full flex-1 transition-all duration-300"
                  style={{ backgroundColor: i <= step ? "#F59E0B" : "rgba(255,255,255,0.1)" }}
                />
              ))}
            </div>

            {/* Step content */}
            <div className="px-5 py-4 min-h-[220px]">
              {STEPS[step].content}
            </div>

            {/* Navigation */}
            <div className="px-5 pb-5 flex gap-3">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              )}
              {step < STEPS.length - 1 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed[step]}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                  style={{
                    backgroundColor: canProceed[step] ? "#F59E0B" : "rgba(255,255,255,0.1)",
                    color: canProceed[step] ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={!canProceed[step]}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
                  style={{
                    backgroundColor: canProceed[step] ? "#25D366" : "rgba(255,255,255,0.1)",
                    color: canProceed[step] ? "#fff" : "rgba(255,255,255,0.3)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
