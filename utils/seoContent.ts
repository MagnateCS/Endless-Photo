export type LocationPage = {
  slug: string
  city: string
  region: string
  county: string
  nearby: string[]
  title: string
  description: string
  hero: string
  intro: string
  localFit: string[]
  services: string[]
  proofPoints: string[]
}

export const siteInfo = {
  name: 'Endless Photobooth',
  defaultSiteUrl: 'https://endlessphotobooth.com',
  phoneDisplay: '(805) 710-8997',
  phone: '+18057108997',
  email: 'endlessphotobooths@gmail.com',
  instagram: 'https://www.instagram.com/endlessphotobooth',
  image: '/open-air.jpg',
  logo: '/logo.png',
  serviceAreaText: 'Ventura, Santa Barbara, Paso Robles, Carpinteria, Santa Maria, Camarillo, Westlake Village, and Montecito'
}

export const primaryServices = [
  'Photo booth rentals',
  'Photobooth rentals',
  'Open air photo booth',
  '360 booth',
  'Social booth',
  'Cali booth',
  'Magazine box',
  'Audio guest book',
  'Keychain station'
]

export const robotsContent = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const baseKeywords = [
  'photobooth',
  'photo booth',
  'photobooth rentals',
  'photo booth rentals',
  'keychain station',
  '360 booth',
  'open air photo booth',
  'social booth',
  'Cali booth',
  'wedding photo booth',
  'event photo booth',
  'quinceanera photo booth',
  'corporate event photo booth'
]

export const serviceAreaKeywords = [
  'Ventura photo booth rentals',
  'Santa Barbara photo booth rentals',
  'Paso Robles photo booth rentals',
  'Carpinteria photo booth rentals',
  'Santa Maria photo booth rentals',
  'Camarillo photo booth rentals',
  'Westlake Village photo booth rentals',
  'Montecito photo booth rentals'
]

export const keywordContent = (...groups: string[][]) =>
  Array.from(new Set(groups.flat().filter(Boolean))).join(', ')

export const locationPages: LocationPage[] = [
  {
    slug: 'ventura-photo-booth-rentals',
    city: 'Ventura',
    region: 'CA',
    county: 'Ventura County',
    nearby: ['Camarillo', 'Santa Barbara', 'Carpinteria'],
    title: 'Photo Booth Rentals in Ventura, CA | Endless Photobooth',
    description: 'Book photo booth rentals in Ventura, CA for weddings, parties, corporate events, quinceaneras, 360 booth moments, and keychain keepsakes.',
    hero: 'Photo Booth Rentals in Ventura, CA',
    intro: 'Polished photo booth rentals for coastal venues, private parties, and milestone events in Ventura.',
    localFit: [
      'Coastal weddings and receptions',
      'Quinceaneras, birthdays, and school events',
      'Corporate parties and brand activations'
    ],
    services: [
      'Open air booths with prints',
      '360 booth video moments',
      'Keychain favor add-ons'
    ],
    proofPoints: [
      'Custom templates can match your invitation, brand colors, or event theme.',
      'Digital copies make it easy for guests to share photos after the event.',
      'Setup and breakdown are planned around your venue timeline.'
    ]
  },
  {
    slug: 'santa-barbara-photo-booth-rentals',
    city: 'Santa Barbara',
    region: 'CA',
    county: 'Santa Barbara County',
    nearby: ['Montecito', 'Carpinteria', 'Ventura'],
    title: 'Photo Booth Rentals in Santa Barbara, CA | Endless Photobooth',
    description: 'Book elegant photo booth rentals in Santa Barbara for weddings, private parties, corporate events, 360 booth videos, and keychain keepsakes.',
    hero: 'Photo Booth Rentals in Santa Barbara, CA',
    intro: 'Clean, elevated photo booth rentals for Santa Barbara weddings, parties, and private events.',
    localFit: [
      'Coastal weddings and estate events',
      'Corporate mixers and nonprofit events',
      'Birthdays, quinceaneras, and family gatherings'
    ],
    services: [
      'Cali and open air booths',
      '360 booth video clips',
      'Audio guest book + keychains'
    ],
    proofPoints: [
      'The booth setup is designed to look intentional in refined event spaces.',
      'Templates, backdrops, and props can be coordinated with your event style.',
      'Attended booth options help guests move through the experience smoothly.'
    ]
  },
  {
    slug: 'paso-robles-photo-booth-rentals',
    city: 'Paso Robles',
    region: 'CA',
    county: 'San Luis Obispo County',
    nearby: ['Santa Maria', 'Santa Barbara', 'Ventura'],
    title: 'Photo Booth Rentals in Paso Robles, CA | Endless Photobooth',
    description: 'Book photo booth rentals in Paso Robles for winery weddings, parties, retreats, 360 booth videos, social booths, and keychain keepsakes.',
    hero: 'Photo Booth Rentals in Paso Robles, CA',
    intro: 'Interactive photo and video booth rentals for Paso Robles winery weddings and destination events.',
    localFit: [
      'Winery weddings and welcome parties',
      'Corporate retreats and brand gatherings',
      'Milestone birthdays and estate events'
    ],
    services: [
      'Custom print booths',
      '360 reception moments',
      'Keychain keepsake favors'
    ],
    proofPoints: [
      'Templates can reflect winery, rustic, modern, or editorial event styling.',
      'Digital sharing helps out-of-town guests keep their photos right away.',
      'Package options can be matched to shorter parties or full event schedules.'
    ]
  },
  {
    slug: 'carpinteria-photo-booth-rentals',
    city: 'Carpinteria',
    region: 'CA',
    county: 'Santa Barbara County',
    nearby: ['Santa Barbara', 'Montecito', 'Ventura'],
    title: 'Photo Booth Rentals in Carpinteria, CA | Endless Photobooth',
    description: 'Book photo booth rentals in Carpinteria for weddings, beachside parties, corporate events, open air booths, 360 videos, and keychain keepsakes.',
    hero: 'Photo Booth Rentals in Carpinteria, CA',
    intro: 'Guest-friendly photo booth rentals for relaxed coastal celebrations in Carpinteria.',
    localFit: [
      'Beachside weddings and receptions',
      'Birthdays, quinceaneras, and graduations',
      'Company and community events'
    ],
    services: [
      'Open air booths with prints',
      'Social booth GIFs + boomerangs',
      'Keychain guest favors'
    ],
    proofPoints: [
      'Guest flow can be tailored to smaller venues and intimate celebrations.',
      'Backdrop and template choices can stay casual, coastal, or formal.',
      'Digital delivery keeps photos easy to access after the event.'
    ]
  },
  {
    slug: 'santa-maria-photo-booth-rentals',
    city: 'Santa Maria',
    region: 'CA',
    county: 'Santa Barbara County',
    nearby: ['Paso Robles', 'Santa Barbara', 'Camarillo'],
    title: 'Photo Booth Rentals in Santa Maria, CA | Endless Photobooth',
    description: 'Book Santa Maria photo booth rentals for weddings, quinceaneras, birthdays, school events, 360 booth videos, and keychain keepsakes.',
    hero: 'Photo Booth Rentals in Santa Maria, CA',
    intro: 'Easy photo booth rentals for Santa Maria weddings, quinceaneras, schools, and family celebrations.',
    localFit: [
      'Quinceaneras, birthdays, and graduations',
      'Weddings and engagement parties',
      'School, nonprofit, and business events'
    ],
    services: [
      'Custom printed booths',
      '360 booth video clips',
      'Keychain event favors'
    ],
    proofPoints: [
      'Photo templates can include names, dates, colors, and event branding.',
      'Attendant-supported packages keep the booth running during busy events.',
      'Guests can receive texted copies in addition to printed keepsakes.'
    ]
  },
  {
    slug: 'camarillo-photo-booth-rentals',
    city: 'Camarillo',
    region: 'CA',
    county: 'Ventura County',
    nearby: ['Ventura', 'Westlake Village', 'Santa Barbara'],
    title: 'Photo Booth Rentals in Camarillo, CA | Endless Photobooth',
    description: 'Book photo booth rentals in Camarillo for weddings, corporate parties, birthdays, quinceaneras, social booths, 360 videos, and keychains.',
    hero: 'Photo Booth Rentals in Camarillo, CA',
    intro: 'Polished photo and video booth rentals for Camarillo weddings, company events, and parties.',
    localFit: [
      'Wedding receptions and showers',
      'Corporate parties and activations',
      'Birthdays, quinceaneras, and school events'
    ],
    services: [
      'Open air booths with attendant',
      'Social booth photos + GIFs',
      'Keychain keepsake tables'
    ],
    proofPoints: [
      'The booth can be styled for formal, playful, or branded events.',
      'Package options cover quick digital experiences and full print setups.',
      'Setup and breakdown are coordinated with your event schedule.'
    ]
  },
  {
    slug: 'westlake-village-photo-booth-rentals',
    city: 'Westlake Village',
    region: 'CA',
    county: 'Ventura County',
    nearby: ['Camarillo', 'Ventura', 'Montecito'],
    title: 'Photo Booth Rentals in Westlake Village, CA | Endless Photobooth',
    description: 'Book Westlake Village photo booth rentals for weddings, corporate events, galas, birthdays, 360 booth videos, and keychain station favors.',
    hero: 'Photo Booth Rentals in Westlake Village, CA',
    intro: 'Guest-friendly photo booth rentals for Westlake Village private events, galas, and receptions.',
    localFit: [
      'Corporate parties, galas, and nonprofit events',
      'Weddings and private club celebrations',
      'Birthdays, anniversaries, and family milestones'
    ],
    services: [
      'Cali and open air booths',
      '360 event highlights',
      'Keychain take-home favors'
    ],
    proofPoints: [
      'Templates can align with corporate branding or wedding stationery.',
      'Attended packages support smooth guest flow at larger events.',
      'Digital galleries give hosts and guests access after the celebration.'
    ]
  },
  {
    slug: 'montecito-photo-booth-rentals',
    city: 'Montecito',
    region: 'CA',
    county: 'Santa Barbara County',
    nearby: ['Santa Barbara', 'Carpinteria', 'Westlake Village'],
    title: 'Photo Booth Rentals in Montecito, CA | Endless Photobooth',
    description: 'Book elegant photo booth rentals in Montecito for estate weddings, private parties, galas, 360 booth videos, and keychain station favors.',
    hero: 'Photo Booth Rentals in Montecito, CA',
    intro: 'Refined photo booth rentals for Montecito estate weddings, private parties, and galas.',
    localFit: [
      'Estate weddings and rehearsal dinners',
      'Private parties and anniversaries',
      'Galas, nonprofit events, and brand activations'
    ],
    services: [
      'Cali and open air booths',
      'Magazine box + 360 booth',
      'Keychain guest favors'
    ],
    proofPoints: [
      'Booth styling can stay subtle, elegant, and coordinated with the event design.',
      'Custom templates create a cohesive keepsake for guests.',
      'Attendant-supported setups help the experience feel seamless.'
    ]
  }
]

export const normalizeSiteUrl = (siteUrl?: string) => {
  const fallback = siteInfo.defaultSiteUrl
  return (siteUrl || fallback).replace(/\/+$/, '')
}

export const resolveSiteUrl = (configuredSiteUrl?: string, requestOrigin?: string) => {
  if (configuredSiteUrl) {
    return normalizeSiteUrl(configuredSiteUrl)
  }

  if (requestOrigin) {
    const normalizedOrigin = requestOrigin.replace(/\/+$/, '')
    const isLocalOrigin = /localhost|127\.0\.0\.1|0\.0\.0\.0/.test(normalizedOrigin)
    const hasPort = /:\d+$/.test(new URL(normalizedOrigin).host)

    if (isLocalOrigin) {
      return hasPort ? normalizedOrigin : normalizeSiteUrl()
    }

    return normalizedOrigin.replace(/^http:\/\//, 'https://')
  }

  return normalizeSiteUrl()
}

export const absoluteUrl = (path: string, siteUrl?: string) => {
  if (path.startsWith('http')) return path
  return `${normalizeSiteUrl(siteUrl)}${path.startsWith('/') ? path : `/${path}`}`
}

export const buildLocalBusinessSchema = (siteUrl?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${normalizeSiteUrl(siteUrl)}/#localbusiness`,
  name: siteInfo.name,
  url: normalizeSiteUrl(siteUrl),
  telephone: siteInfo.phone,
  email: siteInfo.email,
  image: absoluteUrl(siteInfo.image, siteUrl),
  logo: absoluteUrl(siteInfo.logo, siteUrl),
  priceRange: '$$',
  sameAs: [siteInfo.instagram],
  areaServed: locationPages.map((location) => ({
    '@type': 'City',
    name: `${location.city}, ${location.region}`
  })),
  makesOffer: primaryServices.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service
    }
  }))
})

export const buildServiceSchema = (name: string, description: string, path: string, siteUrl?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@id': `${normalizeSiteUrl(siteUrl)}/#localbusiness`
  },
  areaServed: locationPages.map((location) => ({
    '@type': 'City',
    name: `${location.city}, ${location.region}`
  })),
  url: absoluteUrl(path, siteUrl)
})

export const buildBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
  siteUrl?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path, siteUrl)
  }))
})
