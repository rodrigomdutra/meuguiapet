/** @type {import('tailwindcss').Config} */

// We can dynamically import the theme in runtime, but for build time we need to use require
const themeModule = require('./src/styles/theme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: themeModule.themeExtension,
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      addUtilities(themeModule.customUtilities);
    },
  ],
} 