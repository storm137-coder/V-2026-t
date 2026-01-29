"use client"

import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Feather } from "lucide-react"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const POEM_TITLE = "A Poem For You"
const POEM_LINES = [
  "Like a bee to a flower, I'm drawn to your light,",
  "You make every dark day feel perfectly bright.",
  "Your sweetness, your warmth, your beautiful soul,",
  "With you by my side, I finally feel whole.",
  "",
  "Through gardens of love, we'll dance and we'll play,",
  "Creating sweet memories every single day.",
  "My heart hums a melody only you hear,",
  "A song full of love, so precious and dear.",
  "",
  "So here's to us, my darling, my sweet,",
  "With you in my life, my world is complete.",
  "Like honey so golden, our love will stay true,",
  "Forever and always, I'll bee there for you.",
]
const POEM_AUTHOR = "— With all my love"

export default function PoemPage() {
  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <ClayCard className="max-w-lg w-full" variant="elevated">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <BeeIcon size="md" animated={false} />
              <Feather className="absolute -bottom-1 -right-1 w-5 h-5 text-primary" />
            </div>
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-8">
            {POEM_TITLE}
          </h1>
          
          <div className="bg-secondary/50 rounded-2xl p-6 md:p-8 mb-6">
            <div className="space-y-2 text-center">
              {POEM_LINES.map((line, i) => (
                <p
                  key={i}
                  className={`font-serif text-lg md:text-xl ${
                    line === "" ? "h-4" : "text-foreground"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            
            <p className="text-right mt-6 text-muted-foreground italic">
              {POEM_AUTHOR}
            </p>
          </div>
          
          <PageNavigation
            prevHref="/greeting"
            prevLabel="Back"
            nextHref="/moments"
            nextLabel="Our Moments"
          />
        </ClayCard>
      </div>
    </PageLayout>
  )
}
