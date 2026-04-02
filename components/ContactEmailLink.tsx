'use client'

import { useSearchParams } from 'next/navigation'

export default function ContactEmailLink({
  email,
  appsEmail,
}: {
  email: string
  appsEmail?: string
}) {
  const searchParams = useSearchParams()
  const useAppsEmail = searchParams.get('apps') === 'true'
  const displayEmail = useAppsEmail && appsEmail ? appsEmail : email

  return (
    <a
      href={`mailto:${displayEmail}`}
      className="text-zinc-300 hover:text-white underline underline-offset-2 transition-colors"
      aria-label={`Email ${displayEmail}`}
    >
      {displayEmail}
    </a>
  )
}

