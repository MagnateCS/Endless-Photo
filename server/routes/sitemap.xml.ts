import { absoluteUrl, locationPages, resolveSiteUrl } from '../../utils/seoContent'

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/packages', priority: '0.8' },
  { path: '/keychain-station', priority: '0.8' },
  { path: '/locations', priority: '0.9' },
  ...locationPages.map((location) => ({
    path: `/locations/${location.slug}`,
    priority: '0.9'
  })),
  { path: '/about-us', priority: '0.6' },
  { path: '/contact', priority: '0.7' },
  { path: '/inquire', priority: '0.7' }
]

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const requestUrl = getRequestURL(event)
  const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const urlEntries = routes
    .map((route) => {
      const loc = escapeXml(absoluteUrl(route.path, siteUrl))
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        '    <changefreq>monthly</changefreq>',
        `    <priority>${route.priority}</priority>`,
        '  </url>'
      ].join('\n')
    })
    .join('\n')

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    '</urlset>'
  ].join('\n')
})
