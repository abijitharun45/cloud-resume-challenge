import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#64ffda',
          dark: '#4ecdc4',
        },
        secondary: {
          DEFAULT: '#00d4ff',
          dark: '#0099cc',
        },
        dark: {
          bg: '#0a192f',
          'bg-secondary': '#112240',
          'bg-tertiary': '#1a2f4f',
          text: '#ccd6f6',
          'text-secondary': '#8892b0',
        },
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f8f9fa',
          'bg-tertiary': '#e9ecef',
          text: '#1a1a1a',
          'text-secondary': '#666666',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
