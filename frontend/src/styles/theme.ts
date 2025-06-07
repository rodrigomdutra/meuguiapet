import { type Config } from 'tailwindcss';

// Define the theme extension for Tailwind
export const themeExtension: Config['theme'] = {
  extend: {
    colors: {
      // Brand colors
      'brand': {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
        950: '#082f49',
      },
      // Custom colors
      'pet-blue': '#0284c7',
      'pet-green': '#10b981',
      'pet-yellow': '#f59e0b',
      'pet-red': '#ef4444',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    },
    boxShadow: {
      'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
      'card': '0 5px 15px 0 rgba(0, 0, 0, 0.07)',
    },
    animation: {
      'fade-in': 'fadeIn 0.3s ease-out',
      'slide-up': 'slideUp 0.4s ease-out',
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
    },
  },
};

// Define custom Tailwind utilities
export const customUtilities = {
  '.text-shadow': {
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  '.text-shadow-lg': {
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.12)',
  },
  '.rotate-hover': {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'rotate(2deg)',
    },
  },
  '.scale-hover': {
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}; 