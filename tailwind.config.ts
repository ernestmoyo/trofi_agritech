import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        trofi: {
          50: '#f0f7f0',
          100: '#d9edd9',
          200: '#b3dbb3',
          300: '#7abf7a',
          400: '#4ea24e',
          500: '#2d7d32',
          600: '#236b27',
          700: '#1b5620',
          800: '#16441a',
          900: '#123816',
          950: '#0a1f0c',
        },
        earth: {
          50: '#faf6f0',
          100: '#f0e6d2',
          200: '#e0cca5',
          300: '#cfad73',
          400: '#c1944c',
          500: '#b37e3a',
          600: '#9a6530',
          700: '#7d4d2a',
          800: '#674028',
          900: '#573624',
        },
        sage: {
          50: '#f4f6f4',
          100: '#e2e8e2',
          200: '#c4d1c5',
          300: '#9db29e',
          400: '#748f76',
          500: '#5a7a5d',
          600: '#455f47',
          700: '#394d3b',
          800: '#2f3f31',
          900: '#283429',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
