'use client'

import { useActiveSection } from '@/hooks/useActiveSection'

/** Maps section IDs to human-readable nav labels */
const SECTION_LABELS: Record<string, string> = {
  hero: 'Home',
  about: 'About',
  interests: 'Interests',
  projects: 'Projects',
  services: 'Services',
  contact: 'Contact',
}

/**
 * Nav — Client Component
 *
 * Sticky in-page navigation header. Provides smooth-scroll links to each
 * homepage section and highlights the currently visible section.
 * Supports horizontal scrolling on mobile for all 6 navigation items.
 *
 * @param sectionIds - Ordered array of section element id values
 */
export default function Nav({ sectionIds }: { sectionIds: string[] }) {
  const activeId = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
      <nav
        aria-label="Page navigation"
        className="max-w-3xl mx-auto px-6 py-3 flex gap-6 items-center overflow-x-auto scrollbar-none"
      >
        {sectionIds.map((id) => {
          const isActive = id === activeId
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={isActive ? 'true' : undefined}
              className={[
                'text-sm transition-colors whitespace-nowrap',
                isActive
                  ? 'text-white font-medium'
                  : 'text-zinc-500 hover:text-zinc-300',
              ].join(' ')}
            >
              {SECTION_LABELS[id] ?? id}
            </a>
          )
        })}
      </nav>
    </header>
  )
}
