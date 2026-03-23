import type { Service } from '@/lib/types'

/**
 * ServicesSection — Server Component
 *
 * Renders the Services section as a list of professional offerings,
 * each with a name and description.
 * Returns null if the services array is empty.
 *
 * @param services - Array of Service entries from lib/data/services.ts
 */
export default function ServicesSection({ services }: { services: Service[] }) {
  if (services.length === 0) return null

  return (
    <section id="services" className="px-6 py-16 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-white mb-8">Services</h2>

      <ul className="flex flex-col gap-6" role="list">
        {services.map((service) => (
          <li
            key={service.name}
            className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/50"
          >
            <h3 className="text-base font-semibold text-white mb-1">{service.name}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
