"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { PageLayout } from "@/components/page-layout"
import { ClayCard } from "@/components/clay-card"
import { PageNavigation } from "@/components/page-navigation"
import { BeeIcon } from "@/components/bee-icon"
import { Play, Pause, Volume2, VolumeX, Music, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// ============================================
// CUSTOMIZABLE CONSTANTS
// ============================================
const PAGE_TITLE = "Our Sweet Moments"
const PAGE_SUBTITLE = "A collection of memories that make my heart flutter"

const MEMORIES = [
  {
    id: 1,
    image: "/images/memory-1.jpg",
    caption: "Our first adventure together",
    song: "/music/song-1.mp3",
    songTitle: "Our Song",
  },
  {
    id: 2,
    image: "/images/memory-2.jpg",
    caption: "That magical summer day",
    song: "/music/song-2.mp3",
    songTitle: "Summer Memories",
  },
  {
    id: 3,
    image: "/images/memory-3.jpg",
    caption: "Cozy moments with you",
    song: "/music/song-3.mp3",
    songTitle: "Comfort Zone",
  },
  {
    id: 4,
    image: "/images/memory-4.jpg",
    caption: "Celebrating us",
    song: "/music/song-4.mp3",
    songTitle: "Celebration",
  },
  {
    id: 5,
    image: "/images/memory-5.jpg",
    caption: "Beach day bliss",
    song: "/music/song-5.mp3",
    songTitle: "Ocean Waves",
  },
  {
    id: 6,
    image: "/images/memory-6.jpg",
    caption: "Holiday magic",
    song: "/music/song-6.mp3",
    songTitle: "Winter Love",
  },
]

export default function MomentsPage() {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const currentMemory = selectedMemory !== null ? MEMORIES.find(m => m.id === selectedMemory) : null

  useEffect(() => {
    if (audioRef.current && currentMemory) {
      audioRef.current.src = currentMemory.song
      if (isPlaying) {
        audioRef.current.play().catch(() => {})
      }
    }
  }, [currentMemory, isPlaying])

  const handleMemoryClick = (id: number) => {
    if (selectedMemory === id) {
      setSelectedMemory(null)
      setIsPlaying(false)
    } else {
      setSelectedMemory(id)
      setIsPlaying(true)
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {})
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <PageLayout>
      <div className="flex flex-col items-center min-h-screen px-4 py-8">
        <audio ref={audioRef} loop />
        
        <div className="w-full max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <BeeIcon size="md" />
          </div>
          
          <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-2">
            {PAGE_TITLE}
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            {PAGE_SUBTITLE}
          </p>
          
          {/* Music Player Bar */}
          {currentMemory && (
            <ClayCard className="mb-8 p-4" variant="subtle">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full bg-primary flex items-center justify-center",
                    isPlaying && "animate-spin"
                  )} style={{ animationDuration: "3s" }}>
                    <Music className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{currentMemory.songTitle}</p>
                    <p className="text-sm text-muted-foreground">{currentMemory.caption}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-full bg-primary hover:bg-primary/90 transition-colors text-primary-foreground"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                  </button>
                </div>
              </div>
            </ClayCard>
          )}
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {MEMORIES.map((memory) => (
              <MemoryCard
                key={memory.id}
                memory={memory}
                isSelected={selectedMemory === memory.id}
                onClick={() => handleMemoryClick(memory.id)}
              />
            ))}
          </div>
          
          <ClayCard className="text-center" variant="subtle">
            <p className="text-muted-foreground text-sm mb-4">
              Tap on a memory to play its song
            </p>
            <PageNavigation
              prevHref="/poem"
              prevLabel="Back"
              nextHref="/proposal"
              nextLabel="Continue"
            />
          </ClayCard>
        </div>
      </div>
    </PageLayout>
  )
}

interface MemoryCardProps {
  memory: typeof MEMORIES[0]
  isSelected: boolean
  onClick: () => void
}

function MemoryCard({ memory, isSelected, onClick }: MemoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative aspect-square rounded-2xl overflow-hidden transition-all duration-300",
        "shadow-[4px_4px_8px_oklch(0.85_0.02_350),-4px_-4px_8px_oklch(1_0_0)]",
        isSelected && "ring-4 ring-primary shadow-[6px_6px_16px_oklch(0.82_0.02_350),-6px_-6px_16px_oklch(1_0_0)]",
        "hover:scale-[1.02] active:scale-[0.98]"
      )}
    >
      <Image
        src={memory.image || "/placeholder.svg"}
        alt={memory.caption}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      
      {/* Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent",
        "transition-opacity duration-300",
        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-white text-sm font-medium line-clamp-2">{memory.caption}</p>
          <div className="flex items-center gap-1 mt-1">
            <Music className="w-3 h-3 text-white/80" />
            <span className="text-white/80 text-xs">{memory.songTitle}</span>
          </div>
        </div>
      </div>
      
      {/* Play indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Music className="w-4 h-4 text-primary-foreground animate-pulse" />
        </div>
      )}
    </button>
  )
}
