'use client'

import { Mail, Send } from 'lucide-react'
import FadeIn from '@/components/animations/FadeIn'
import { personalInfo } from '@/lib/data'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
            </p>
          </div>
        </FadeIn>

        <div className="max-w-xl mx-auto text-center">
          <FadeIn delay={0.2}>
            <div className="p-8 md:p-12 rounded-2xl bg-light-bg dark:bg-dark-bg border border-light-bg-tertiary dark:border-dark-bg-tertiary shadow-sm">
              <Mail className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">
                I'm currently looking for new opportunities in Cloud Infrastructure, Systems Engineering, and DevOps. Whether you have a question or just want to say hi, my inbox is always open!
              </p>
              
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-dark-bg font-bold hover:bg-primary/90 hover:-translate-y-1 transition-all mb-6"
              >
                <Send className="w-5 h-5" />
                Say Hello
              </a>

              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary pt-4 border-t border-light-bg-tertiary dark:border-dark-bg-tertiary">
                or email me directly at:{' '}
                <span className="font-semibold text-light-text dark:text-dark-text select-all">
                  {personalInfo.email}
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

