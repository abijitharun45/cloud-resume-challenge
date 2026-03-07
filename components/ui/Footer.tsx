import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import ViewCounter from '@/components/ViewCounter';
import { personalInfo } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-bg-tertiary dark:border-dark-bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-light-text dark:text-dark-text">&lt;Abijith</span>
              <span className="text-primary">/&gt;</span>
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              Deploying and managing scalable cloud infrastructure and systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/abijitharun45"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-primary hover:text-dark-bg transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/abijith-arun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-primary hover:text-dark-bg transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-light-bg-tertiary dark:bg-dark-bg-tertiary hover:bg-primary hover:text-dark-bg transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-light-bg-tertiary dark:border-dark-bg-tertiary text-center">
          <p className="text-light-text-secondary dark:text-dark-text-secondary flex items-center justify-center gap-2">
            © {currentYear} Abijith Arun. Built with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            and Next.js
          </p>
          
          {/* ----- THIS WAS MISSING! ----- */}
          <div className="flex justify-center mt-4">
             <ViewCounter />
          </div>
          {/* ----------------------------- */}

        </div>
      </div>
    </footer>
  )
}
