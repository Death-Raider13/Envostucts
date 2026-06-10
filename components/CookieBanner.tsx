"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [slideIn, setSlideIn] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("envostructs_cookie_consent")
    if (!consent) {
      // Delay so it doesn't pop up the moment the page loads
      const show = setTimeout(() => {
        setVisible(true)
        setTimeout(() => setSlideIn(true), 30)
      }, 2000)
      return () => clearTimeout(show)
    }
  }, [])

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem("envostructs_cookie_consent", choice)
    setSlideIn(false)
    setTimeout(() => setVisible(false), 400)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-[420px] z-[100]"
      style={{
        transform: slideIn ? "translateY(0)" : "translateY(120%)",
        opacity: slideIn ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease",
      }}
    >
      <div
        className="rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: "#0a0e1a", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        {/* Amber top accent */}
        <div className="h-0.5 w-full bg-amber-500" />

        <div className="p-5">
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              {/* Cookie icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-lg"
                style={{ backgroundColor: "rgba(245,158,11,0.15)" }}
              >
                🍪
              </div>
              <div>
                <p className="text-white font-bold text-sm">We use cookies</p>
              </div>
            </div>
            <button
              onClick={() => dismiss("declined")}
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5 text-white/50" />
            </button>
          </div>

          <p className="text-white/50 text-xs leading-relaxed mb-5">
            We use cookies to enhance your browsing experience, analyse site traffic, and personalise content. By clicking <strong className="text-white/70">Accept All</strong>, you consent to our use of cookies.
          </p>

          <div className="flex gap-2.5">
            <button
              onClick={() => dismiss("accepted")}
              className="flex-1 text-white text-xs font-bold py-2.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: "#F59E0B" }}
            >
              Accept All
            </button>
            <button
              onClick={() => dismiss("declined")}
              className="px-5 text-white/50 hover:text-white text-xs font-semibold py-2.5 rounded-xl transition-colors"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
