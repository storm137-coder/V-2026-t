"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { ClayButton } from "@/components/clay-button"
import { BeeIcon } from "@/components/bee-icon"
import { Heart, Sparkles } from "lucide-react"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const RECIPIENT_NAME = "My Honey"
const TAGLINE = "I made something special for you..."

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => setShowContent(true), 300)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div
          className={`transition-all duration-700 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ClayCard className="max-w-md w-full text-center" variant="elevated">
            <div className="flex justify-center mb-6">
              <BeeIcon size="xl" />
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-2">
              Hey there,
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
              MY LOVE 
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {TAGLINE}
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <Heart className="w-4 h-4 text-primary animate-pulse" />
              <Sparkles className="w-4 h-4 text-accent" />
              <Heart className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            </div>
            
            <ClayButton href="/greeting" icon="heart">
              Open Your Gift
            </ClayButton>
          </ClayCard>
        </div>
      </div>
    </PageLayout>
  )
}

function LoadingScreen() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 400)
    return () => clearInterval(interval)
  }, [])

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="relative">
          <BeeIcon size="xl" animated />
          
          {/* Flying trail */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-accent/40"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  opacity: 1 - i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
        
        <p className="mt-8 text-lg text-muted-foreground font-medium">
          Buzzing with love{dots}
        </p>
      </div>
    </PageLayout>
  )
}
