export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
  comingSoon?: boolean
  details: string[]
}

export interface Skill {
  name: string
  level?: number
}

export interface SkillCategory {
  icon: string
  title: string
  skills: Skill[]
}

export interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  verified?: boolean
  pursuing?: boolean
  icon: string
  color: string
}

export interface Achievement {
  title: string
  description: string
  year: string
  icon: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
