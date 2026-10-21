<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'overlay' | 'solid'
  bookingTo?: string
}>(), {
  variant: 'solid',
  bookingTo: '/contact'
})

const { navLinks } = useSiteContent()

const navClass = computed(() => props.variant === 'overlay'
  ? 'shadow-[0_12px_40px_rgba(35,31,27,0.18)]'
  : 'shadow-[0_12px_40px_rgba(35,31,27,0.08)]')
</script>

<template>
  <header class="fixed left-0 top-0 z-50 w-full">
    <AnnouncementBar />
    <div class="px-4 py-4 sm:px-6">
    <nav
      aria-label="Main navigation"
      class="site-nav type-nav mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-taupe bg-ivory px-5 py-3 text-espresso sm:px-7"
      :class="navClass"
    >
      <NuxtLink to="/" class="nav-home flex shrink-0 items-center gap-3 rounded-lg">
        <img
          src="/logo.png"
          alt="Endless Photobooth"
          class="h-14 w-auto object-contain brightness-0"
        />
      </NuxtLink>

      <div class="type-nav hidden items-center gap-1 uppercase lg:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link whitespace-nowrap rounded-full px-4 py-3 text-espresso"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <NuxtLink
        :to="props.bookingTo"
        class="nav-booking type-button hidden shrink-0 items-center gap-2 rounded-full border border-gold bg-gold px-5 py-3 uppercase text-espresso lg:inline-flex"
      >
        Book Now
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </NuxtLink>
      <MobileNavigation :booking-to="props.bookingTo" />
    </nav>
    </div>
  </header>
</template>

<style scoped>
.nav-link {
  transition: background-color 180ms ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #ECE7DF;
}

.nav-link.router-link-active {
  text-decoration: underline;
  text-underline-offset: 5px;
}

.site-nav a:focus-visible {
  outline: 2px solid #231F1B;
  outline-offset: 4px;
}

.nav-booking {
  transition: background-color 180ms ease, box-shadow 180ms ease;
}

.nav-booking:hover {
  background-color: #C8AD7D;
  box-shadow: 0 4px 12px rgb(184 154 99 / 24%);
}

@media (forced-colors: active) {
  .site-nav a:focus-visible {
    outline-color: Highlight;
  }

  .nav-link:hover {
    outline: 1px solid LinkText;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-link,
  .nav-booking {
    transition: none;
  }
}
</style>
