"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { ClayButton } from "@/components/clay-button"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Heart, Users, Sparkles, Crown } from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const TITLE = "So... What Are We?"
const SUBTITLE = "I think it's time we put a label on this beautiful thing we have"

const OPTIONS = [
  {
    id: "sweethearts",
    label: "Sweethearts",
    icon: Heart,
    description: "Two hearts, one love",
  },
  {
    id: "partners",
    label: "Best Friends",
    icon: Users,
    description: "Best friends + more",
  },
  {
    id: "soulmates",
    label: "Soulmates",
    icon: Sparkles,
    description: "Girlfriend and Boyfriend",
  },
  {
    id: "royalty",
    label: "Nothing anymore",
    icon: Heart,
    description: "Done with me ",
  },
]

const SELECTED_MESSAGE = "I love that! Whatever we call it, what matters is that we're together or not ."

export default function WhatAreWePage() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <ClayCard className="max-w-lg w-full" variant="elevated">
          <div className="flex justify-center mb-4">
            <BeeIcon size="lg" />
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-2">
            {TITLE}
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            {SUBTITLE}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {OPTIONS.map((option) => {
              const Icon = option.icon
              const isSelected = selected === option.id
              
              return (
                <button
                  key={option.id}
                  onClick={() => setSelected(option.id)}
                  className={cn(
                    "p-4 rounded-2xl text-left transition-all duration-300",
                    "shadow-[4px_4px_8px_oklch(0.85_0.02_350),-4px_-4px_8px_oklch(1_0_0),inset_1px_1px_2px_oklch(1_0_0)]",
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-[6px_6px_12px_oklch(0.6_0.12_350),-6px_-6px_12px_oklch(0.82_0.12_350)]"
                      : "bg-card hover:bg-secondary/50",
                    "hover:-translate-y-0.5 active:translate-y-0"
                  )}
                >
                  <Icon className={cn(
                    "w-6 h-6 mb-2",
                    isSelected ? "text-primary-foreground" : "text-primary"
                  )} />
                  <p className={cn(
                    "font-semibold",
                    isSelected ? "text-primary-foreground" : "text-foreground"
                  )}>
                    {option.label}
                  </p>
                  <p className={cn(
                    "text-sm",
                    isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                  )}>
                    {option.description}
                  </p>
                </button>
              )
            })}
          </div>
          
          {selected && (
            <div className="bg-secondary/50 rounded-2xl p-4 mb-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
              <p className="text-foreground">{SELECTED_MESSAGE}</p>
            </div>
          )}
          
          <PageNavigation
            prevHref="/final-words"
            prevLabel="Back"
            nextHref="/review"
            nextLabel="Almost Done"
          />
        </ClayCard>
      </div>
    </PageLayout>
  )
}
