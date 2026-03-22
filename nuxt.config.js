// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  app: {
    head: {
      title: 'Yousef Roshandel | Front-End Developer & UI/UX Designer',
      htmlAttrs: {
        lang: 'fa',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites. یوسف روشندل، توسعه‌دهنده فرانت‌اند و طراح UI/UX با اشتیاق برای خلق تجربه‌های دیجیتال مدرن و کاربرپسند.',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          property: 'og:title',
          content: 'Yousef Roshandel | Front-End Developer & UI/UX Designer',
        },
        {
          property: 'og:description',
          content:
            'Yousef Roshandel is a passionate Front-End Developer and UI/UX Designer creating modern, user-friendly websites. یوسف روشندل، توسعه‌دهنده فرانت‌اند و طراح UI/UX با اشتیاق برای خلق تجربه‌های دیجیتال مدرن و کاربرپسند.',
        },
        { property: 'og:url', content: 'https://yrlp.ir' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
          integrity:
            'sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer',
        },
      ],
    },
  },

  // Global CSS
  css: ['@/assets/css/main.scss'],

  // Plugins
  plugins: [
    // gsap.client.js is automatically client-only due to .client suffix
  ],

  // Auto import components
  components: true,

  // Modules
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/i18n'],

  // Vite: inject SCSS mixins globally (replaces @nuxtjs/style-resources)
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/query.scss" as *;',
        },
      },
    },
  },

  // i18n (v9)
  i18n: {
    strategy: 'prefix_except_default',
    langDir: '',
    locales: [
      { code: 'fa', language: 'fa-FA', name: 'Farsi', file: 'fa.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'fa',
    detectBrowserLanguage: false,
    baseUrl: 'https://yrlp.ir',
    vueI18n: './i18n.config.js',
    compilation: {
      strictMessage: false,
    },
  },

  // Sitemap (v6+)
  sitemap: {
    siteUrl: 'https://yrlp.ir',
    urls: ['/en', '/fa'],
  },

  // Robots (v5+)
  robots: {
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
      },
    ],
    sitemap: ['https://yrlp.ir/sitemap.xml'],
  },
})

