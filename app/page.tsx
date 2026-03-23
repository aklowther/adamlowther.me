import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import InterestsSection from '@/components/InterestsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'

import { profile } from '@/lib/data/profile'
import { interests } from '@/lib/data/interests'
import { projects } from '@/lib/data/projects'
import { services } from '@/lib/data/services'
import { socialLinks } from '@/lib/data/socialLinks'

const SECTION_IDS = ['hero', 'about', 'interests', 'projects', 'services', 'contact']

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Nav sectionIds={SECTION_IDS} />
      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ProjectsSection projects={projects} />
        <ServicesSection services={services} />
        <InterestsSection interests={interests} />
        <ContactSection profile={profile} socialLinks={socialLinks} />
      </main>
    </div>
  )
}
