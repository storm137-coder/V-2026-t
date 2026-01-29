"use client"

import { ClayButton } from "./clay-button"

interface PageNavigationProps {
  prevHref?: string
  prevLabel?: string
  nextHref?: string
  nextLabel?: string
}

export function PageNavigation({
  prevHref,
  prevLabel = "Back",
  nextHref,
  nextLabel = "Continue",
}: PageNavigationProps) {
  return (
    <div className="flex items-center justify-between w-full max-w-md mx-auto pt-8">
      {prevHref ? (
        <ClayButton href={prevHref} variant="secondary" icon="arrow-left">
          {prevLabel}
        </ClayButton>
      ) : (
        <div />
      )}
      
      {nextHref && (
        <ClayButton href={nextHref} variant="primary" icon="arrow-right">
          {nextLabel}
        </ClayButton>
      )}
    </div>
  )
}
