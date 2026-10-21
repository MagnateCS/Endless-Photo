<script setup lang="ts">
import {
  absoluteUrl,
  baseKeywords,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
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
const canonical = absoluteUrl('/contact', siteUrl)
const title = 'Contact Endless Photobooth | Book Photo Booth Rentals'
const description = 'Contact Endless Photobooth to book photo booth rentals, 360 booths, and keychain station add-ons across Ventura and Santa Barbara.'
const keywords = keywordContent(baseKeywords, serviceAreaKeywords, [
  'book photo booth rental',
  'photo booth rental quote',
  'photobooth booking',
  'event photo booth contact'
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
      innerHTML: JSON.stringify(buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Contact', path: '/contact' }
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
      <section class="relative overflow-hidden bg-ivory px-5 pb-24 pt-40 sm:py-48">
        <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-taupe/20 blur-3xl"></div>

        <div class="relative mx-auto max-w-5xl">
          <div class="mx-auto max-w-3xl text-center">
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Contact Us
            </p>

            <h1 class="type-page split-heading text-espresso">
              LET'S TALK
            </h1>

            <p class="type-intro fade-text mx-auto mt-7 max-w-2xl text-charcoal">
              Our team is here to guide you through every detail, ensuring a seamless and elevated addition to your event.
            </p>
          <p class="type-body mx-auto mt-5 max-w-2xl text-charcoal">Availability is limited for peak dates&mdash;connect with us today to begin your experience.</p>
          <a href="/inquire" class="type-button button-shine mt-8 inline-flex min-h-12 items-center justify-center bg-button px-8 py-4 text-white transition hover:bg-espresso">INQUIRE TODAY</a>
          </div>
        </div>
      </section>

      <section class="bg-stone px-5 py-16">
        <ContactDetails />
      </section>

      <section class="bg-ivory px-5 py-16">
        <div class="mx-auto max-w-7xl">
          <p class="type-eyebrow section-kicker mb-6 uppercase text-gold">
            Service Areas
          </p>
          <div class="flex flex-wrap gap-3">
            <NuxtLink
              v-for="location in locationPages"
              :key="location.slug"
              :to="`/locations/${location.slug}`"
              class="type-button border border-taupe bg-stone px-5 py-3 uppercase text-espresso transition hover:border-espresso hover:bg-ivory"
            >
              {{ location.city }}
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
