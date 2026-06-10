"use client"

import { useState, useEffect } from "react"

export function LoadingScreen() {
  const [visible, setVisible] = useState(false)
  const [barWidth, setBarWidth] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem("envostructs_loaded")
    if (!seen) {
      sessionStorage.setItem("envostructs_loaded", "1")
      setVisible(true)
      // Animate the progress bar
      setTimeout(() => setBarWidth(100), 80)
      // Start fade-out at 2.3s
      setTimeout(() => setFadeOut(true), 2300)
      // Remove from DOM at 3s
      setTimeout(() => setVisible(false), 3000)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        backgroundColor: "#001529",
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.7s ease-out",
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative flex flex-col items-center gap-5">
        {/* Logo card */}
        <div
          className="bg-white rounded-2xl p-4 shadow-2xl"
          style={{
            opacity: 1,
            transform: "scale(1)",
            animation: "none",
          }}
        >
          <img src="/logo.png" alt="ENVOSTRUCTS Nigeria Limited" style={{ height: "64px", width: "auto" }} />
        </div>

        {/* Brand text */}
        <div className="text-center">
          <p className="text-white font-black text-2xl tracking-[0.25em] uppercase">ENVOSTRUCTS</p>
          <p className="text-amber-400/70 text-xs tracking-[0.4em] uppercase mt-1">Nigeria Limited</p>
        </div>

        {/* Progress bar */}
        <div className="w-52 h-0.5 bg-white/10 rounded-full overflow-hidden mt-2">
          <div
            className="h-full bg-amber-500 rounded-full"
            style={{
              width: `${barWidth}%`,
              transition: "width 2.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase">Engineering Excellence Since 2008</p>
      </div>
    </div>
  )
}
