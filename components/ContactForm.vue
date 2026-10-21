<script setup lang="ts">
import { experiences, audioGuestbook } from '~/utils/experiences'
const { budgetOptions } = useSiteContent()
const pending = ref(false)
const ready = ref(false)
onMounted(() => { ready.value = true })
const status = ref('')
const failed = ref(false)
const fields = [
  { name: 'full_name', label: 'Full Name', type: 'text', required: true, autocomplete: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
  { name: 'used_before', label: 'Have you used Endless Photo Booth before?', type: 'radio', options: ['Yes', 'No'] },
  { name: 'phone', label: 'Phone Number', type: 'tel', autocomplete: 'tel' },
  { name: 'contact_method', label: 'Preferred Contact Method', type: 'select', options: ['Call', 'Text', 'Email'] },
  { name: 'project_date', label: 'Project Date', type: 'date' },
  { name: 'event_location', label: 'Event Location', type: 'text' },
  { name: 'budget', label: 'Budget', type: 'select', options: [...budgetOptions, 'Not sure yet'] },
  { name: 'guest_count', label: 'Expected Number of Guests', type: 'number' },
  { name: 'rental_timeframe', label: 'Desired Rental Timeframe', type: 'text' },
  { name: 'referral', label: 'How Did You Hear About Us?', type: 'text' }
]

const route = useRoute()
const selectedExperience = computed(() => [...experiences, audioGuestbook].find(item => item.slug === route.query.experience))
const router = useRouter()
const formElement = ref<HTMLFormElement>()
const heading = ref<HTMLElement>()
const questionnaire = ref<HTMLElement>()
const complete = ref(false)
const maxStep = ref(1)
const steps = [
  { title: 'Your event', description: 'Tell us a little about what you are planning.', names: ['project_date', 'event_location', 'guest_count'] },
  { title: 'Your experience', description: 'Let us know what you have in mind. It is okay if you are still deciding.', names: ['rental_timeframe', 'budget', 'used_before'] },
  { title: 'Stay in touch', description: 'Where can our team reach you? Only your name and email are required.', names: ['full_name', 'email', 'phone', 'contact_method'] },
  { title: 'Review & send', description: 'One last look before we start planning together.', names: ['referral'] }
]
const answers = reactive<Record<string, string>>(Object.fromEntries(fields.map(field => [field.name, ''])))
const step = computed(() => {
  const requested = Number(route.query.step || 1)
  return Number.isInteger(requested) ? Math.max(1, Math.min(requested, maxStep.value, 4)) : 1
})
const current = computed(() => steps[step.value - 1])
const orderedFields = computed(() => steps.flatMap(group => group.names.map(name => fields.find(field => field.name === name)!)))
async function goTo(target: number) {
  maxStep.value = Math.max(maxStep.value, target)
  await router.push({ query: { ...route.query, step: String(target) } })
}
watch([step, complete], async () => {
  await nextTick()
  heading.value?.focus({ preventScroll: true })
  questionnaire.value?.scrollIntoView({ behavior: 'instant', block: 'start' })
})
function validate(names: string[]) {
  for (const name of names) {
    const input = formElement.value?.elements.namedItem(name)
    if (input instanceof HTMLInputElement && !input.checkValidity()) {
      input.reportValidity()
      return false
    }
  }
  return true
}
async function advance() {
  if (pending.value || !validate(current.value.names)) return
  if (step.value < 4) await goTo(step.value + 1)
  else await submitInquiry()
}
async function submitInquiry() {
  for (let index = 0; index < steps.length; index++) {
    const invalid = steps[index].names.some(name => {
      const input = formElement.value?.elements.namedItem(name)
      return input instanceof HTMLInputElement && !input.checkValidity()
    })
    if (invalid) {
      await goTo(index + 1)
      await nextTick()
      validate(steps[index].names)
      return
    }
  }
  const data = new FormData(formElement.value)
  pending.value = true
  status.value = ''
  failed.value = false
  try {
    const response = await fetch('https://formsubmit.co/ajax/endlessphotobooths@gmail.com', {
      method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(20000)
    })
    const result = await response.json()
    if (!response.ok || (result.success !== true && result.success !== 'true') || /activat/i.test(result.message || '')) throw new Error('Submission not accepted')
    complete.value = true
    Object.keys(answers).forEach(name => { answers[name] = '' })
  } catch {
    failed.value = true
    status.value = 'We could not confirm your submission. Your answers are still here. Please try again, email endlessphotobooths@gmail.com, or call (805) 710-8997.'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <section ref="questionnaire" class="questionnaire mx-auto max-w-2xl" aria-label="Event inquiry">
    <p v-if="!ready" class="type-body mb-6 text-charcoal">Please enable JavaScript to use the guided questionnaire, or <a href="mailto:endlessphotobooths@gmail.com" class="underline">email our team</a> with your event details.</p>
    <div v-if="complete" class="border border-taupe bg-stone p-6 sm:p-10">
      <p class="type-eyebrow mb-5 uppercase text-gold">Inquiry submitted</p>
      <h1 ref="heading" tabindex="-1" class="type-page scroll-mt-32 text-espresso">Thank you.</h1>
      <p class="type-body mt-6 text-charcoal">Your inquiry has been submitted. Our team will be in touch to discuss your event and bring your experience to life.</p>
      <NuxtLink to="/" class="type-button mt-8 inline-flex min-h-12 items-center bg-button px-8 py-4 uppercase text-white hover:bg-espresso">Back to home</NuxtLink>
    </div>
    <template v-else>
      <p v-if="selectedExperience" class="type-small mb-5 text-charcoal">Your selected experience: <span class="text-espresso">{{ selectedExperience.name }}</span></p>
      <nav aria-label="Inquiry progress" class="mb-10">
        <p class="type-eyebrow uppercase text-gold" aria-live="polite">Step {{ step }} of 4</p>
        <ol class="mt-4 grid grid-cols-4 gap-2">
          <li v-for="(item, index) in steps" :key="item.title" :aria-current="step === index + 1 ? 'step' : undefined">
            <div class="h-1" :class="index < step ? 'bg-espresso' : 'bg-taupe'"></div>
            <span class="type-caption mt-3 hidden text-charcoal sm:block">{{ item.title }}</span>
            <span class="sr-only sm:hidden">{{ item.title }}</span>
          </li>
        </ol>
      </nav>
      <h1 ref="heading" tabindex="-1" class="type-page scroll-mt-32 text-espresso">{{ current.title }}</h1>
      <p class="type-body mt-5 text-charcoal">{{ current.description }}</p>
      <p v-if="step < 3" class="type-small mt-3 text-charcoal">These questions are optional. Share what you know, or skip for now.</p>
      <form id="inquiry-form" ref="formElement" novalidate class="mt-9" action="https://formsubmit.co/endlessphotobooths@gmail.com" method="POST" :aria-busy="pending" @submit.prevent="advance">
        <input type="hidden" name="_subject" value="New Endless Photo Booth event inquiry">
        <input v-if="selectedExperience" type="hidden" name="experience" :value="selectedExperience.name">
        <input type="hidden" name="_template" value="table">
        <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true">
        <fieldset :disabled="pending || !ready" class="grid min-w-0 gap-6">
          <legend class="sr-only">{{ current.title }}</legend>
          <template v-for="field in orderedFields" :key="field.name">
            <fieldset v-if="field.type === 'radio'" v-show="current.names.includes(field.name)">
              <legend class="type-label mb-2 text-espresso">{{ field.label }}</legend>
              <div class="flex flex-wrap gap-6">
                <label v-for="option in field.options" :key="option" :for="'inquiry-' + field.name + '-' + option" class="type-label flex min-h-12 cursor-pointer items-center gap-3 text-espresso">
                  <input :id="'inquiry-' + field.name + '-' + option" v-model="answers[field.name]" type="radio" :name="field.name" :value="option" class="h-5 w-5 accent-gold">{{ option }}
                </label>
              </div>
            </fieldset>
            <div v-else v-show="current.names.includes(field.name)" class="min-w-0">
              <label :for="'inquiry-' + field.name" class="type-label mb-2 block text-espresso">{{ field.label }}{{ field.required ? ' (required)' : '' }}</label>
              <select v-if="field.type === 'select'" :id="'inquiry-' + field.name" v-model="answers[field.name]" class="form-input" :name="field.name">
                <option value="">{{ field.name === 'budget' ? 'Select a budget (USD)' : 'Select a contact method' }}</option>
                <option v-for="option in field.options" :key="option">{{ option }}</option>
              </select>
              <input v-else :id="'inquiry-' + field.name" v-model="answers[field.name]" class="form-input" :type="field.type" :name="field.name" :required="field.required" :autocomplete="field.autocomplete" :min="field.type === 'number' ? 1 : undefined" :step="field.type === 'number' ? 1 : undefined" :inputmode="field.type === 'number' ? 'numeric' : undefined" :pattern="field.name === 'full_name' ? '.*\\S.*' : undefined" :maxlength="field.type === 'text' ? 300 : undefined" :autocapitalize="field.type === 'email' ? 'off' : undefined" :spellcheck="field.type === 'email' ? false : undefined">
            </div>
          </template>
          <div v-if="step === 4" class="border border-taupe bg-stone p-5 sm:p-7">
            <section v-for="(group, index) in steps.slice(0, 3)" :key="group.title" class="review-group">
              <div class="flex items-center justify-between gap-4">
                <h2 class="type-card text-espresso">{{ group.title }}</h2>
                <button type="button" class="type-button min-h-12 px-2 underline underline-offset-4" :aria-label="'Edit ' + group.title" @click="goTo(index + 1)">Edit</button>
              </div>
              <dl class="mt-4 grid gap-4">
                <div v-for="name in group.names" :key="name">
                  <dt class="type-label text-charcoal">{{ fields.find(field => field.name === name)?.label }}</dt>
                  <dd class="type-body mt-1 break-words text-espresso">{{ answers[name] || 'Not provided' }}</dd>
                </div>
              </dl>
            </section>
          </div>
          <div class="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button v-if="step > 1" type="button" class="type-button min-h-12 border border-taupe px-6 py-4 uppercase text-espresso hover:border-espresso" @click="goTo(step - 1)">Back</button>
            <button type="submit" class="type-button button-shine min-h-12 bg-button px-8 py-4 uppercase text-white transition hover:bg-espresso disabled:cursor-wait disabled:opacity-60 sm:ml-auto">{{ pending ? 'Sending...' : step === 4 ? 'Submit Inquiry' : 'Continue' }}</button>
          </div>
          <button v-if="step < 3" type="button" class="type-small min-h-12 justify-self-center px-4 text-charcoal underline underline-offset-4" @click="goTo(step + 1)">Skip for now</button>
        </fieldset>
        <p role="status" aria-live="polite" aria-atomic="true" class="type-body mt-6" :class="failed ? 'text-red-800' : 'text-espresso'">{{ status }}</p>
      </form>
    </template>
    <p class="type-small mt-10 text-center text-charcoal">Prefer to talk? <a href="tel:+18057108997" class="underline underline-offset-4">Call or text (805) 710-8997</a></p>
  </section>
</template>

<style scoped>
.questionnaire { scroll-margin-top: 180px; }
.form-input { min-width: 0; min-height: 52px; }
.form-input:user-invalid { border-color: #991b1b; }
.form-input:focus-visible, input[type='radio']:focus-visible, button:focus-visible, a:focus-visible { outline: 2px solid #4D4843; outline-offset: 3px; }
.review-group + .review-group { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #D9D1C7; }
</style>
