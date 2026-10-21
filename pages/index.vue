<script setup lang="ts">
import {
  absoluteUrl,
  baseKeywords,
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
const canonical = absoluteUrl('/', siteUrl)
const homeTitle = 'Photo Booth Rentals in Ventura & Santa Barbara | Endless Photobooth'
const homeDescription = 'Book photobooth rentals, 360 booths, and keychain stations for weddings and events in Ventura, Santa Barbara, and nearby cities.'
const homeKeywords = keywordContent(baseKeywords, serviceAreaKeywords, [
  'Central Coast photo booth rentals',
  'Ventura photobooth',
  'Santa Barbara photobooth',
  'photo booth rental packages'
])

useSeoMeta({
  title: homeTitle,
  description: homeDescription,
  robots: robotsContent,
  keywords: homeKeywords,
  ogTitle: homeTitle,
  ogDescription: homeDescription,
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
      innerHTML: JSON.stringify(buildServiceSchema('Photo Booth Rentals', homeDescription, '/', siteUrl))
    }
  ]
})

const marqueeItems = ['Brand Activations', 'Corporate', 'Parties', 'Luxury Weddings']

const stats = [
  { value: '&infin;', label: 'Unlimited Prints' },
  { value: '4x6', label: 'Premium Photos' },
  { value: '6', label: 'Experiences' }
]

const collageImages = [
  {
    title: 'Open Air',
    image: '/open-air.PNG',
    alt: 'Open air photo booth setup'
  },
  {
    title: 'Cali Booth',
    image: '/cali-booth.PNG',
    alt: 'Cali photo booth setup'
  },
  {
    title: 'Motion Experience 360',
    image: '/360-booth.PNG',
    alt: '360 photo booth setup'
  },
  {
    title: 'Editorial Experience',
    image: '/magazine-box.PNG',
    alt: 'Magazine box photo booth installation'
  }
]

const awardBadges = [
  { image: '/award-2020.png', alt: "WeddingWire Couples' Choice Awards 2020", year: '2020' },
  { image: '/award-2023.png', alt: "WeddingWire Couples' Choice Awards 2023", year: '2023' },
  { image: '/award-2022.png', alt: "WeddingWire Couples' Choice Awards 2022", year: '2022' }
]

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/endlessphotobooth', icon: 'instagram' },
  { label: 'Facebook', href: '#', icon: 'facebook' },
  { label: 'TikTok', href: '#', icon: 'music-2' }
]

const socialPhotos = [
  {
    title: 'Open Air',
    image: '/open-air.PNG',
    alt: 'Open air photo booth setup',
    height: 'h-[360px]',
    offset: false
  },
  {
    title: 'Cali Booth',
    image: '/cali-booth.PNG',
    alt: 'Cali photo booth setup',
    height: 'h-[420px]',
    offset: true
  },
  {
    title: 'Motion Experience 360',
    image: '/360-booth.PNG',
    alt: '360 photo booth setup',
    height: 'h-[360px]',
    offset: false
  },
  {
    title: 'Editorial Experience',
    image: '/magazine-box.PNG',
    alt: 'Magazine box photo booth installation',
    height: 'h-[420px]',
    offset: true
  }
]


const fallbackImage = '/open-air.PNG'

const handleImageError = (event: Event) => {
  const image = event.target as HTMLImageElement
  if (!image.src.endsWith(fallbackImage)) {
    image.src = fallbackImage
  }
}
</script>

<template>
  <div class="antialiased">
    <div class="grain"></div>

    <SiteHeader variant="overlay" booking-to="#contact" />

    <section class="hero-video relative flex min-h-screen items-end overflow-hidden bg-espresso px-5 py-20 text-left sm:px-8 sm:py-24 lg:px-12">
      <video
        class="absolute inset-0 h-full w-full object-cover"
        autoplay
        muted
        loop
        playsinline
        poster="/open-air.PNG"
      >
        <source src="/hero-background.mp4" type="video/mp4">
      </video>

      <div class="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-7xl flex-col justify-end pt-40 text-ivory sm:min-h-[calc(100vh-11rem)]">
        <div class="max-w-3xl pb-8 sm:pb-12">
          <p class="type-eyebrow hero-eyebrow mb-5 uppercase text-ivory/62">
            Endless Photobooth
          </p>

          <h1 class="type-hero hero-title text-ivory">
            <span class="block">Endless Laughter.</span>
            <span class="block">Endless Love.</span>
          </h1>

          <div class="editorial-line hero-line mt-7 max-w-32"></div>

          <p class="type-intro hero-copy mt-7 max-w-xl text-ivory">
            Picture Perfect Moments, Forever Yours.
          </p>

          <p class="type-small hero-note mt-5 max-w-md text-ivory/68">
            Photo booth rentals for Ventura, Santa Barbara, and nearby Central Coast events.
          </p>

          <div class="hero-buttons mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <NuxtLink
              to="#contact"
              class="type-button button-shine px-6 py-3 uppercase transition bg-button text-white hover:bg-espresso hover:text-white"
            >
              Book Now
            </NuxtLink>

            <NuxtLink
              to="#packages"
              class="type-button uppercase text-ivory/72 transition hover:text-ivory"
            >
              View Packages
            </NuxtLink>
          </div>
        </div>

        <div class="hero-awards flex items-center justify-start gap-2 md:absolute md:bottom-5 md:right-0 md:justify-end" aria-label="Awards and recognition">
          <img
            v-for="(award, index) in awardBadges"
            :key="award.image"
            :src="award.image"
            :alt="award.alt"
            class="hero-award shrink-0 rounded object-contain"
            :class="index === 1 ? 'h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20' : 'h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16'"
          />
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/55 sm:flex">
        <span class="type-caption uppercase">Scroll</span>
        <span class="h-12 w-px overflow-hidden bg-ivory/20">
          <span class="scroll-taupe block h-5 w-px bg-ivory"></span>
        </span>
      </div>
    </section>

    <section class="event-marquee overflow-hidden border-y border-taupe bg-stone py-5" aria-label="Event experiences">
      <p class="sr-only">Brand Activations ? Corporate ? Parties ? Luxury Weddings</p>
      <div class="type-experience marquee-track flex w-max whitespace-nowrap uppercase text-espresso" aria-hidden="true">
        <div v-for="repeat in 2" :key="repeat" class="marquee-group flex shrink-0 items-center gap-8 pr-8">
          <template v-for="item in marqueeItems" :key="item">
            <span>{{ item }}</span>
            <span class="text-gold">&bull;</span>
          </template>
        </div>
      </div>
    </section>

    <section class="paper-gloss relative overflow-hidden px-5 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div class="experience-collage grid grid-cols-1 gap-3 sm:grid-cols-6 sm:gap-4">
            <figure class="relative overflow-hidden border border-taupe bg-ivory sm:col-span-4">
              <img
                :src="collageImages[0].image"
                :alt="collageImages[0].alt"
                class="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
                loading="lazy"
                decoding="async"
                @error="handleImageError"
              />
              <figcaption class="type-caption absolute bottom-0 left-0 bg-ivory/90 px-4 py-3 uppercase text-espresso backdrop-blur">
                {{ collageImages[0].title }}
              </figcaption>
            </figure>

            <div class="grid grid-cols-2 gap-3 sm:col-span-2 sm:grid-cols-1 sm:gap-4">
              <figure
                v-for="photo in collageImages.slice(1, 3)"
                :key="photo.title"
                class="relative overflow-hidden border border-taupe bg-ivory"
              >
                <img
                  :src="photo.image"
                  :alt="photo.alt"
                  class="aspect-[3/4] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  @error="handleImageError"
                />
                <figcaption class="type-caption absolute bottom-0 left-0 bg-ivory/90 px-3 py-2 uppercase text-espresso backdrop-blur">
                  {{ photo.title }}
                </figcaption>
              </figure>
            </div>

            <figure class="relative overflow-hidden border border-taupe bg-ivory sm:col-span-3">
              <img
                :src="collageImages[3].image"
                :alt="collageImages[3].alt"
                class="aspect-[4/3] w-full object-cover"
                loading="lazy"
                decoding="async"
                @error="handleImageError"
              />
              <figcaption class="type-caption absolute bottom-0 left-0 bg-ivory/90 px-4 py-3 uppercase text-espresso backdrop-blur">
                {{ collageImages[3].title }}
              </figcaption>
            </figure>

            <div class="flex min-h-32 items-center border border-taupe bg-espresso p-6 text-ivory sm:col-span-3">
              <p class="type-card">
                Soft, editorial keepsakes from every booth style.
              </p>
            </div>
          </div>

          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              The Endless Experience
            </p>

            <h2 class="type-section split-heading uppercase text-espresso">
              ENDLESS PHOTO BOOTH
            </h2>

            <div class="editorial-line my-8"></div>

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

            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div
                v-for="stat in stats"
                :key="stat.label"
                class="stat-card border border-taupe bg-ivory p-6"
              >
                <p class="type-card text-espresso" v-html="stat.value"></p>
                <p class="type-eyebrow mt-3 uppercase text-charcoal">
                  {{ stat.label }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="packages" class="relative scroll-mt-44 overflow-hidden bg-ivory px-5 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
            Our Experiences
          </p>

          <h2 class="type-section split-heading uppercase text-espresso">
            Choose Your Experience
          </h2>

          <div class="editorial-line mx-auto mt-8 max-w-5xl"></div>
        </div>

        <PackageGrid />
      </div>
    </section>

    <section id="awards" class="relative overflow-hidden bg-espresso px-5 py-24 text-ivory sm:py-32">
      <div class="absolute inset-0 opacity-15">
        <div class="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-ivory blur-3xl"></div>
        <div class="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-taupe blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-7xl">
        <div class="mx-auto mb-16 max-w-4xl text-center">
          <p class="type-eyebrow section-kicker mb-4 uppercase text-ivory/70">
            Awards &amp; Recognition
          </p>

          <h2 class="type-section split-heading uppercase text-ivory">
            Loved at every event.
          </h2>

          <p class="type-body fade-text mx-auto mt-7 max-w-2xl text-ivory/70">
            WeddingWire recognition for celebrations across the Central Coast.
          </p>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <div
            v-for="award in awardBadges"
            :key="award.image"
            class="award-card border border-ivory/25 bg-ivory/8 p-8 text-center backdrop-blur"
          >
            <img
              :src="award.image"
              :alt="award.alt"
              class="mx-auto h-28 w-28 object-contain"
            />
            <p class="type-eyebrow mt-5 uppercase text-ivory/70">
              {{ award.year }} Couples' Choice
            </p>
          </div>
        </div>
      </div>
    </section>

    <BrandCredibility />
    <TestimonialsSection />

    <section id="locations" class="scroll-mt-44 bg-ivory px-5 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Service Areas
            </p>

            <h2 class="type-section split-heading uppercase text-espresso">
              Local photo booth rentals.
            </h2>
          </div>

          <div>
            <div class="editorial-line mb-6"></div>
            <p class="type-body fade-text max-w-2xl text-charcoal">
              Serving {{ siteInfo.serviceAreaText }}.
            </p>
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="location in locationPages"
            :key="location.slug"
            :href="`/locations/${location.slug}`"
            class="group border border-taupe bg-stone p-5 transition hover:border-espresso hover:bg-ivory"
          >
            <p class="type-card text-espresso">
              {{ location.city }}
            </p>
            <p class="type-eyebrow mt-3 uppercase text-gold transition group-hover:text-espresso">
              Photo booth rentals
            </p>
          </a>
        </div>
      </div>
    </section>

    <section id="socials" class="relative overflow-hidden bg-stone px-5 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="mb-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
              Stay Connected
            </p>

            <h2 class="type-section split-heading uppercase text-espresso">
              Follow The Fun
            </h2>
          </div>

          <div>
            <div class="editorial-line mb-6"></div>
            <p class="type-body fade-text max-w-2xl text-charcoal">
              Recent setups, guest moments, and event highlights from the feed.
            </p>

            <div class="mt-7 flex flex-wrap gap-3">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="type-button group inline-flex items-center gap-3 border border-taupe bg-ivory px-5 py-3 uppercase text-espresso transition hover:bg-espresso hover:text-ivory"
              >
                <i :data-lucide="link.icon" class="h-4 w-4"></i>
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>

        <div class="social-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="photo in socialPhotos"
            :key="photo.title"
            href="#"
            class="social-photo group relative block overflow-hidden border border-taupe bg-ivory p-3"
            :class="photo.offset ? 'lg:mt-12' : ''"
          >
            <img
              :src="photo.image"
              :alt="photo.alt"
              class="w-full object-cover transition duration-700 group-hover:scale-105"
              :class="photo.height"
              loading="lazy"
              decoding="async"
              @error="handleImageError"
            />
            <div class="absolute inset-3 flex items-end bg-gradient-to-t from-espresso/55 to-transparent p-5 opacity-100">
              <p class="type-eyebrow uppercase text-ivory">
                {{ photo.title }}
              </p>
            </div>
          </a>
        </div>

        <div class="mt-14 border-y border-taupe py-7 text-center">
          <p class="type-eyebrow uppercase text-espresso">
            Follow us on Instagram
          </p>
          <p class="type-card mt-3 uppercase text-espresso">
            @endlessphotobooth
          </p>
        </div>
      </div>
    </section>

    <ProcessSection />

    <section id="contact" class="relative scroll-mt-44 overflow-hidden bg-ivory px-5 py-24 sm:py-32">
      <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"></div>
      <div class="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-taupe/20 blur-3xl"></div>

      <div class="relative mx-auto max-w-5xl">
        <div class="mx-auto max-w-3xl text-center">
          <p class="type-eyebrow section-kicker mb-4 uppercase text-gold">
            Contact Us
          </p>

          <h2 class="type-section split-heading text-espresso">
            LET'S TALK
          </h2>

          <p class="type-body fade-text mx-auto mt-7 max-w-2xl text-charcoal">
            Our team is here to guide you through every detail, ensuring a seamless and elevated addition to your event.
          </p>
          <p class="type-body mx-auto mt-5 max-w-2xl text-charcoal">Availability is limited for peak dates&mdash;connect with us today to begin your experience.</p>
          <a href="/inquire" class="type-button button-shine mt-8 inline-flex min-h-12 items-center justify-center bg-button px-8 py-4 text-white transition hover:bg-espresso">INQUIRE TODAY</a>
        </div>
        <ContactDetails />
      </div>
    </section>

    <SiteFooter />
  </div>
</template>
