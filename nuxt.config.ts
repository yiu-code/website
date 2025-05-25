// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon'],
  ssr: false,

  // Base URL for GitHub Pages (replace repository name)
  app: {
    baseURL: '/'
  },

  // Enable strict TypeScript checks (optional but recommended)
  typescript: {
    strict: true
  },

  nitro: {
    preset: 'static'
  }
})