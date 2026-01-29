"use client"

import { cn } from "@/lib/utils"

interface BeeIconProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animated?: boolean
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
}

export function BeeIcon({ size = "md", className, animated = true }: BeeIconProps) {
  return (
    <div className={cn(sizes[size], className)}>
      <svg
        viewBox="0 0 120 120"
        className={cn("w-full h-full", animated && "animate-bounce")}
        style={animated ? { animationDuration: "2s" } : undefined}
      >
        {/* Wings */}
        <ellipse
          cx="35"
          cy="45"
          rx="18"
          ry="12"
          fill="rgba(255,255,255,0.8)"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDuration: "0.15s" } : undefined}
        />
        <ellipse
          cx="85"
          cy="45"
          rx="18"
          ry="12"
          fill="rgba(255,255,255,0.8)"
          className={animated ? "animate-pulse" : ""}
          style={animated ? { animationDuration: "0.15s" } : undefined}
        />

        {/* Body */}
        <ellipse cx="60" cy="60" rx="30" ry="25" fill="#FFD93D" />

        {/* Stripes */}
        <rect x="35" y="50" width="50" height="6" rx="3" fill="#2C2C2C" />
        <rect x="38" y="62" width="44" height="6" rx="3" fill="#2C2C2C" />

        {/* Head */}
        <circle cx="60" cy="35" r="18" fill="#FFD93D" />

        {/* Eyes */}
        <circle cx="52" cy="32" r="6" fill="white" />
        <circle cx="68" cy="32" r="6" fill="white" />
        <circle cx="53" cy="33" r="3" fill="#2C2C2C" />
        <circle cx="69" cy="33" r="3" fill="#2C2C2C" />

        {/* Cheeks (blushing) */}
        <circle cx="45" cy="38" r="4" fill="#FFB6C1" opacity="0.7" />
        <circle cx="75" cy="38" r="4" fill="#FFB6C1" opacity="0.7" />

        {/* Smile */}
        <path
          d="M 52 42 Q 60 50 68 42"
          stroke="#2C2C2C"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Antennae */}
        <path
          d="M 50 20 Q 45 10 40 8"
          stroke="#2C2C2C"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 70 20 Q 75 10 80 8"
          stroke="#2C2C2C"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="40" cy="8" r="4" fill="#FF69B4" />
        <circle cx="80" cy="8" r="4" fill="#FF69B4" />

        {/* Stinger */}
        <ellipse cx="60" cy="88" rx="8" ry="5" fill="#2C2C2C" />
      </svg>
    </div>
  )
}
