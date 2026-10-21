<script setup lang="ts">
import {
  absoluteUrl,
  baseKeywords,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  keywordContent,
  resolveSiteUrl,
  robotsContent,
  serviceAreaKeywords,
  siteInfo
} from '~/utils/seoContent'

const config = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)
const canonical = absoluteUrl('/packages', siteUrl)
const title = 'Photo Booth Rental Packages | Endless Photobooth'
const description = 'Compare photo booth rental packages with open air, social, Cali, 360 booth, audio guest book, and keychain station options.'
const keywords = keywordContent(baseKeywords, serviceAreaKeywords, [
  'photo booth rental packages',
  'photobooth packages',
  '360 booth rental',
  'open air booth rental',
  'audio guest book rental'
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
      innerHTML: JSON.stringify(buildServiceSchema('Photo Booth Rental Packages', description, '/packages', siteUrl))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(buildBreadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' }
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
      <section class="relative overflow-hidden bg-ivory px-5 pb-16 pt-40 sm:pb-20 sm:pt-48">
        <div class="absolute right-0 top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
        <div class="mx-auto max-w-7xl">
          <div class="max-w-4xl">
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Our Experiences
            </p>
            <h1 class="type-page split-heading uppercase text-espresso">
              Choose Your Experience
            </h1>
            <div class="editorial-line mt-8 max-w-5xl"></div>
            <p class="type-intro fade-text mt-8 max-w-2xl text-charcoal">
              Six thoughtfully curated experiences, plus an Audio Guestbook to capture the voices behind the memories.
            </p>
          </div>
        </div>
      </section>

      <section class="relative overflow-hidden bg-ivory px-5 pb-24 sm:pb-32">
        <div class="mx-auto max-w-7xl">
          <h2 class="sr-only">Explore our experiences</h2>
          <PackageGrid />
        </div>
      </section>

      <section class="bg-espresso px-5 py-20 text-ivory">
        <div class="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-ivory/65">
              Ready To Reserve
            </p>
            <h2 class="type-section">
              Let us match the booth to the moment.
            </h2>
          </div>

          <NuxtLink
            to="/inquire"
            class="type-button button-shine inline-flex w-fit px-7 py-4 uppercase transition bg-button text-white hover:bg-espresso hover:text-white"
          >
            Inquire Today
          </NuxtLink>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
