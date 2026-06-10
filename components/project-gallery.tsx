"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  const next = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length))

  return (
    <>
      {/* Main image */}
      <button
        onClick={() => setLightboxIndex(0)}
        className="relative w-full h-80 rounded-2xl overflow-hidden group block"
        aria-label="Open gallery"
      >
        <img src={images[0]} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
            View Gallery ({images.length} photos)
          </span>
        </div>
      </button>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-3 gap-3 mt-3">
        {images.slice(1, 4).map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i + 1)}
            className="relative h-24 rounded-xl overflow-hidden group"
            aria-label={`View image ${i + 2}`}
          >
            <img src={img} alt={`${title} ${i + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightboxIndex(null)}
        >
          <button onClick={() => setLightboxIndex(null)} className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <X className="w-5 h-5" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 w-11 h-11 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 w-11 h-11 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`${title} ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  )
}
