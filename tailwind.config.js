/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary blues - refined palette
        'primary': {
          50: '#e6f4ff',
          100: '#bae3ff',
          200: '#7cc4fa',
          300: '#47a3f3',
          400: '#2186eb',
          500: '#12a2df', // main brand color
          600: '#0a6fa0',
          700: '#065986',
          800: '#03426a',
          900: '#012a4a',
        },
        // Accent colors
        'accent': {
          'cyan': '#22d3ee',
          'teal': '#14b8a6',
          'purple': '#a855f7',
          'indigo': '#6366f1',
          'yellow': '#fbbf24',
          'orange': '#fb923c',
          'emerald': '#10b981',
        },
        // Semantic colors
        'surface': {
          'light': '#ffffff',
          'soft': '#f8fafc',
          'muted': '#f1f5f9',
          'dim': '#e2e8f0',
        },
        // Keep legacy colors for compatibility
        'axiom-blue': '#12a2df',
        'axiom-blue-dark': '#0a6fa0',
        'axiom-blue-light': '#4db8e8',
        'axiom-cyan': '#06b6d4',
        'axiom-teal': '#14b8a6',
        'axiom-sky': '#38bdf8',
        'axiom-indigo': '#6366f1',
        'axiom-yellow': '#fbbf24',
        'axiom-yellow-dark': '#f59e0b',
        'axiom-purple': '#667eea',
        'axiom-purple-dark': '#764ba2',
      },
      backgroundImage: {
        // Enhanced gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #12a2df 0%, #0a6fa0 100%)',
        'gradient-vibrant': 'linear-gradient(135deg, #667eea 0%, #12a2df 50%, #22d3ee 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #fbbf24 0%, #fb923c 50%, #ef4444 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #06b6d4 0%, #0a6fa0 50%, #065986 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #a855f7 0%, #6366f1 33%, #12a2df 66%, #22d3ee 100%)',
        'gradient-mesh': 'linear-gradient(135deg, #12a2df 0%, #06b6d4 50%, #14b8a6 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-overlay': 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
        // Legacy gradients
        'gradient-blue': 'linear-gradient(135deg, #12a2df 0%, #0a6fa0 100%)',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        'display': ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        // Refined type scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        // Enhanced animations
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
        'fade-down': 'fadeDown 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(18, 162, 223, 0.3)',
        'glow-lg': '0 0 40px rgba(18, 162, 223, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(18, 162, 223, 0.2)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [],
}