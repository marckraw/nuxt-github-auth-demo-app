export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Github auth + custom node api (nuxtJS) + Netlify deploy Demo App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    someEnv: process.env.SOME_ENV || 'no-env'
  },
  generate: {
    fallback: true
  },

  serverMiddleware: [
    // Will register file from project api directory to handle /api/* requires
    { path: '/api', handler: '~/api/index.js' }
  ],

  // serverMiddleware: ['~/api/auth'],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  auth: {
    redirect: {
      callback: '/callback'
    },
    strategies: {
      github: {
        scope: ['repo', 'public_repo', 'user'],
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET
      }
    }
  }

  // router ?
  // router: {
  //   middleware: ['auth'],
  // },
}
