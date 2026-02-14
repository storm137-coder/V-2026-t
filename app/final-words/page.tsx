"use client"

import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Heart, Star } from "lucide-react"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const TITLE = "My Final Words"
const PARAGRAPHS = [
  "If you've made it this far, I hope you know just how much you mean to me. Every word here was written with you in my heart and sadness on my face.",
  "You are my sunshine on cloudy days, my comfort when times get tough, and my reason to smile every single morning. I was so incredibly grateful that you're in my life.",
  "No matter what tomorrow brings, I want you to know that my love for you is as constant as the stars in the sky. You've made my world brighter just by being in it.",
  "Thank you for being you. Thank you for loving me. Thank you for making every day feel like an adventure worth living. i really hope you will fix things again "  ,
]
const SIGNATURE = "Forever yours,"
const NAME = "Your Big Bee"

export default function FinalWordsPage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <ClayCard className="max-w-lg w-full" variant="elevated">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BeeIcon size="lg" />
              <div className="absolute -top-1 -right-1 flex gap-0.5">
                <Star className="w-4 h-4 text-accent fill-accent" />
              </div>
            </div>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-8">
            {TITLE}
          </h1>
          
          <div className="space-y-4 mb-8">
            {PARAGRAPHS.map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed text-center">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-border" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="h-px w-16 bg-border" />
          </div>
          
          <div className="text-center mb-8">
            <p className="text-muted-foreground italic">{SIGNATURE}</p>
            <p className="font-serif text-2xl text-primary mt-2">{NAME}</p>
          </div>
          
          <PageNavigation
            prevHref="/proposal"
            prevLabel="Back"
            nextHref="/what-are-we"
            nextLabel="One More Thing"
          />
        </ClayCard>
      </div>
    </PageLayout>
  )
}
