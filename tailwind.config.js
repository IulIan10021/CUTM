/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'utm-blue': '#1a3a8f',
        'utm-blue-light': '#2563eb',
        'utm-blue-dark': '#0f2660',
        'utm-accent': '#3b82f6',
      },
      fontFamily: {
        'display': ['"Outfit"', 'sans-serif'],
        'body': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
