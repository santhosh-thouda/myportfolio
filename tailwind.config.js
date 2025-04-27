/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          light: '#818CF8',
          dark: '#3730A3',
        },
        secondary: {
          DEFAULT: '#EC4899',
          light: '#F9A8D4',
          dark: '#BE185D',
        },
        accent: {
          DEFAULT: '#22D3EE',
          light: '#A5F3FC',
          dark: '#0891B2',
        },
        neutral: {
          light: '#F9FAFB',
          dark: '#111827',
          100: '#E5E7EB',
          200: '#D1D5DB',
          300: '#9CA3AF',
          400: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'stagger': 'stagger 0.5s ease-out',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(79, 70, 229, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.4)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        stagger: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(79, 70, 229, 0.3)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'modal': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)',
        'card-gradient': 'linear-gradient(145deg, #F9FAFB 0%, #E5E7EB 100%)',
        'dark-card-gradient': 'linear-gradient(145deg, #1F2937 0%, #111827 100%)',
      },
      zIndex: {
        'modal': 1000,
        'navbar': 50,
        'back-to-top': 60,
      },
    },
  },
  plugins: [],
};


