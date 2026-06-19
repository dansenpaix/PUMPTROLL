import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart(),
    process.env.NODE_ENV === 'production' ? netlify() : null,
  ].filter(Boolean),

  css: {
    lightningcss: false,
    postcss: {
      plugins: [],
    },
  },
})