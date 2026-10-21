<script setup lang="ts">
defineProps<{ bookingTo: string }>()
const { navLinks } = useSiteContent()
const route = useRoute()
const drawerId = useId()
const trigger = ref<HTMLButtonElement>()
const scroller = ref<HTMLDivElement>()
const sheet = ref<HTMLElement>()
const isOpen = ref(false)
const backdrop = ref(0)
let observer: IntersectionObserver | undefined
let desktop: MediaQueryList | undefined
let hasEntered = false
let previousOverflow = ''
let previousInert = false

function finishClose() {
  if (!isOpen.value) return
  observer?.disconnect()
  const app = document.getElementById('__nuxt')
  if (app) app.inert = previousInert
  document.documentElement.style.overflow = previousOverflow
  isOpen.value = false
  trigger.value?.focus({ preventScroll: true })
}

function updateBackdrop() {
  if (scroller.value && sheet.value) {
    backdrop.value = Math.max(0, Math.min(1, 1 - scroller.value.scrollLeft / sheet.value.offsetWidth))
  }
}

async function openDrawer() {
  if (isOpen.value) return
  isOpen.value = true
  hasEntered = false
  backdrop.value = 0
  previousOverflow = document.documentElement.style.overflow
  document.documentElement.style.overflow = 'hidden'
  await nextTick()
  if (!scroller.value || !sheet.value) return
  const app = document.getElementById('__nuxt')
  previousInert = app?.inert ?? false
  if (app) app.inert = true
  scroller.value.scrollTo({ left: sheet.value.offsetWidth, behavior: 'instant' })
  await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())))
  if (!isOpen.value || !sheet.value || !scroller.value) return
  sheet.value.focus({ preventScroll: true })
  observer = new IntersectionObserver(entries => {
    const entry = entries.at(-1)
    if (!entry || !isOpen.value) return
    if (entry.intersectionRatio > 0.01) hasEntered = true
    if (hasEntered && entry.intersectionRatio === 0) finishClose()
  }, { root: scroller.value, threshold: [0, 0.01, 1] })
  observer.observe(sheet.value)
  scroller.value.scrollTo({ left: 0, behavior: 'auto' })
}

function closeDrawer() {
  if (!hasEntered) return finishClose()
  scroller.value?.scrollTo({ left: sheet.value?.offsetWidth ?? 0, behavior: 'auto' })
}

function handleKeys(event: KeyboardEvent) {
  if (!isOpen.value) return
  if (event.key === 'Escape') {
    event.preventDefault()
    closeDrawer()
  }
  if (event.key === 'Tab') {
    const items = sheet.value?.querySelectorAll<HTMLElement>('a[href], button')
    if (!items?.length) return
    const first = items[0]
    const last = items[items.length - 1]
    if (event.shiftKey && (document.activeElement === first || document.activeElement === sheet.value)) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}

function handleResize() {
  if (desktop?.matches) finishClose()
}

watch(() => route.fullPath, finishClose)
onMounted(() => {
  desktop = window.matchMedia('(min-width: 1024px)')
  desktop.addEventListener('change', handleResize)
  document.addEventListener('keydown', handleKeys)
})
onBeforeUnmount(() => {
  finishClose()
  desktop?.removeEventListener('change', handleResize)
  document.removeEventListener('keydown', handleKeys)
})
</script>

<template>
  <button
    ref="trigger"
    type="button"
    class="mobile-menu type-nav inline-flex min-h-11 items-center gap-2 rounded-full border border-taupe bg-stone px-4 text-espresso lg:hidden"
    :aria-controls="drawerId"
    :aria-expanded="isOpen"
    aria-haspopup="dialog"
    @click="openDrawer"
  >
    Menu
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
      <path d="M4 8h16M4 16h16" />
    </svg>
  </button>
  <Teleport to="body">
    <div v-if="isOpen" :id="drawerId" class="mobile-drawer" :style="{ '--drawer-backdrop': backdrop }">
      <div class="drawer-backdrop" aria-hidden="true" />
      <div ref="scroller" class="drawer-scroller" @scroll.passive="updateBackdrop" @click.self="closeDrawer">
        <section ref="sheet" class="drawer-sheet bg-ivory text-espresso" role="dialog" aria-modal="true" :aria-labelledby="`${drawerId}-title`" tabindex="-1">
          <div class="flex items-center justify-between gap-4 border-b border-taupe pb-6">
            <p :id="`${drawerId}-title`" class="type-card">Explore Endless</p>
            <button type="button" autofocus aria-label="Close navigation" class="drawer-close flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-taupe bg-stone" @click="closeDrawer">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18" /></svg>
            </button>
          </div>
          <nav aria-label="Mobile navigation" class="my-6">
            <ul class="space-y-2">
              <li v-for="link in [{ label: 'Home', to: '/' }, ...navLinks]" :key="link.to">
                <NuxtLink :to="link.to" class="drawer-link type-nav flex min-h-12 items-center justify-between gap-3 rounded-2xl px-4 py-4 uppercase" @click="closeDrawer">
                  {{ link.label }}
                  <span aria-hidden="true">↗</span>
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <NuxtLink :to="bookingTo" class="drawer-booking type-button mt-auto flex min-h-12 items-center justify-between gap-3 rounded-full border border-gold bg-gold px-6 py-4 uppercase text-espresso" @click="closeDrawer">
            Book Now <span aria-hidden="true">↗</span>
          </NuxtLink>
        </section>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 100;
  --drawer-width: min(24rem, 88vw);
}
.drawer-backdrop {
  position: absolute;
  inset: 0;
  background: rgb(35 31 27 / 55%);
  opacity: var(--drawer-backdrop);
}
.drawer-scroller {
  position: relative;
  display: grid;
  grid-template-columns: var(--drawer-width) 100%;
  height: 100%;
  overflow-x: auto;
  overscroll-behavior: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
}
.drawer-scroller::-webkit-scrollbar { display: none; }
.drawer-scroller::after {
  content: '';
  scroll-snap-align: end;
}
.drawer-sheet {
  display: flex;
  flex-direction: column;
  height: 100svh;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  scroll-snap-align: start;
  border-radius: 0 2rem 2rem 0;
  padding: max(1.5rem, env(safe-area-inset-top)) 1.25rem max(1.5rem, env(safe-area-inset-bottom)) max(1.25rem, env(safe-area-inset-left));
}
.drawer-link:hover,
.drawer-link.router-link-exact-active { background: #ECE7DF; }
.drawer-link.router-link-exact-active {
  text-decoration: underline;
  text-underline-offset: 5px;
}
.mobile-menu:focus-visible,
.drawer-sheet :focus-visible {
  outline: 2px solid #231F1B;
  outline-offset: 3px;
}
@media (prefers-reduced-motion: no-preference) {
  .drawer-scroller { scroll-behavior: smooth; }
}
@media (forced-colors: active) {
  .drawer-sheet { border: 1px solid CanvasText; }
  .mobile-menu:focus-visible,
  .drawer-sheet :focus-visible { outline-color: Highlight; }
}
</style>
