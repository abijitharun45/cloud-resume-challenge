'use client'

import { Shield, Cloud, Database, ShieldCheck, Laptop, Bug, Award, CheckCircle2, Clock, ExternalLink, Brain } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { certifications, achievements } from '@/lib/data'

const iconMap: Record<string, any> = {
  Shield,
  Cloud,
  Database,
  ShieldCheck,
  Laptop,
  Bug,
  Award,
  Brain,
  Trophy: Award,
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Professional credentials and industry recognition
            </p>
          </div>
        </FadeIn>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon]
            
            return (
              <FadeIn key={cert.id} delay={0.1 * index}>
                <div className="p-6 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary hover:border-primary transition-all group h-full flex flex-col">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-3">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {cert.date}
                    </span>
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-2 font-mono bg-light-bg-tertiary dark:bg-dark-bg-tertiary px-2 py-1 rounded inline-block">
                      ID: {cert.credentialId}
                    </p>
                  )}
                  
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors w-fit"
                    >
                      Show credential <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Achievements */}
        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Notable Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = iconMap[achievement.icon]
                
                return (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary hover:border-primary transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{achievement.title}</h4>
                        <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2">
                          {achievement.description}
                        </p>
                        <span className="text-xs text-primary">{achievement.year}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
