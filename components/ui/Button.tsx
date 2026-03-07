import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  icon?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  href,
  type = 'button',
  disabled = false,
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary text-dark-bg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5',
    secondary: 'border-2 border-primary text-primary hover:bg-primary/10 hover:-translate-y-0.5',
    outline: 'border-2 border-dark-text-secondary dark:border-dark-text-secondary text-dark-text-secondary hover:border-primary hover:text-primary hover:-translate-y-0.5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    const isExternal = href.startsWith('http')
    const isPdf = href.endsWith('.pdf')
    return (
      <a
        href={href}
        className={classes}
        target={isExternal || isPdf ? '_blank' : undefined}
        rel={isExternal || isPdf ? 'noopener noreferrer' : undefined}
        download={isPdf ? true : undefined}
      >
        {icon}
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {icon}
      {children}
    </button>
  )
}
