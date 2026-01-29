"use client"

import { useEffect, useState } from "react"

interface Hexagon {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
}

export function HoneycombBackground() {
  const [hexagons, setHexagons] = useState<Hexagon[]>([])

  useEffect(() => {
    const generateHexagons = () => {
      const newHexagons: Hexagon[] = []
      const count = 15
      
      for (let i = 0; i < count; i++) {
        newHexagons.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 40 + Math.random() * 60,
          opacity: 0.03 + Math.random() * 0.05,
          delay: Math.random() * 5,
        })
      }
      setHexagons(newHexagons)
    }
    
    generateHexagons()
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Honeycomb pattern hexagons */}
      {hexagons.map((hex) => (
        <div
          key={hex.id}
          className="absolute animate-pulse"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            opacity: hex.opacity,
            animationDelay: `${hex.delay}s`,
            animationDuration: "4s",
          }}
        >
          <svg
            width={hex.size}
            height={hex.size}
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,3 93,25 93,75 50,97 7,75 7,25"
              fill="currentColor"
              className="text-accent"
            />
          </svg>
        </div>
      ))}
      
      {/* Floating small bees */}
      <FloatingBees />
    </div>
  )
}

function FloatingBees() {
  const [bees, setBees] = useState<{ id: number; x: number; duration: number; delay: number; size: number }[]>([])

  useEffect(() => {
    setBees(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 8,
        size: 20 + Math.random() * 15,
      }))
    )
  }, [])

  return (
    <>
      {bees.map((bee) => (
        <div
          key={bee.id}
          className="absolute animate-float-bee"
          style={{
            left: `${bee.x}%`,
            bottom: "-50px",
            animationDuration: `${bee.duration}s`,
            animationDelay: `${bee.delay}s`,
          }}
        >
          <SmallBee size={bee.size} />
        </div>
      ))}
      <style jsx>{`
        @keyframes float-bee {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          25% {
            transform: translateY(-25vh) translateX(20px);
          }
          50% {
            transform: translateY(-50vh) translateX(-15px);
          }
          75% {
            transform: translateY(-75vh) translateX(25px);
          }
          95% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-110vh) translateX(-10px);
            opacity: 0;
          }
        }
        .animate-float-bee {
          animation: float-bee linear infinite;
        }
      `}</style>
    </>
  )
}

function SmallBee({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50">
      {/* Wings */}
      <ellipse cx="15" cy="20" rx="8" ry="5" fill="rgba(255,255,255,0.6)" />
      <ellipse cx="35" cy="20" rx="8" ry="5" fill="rgba(255,255,255,0.6)" />
      {/* Body */}
      <ellipse cx="25" cy="28" rx="12" ry="10" fill="#FFD93D" />
      {/* Stripes */}
      <rect x="15" y="24" width="20" height="3" rx="1.5" fill="#2C2C2C" />
      <rect x="16" y="30" width="18" height="3" rx="1.5" fill="#2C2C2C" />
      {/* Head */}
      <circle cx="25" cy="16" r="7" fill="#FFD93D" />
      {/* Eyes */}
      <circle cx="22" cy="15" r="2" fill="#2C2C2C" />
      <circle cx="28" cy="15" r="2" fill="#2C2C2C" />
    </svg>
  )
}
