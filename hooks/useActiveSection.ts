'use client'

import { useState, useEffect } from 'react'

/**
 * useActiveSection — Client-side hook
 *
 * Uses IntersectionObserver to track which section is currently visible
 * in the viewport. Returns the id of the active section.
 *
 * @param sectionIds - Ordered array of section element id values
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        // Trigger when section enters the top 30% of the viewport
        rootMargin: '-10% 0px -70% 0px',
        threshold: 0,
      }
    )

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
