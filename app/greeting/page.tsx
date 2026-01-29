"use client"

import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Heart } from "lucide-react"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const GREETING_TITLE = "Hello, My Sweet Honey!"
const GREETING_MESSAGE = `Every day with you feels like a beautiful dream I never want to wake up from. Your smile lights up my world, and your laughter is the sweetest melody I've ever heard.

I wanted to create something special just for you — a little digital garden where I can express all the things my heart holds for you.

So take your time, explore each page, and know that every word here comes straight from my heart to yours.`

export default function GreetingPage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <ClayCard className="max-w-lg w-full" variant="elevated">
          <div className="flex justify-center mb-4">
            <BeeIcon size="lg" />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-primary" />
            <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center">
              {GREETING_TITLE}
            </h1>
            <Heart className="w-5 h-5 text-primary" />
          </div>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
            {GREETING_MESSAGE.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          
          <PageNavigation
            prevHref="/"
            prevLabel="Home"
            nextHref="/poem"
            nextLabel="Read Poem"
          />
        </ClayCard>
      </div>
    </PageLayout>
  )
}
