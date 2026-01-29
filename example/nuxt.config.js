export default {
  // Disable server-side rendering
  ssr: false,

  // Global page headers
  head: {
    title: 'Agentation Vue 2 Example',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Visual feedback for AI coding agents - Vue 2 version' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    '~/assets/globals.scss'
  ],

  // Plugins to run before rendering page
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/agentation.js'
  ],

  // Auto import components
  components: true,

  // Build Configuration
  build: {
    // Transpile agentation-vue2 for proper module resolution
    transpile: ['agentation-vue2'],

    // Extend webpack config
    extend(config) {
      // Local development/build: use source code directly
      // Production (Cloudflare): uses npm package (no alias)
      if (!process.env.CF_PAGES) {
        config.resolve.alias['agentation-vue2'] = require('path').resolve(__dirname, '../src/index.js')
      }
    }
  },

  // Development server
  server: {
    port: 3004,
    host: '0.0.0.0'
  },

  // Router configuration
  router: {
    base: process.env.NUXT_APP_BASE_URL || '/'
  }
}
