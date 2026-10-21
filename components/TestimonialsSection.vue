<script setup lang="ts">
import { googleReviewUrl, reviewPlatforms, sampleTestimonial, testimonials } from '~/utils/socialProof'

const showDesignSample = import.meta.dev
</script>

<template>
  <section id="testimonials" class="scroll-mt-44 bg-ivory px-5 py-20 sm:py-28" aria-labelledby="testimonials-title">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center">
        <p class="type-eyebrow mb-4 uppercase text-gold">Guest Experiences</p>
        <h2 id="testimonials-title" class="type-section text-espresso">The Experience, in Their Words</h2>
        <div class="editorial-line mx-auto mt-8 max-w-xl"></div>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <figure v-for="review in testimonials" :key="review.platform + review.author" class="flex min-w-0 flex-col border border-taupe bg-stone p-6 sm:p-9">
          <div class="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p class="type-eyebrow text-espresso">{{ review.platform }}</p>
            <span class="type-body text-espresso" :aria-label="`${review.rating} out of 5 stars`">
              <span aria-hidden="true" class="text-gold">★★★★★</span>
            </span>
          </div>
          <blockquote :cite="review.url" class="type-intro mb-8 text-espresso">
            <p>“{{ review.quote }}”</p>
          </blockquote>
          <figcaption class="mt-auto border-t border-taupe pt-5">
            <p class="type-body text-espresso">{{ review.author }}</p>
            <p class="type-caption mt-1 text-charcoal">
              <time :datetime="review.date">{{ review.dateLabel }}</time> · Review excerpt
            </p>
            <a :href="review.url" target="_blank" rel="noopener noreferrer" class="type-small mt-4 inline-block text-espresso underline underline-offset-4 hover:text-charcoal">
              Read on {{ review.platform }}<span class="sr-only"> (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>
      </div>

      <figure v-if="showDesignSample" class="mx-auto mt-8 max-w-3xl border border-taupe bg-stone p-6 sm:p-9">
        <blockquote class="type-intro text-espresso"><p>“{{ sampleTestimonial }}”</p></blockquote>
        <figcaption class="type-caption mt-5 text-charcoal">Client-supplied design sample · Source awaiting confirmation</figcaption>
      </figure>

      <div class="mt-10 flex flex-wrap justify-center gap-4">
        <a v-if="googleReviewUrl" :href="googleReviewUrl" target="_blank" rel="noopener noreferrer" class="type-button button-shine bg-button px-6 py-4 text-white transition hover:bg-espresso">
          Google reviews<span class="sr-only"> (opens in a new tab)</span>
        </a>
        <a v-for="platform in reviewPlatforms" :key="platform.name" :href="platform.url" target="_blank" rel="noopener noreferrer" class="type-button button-shine bg-button px-6 py-4 text-white transition hover:bg-espresso">
          {{ platform.name }} reviews<span class="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  </section>
</template>
