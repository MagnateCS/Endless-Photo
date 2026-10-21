import { fileURLToPath } from 'node:url'
import { locationPages } from './utils/seoContent'

const isDev = process.env.NODE_ENV !== 'production'
const devAppManifestPath = fileURLToPath(new URL('./.nuxt/manifest/meta/dev.json', import.meta.url))
const seoRoutes = [
  '/',
  '/packages',
  '/about-us',
  '/contact',
  '/inquire',
  '/locations',
  '/keychain-station',
  ...locationPages.map((location) => `/locations/${location.slug}`),
  '/sitemap.xml',
  '/robots.txt'
]

export default defineNuxtConfig({
  compatibilityDate: '2026-04-27',
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || ''
    }
  },
  routeRules: {
    '/**': {
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    }
  },
  alias: isDev
    ? {
        '#app-manifest': devAppManifestPath
      }
    : {},
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },
  vite: {
    resolve: {
      alias: isDev
        ? {
            '#app-manifest': devAppManifestPath
          }
        : {}
    },
    plugins: isDev
      ? [
          {
            name: 'nuxt-dev-app-manifest-alias',
            enforce: 'pre',
            resolveId(id) {
              if (id === '#app-manifest') return devAppManifestPath
            }
          }
        ]
      : []
  },
  nitro: {
    prerender: {
      routes: seoRoutes
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Photo Booth Rentals in Ventura & Santa Barbara | Endless Photobooth',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'description',
          content: 'Book photobooth rentals, 360 booths, and keychain stations for weddings and events in Ventura, Santa Barbara, and nearby cities.'
        },
        {
          name: 'keywords',
          content: 'photobooth, photo booth, photobooth rentals, photo booth rentals, keychain station, 360 booth, open air photo booth, social booth, Ventura photo booth rentals, Santa Barbara photo booth rentals'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.cdnfonts.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/canela-text-trial'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro'
        },
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  }
})
