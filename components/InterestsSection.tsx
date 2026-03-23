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
          <li key={interest.name}>
            <span className="text-white font-medium">{interest.name}</span>
            {interest.description && (
              <p className="text-zinc-400 text-sm mt-0.5">{interest.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
