"use client"
import { useEffect, useState } from "react"
import { MessageCircle, X, FileText, HelpCircle, Download } from "lucide-react"

const PHONE = "2348034770098"

const ACTIONS = [
  {
    label: "Request a Quote",
    icon: FileText,
    message: "Hello Envostructs, I'd like to request a quote for a project.",
  },
  {
    label: "Ask a Question",
    icon: HelpCircle,
    message: "Hello Envostructs, I have a question I'd like to ask.",
  },
  {
    label: "Get Company Profile",
    icon: Download,
    message: "Hello Envostructs, please send me your company profile.",
  },
]

export function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const openAction = (message: string) => {
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "whatsapp_click", {
        event_category: "Engagement",
        event_label: "WhatsApp Quick Action",
      })
    }
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.4s ease, transform 0.4s ease",
      }}
    >
      {/* Quick-action tray */}
      <div
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          pointerEvents: isOpen ? "all" : "none",
        }}
      >
        <div
          className="rounded-2xl shadow-2xl overflow-hidden w-64"
          style={{ backgroundColor: "#0a0e1a", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#25D366" }}>
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">ENVOSTRUCTS</p>
              <p className="text-white/80 text-xs">Typically replies instantly</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="p-3 space-y-2">
            {ACTIONS.map((action) => (
              <button
                key={action.label}
                onClick={() => openAction(action.message)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors group"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(37,211,102,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(37,211,102,0.2)" }}
                >
                  <action.icon className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-white text-sm font-medium">{action.label}</span>
              </button>
            ))}
          </div>

          <div className="px-4 pb-3 text-center">
            <p className="text-white/30 text-[10px]">Powered by WhatsApp</p>
          </div>
        </div>
      </div>

      {/* Main button */}
      <div className="relative">
        {/* Pulsing ring — only when tray is closed */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: "rgba(37,211,102,0.4)", animation: "ping 1.8s cubic-bezier(0,0,0.2,1) infinite" }}
          />
        )}
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close WhatsApp menu" : "Chat with us on WhatsApp"}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "#25D366" }}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" fill="white" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
