'use client'

import { Code, Brain, Cloud, Shield, Server, Network, Terminal } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { skillCategories } from '@/lib/data'

const iconMap: Record<string, any> = {
  Code,
  Brain,
  Cloud,
  Shield,
  Server,
  Network,
  Terminal, // Added new icon for new category
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Technical proficiencies across cloud infrastructure, automation, and systems engineering
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon] || Code // Fallback icon

            return (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-bg-tertiary dark:border-dark-bg-tertiary hover:border-primary transition-all group h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-sm font-medium border border-transparent hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
