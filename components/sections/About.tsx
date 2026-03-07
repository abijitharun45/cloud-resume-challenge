'use client'

import { GraduationCap, MapPin, Mail, Award, Target, Calendar } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { personalInfo, stats } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-20 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Passionate about architecting scalable cloud infrastructure and secure systems
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Info */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  I'm a final-year Computer Science Engineering student at {personalInfo.college}. 
                  My expertise lies in designing scalable AWS cloud infrastructure, developing AI-powered security systems, 
                  and automating deployment workflows. With hands-on experience building serverless applications and a strong 
                  foundation in systems engineering, I am fully equipped to solve complex technical challenges in a modern cloud environment.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Education</p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {personalInfo.college}
                    </p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {personalInfo.university}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Graduation</p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {personalInfo.graduation}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Focus Areas & Stats */}
          <FadeIn direction="right">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Learning Focus
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary">
                      Implementing scalable, serverless applications on AWS cloud infrastructure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary">
                      Developing machine learning models for network security and threat detection
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary">
                      Automating infrastructure and deployment workflows using Python, Bash, and CI/CD
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-light-text-secondary dark:text-dark-text-secondary">
                      Leveraging industry certifications (AWS CCP, Security+) to reinforce robust engineering practices
                    </span>
                  </li>
                </ul>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {stats.map((stat, index) => (
                  <FadeIn key={index} delay={0.1 * index}>
                    <div className="text-center p-4 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-bg-tertiary dark:border-dark-bg-tertiary">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {stat.value}+
                      </div>
                      <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                        {stat.label}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
