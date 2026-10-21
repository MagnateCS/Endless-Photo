export type FeaturedBrand = {
  name: string
  logo: string
  darkBackground: boolean
  affiliationSource: string | null
  displayPermissionConfirmed: boolean
}

// Client-supplied names. Confirm both the relationship and display permission
// before enabling these claims in production. See SOCIAL_PROOF.md.
export const featuredBrands: FeaturedBrand[] = [
  { name: 'PEOPLE MAGAZINE', logo: '/brand-logos/people.svg', darkBackground: false },
  { name: 'THE PAAK HOUSE', logo: '/brand-logos/paa-house.png', darkBackground: true },
  { name: 'VANS', logo: '/brand-logos/vans.svg', darkBackground: true },
  { name: 'TMZ', logo: '/brand-logos/tmz.svg', darkBackground: false }
].map(brand => ({ ...brand, affiliationSource: null, displayPermissionConfirmed: false }))

export const reviewPlatforms = [
  {
    name: 'WeddingWire',
    url: 'https://www.weddingwire.com/reviews/endless-photo-booths-oxnard/3fc52dcdeb1f53d2.html'
  },
  {
    name: 'The Knot',
    url: 'https://www.theknot.com/marketplace/endless-photo-booths-oxnard-ca-2012320'
  }
]

// Exact excerpts from the public profiles above, checked October 13, 2026.
// Keep each quote linked to its source; never substitute marketing copy.
export const testimonials = [
  {
    author: 'Denisha',
    platform: 'WeddingWire',
    quote: 'The cost of the photobooth for all day was affordable. Great customer and beautiful photos. Highly recommend',
    date: '2026-03-03',
    dateLabel: 'March 3, 2026',
    rating: 5,
    url: reviewPlatforms[0].url
  },
  {
    author: 'Heather A.',
    platform: 'The Knot',
    quote: 'Exceptional service. I am beyond thrilled with my last minute decision!',
    date: '2021-08-25',
    dateLabel: 'August 25, 2021',
    rating: 5,
    url: reviewPlatforms[1].url
  }
]

// Retain the supplied sample for design review only, until provenance is supplied.
export const sampleTestimonial = "You had us at open bar — and then you gave us a photo booth we didn't want to leave. Every single guest walked away with a print in hand."

// Official Google Maps review URL supplied by the client. Individual review text
// is not accessible through the research tool; add an excerpt only once verified.
export const googleReviewUrl: string | null = 'https://www.google.com/maps/place/Endless+Photo+Booth+LLC/@34.4066749,-119.5255214,813m/data=!3m1!1e3!4m8!3m7!1s0x80e90fa2bb629355:0x661e21a435836e22!8m2!3d34.4066749!4d-119.5255214!9m1!1b1!16s%2Fg%2F11rjz49ndf?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D'
