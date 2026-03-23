import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/types'

/**
 * ProjectsSection — Server Component
 *
 * Renders the projects showcase section on the homepage.
 * Each project can optionally display a thumbnail image (using next/image).
 * Returns null if the projects array is empty (section is hidden).
 *
 * @param projects - Array of Project entries from lib/data/projects.ts
 */
export default function ProjectsSection({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null

  return (
    <section id="projects" className="px-6 py-16 max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-semibold text-white mb-8">Projects</h2>
      <ul className="flex flex-col gap-8" role="list">
        {projects.map((project) => (
          <li key={project.id} className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50">
            {project.imagePath && (
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={project.imagePath}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) =>
                    link.isExternal ? (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-white underline underline-offset-2 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
