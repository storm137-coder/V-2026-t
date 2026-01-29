"use client"

import React from "react"

import { HoneycombBackground } from "./honeycomb-background"
import { cn } from "@/lib/utils"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <main className={cn("relative min-h-screen overflow-x-hidden", className)}>
      <HoneycombBackground />
      <div className="relative z-10">
        {children}
      </div>
    </main>
  )
}
