export interface OwnerProfile {
  name: string
  title: string
  tagline?: string
  devBio: string
  leaderBio: string
  email: string
  linkedInUrl: string
  avatarPath?: string
  leaderPhotoPath?: string
  devPhotoPath?: string
  location?: string
}

export interface Interest {
  name: string
  description?: string
  image?: string
}

export interface ProjectLink {
  label: string
  href: string
  isExternal: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  links: ProjectLink[]
  tags?: string[]
  imagePath?: string
}

export interface SocialLink {
  platform: string
  href: string
}

export interface Service {
  name: string
  description: string
  color?: string
}
