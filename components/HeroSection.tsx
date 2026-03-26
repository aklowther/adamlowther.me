import { Suspense } from 'react'
import type { OwnerProfile } from '@/lib/types'
import Image from 'next/image'
import BuyMeACoffeeButton from '@/components/BuyMeACoffeeButton'

/**
 * HeroSection — Server Component
 *
 * Renders the landing hero section. Displays the owner's name, tagline,
 * and call-to-action buttons. Intentionally minimal to create a strong
 * first impression above the fold.
 *
 * @param profile - The owner's profile data; uses name and tagline
 */
export default function HeroSection({ profile }: { profile: OwnerProfile }) {
  return (
    <section
      id="hero"
      className="px-6 py-16 max-w-3xl mx-auto w-full flex flex-col justify-center min-h-[55vh]"
    >
      <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4 flex items-center gap-4">
        {profile.name}
        {profile.avatarPath && (
          <Image
            src={profile.avatarPath}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-full object-cover shrink-0"
          />
        )}
      </h1>

      {profile.tagline && (
        <p className="text-xl sm:text-2xl text-zinc-400 mb-8 max-w-xl">
          {profile.tagline}
        </p>
      )}

      <div className="flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 font-medium text-sm hover:border-zinc-500 hover:text-white transition-colors"
        >
          Get in Touch
        </a>
        <Suspense fallback={null}>
          <BuyMeACoffeeButton />
        </Suspense>
      </div>
    </section>
  )
}
