<script setup lang="ts">
import { locationPages, siteInfo } from '~/utils/seoContent'

const socialLinks = [
  { href: 'https://www.instagram.com/endlessphotobooth', icon: 'instagram', label: 'Instagram' },
  { href: '#', icon: 'facebook', label: 'Facebook' },
  { href: '#', icon: 'music-2', label: 'TikTok' },
  { href: 'mailto:endlessphotobooths@gmail.com', icon: 'mail', label: 'Email' }
]

const footerLinks = [
  { label: 'Packages', to: '/packages' },
  { label: 'Locations', to: '/locations' },
  { label: 'Keychain Station', to: '/keychain-station' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <footer class="border-t border-taupe bg-stone px-5 py-10">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p class="type-footer uppercase text-espresso">
            Endless Photobooth
          </p>
          <p class="type-footer mt-2 uppercase text-charcoal">
            Photo Booth Rentals &bull; Event Experiences
          </p>
        </div>

        <div class="flex items-center gap-3">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            :target="link.href === 'mailto:endlessphotobooths@gmail.com' ? undefined : '_blank'"
            rel="noopener noreferrer"
            :aria-label="link.label"
            class="flex h-10 w-10 items-center justify-center border border-taupe text-espresso transition hover:bg-espresso hover:text-ivory"
          >
            <i :data-lucide="link.icon" class="h-4 w-4"></i>
          </a>
        </div>

        <div class="type-footer text-charcoal md:text-right">
          <p>Contact us at {{ siteInfo.phoneDisplay }}</p>
          <p>Follow us on Instagram @endlessphotobooth</p>
        </div>
      </div>

      <div class="mt-10 grid gap-8 border-t border-taupe pt-8 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p class="type-footer mb-4 uppercase text-espresso">
            Explore
          </p>
          <div class="type-footer flex flex-wrap gap-x-5 gap-y-3 text-charcoal">
            <NuxtLink
              v-for="link in footerLinks"
              :key="link.to"
              :to="link.to"
              class="transition hover:text-espresso"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>

        <div>
          <p class="type-footer mb-4 uppercase text-espresso">
            Service Areas
          </p>
          <div class="type-footer flex flex-wrap gap-x-5 gap-y-3 text-charcoal">
            <NuxtLink
              v-for="location in locationPages"
              :key="location.slug"
              :to="`/locations/${location.slug}`"
              class="transition hover:text-espresso"
            >
              {{ location.city }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
