'use client'

import { Briefcase, Calendar, MapPin } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { experiences } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Professional journey and training in cybersecurity
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-light-bg-secondary dark:border-dark-bg-secondary" />

                {/* Content Card */}
                <div className="p-6 rounded-xl bg-light-bg dark:bg-dark-bg border border-light-bg-tertiary dark:border-dark-bg-tertiary hover:border-primary transition-all">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-light-text-secondary dark:text-dark-text-secondary">
                        <span className="text-primary mt-1.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
