<script setup lang="ts">
import {
  absoluteUrl,
  baseKeywords,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  keywordContent,
  resolveSiteUrl,
  robotsContent,
  serviceAreaKeywords,
  siteInfo
} from '~/utils/seoContent'

const values = [
  {
    label: 'Polished',
    copy: 'Clean templates and intentional backdrops.'
  },
  {
    label: 'Effortless',
    copy: 'Smooth setup, guest flow, and breakdown.'
  },
  {
    label: 'Memorable',
    copy: 'Keepsakes guests want to keep.'
  }
]

const config = useRuntimeConfig()
const requestUrl = useRequestURL()
const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)
const canonical = absoluteUrl('/about-us', siteUrl)
const title = 'About Endless Photobooth | Central Coast Photo Booth Rentals'
const description = 'Meet Endless Photobooth, a Central Coast photo booth rental team serving weddings, parties, corporate events, and milestone celebrations.'
const keywords = keywordContent(baseKeywords, serviceAreaKeywords, [
  'Endless Photobooth',
  'Central Coast photobooth company',
  'wedding photo booth company'
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
        { name: 'About Us', path: '/about-us' }
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
      <section class="paper-gloss relative overflow-hidden px-5 pb-24 pt-40 sm:py-48">
        <div class="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              About Us
            </p>
            <h1 class="type-page split-heading uppercase text-espresso">
              ENDLESS PHOTO BOOTH
            </h1>
          </div>

          <div>
            <div class="editorial-line mb-7"></div>
            <div class="max-w-2xl space-y-6 text-charcoal sm:space-y-7">
              <p class="type-intro fade-text">
                At Endless Photo Booth, we curate elevated, design-driven photo booth experiences for luxury weddings, private celebrations, and distinguished events across Southern California.
              </p>
              <p class="type-body fade-text">
                More than a photo booth, we offer an immersive experience—where sophisticated design, cutting-edge technology, and exceptional service come together to create timeless keepsakes your guests will treasure for years to come.
              </p>
              <p class="type-body fade-text">
                Because luxury is found in the details.
              </p>
              <p class="type-body fade-text text-espresso">
                <strong>Welcome to Endless Photo Booth—where unforgettable moments become timeless memories.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-ivory px-5 py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div class="intro-photo relative">
            <img
              src="/cali-booth.PNG"
              alt="Endless Photobooth Cali booth event setup"
              class="soft-shadow relative aspect-[4/5] w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              The Approach
            </p>
            <h2 class="type-section split-heading uppercase text-espresso">
              Editorial style, real event energy.
            </h2>
            <div class="editorial-line my-8"></div>
            <p class="type-body fade-text max-w-2xl text-charcoal">
              Elevated in the room, easy for guests, and built around real event energy.
            </p>

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                v-for="value in values"
                :key="value.label"
                class="stat-card border border-taupe bg-stone p-6"
              >
                <p class="type-card text-espresso">{{ value.label }}</p>
                <p class="type-small mt-4 text-charcoal">{{ value.copy }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-espresso px-5 py-20 text-ivory">
        <div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-ivory/65">
              Endless Fun
            </p>
            <h2 class="type-section">
              Let the booth become part of the story.
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
