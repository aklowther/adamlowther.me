import Image from 'next/image'
import type { Interest } from '@/lib/types'

/**
 * InterestsSection — Server Component
 *
 * Renders the Interests section as a list of topics the owner is
 * passionate about, with optional descriptions.
 * Returns null if the interests array is empty.
 *
 * @param interests - Array of Interest entries from lib/data/interests.ts
 */
export default function InterestsSection({ interests }: { interests: Interest[] }) {
  if (interests.length === 0) return null

  return (
    <section id="interests" className="px-6 py-16 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-white mb-8">Interests</h2>

      <ul className="flex flex-col gap-4" role="list">
        {interests.map((interest) => (
          <li
            key={interest.name}
            className="flex items-start gap-4 p-4 rounded-lg bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600/50 transition-colors duration-200"
          >
            {interest.image && (
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-700">
                <Image
                  src={interest.image}
                  alt={`${interest.name} icon`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            )}
            <div>
              <span className="text-white font-medium text-lg">{interest.name}</span>
              {interest.description && (
                <p className="text-zinc-400 text-sm mt-1">{interest.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
