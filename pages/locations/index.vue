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
  serviceAreaKeywords,
  siteInfo
} from '~/utils/seoContent'

const config = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)
const canonical = absoluteUrl('/locations', siteUrl)
const title = 'Photo Booth Rental Service Areas | Endless Photobooth'
const description = 'Find photo booth rentals, 360 booths, social booths, and keychain station add-ons in Ventura, Santa Barbara, Paso Robles, and nearby cities.'
const keywords = keywordContent(baseKeywords, serviceAreaKeywords, [
  'Central Coast photo booth rentals',
  'photo booth rental service areas',
  'local photobooth rentals'
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
      innerHTML: JSON.stringify(buildServiceSchema('Photo booth rentals', description, '/locations', siteUrl))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Locations', path: '/locations' }
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
  <section class="paper-gloss relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:py-40">
  <!-- Soft background details -->
  <div class="pointer-events-none absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
  <div class="pointer-events-none absolute bottom-10 right-[-8%] h-80 w-80 rounded-full bg-espresso/10 blur-3xl"></div>

  <div class="mx-auto max-w-7xl">
    <div class="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      
      <!-- Left Content -->
      <div>
        <p class="type-eyebrow section-kicker mb-5 uppercase text-gold">
          Service Areas
        </p>

        <h1 class="type-page split-heading uppercase text-espresso">
          Central Coast moments, captured beautifully.
        </h1>

        <p class="type-intro fade-text mt-8 max-w-xl text-charcoal">
          From coastal weddings to backyard quinceañeras, Cali Booth brings polished photo booth rentals to celebrations throughout the Central Coast.
        </p>
      </div>

      <!-- Right Location Card -->
      <div class="relative">
        <div class="rounded-[2rem] border border-taupe bg-ivory/85 p-6 shadow-2xl shadow-espresso/10 backdrop-blur sm:p-8">
          
          <div class="mb-8 flex items-start justify-between gap-6">
            <div>
              <p class="type-eyebrow uppercase text-gold">
                Now Serving
              </p>
              <h2 class="type-section mt-3 uppercase text-espresso">
                Your city.
                <br />
                Your event.
                <br />
                Your booth.
              </h2>
            </div>

            <div class="hidden h-20 w-20 shrink-0 items-center justify-center rounded-full border border-taupe bg-white/70 text-center text-espresso sm:flex">
              CA
            </div>
          </div>

          <div class="editorial-line mb-7"></div>

          <p class="type-small mb-6 uppercase text-charcoal">
            Popular Areas
          </p>

          <div class="flex flex-wrap gap-3">
            <a href="#" class="type-button rounded-full border border-taupe bg-button px-5 py-3 uppercase text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-espresso hover:text-white">
              San Luis Obispo
            </a>

            <a href="#" class="type-button rounded-full border border-taupe bg-button px-5 py-3 uppercase text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-espresso hover:text-white">
              Santa Maria
            </a>

            <a href="#" class="type-button rounded-full border border-taupe bg-button px-5 py-3 uppercase text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-espresso hover:text-white">
              Pismo Beach
            </a>

            <a href="#" class="type-button rounded-full border border-taupe bg-button px-5 py-3 uppercase text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-espresso hover:text-white">
              Paso Robles
            </a>

            <a href="#" class="type-button rounded-full border border-taupe bg-button px-5 py-3 uppercase text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-espresso hover:text-white">
              Arroyo Grande
            </a>

            <a href="#" class="type-button rounded-full border border-taupe bg-button px-5 py-3 uppercase text-white transition hover:-translate-y-0.5 hover:border-gold hover:bg-espresso hover:text-white">
              Atascadero
            </a>
          </div>

          <div class="mt-8 rounded-2xl border border-taupe bg-white/60 p-5">
            <p class="type-small text-charcoal">
              Don’t see your city? We may still serve your area depending on availability and event location.
            </p>
          </div>
        </div>

        <!-- Small floating label -->
        <div class="type-eyebrow absolute -bottom-6 left-6 rounded-full border border-taupe bg-espresso px-6 py-3 uppercase text-white shadow-xl shadow-espresso/20">
          Weddings · Quinceañeras · Events
        </div>
      </div>

    </div>
  </div>
</section>

      <section class="bg-ivory px-5 py-20 sm:py-28">
        <div class="mx-auto max-w-7xl">
          <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <NuxtLink
              v-for="location in locationPages"
              :key="location.slug"
              :to="`/locations/${location.slug}`"
              class="group border border-taupe bg-stone p-6 transition hover:border-espresso hover:bg-ivory"
            >
              <p class="type-eyebrow uppercase text-gold">
                {{ location.county }}
              </p>
              <h2 class="type-section mt-4 text-espresso">
                Photo Booth Rentals in {{ location.city }}
              </h2>
              <p class="type-eyebrow mt-6 uppercase text-espresso transition group-hover:text-gold">
                View {{ location.city }} rentals
              </p>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="bg-espresso px-5 py-20 text-ivory">
        <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-ivory/65">
              Ready To Book
            </p>
            <h2 class="type-section">
              Tell us your city, venue, and event date.
            </h2>
          </div>

          <NuxtLink
            to="/contact"
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
