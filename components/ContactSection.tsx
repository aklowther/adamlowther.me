import type { OwnerProfile, SocialLink } from '@/lib/types'
import { Suspense } from 'react'
import ContactEmailLink from '@/components/ContactEmailLink'

/**
 * ContactSection — Server Component
 *
 * Renders the contact section with a mailto email link and a prominent
 * LinkedIn profile link. Additional social links are shown below.
 *
 * Email link does NOT use target="_blank".
 * LinkedIn and social links open in a new tab.
 *
 * @param profile - Owner profile; uses profile.email and profile.linkedInUrl
 * @param socialLinks - Array of additional social/professional profile links
 */
export default function ContactSection({
  profile,
  socialLinks,
}: {
  profile: OwnerProfile
  socialLinks: SocialLink[]
}) {
  return (
    <section id="contact" className="px-6 py-16 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-white mb-8">Contact</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 items-center">
          <Suspense
            fallback={
              <a
                href={`mailto:${profile.email}`}
                className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
                aria-label={`Email ${profile.email}`}
              >
                {profile.email}
              </a>
            }
          >
            <ContactEmailLink email={profile.email} appsEmail={profile.appsEmail} />
          </Suspense>

          <a
            href={profile.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
        </div>

        {socialLinks.length > 0 && (
          <div className="flex flex-wrap gap-4 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors text-sm"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
