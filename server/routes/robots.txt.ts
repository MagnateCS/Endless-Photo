import { absoluteUrl, resolveSiteUrl } from '../../utils/seoContent'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const requestUrl = getRequestURL(event)
  const siteUrl = resolveSiteUrl(config.public.siteUrl as string, requestUrl.origin)

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml', siteUrl)}`
  ].join('\n')
})
