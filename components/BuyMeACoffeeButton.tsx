'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function BuyMeACoffeeButton() {
  const searchParams = useSearchParams()

  if (searchParams.get('bmac1') !== 'true') {
    return null
  }

  return (
    <a
      href="https://www.buymeacoffee.com/aklowther"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
        alt="Buy Me A Coffee"
        width={217}
        height={60}
      />
    </a>
  )
}
