export function getCanonicalUrl(path) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://daxgigandet.com'
  return `${site.replace(/\/$/, '')}${path}`
}
