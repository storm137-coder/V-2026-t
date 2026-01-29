"use client"

import React from "react"

import { forwardRef } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Heart, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface ClayButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "accent"
  icon?: "arrow-right" | "arrow-left" | "heart" | "sparkles" | "none"
  className?: string
  disabled?: boolean
}

const iconMap = {
  "arrow-right": ArrowRight,
  "arrow-left": ArrowLeft,
  heart: Heart,
  sparkles: Sparkles,
  none: null,
}

export const ClayButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ClayButtonProps>(
  ({ children, href, onClick, variant = "primary", icon = "arrow-right", className, disabled }, ref) => {
    const Icon = icon !== "none" ? iconMap[icon] : null

    const baseStyles = cn(
      "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-semibold text-base",
      "transition-all duration-200 ease-out",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      className
    )

    const variantStyles = {
      primary: cn(
        "bg-primary text-primary-foreground",
        "shadow-[4px_4px_8px_oklch(0.6_0.12_350),-2px_-2px_6px_oklch(0.82_0.12_350),inset_1px_1px_2px_oklch(0.82_0.1_350)]",
        "hover:shadow-[6px_6px_12px_oklch(0.6_0.12_350),-3px_-3px_8px_oklch(0.82_0.12_350),inset_1px_1px_2px_oklch(0.82_0.1_350)]",
        "hover:-translate-y-0.5",
        "active:translate-y-0.5",
        "active:shadow-[2px_2px_4px_oklch(0.6_0.12_350),-1px_-1px_3px_oklch(0.82_0.12_350),inset_2px_2px_4px_oklch(0.6_0.12_350)]"
      ),
      secondary: cn(
        "bg-secondary text-secondary-foreground",
        "shadow-[4px_4px_8px_oklch(0.85_0.02_350),-2px_-2px_6px_oklch(1_0_0),inset_1px_1px_2px_oklch(1_0_0)]",
        "hover:shadow-[6px_6px_12px_oklch(0.85_0.02_350),-3px_-3px_8px_oklch(1_0_0),inset_1px_1px_2px_oklch(1_0_0)]",
        "hover:-translate-y-0.5",
        "active:translate-y-0.5",
        "active:shadow-[2px_2px_4px_oklch(0.85_0.02_350),-1px_-1px_3px_oklch(1_0_0),inset_2px_2px_4px_oklch(0.88_0.02_350)]"
      ),
      accent: cn(
        "bg-accent text-accent-foreground",
        "shadow-[4px_4px_8px_oklch(0.7_0.1_85),-2px_-2px_6px_oklch(0.92_0.08_85),inset_1px_1px_2px_oklch(0.92_0.06_85)]",
        "hover:shadow-[6px_6px_12px_oklch(0.7_0.1_85),-3px_-3px_8px_oklch(0.92_0.08_85),inset_1px_1px_2px_oklch(0.92_0.06_85)]",
        "hover:-translate-y-0.5",
        "active:translate-y-0.5",
        "active:shadow-[2px_2px_4px_oklch(0.7_0.1_85),-1px_-1px_3px_oklch(0.92_0.08_85),inset_2px_2px_4px_oklch(0.72_0.1_85)]"
      ),
    }

    const content = (
      <>
        <span>{children}</span>
        {Icon && <Icon className="w-4 h-4" />}
      </>
    )

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, variantStyles[variant])}
          ref={ref as React.Ref<HTMLAnchorElement>}
        >
          {content}
        </Link>
      )
    }

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant])}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        {content}
      </button>
    )
  }
)

ClayButton.displayName = "ClayButton"
