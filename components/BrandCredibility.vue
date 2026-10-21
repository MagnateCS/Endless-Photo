<script setup lang="ts">
import { featuredBrands } from '~/utils/socialProof'

// Unconfirmed brand names appear in the local development preview only.
const brands = featuredBrands.filter(brand =>
  import.meta.dev || (brand.affiliationSource && brand.displayPermissionConfirmed)
)
</script>

<template>
  <section v-if="brands.length" class="overflow-hidden border-y border-taupe bg-stone py-12 sm:py-16" aria-labelledby="brand-credibility-title">
    <div class="mx-auto mb-8 max-w-7xl px-5 text-center">
      <h2 id="brand-credibility-title" class="type-section text-espresso">
        TRUSTED FOR EVENTS FEATURED WITH
      </h2>
    </div>
    <ul class="sr-only">
      <li v-for="brand in brands" :key="brand.name">{{ brand.name }}</li>
    </ul>
    <div class="brand-marquee marquee-track type-experience flex w-max whitespace-nowrap text-espresso" aria-hidden="true">
      <div v-for="repeat in 2" :key="repeat" class="marquee-group flex shrink-0 items-center justify-around gap-8 pr-8 sm:gap-16 sm:pr-16">
        <template v-for="brand in brands" :key="brand.name">
          <div
            class="flex h-24 w-44 shrink-0 items-center justify-center rounded-lg px-4 py-3 sm:h-28 sm:w-56"
            :class="brand.darkBackground ? 'bg-espresso' : 'bg-ivory'"
          >
            <img
              :src="brand.logo"
              :alt="brand.name"
              class="h-full w-full object-contain"
              width="192"
              height="88"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span class="text-gold">&bull;</span>
        </template>
      </div>
    </div>
  </section>
</template>
