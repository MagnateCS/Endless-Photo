# Social proof sources and remaining verification

Content lives in `utils/socialProof.ts`. Layouts live in `components/BrandCredibility.vue` and `components/TestimonialsSection.vue` and appear after the homepage awards section.

## Verified review sources

Checked October 13, 2026:

- [WeddingWire: Endless Photo Booth Rentals, Oxnard](https://www.weddingwire.com/reviews/endless-photo-booths-oxnard/3fc52dcdeb1f53d2.html). Featured excerpt: Denisha, March 3, 2026, five stars.
- [The Knot: Endless Photo Booths, Oxnard](https://www.theknot.com/marketplace/endless-photo-booths-oxnard-ca-2012320). Featured excerpt: Heather A., August 25, 2021, five stars. The profile lists the site's matching contact number, (805) 710-8997.

Excerpts are exact, short quotations. Reviewer names, dates, individual ratings, and platform links accompany each excerpt. No aggregate score or review count is claimed. Platform links lead to the verified vendor profiles containing the reviews, rather than an invented individual-review permalink.

## Outstanding inputs

| Item | Status | Needed to complete |
| --- | --- | --- |
| PEOPLE MAGAZINE | Client-supplied; unverified | Evidence identifying the event and relationship, plus confirmation that the name may be displayed with the requested heading |
| THE PAAK HOUSE | Client-supplied; unverified | Same |
| VANS | Client-supplied; unverified | Same |
| TMZ | Client-supplied; unverified | Same |
| Google review excerpts | Official Maps review URL supplied by client and linked; individual reviews inaccessible through research tool | Attributable customer review text or a readable individual-review source |
| Supplied open-bar quote | Sample only; no author, platform, or source supplied | Actual review source, reviewer attribution, and confirmation of exact wording |
| Referenced testimonial design | No design supplied in the workspace or conversation | Design reference to match; current cards use the approved site typography and palette |

## Development preview and production behavior

The development preview displays the four proposed brand names and the sample quote for layout review. The sample is explicitly labeled as a design sample awaiting source confirmation. Production displays the sourced WeddingWire and The Knot excerpts and all three review-platform links, including the client-supplied Google Maps URL. The brand section and sample quote are omitted in production while verification is incomplete. There is no invented Google testimonial.

To enable a brand claim, populate `affiliationSource` with the event evidence and set `displayPermissionConfirmed` only after the client confirms permission for the exact claim. Public research alone does not confirm permission. Keep the requested heading accurate to the relationship demonstrated by the evidence.

The client-supplied Google URL is saved in `googleReviewUrl`. Add an exact, attributable Google review to `testimonials` once its text and reviewer can be verified. Do not convert the supplied sample into a customer quote without its source. Update this document when any outstanding input is resolved.

The brand marquee uses two identical groups, the shared transform animation, slower mobile movement, and a static wrapped layout for reduced motion. Testimonials stack on mobile and use two columns on desktop; no quote text is truncated or auto-rotated.

Preserve the shared typography scale in TYPOGRAPHY.md. Verify generated production HTML excludes unconfirmed claims and samples, then run the production build after content changes.

Google Maps review link supplied by the client: https://www.google.com/maps/place/Endless+Photo+Booth+LLC/@34.4066749,-119.5255214,813m/data=!3m1!1e3!4m8!3m7!1s0x80e90fa2bb629355:0x661e21a435836e22!8m2!3d34.4066749!4d-119.5255214!9m1!1b1!16s%2Fg%2F11rjz49ndf?entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D

Brand artwork now uses the supplied files in public/brand-logos: people.svg, paa-house.png, vans.svg, and tmz.svg. Logos keep their original proportions and colors; The Paak House uses an espresso surface to make its light artwork readable. Supplying logo files does not resolve the outstanding affiliation verification.
