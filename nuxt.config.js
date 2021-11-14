export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'personal_portfolio_website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    ['nuxt-font-loader-strategy', {
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Font PeydaWeb
        {
          fileExtensions: ['ttf'],
          fontFamily: 'PeydaWeb',
          fontFaces: [
            // PeydaWeb-Black
            {
              preload: true,
              localSrc: ['PeydaWeb-Black'],
              src: '@/assets/fonts/PeydaWeb-Black',
              fontWeight: 'black',
              fontStyle: 'normal'
            },
            // PeydaWeb-ExtraBold
            {
              preload: true,
              localSrc: ['PeydaWeb-ExtraBold'],
              src: '@/assets/fonts/PeydaWeb-ExtraBold',
              fontWeight: 'ExtraBold',
              fontStyle: 'normal'
            },
            // PeydaWeb-Medium
            {
              preload: true,
              localSrc: ['PeydaWeb-Medium'],
              src: '@/assets/fonts/PeydaWeb-Medium',
              fontWeight: 'Medium',
              fontStyle: 'normal'
            },
            // PeydaWeb-Regular
            {
              preload: true,
              localSrc: ['PeydaWeb-Regular'],
              src: '@/assets/fonts/PeydaWeb-Regular',
              fontWeight: 'Regular',
              fontStyle: 'normal'
            },
            // PeydaWeb-SemiBold
            {
              preload: true,
              localSrc: ['PeydaWeb-SemiBold'],
              src: '@/assets/fonts/PeydaWeb-SemiBold',
              fontWeight: 'SemiBold',
              fontStyle: 'normal'
            },

          ]
        },
      ]
    }]

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
