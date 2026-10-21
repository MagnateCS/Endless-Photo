<script setup lang="ts">
const openStep = ref<number | null>(0)
const steps = [
  {
    title: 'INQUIRE',
    paragraphs: [
      'Every unforgettable experience begins with a simple hello.',
      "Reach out and tell us about your celebration. From there, we'll thoughtfully guide you through a personalized experience, ensuring every detail is seamlessly tailored to your vision."
    ]
  },
  {
    title: 'SECURE YOUR DATE',
    paragraphs: [
      "We're honored you've considered Endless Photo Booth for your celebration.",
      "Your event deserves an experience that is as refined as it is unforgettable. We'll personally confirm our availability and guide you through every detail, ensuring the perfect photo booth experience for your occasion.",
      "When you're ready to move forward, a signed agreement and a $100 retainer will reserve your date exclusively.",
      "From there, we'll handle every detail with care, creating a seamless experience and timeless memories for you and your guests."
    ]
  },
  {
    title: "LET'S CUSTOMIZE",
    paragraphs: [
      'Once your reservation is confirmed, we begin the art of bringing your vision to life.',
      "Through a personalized design consultation, we'll learn the details that define your celebration—your style, inspiration, and the atmosphere you wish to create.",
      'Every element, from your bespoke photo template and custom booth interface to your beautifully curated live gallery, is thoughtfully designed to feel like a natural extension of your event.',
      "The result is more than a photo booth. It's an elevated guest experience—beautifully considered, seamlessly executed, and designed to leave a lasting impression."
    ]
  }
]

const toggle = (index: number) => {
  openStep.value = openStep.value === index ? null : index
}

const navigate = (event: KeyboardEvent, index: number) => {
  const targets: Record<string, number> = {
    ArrowDown: (index + 1) % steps.length,
    ArrowUp: (index + steps.length - 1) % steps.length,
    Home: 0,
    End: steps.length - 1
  }
  if (!(event.key in targets)) return
  event.preventDefault()
  const button = event.currentTarget as HTMLButtonElement
  const buttons = button.closest('.process-list')?.querySelectorAll<HTMLButtonElement>('[data-process-trigger]')
  buttons?.[targets[event.key]]?.focus()
}
</script>

<template>
  <section id="process" class="scroll-mt-44 border-y border-taupe bg-stone px-5 py-20 sm:py-28" aria-labelledby="process-title">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
      <div>
        <p class="type-eyebrow mb-4 uppercase text-gold">From Vision to Celebration</p>
        <h2 id="process-title" class="type-section text-espresso">THE PROCESS</h2>
      </div>

      <div class="process-list min-w-0 border-t border-taupe">
        <article v-for="(step, index) in steps" :key="step.title" class="border-b border-taupe">
          <h3>
            <button
              :id="`process-trigger-${index}`"
              type="button"
              data-process-trigger
              :aria-expanded="openStep === index"
              :aria-controls="`process-panel-${index}`"
              class="process-trigger type-subsection flex min-h-16 w-full items-center justify-between gap-4 py-6 text-left text-espresso sm:py-8"
              @click="toggle(index)"
              @keydown="navigate($event, index)"
            >
              <span>{{ step.title }}</span>
              <svg class="h-6 w-6 shrink-0 text-espresso" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M5 12h14" />
                <path class="process-plus" :class="{ 'is-open': openStep === index }" d="M12 5v14" />
              </svg>
            </button>
          </h3>
          <div
            :id="`process-panel-${index}`"
            role="region"
            :aria-labelledby="`process-trigger-${index}`"
            :aria-hidden="openStep !== index"
            :inert="openStep !== index"
            class="process-panel grid"
            :class="{ 'is-open': openStep === index }"
          >
            <div class="min-h-0 overflow-hidden">
              <div class="max-w-2xl space-y-5 pb-7 sm:pb-9">
                <p v-for="paragraph in step.paragraphs" :key="paragraph" class="type-body text-charcoal">{{ paragraph }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-trigger:focus-visible {
  outline: 2px solid #231F1B;
  outline-offset: 4px;
}

.process-panel {
  grid-template-rows: 0fr;
  opacity: 0;
  transition: grid-template-rows 350ms ease, opacity 250ms ease;
}

.process-panel.is-open {
  grid-template-rows: 1fr;
  opacity: 1;
}

.process-plus {
  transform-origin: center;
  transition: transform 250ms ease, opacity 250ms ease;
}

.process-plus.is-open {
  transform: rotate(90deg);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .process-panel,
  .process-plus {
    transition: none;
  }
}
</style>
