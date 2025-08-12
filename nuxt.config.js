import { myDB } from './assets/db/myDB'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Yousef Roshandel | Front-End Developer & UI/UX Designer",
    description: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites. یوسف روشندل، توسعه‌دهنده فرانت‌اند و طراح UI/UX با اشتیاق برای خلق تجربه‌های دیجیتال مدرن و کاربرپسند.",
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites. یوسف روشندل، توسعه‌دهنده فرانت‌اند و طراح UI/UX با اشتیاق برای خلق تجربه‌های دیجیتال مدرن و کاربرپسند." },
      { name: 'format-detection', content: 'telephone=no' },
      // OG Tags
      { property: 'og:title', content: 'Yousef Roshandel | Front-End Developer & UI/UX Designer' },
      { property: 'og:description', content: "Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites. یوسف روشندل، توسعه‌دهنده فرانت‌اند و طراح UI/UX با اشتیاق برای خلق تجربه‌های دیجیتال مدرن و کاربرپسند." },
      { property: 'og:url', content: 'https://yrlp.ir' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        integrity: "sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==",
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      },
    ],
  },

  target: 'static',
  router: {
    base: '/'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gsap.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/style-resources",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    ['nuxt-font-loader-strategy', {
      ignoreLighthouse: true,
      ignoredEffectiveTypes: ['2g', 'slow-2g'],
      fonts: [
        // Font PeydaWeb
        {
          fileExtensions: ['woff2', 'woff'],
          fontFamily: 'PeydaWeb',
          fontFaces: [
            // PeydaWeb-Black
            {
              preload: true,
              localSrc: ['PeydaWeb-Black'],
              src: '@/assets/fonts/PeydaWeb-Black',
              fontWeight: '800',
              fontStyle: 'normal'
            },
            // PeydaWeb-ExtraBold
            {
              preload: true,
              localSrc: ['PeydaWeb-ExtraBold'],
              src: '@/assets/fonts/PeydaWeb-ExtraBold',
              fontWeight: '900',
              fontStyle: 'normal',
            },
            // PeydaWeb-Medium
            {
              preload: true,
              localSrc: ['PeydaWeb-Medium'],
              src: '@/assets/fonts/PeydaWeb-Medium',
              fontWeight: '500',
              fontStyle: 'normal'
            },
            // PeydaWeb-Regular
            {
              preload: true,
              localSrc: ['PeydaWeb-Regular'],
              src: '@/assets/fonts/PeydaWeb-Regular',
              fontWeight: '400',
              fontStyle: 'normal'
            },
            // PeydaWeb-SemiBold
            {
              preload: true,
              localSrc: ['PeydaWeb-SemiBold'],
              src: '@/assets/fonts/PeydaWeb-SemiBold',
              fontWeight: '600',
              fontStyle: 'normal'
            },

          ]
        },
      ]
    }],
    '@nuxtjs/i18n',
  ],

  i18n: {
    detectBrowserLanguage: false,
    strategy: 'prefix',
    locales: [
      {
        code: 'fa',
        iso: 'fa-FA',
        name: 'Farsi',
      },
      {
        code: 'en',
        iso: 'en-US',
        name: "English",
      }
    ],
    defaultLocale: 'fa',
    vueI18n: {
      fallbackLocale: 'fa',
      ...myDB
    },
    baseUrl: 'https://yrlp.ir'
  },

  // module settings
  styleResources: {
    scss: ["@/assets/css/query.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Sitemap
  sitemap: {
    hostname: 'https://yrlp.ir',
    gzip: true,
    routes: async () => {
      return ['/en', '/fa']
    }
  },

  // Robots:
  robots: {
    userAgent: '*',
    allow: '/',
    sitemap: 'https://yrlp.ir/sitemap.xml'
  }
}
