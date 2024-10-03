/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'primary-500': '#877EFF',
        'primary-600': '#5D5FEF',
        'secondary-500': '#FFB620',

        'background': '#0D0F16',
        'foreground': '#1D202B',
        'cursor': '#bfc7c7',
        'color-0': '#000000',
        'color-1': '#0e9da8',
        'color-2': '#82b4b9',
        'color-3': '#1063aa',
        'color-4': '#2e45aa',
        'color-5': '#7e3ca9',
        'color-6': '#b82589',
        'color-7': '#bfc7c7',
        'color-8': '#415758',
        'color-9': '#0e9da8',
        'color-10': '#82b4b9',
        'color-11': '#1063aa',
        'color-12': '#2e45aa',
        'color-13': '#7e3ca9',
        'color-14': '#b82589',
        'color-15': '#bfc7c7',

        'off-white': '#D0DFFF',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#5C5C7B',
      },
      fontFamily: {
        inter: ['Roboto Mono', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
