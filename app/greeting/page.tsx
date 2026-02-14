"use client"

import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Heart } from "lucide-react"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const GREETING_TITLE = "Hello, Yeddiii"
const GREETING_MESSAGE = `i dont know why i am doing this i thought of deleting everything but i could not bring myself doing it , But i did make some changes this was not what 
i wrote or created for you , it was very sweet and lovely i hope you will like this one too `

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
