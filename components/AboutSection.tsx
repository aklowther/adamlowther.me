import Image from 'next/image'
import type { OwnerProfile } from '@/lib/types'

/**
 * AboutSection — Server Component
 *
 * Renders the About section with the owner's avatar, name, title,
 * bio, and optional location.
 *
 * @param profile - The owner's profile data
 */
export default function AboutSection({ profile }: { profile: OwnerProfile }) {
  return (
    <section id="about" className="px-6 py-16 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-white mb-8">About</h2>

      <div className="flex flex-col sm:flex-row gap-6 items-start">
        {profile.devPhotoPath && (
          <Image
            src={profile.devPhotoPath}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-full object-cover shrink-0"
          />
        )}

        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{profile.name}</h3>
          <p className="text-zinc-400 mb-4">{profile.title}</p>
          <p className="text-zinc-300 leading-relaxed max-w-xl">{profile.leaderBio}</p>
          <br></br>
          <p className="text-zinc-300 leading-relaxed max-w-xl">{profile.devBio}</p>

          {profile.location && (
            <p className="text-sm text-zinc-500 mt-3">📍 {profile.location}</p>
          )}
        </div>
      </div>
    </section>
  )
}
