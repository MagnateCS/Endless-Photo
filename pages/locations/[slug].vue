<script setup lang="ts">
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
  siteInfo
} from '~/utils/seoContent'

const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug[0] : route.params.slug
const location = locationPages.find((item) => item.slug === slug)

if (!location) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Location page not found'
  })
}

const config = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)
const path = `/locations/${location.slug}`
const canonical = absoluteUrl(path, siteUrl)
const nearbyLocations = locationPages.filter((item) => location.nearby.includes(item.city))
const serviceDescription = `${location.hero} for weddings, parties, corporate events, quinceaneras, and private celebrations. Endless Photobooth offers photobooth rental packages, 360 booths, open air booths, and keychain station add-ons.`
const keywords = keywordContent(baseKeywords, [
  `${location.city} photo booth rentals`,
  `${location.city} photobooth rentals`,
  `${location.city} photo booth`,
  `${location.city} photobooth`,
  `${location.city} 360 booth`,
  `${location.city} keychain station`,
  `${location.city} wedding photo booth`,
  `${location.city} event photo booth`,
  `${location.county} photo booth rentals`
])

useSeoMeta({
  title: location.title,
  description: location.description,
  robots: robotsContent,
  keywords,
  ogTitle: location.title,
  ogDescription: location.description,
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
      innerHTML: JSON.stringify(buildServiceSchema(location.hero, serviceDescription, path, siteUrl))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Locations', path: '/locations' },
        { name: location.city, path }
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
        <div class="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              {{ location.city }} {{ location.region }}
            </p>
            <h1 class="type-page split-heading uppercase text-espresso">
              {{ location.hero }}
            </h1>
          </div>

          <div>
            <div class="editorial-line mb-7"></div>
            <p class="type-intro fade-text text-charcoal">
              {{ location.description }}
            </p>
          </div>
        </div>
      </section>

      <section class="bg-ivory px-5 py-20 sm:py-28">
        <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Event Fit
            </p>
            <h2 class="type-section split-heading uppercase text-espresso">
              Built for {{ location.city }} celebrations.
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-3">
            <article
              v-for="item in location.localFit"
              :key="item"
              class="border border-taupe bg-stone p-6"
            >
              <p class="type-small text-charcoal">
                {{ item }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-stone px-5 py-20 sm:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="mb-12 max-w-3xl">
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Rental Options
            </p>
            <h2 class="type-section uppercase text-espresso">
              Photo, video, and keepsake experiences.
            </h2>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <article
              v-for="service in location.services"
              :key="service"
              class="border border-taupe bg-ivory p-7"
            >
              <h3 class="type-subsection text-espresso">
                {{ service }}
              </h3>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-ivory px-5 py-20">
        <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Nearby Service Areas
            </p>
            <h2 class="type-section text-espresso">
              Also serving events near {{ location.city }}.
            </h2>
            <div class="mt-8 flex flex-wrap gap-3">
              <NuxtLink
                v-for="nearby in nearbyLocations"
                :key="nearby.slug"
                :to="`/locations/${nearby.slug}`"
                class="type-button border border-taupe bg-stone px-5 py-3 uppercase text-espresso transition hover:border-espresso hover:bg-ivory"
              >
                {{ nearby.city }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/contact"
            class="type-button button-shine inline-flex w-fit px-7 py-4 uppercase transition bg-button text-white hover:bg-espresso hover:text-white"
          >
            Book {{ location.city }}
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
