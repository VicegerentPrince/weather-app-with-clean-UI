import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure this path is correct
  ],
  theme: {
    extend: {},
  },

  plugins: [react(),
    tailwindcss()
  ],
})
