<script setup lang="ts">
import { audioGuestbook } from '~/utils/experiences'
const { packages } = useSiteContent()

async function refreshAnimations() {
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  ScrollTrigger.refresh()
}
</script>

<template>
  <div class="experience-collection">
    <div class="grid items-start gap-x-10 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
      <article v-for="pkg in packages" :id="pkg.slug" :key="pkg.slug" class="experience-card package-item flex min-w-0 scroll-mt-44 flex-col border-t border-taupe pt-7" :aria-labelledby="`${pkg.slug}-title`">
        <p class="type-eyebrow uppercase text-gold">{{ pkg.category }}</p>
        <h3 :id="`${pkg.slug}-title`" class="type-experience mt-4 text-espresso">{{ pkg.title || pkg.name }}</h3>
        <p v-if="pkg.tagline" class="type-body mt-3 text-charcoal">{{ pkg.tagline }}</p>
        <img :src="pkg.image" :alt="pkg.alt" class="package-image mt-7 aspect-[4/3] w-full object-cover" :class="pkg.slug === 'editorial-experience' ? 'object-[center_65%]' : ''" width="800" height="600" loading="lazy" decoding="async">
        <div class="editorial-line mt-7" aria-hidden="true"></div>
        <div class="my-7 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-espresso">
          <p class="type-price-description">Starting at</p>
          <p class="type-price">{{ pkg.price }}</p>
        </div>
        <ul class="type-small mb-6 space-y-3 text-charcoal" :aria-label="`${pkg.name} highlights`">
          <li v-for="highlight in pkg.highlights" :key="highlight" class="flex items-start gap-3">
            <svg aria-hidden="true" class="mt-1 h-4 w-4 shrink-0 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m5 12 4 4L19 6" /></svg>
            <span>{{ highlight }}</span>
          </li>
        </ul>
        <div class="mb-7 divide-y divide-taupe border-y border-taupe">
          <details v-if="pkg.items.length" class="package-details" @toggle="refreshAnimations">
            <summary class="type-label flex min-h-12 cursor-pointer items-center justify-between gap-4 py-3 text-espresso">
              <span><span class="when-closed">View all {{ pkg.items.length }} inclusions</span><span class="when-open">Hide inclusions</span><span class="sr-only"> for {{ pkg.name }}</span></span>
              <svg aria-hidden="true" class="disclosure-chevron h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <ul class="type-small space-y-3 pb-6 pt-2 text-charcoal">
              <li v-for="item in pkg.items" :key="item" class="flex gap-3">
                <span aria-hidden="true" class="text-gold">&bull;</span><span>{{ item }}</span>
              </li>
            </ul>
          </details>
          <details v-if="pkg.description.length" class="package-details" @toggle="refreshAnimations">
            <summary class="type-label flex min-h-12 cursor-pointer items-center justify-between gap-4 py-3 text-espresso">
              <span><span class="when-closed">Explore the experience</span><span class="when-open">Hide description</span><span class="sr-only"> for {{ pkg.name }}</span></span>
              <svg aria-hidden="true" class="disclosure-chevron h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m6 9 6 6 6-6" /></svg>
            </summary>
            <div class="space-y-5 pb-6 pt-2">
              <p v-for="paragraph in pkg.description" :key="paragraph" class="type-body text-charcoal">{{ paragraph }}</p>
            </div>
          </details>
        </div>
        <NuxtLink :to="{ path: '/inquire', query: { experience: pkg.slug } }" :aria-label="`Inquire about ${pkg.name}`" class="type-button button-shine mt-auto inline-flex min-h-12 w-full items-center justify-center bg-button px-6 py-4 uppercase text-white transition hover:bg-espresso sm:w-fit">Inquire Today</NuxtLink>
      </article>
    </div>
    <article id="audio-guestbook" aria-labelledby="audio-guestbook-title" class="package-item mt-20 grid gap-8 border-y border-taupe bg-stone p-6 sm:p-10 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:gap-14">
      <img :src="audioGuestbook.image" :alt="audioGuestbook.alt" class="package-image aspect-[4/3] w-full object-cover" width="800" height="600" loading="lazy" decoding="async">
      <div class="min-w-0">
        <p class="type-eyebrow uppercase text-gold">More ways to remember</p>
        <h3 id="audio-guestbook-title" class="type-experience mt-4 text-espresso">{{ audioGuestbook.name }}</h3>
        <p class="type-body mt-5 max-w-xl text-charcoal">{{ audioGuestbook.description }}</p>
        <NuxtLink :to="{ path: '/inquire', query: { experience: audioGuestbook.slug } }" aria-label="Inquire about Audio Guestbook" class="type-button button-shine mt-7 inline-flex min-h-12 items-center justify-center bg-button px-6 py-4 uppercase text-white transition hover:bg-espresso">Inquire Today</NuxtLink>
      </div>
    </article>
  </div>
</template>

<style scoped>
a:focus-visible, summary:focus-visible { outline: 2px solid #4D4843; outline-offset: 4px; }
summary { list-style: none; }
summary::-webkit-details-marker { display: none; }
.when-open { display: none; }
details[open] > summary .when-open { display: inline; }
details[open] > summary .when-closed { display: none; }
.disclosure-chevron { transition: transform 180ms ease; }
details[open] > summary .disclosure-chevron { transform: rotate(180deg); }
@media (prefers-reduced-motion: reduce) {
  .disclosure-chevron { transition: none; }
}
</style>
