"use client"
import { useEffect, useState } from "react"
import { MessageSquare } from "lucide-react"

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    // Google Analytics tracking
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", "whatsapp_click", {
        event_category: "Engagement",
        event_label: "WhatsApp Chat Button"
      })
    }
    // Open WhatsApp chat
    window.open(
      "https://wa.me/2348034770098?text=Hello%20Envostructs%2C%20I%27d%20like%20to%20make%20an%20inquiry",
      "_blank"
    )
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 2000) // Show after 2s
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg focus:outline-none"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageSquare className="w-5 h-5" />
    </button>
  )
}
