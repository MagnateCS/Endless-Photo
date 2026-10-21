import { createIcons, icons } from 'lucide'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin((nuxtApp) => {
  let frameId = 0
  let activeContext: ReturnType<typeof gsap.context> | null = null
  let activeSplits: SplitType[] = []

  const cleanup = () => {
    if (frameId) {
      cancelAnimationFrame(frameId)
      frameId = 0
    }

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    activeContext?.revert()
    activeContext = null

    activeSplits.forEach((split) => split.revert())
    activeSplits = []
  }

  const init = () => {
    cleanup()

    frameId = requestAnimationFrame(() => {
      frameId = 0
      createIcons({ icons })

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion) return

      activeContext = gsap.context(() => {
        const has = (selector: string) => Boolean(document.querySelector(selector))
        const heroTitleElement = document.querySelector<HTMLElement>('.hero-title')

        if (heroTitleElement) {
          const heroTitle = new SplitType(heroTitleElement, { types: 'words' })
          activeSplits.push(heroTitle)

          gsap.set(heroTitle.words, {
            y: 34,
            opacity: 0
          })

          gsap.timeline({ defaults: { ease: 'power4.out' } })
            .from('.hero-eyebrow', {
              y: 14,
              opacity: 0,
              duration: 0.55
            })
            .to(heroTitle.words, {
              y: 0,
              opacity: 1,
              stagger: 0.08,
              duration: 0.85
            }, '-=0.2')
            .from('.hero-line', {
              scaleX: 0,
              duration: 0.75
            }, '-=0.45')
            .from('.hero-copy', {
              y: 18,
              opacity: 0,
              duration: 0.75
            }, '-=0.45')
            .from('.hero-note', {
              y: 14,
              opacity: 0,
              duration: 0.65
            })
            .from('.hero-award', {
              x: 12,
              opacity: 0,
              scale: 0.9,
              stagger: 0.08,
              duration: 0.65
            }, '-=0.35')
            .from('.hero-buttons a', {
              y: 14,
              opacity: 0,
              stagger: 0.12,
              duration: 0.65
            }, '-=0.45')
        }

        if (has('.hero-award')) {
          gsap.to('.hero-award', {
            y: (index) => index === 1 ? -3 : 3,
            repeat: -1,
            yoyo: true,
            duration: (index) => 3.2 + index * 0.25,
            ease: 'sine.inOut',
            stagger: 0.18,
            delay: 1.8
          })
        }

        if (has('.scroll-line')) {
          gsap.to('.scroll-line', {
            y: 48,
            repeat: -1,
            duration: 1.35,
            ease: 'power2.inOut'
          })
        }

        document.querySelectorAll<HTMLElement>('.split-heading').forEach((heading) => {
          const split = new SplitType(heading, { types: 'words, chars' })
          activeSplits.push(split)

          gsap.set(split.chars, {
            yPercent: 110,
            opacity: 0,
            rotateX: -65
          })

          gsap.to(split.chars, {
            scrollTrigger: {
              trigger: heading,
              start: 'top 82%'
            },
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.01,
            duration: 0.9,
            ease: 'power4.out'
          })
        })

        gsap.utils.toArray<HTMLElement>('.editorial-line').forEach((line) => {
          if (line.classList.contains('hero-line')) return

          gsap.from(line, {
            scrollTrigger: {
              trigger: line,
              start: 'top 88%'
            },
            scaleX: 0,
            duration: 1,
            ease: 'power3.out'
          })
        })

        gsap.utils.toArray<HTMLElement>('.section-kicker, .fade-text').forEach((el) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%'
            },
            y: 22,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
          })
        })

        if (has('.intro-photo')) {
          gsap.from('.intro-photo', {
            scrollTrigger: {
              trigger: '.intro-photo',
              start: 'top 78%'
            },
            y: 80,
            rotate: -2,
            opacity: 0,
            duration: 1.1,
            ease: 'power4.out'
          })
        }

        if (has('.stat-card')) {
          gsap.from('.stat-card', {
            scrollTrigger: {
              trigger: '.stat-card',
              start: 'top 85%'
            },
            y: 36,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out'
          })
        }

        gsap.utils.toArray<HTMLElement>('.package-item').forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 86%'
            },
            y: 70,
            opacity: 0,
            duration: 0.9,
            ease: 'power4.out'
          })

          const img = card.querySelector('img')

          if (img) {
            gsap.fromTo(img,
              { scale: 1.08 },
              {
                scale: 1,
                scrollTrigger: {
                  trigger: card,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true
                }
              }
            )
          }
        })

        if (has('.award-card')) {
          gsap.from('.award-card', {
            scrollTrigger: {
              trigger: '#awards',
              start: 'top 70%'
            },
            y: 70,
            opacity: 0,
            stagger: 0.14,
            duration: 0.9,
            ease: 'power4.out'
          })
        }

        if (has('.social-photo')) {
          gsap.from('.social-photo', {
            scrollTrigger: {
              trigger: '.social-grid',
              start: 'top 78%'
            },
            y: 80,
            opacity: 0,
            stagger: 0.12,
            duration: 0.95,
            ease: 'power4.out'
          })
        }

        gsap.utils.toArray<HTMLElement>('.social-photo').forEach((photo) => {
          gsap.to(photo, {
            y: -35,
            scrollTrigger: {
              trigger: photo,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          })
        })

        if (has('.contact-form')) {
          gsap.from('.contact-form', {
            scrollTrigger: {
              trigger: '.contact-form',
              start: 'top 82%'
            },
            y: 70,
            opacity: 0,
            duration: 1,
            ease: 'power4.out'
          })

          gsap.from('.contact-form .form-input, .contact-form fieldset, .contact-form button', {
            scrollTrigger: {
              trigger: '.contact-form',
              start: 'top 78%'
            },
            y: 24,
            opacity: 0,
            stagger: 0.08,
            duration: 0.75,
            ease: 'power3.out'
          })
        }

        ScrollTrigger.refresh()
      })
    })
  }

  nuxtApp.hook('app:mounted', init)
  nuxtApp.hook('page:start', cleanup)
  nuxtApp.hook('page:finish', init)
})
