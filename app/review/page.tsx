"use client"

import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { ClayButton } from "@/components/clay-button"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Heart, MessageCircle, Instagram, Send, Star } from "lucide-react"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const TITLE = "One Last Thing..."
const MESSAGE = "I really hope you enjoyed this little surprise I made for you. It would mean the world to me if you could tell me what you think!"
const INSTAGRAM_HANDLE = "@GAGAN_S_137"
const INSTAGRAM_PROMPT = "Send me a message on Instagram with your thoughts, reactions, or just a sweet reply!"
const THANK_YOU_MESSAGE = "Thank you for taking this journey with me. You make my heart so happy!"

export default function ReviewPage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <ClayCard className="max-w-lg w-full" variant="elevated">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <BeeIcon size="lg" />
              <div className="absolute -bottom-1 -right-1">
                <MessageCircle className="w-6 h-6 text-primary fill-primary" />
              </div>
            </div>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">
            {TITLE}
          </h1>
          
          <p className="text-muted-foreground text-center mb-8 leading-relaxed">
            {MESSAGE}
          </p>
          
          {/* Instagram CTA */}
          <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-primary" />
              <span className="font-serif text-2xl text-foreground">{INSTAGRAM_HANDLE}</span>
            </div>
            
            <p className="text-muted-foreground text-center text-sm mb-4">
              {INSTAGRAM_PROMPT}
            </p>
            
            {/* Suggestion prompts */}
            <div className="flex flex-wrap justify-center gap-2">
              {["Loved it!", "So sweet!", "Made me smile", "Beautiful!"].map((prompt) => (
                <span
                  key={prompt}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card text-sm text-muted-foreground shadow-sm"
                >
                  <Heart className="w-3 h-3 text-primary" />
                  {prompt}
                </span>
              ))}
            </div>
          </div>
          
          {/* Rating stars - decorative */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-accent fill-accent"
              />
            ))}
          </div>
          
          <p className="text-center text-foreground font-medium mb-8">
            {THANK_YOU_MESSAGE}
          </p>
          
          {/* Final message */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              <span className="font-serif text-lg text-primary">Forever & Always</span>
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            </div>
          </div>
          
          <PageNavigation
            prevHref="/what-are-we"
            prevLabel="Back"
          />
          
          {/* Return to start */}
          <div className="flex justify-center mt-6">
            <ClayButton href="/" variant="secondary" icon="heart">
              Start Over
            </ClayButton>
          </div>
        </ClayCard>
      </div>
    </PageLayout>
  )
}
