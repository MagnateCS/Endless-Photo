<script setup lang="ts">
import { experiences } from '~/utils/experiences'
const keychainExperience = experiences.find(item => item.slug === 'keychain-station')!
import {
  absoluteUrl,
  baseKeywords,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  keywordContent,
  locationPages,
  resolveSiteUrl,
  robotsContent,
  serviceAreaKeywords,
  siteInfo
} from '~/utils/seoContent'

const config = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)
const canonical = absoluteUrl('/keychain-station', siteUrl)
const title = 'Keychain Station Rental | Endless Photobooth'
const description = 'Add a keychain station for photo keepsakes guests can take home in Ventura, Santa Barbara, Camarillo, Montecito, and nearby cities.'
const keywords = keywordContent(baseKeywords, serviceAreaKeywords, [
  'keychain station rental',
  'photo keychain station',
  'event keychain favors',
  'wedding keychain station',
  'quinceanera keychain station',
  'corporate event keychain station'
])


useSeoMeta({
  title,
  description,
  robots: robotsContent,
  keywords,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonical,
  ogImage: absoluteUrl(siteInfo.image, siteUrl),
  twitterCard: 'summary_large_image'
})

useHead({
  link: [{ rel: 'canonical', href: canonical }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildLocalBusinessSchema(siteUrl))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildServiceSchema('Keychain Station Rental', description, '/keychain-station', siteUrl))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Keychain Station', path: '/keychain-station' }
      ], siteUrl))
    }
  ]
})
</script>

<template>
  <div class="antialiased">
    <div class="grain"></div>
    <SiteHeader />

    <main>
      <section class="paper-gloss relative overflow-hidden px-5 pb-20 pt-40 sm:pb-24 sm:pt-48">
        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Bespoke Experience
            </p>
            <h1 class="type-page split-heading uppercase text-espresso">
              Keychain Station Rental
            </h1>
            <div class="editorial-line my-8"></div>
            <p class="type-intro fade-text max-w-2xl text-charcoal">
              {{ keychainExperience.tagline }}
            </p>
            <p class="type-price-description mt-6 text-charcoal">Starting at</p>
            <p class="type-price mt-1 text-espresso">{{ keychainExperience.price }}</p>
            <NuxtLink to="/inquire?experience=keychain-station" class="type-button mt-7 inline-flex min-h-12 items-center bg-button px-7 py-4 uppercase text-white hover:bg-espresso">Inquire Today</NuxtLink>
          </div>

          <div class="intro-photo relative">
            <img
              src="/keychain-station.PNG"
              alt="Keychain Station with wristlets and photo keychains"
              class="soft-shadow relative aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section class="bg-ivory px-5 py-20 sm:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <h2 class="type-section text-espresso">Included in your experience</h2>
          <ul class="type-body space-y-5 text-charcoal">
            <li v-for="item in keychainExperience.items" :key="item" class="flex gap-3"><span aria-hidden="true" class="text-gold">&bull;</span><span>{{ item }}</span></li>
          </ul>
        </div>
      </section>

      <section class="bg-stone px-5 py-20 sm:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="mb-12 max-w-3xl">
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Available In
            </p>
            <h2 class="type-section uppercase text-espresso">
              Keychain station service areas.
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <NuxtLink
              v-for="location in locationPages"
              :key="location.slug"
              :to="`/locations/${location.slug}`"
              class="group border border-taupe bg-ivory p-5 transition hover:border-espresso"
            >
              <p class="type-card text-espresso">
                {{ location.city }}
              </p>
              <p class="type-eyebrow mt-3 uppercase text-gold transition group-hover:text-espresso">
                Photo booth rentals
              </p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="bg-espresso px-5 py-20 text-ivory">
        <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-ivory/65">
              Ask About Availability
            </p>
            <h2 class="type-section">
              Bring a keepsake experience to your event.
            </h2>
          </div>

          <NuxtLink
            to="/inquire?experience=keychain-station"
            class="type-button button-shine inline-flex w-fit px-7 py-4 uppercase transition bg-button text-white hover:bg-espresso hover:text-white"
          >
            Contact Us
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
