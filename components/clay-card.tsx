"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface ClayCardProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "elevated" | "subtle"
}

export function ClayCard({ children, className, variant = "default" }: ClayCardProps) {
  const variantStyles = {
    default: cn(
      "bg-card",
      "shadow-[8px_8px_16px_oklch(0.85_0.02_350),-8px_-8px_16px_oklch(1_0_0),inset_1px_1px_2px_oklch(1_0_0)]"
    ),
    elevated: cn(
      "bg-card",
      "shadow-[12px_12px_24px_oklch(0.82_0.02_350),-12px_-12px_24px_oklch(1_0_0),inset_2px_2px_4px_oklch(1_0_0)]"
    ),
    subtle: cn(
      "bg-card/80",
      "shadow-[4px_4px_8px_oklch(0.88_0.02_350),-4px_-4px_8px_oklch(1_0_0),inset_1px_1px_2px_oklch(1_0_0)]"
    ),
  }

  return (
    <div
      className={cn(
        "rounded-3xl p-6 md:p-8",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  )
}
