<script setup lang="ts">
useSeoMeta({
  title: 'Plan Your Event | Endless Photobooth',
  description: 'Tell us about your event in a few short steps. Inquire about Endless Photobooth availability and experiences.'
})
</script>

<template>
  <div class="antialiased">
    <div class="grain"></div>
    <SiteHeader />
    <main class="min-h-screen bg-ivory px-5 pb-20 pt-48 sm:pb-28 sm:pt-52">
      <ContactForm />
    </main>
    <SiteFooter />
  </div>
</template>
