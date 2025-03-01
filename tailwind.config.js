/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#f43f5e',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          'base-200': '#F2F2F2',
          'base-300': '#E5E6E6',
          'base-content': '#1F2937',
        },
      },
    ],
  },
}
