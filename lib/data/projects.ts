import type { Project } from '@/lib/types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Appli-Track',
    description: 'An iOS/macOS application that helps users track job applications.  Built with SwiftUI and CloudKit, it provides a clean interface for managing job applications, including features like status tracking, notes, and reminders.',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/appli-track/id6758948784', isExternal: true },
      { label: 'Marketing', href: 'https://applitrack.me', isExternal: true },
    ],
    tags: ['Swift / SwiftUI', 'CloudKit', 'Foundation Models'],
    imagePath: "/images/chatgpt_applitrack1_2.png",
  },
]
