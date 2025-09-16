"use client"

import type React from "react"

import { useState, useRef } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg cursor-col-resize group"
      onMouseMove={handleMouseMove}
    >
      {/* Before Image */}
      <div className="absolute inset-0">
        <img src={beforeImage || "/placeholder.svg"} alt={beforeAlt} className="w-full h-full object-cover" />
        <div
          className="absolute bottom-4 left-4 px-3 py-1 rounded text-sm font-medium shadow-lg"
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
        >
          Before
        </div>
      </div>

      {/* After Image */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <img src={afterImage || "/placeholder.svg"} alt={afterAlt} className="w-full h-full object-cover" />
        <div
          className="absolute bottom-4 right-4 px-3 py-1 rounded text-sm font-medium shadow-lg"
          style={{ backgroundColor: "#000000", color: "#ffffff" }}
        >
          After
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-opacity group-hover:opacity-100 opacity-70"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-primary rounded-full bg-primary/20"></div>
        </div>
      </div>
    </div>
  )
}
