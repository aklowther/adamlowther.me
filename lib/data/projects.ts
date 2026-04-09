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
    {
    id: 'project-2',
    title: 'Catan Trainer',
    description: 'A randomized setup generator for the popular board game Catan.  Built with .NET and React, it provides players with unique board configurations to enable practicing their opening strategies.',
    links: [
      { label: 'GitHub', href: 'https://github.com/aklowther/CatanStarter', isExternal: true },
    ],
    tags: ['.NET', 'React'],
    imagePath: "/images/catan.png",
  },
]
