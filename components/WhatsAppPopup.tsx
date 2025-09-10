"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "+2348034770098" // Envostructs phone number
    const message = encodeURIComponent("Hello! I would like to know more about your engineering services.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Minimized state - just the icon */}
      {isMinimized ? (
        <button
          onClick={handleMinimize}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      ) : (
        /* Expanded state - full popup */
        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-w-sm animate-slide-up">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 p-2 rounded-full">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Chat with us</h3>
                <p className="text-xs text-gray-500">We're online now</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <button onClick={handleMinimize} className="text-gray-400 hover:text-gray-600 p-1">
                <div className="w-3 h-0.5 bg-current"></div>
              </button>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1">
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Message */}
          <div className="mb-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-2">
              <p className="text-sm text-gray-700">Hi there! 👋 How can we help you today?</p>
            </div>
            <p className="text-xs text-gray-500">Get instant support via WhatsApp</p>
          </div>

          {/* Action Button */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Start Chat</span>
          </button>
        </div>
      )}
    </div>
  )
}

// Also export as default for backward compatibility
export default WhatsAppPopup
