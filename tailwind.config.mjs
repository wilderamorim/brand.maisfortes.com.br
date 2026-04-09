/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          forest: {
            DEFAULT: '#2D6A4F',
            light: '#40916C',
            dark: '#1B4332',
            50: '#E8F5EE',
            100: '#D1EBDD',
            200: '#A3D7BB',
            300: '#74C399',
            glow: 'rgba(45, 106, 79, 0.4)',
          },
          coral: {
            DEFAULT: '#F4845F',
            light: '#FBC3B3',
            dark: '#D4522A',
            glow: 'rgba(244, 132, 95, 0.4)',
          },
          amber: {
            DEFAULT: '#FFB703',
            light: '#FFD54F',
            dark: '#FF8F00',
            glow: 'rgba(255, 183, 3, 0.4)',
          },
          sky: '#90E0EF',
          // Light mode neutrals
          white: '#FFFFFF',
          snow: '#F8F9FA',
          mist: '#E9ECEF',
          stone: '#6C757D',
          charcoal: '#212529',
          // Dark mode neutrals
          night: '#0D1117',
          'dark-surface': '#161B22',
          'dark-border': '#30363D',
          'dark-muted': '#8B949E',
          'dark-text': '#E6EDF3',
        },
        // shadcn/ui semantic tokens (dark-first for landing)
        background: '#0D1117',
        foreground: '#E6EDF3',
        card: { DEFAULT: '#161B22', foreground: '#E6EDF3' },
        popover: { DEFAULT: '#161B22', foreground: '#E6EDF3' },
        primary: { DEFAULT: '#2D6A4F', foreground: '#FFFFFF' },
        secondary: { DEFAULT: '#30363D', foreground: '#E6EDF3' },
        muted: { DEFAULT: '#30363D', foreground: '#8B949E' },
        accent: { DEFAULT: '#30363D', foreground: '#E6EDF3' },
        destructive: { DEFAULT: '#E5383B', foreground: '#FFFFFF' },
        border: '#30363D',
        input: '#30363D',
        ring: '#2D6A4F',
      },
      borderRadius: {
        DEFAULT: '12px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        checkin: '20px',
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(45, 106, 79, 0.15)',
        'glow-md': '0 0 30px rgba(45, 106, 79, 0.25)',
        'glow-lg': '0 0 50px rgba(45, 106, 79, 0.3)',
        'glow-coral': '0 0 20px rgba(244, 132, 95, 0.2)',
        'glow-amber': '0 0 20px rgba(255, 183, 3, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-forest': 'pulseForest 3s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseForest: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(45, 106, 79, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(45, 106, 79, 0.5)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.6', transform: 'translateX(-50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translateX(-50%) scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
};
