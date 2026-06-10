"use client"

import { useEffect, useRef, type ReactNode } from "react"

type Direction = "up" | "down" | "left" | "right" | "scale"

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}

const directionClass: Record<Direction, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
}

export function Reveal({ children, direction = "up", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const id = setTimeout(() => {
            el.classList.add("reveal-visible")
          }, delay)
          observer.disconnect()
          return () => clearTimeout(id)
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`${directionClass[direction]} ${className}`}>
      {children}
    </div>
  )
}
