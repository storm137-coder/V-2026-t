"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { ClayButton } from "@/components/clay-button"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Heart, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const PROPOSAL_QUESTION = "Will you bee mine?"
const PROPOSAL_MESSAGE = "I know this might seem silly, but every moment with you feels like magic. You make my heart flutter like a bee in a garden of flowers. So I have to ask..."
const YES_RESPONSE = "You just made me the happiest bee in the world!"
const NO_RESPONSE = "That's okay... I'll keep buzzing around, hoping you'll change your mind!"

export default function ProposalPage() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200
    const randomY = (Math.random() - 0.5) * 100
    setNoButtonPosition({ x: randomX, y: randomY })
  }

  if (answer === "yes") {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
          <ClayCard className="max-w-md w-full text-center" variant="elevated">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <BeeIcon size="xl" />
                <div className="absolute -top-2 -right-2">
                  <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
                </div>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">
              Yay!
            </h1>
            
            <p className="text-foreground text-lg mb-8 leading-relaxed">
              {YES_RESPONSE}
            </p>
            
            {/* Celebration hearts */}
            <div className="flex justify-center gap-4 mb-8">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-6 h-6 text-primary fill-primary animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            
            <ClayButton href="/final-words" icon="heart">
              Continue
            </ClayButton>
          </ClayCard>
        </div>
      </PageLayout>
    )
  }

  if (answer === "no") {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
          <ClayCard className="max-w-md w-full text-center" variant="elevated">
            <div className="flex justify-center mb-6">
              <BeeIcon size="xl" animated={false} />
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Oh no...
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {NO_RESPONSE}
            </p>
            
            <div className="flex flex-col gap-4">
              <ClayButton onClick={() => setAnswer(null)} icon="heart">
                Let me think again
              </ClayButton>
              <ClayButton href="/final-words" variant="secondary" icon="arrow-right">
                Continue anyway
              </ClayButton>
            </div>
          </ClayCard>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <ClayCard className="max-w-md w-full text-center" variant="elevated">
          <div className="flex justify-center mb-6">
            <BeeIcon size="lg" />
          </div>
          
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {PROPOSAL_MESSAGE}
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            {PROPOSAL_QUESTION}
          </h1>
          
          <div className="flex items-center justify-center gap-6 min-h-[80px] relative">
            <button
              onClick={() => setAnswer("yes")}
              className={cn(
                "flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg",
                "bg-primary text-primary-foreground",
                "shadow-[4px_4px_8px_oklch(0.6_0.12_350),-2px_-2px_6px_oklch(0.82_0.12_350),inset_1px_1px_2px_oklch(0.82_0.1_350)]",
                "hover:shadow-[6px_6px_12px_oklch(0.6_0.12_350),-3px_-3px_8px_oklch(0.82_0.12_350)]",
                "hover:-translate-y-1 active:translate-y-0.5 transition-all duration-200"
              )}
            >
              <Check className="w-5 h-5" />
              Yes!
            </button>
            
            <button
              onClick={() => setAnswer("no")}
              onMouseEnter={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              }}
              className={cn(
                "flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg",
                "bg-secondary text-secondary-foreground",
                "shadow-[4px_4px_8px_oklch(0.85_0.02_350),-2px_-2px_6px_oklch(1_0_0)]",
                "hover:shadow-[6px_6px_12px_oklch(0.85_0.02_350),-3px_-3px_8px_oklch(1_0_0)]",
                "transition-all duration-300"
              )}
            >
              <X className="w-5 h-5" />
              No
            </button>
          </div>
          
          <div className="mt-8">
            <PageNavigation
              prevHref="/moments"
              prevLabel="Back"
            />
          </div>
        </ClayCard>
      </div>
    </PageLayout>
  )
}
