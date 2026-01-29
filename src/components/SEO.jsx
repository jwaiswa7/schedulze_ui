import { useEffect } from 'react'

const SITE_URL = 'https://schedulze.com'

/**
 * Updates document head for SEO: title, meta description, canonical, and Open Graph tags.
 * Use once per page/route.
 */
function SEO({ title, description, path = '' }) {
  const canonical = path === '/' || !path ? `${SITE_URL}/` : `${SITE_URL}${path}`

  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const setMeta = (selector, attr, value) => {
      const el = document.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[name="title"]', 'content', title)
    setMeta('link[rel="canonical"]', 'href', canonical)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="twitter:url"]', 'content', canonical)
    setMeta('meta[property="twitter:title"]', 'content', title)
    setMeta('meta[property="twitter:description"]', 'content', description)

    return () => {
      document.title = previousTitle
    }
  }, [title, description, canonical])

  return null
}

export default SEO
export { SITE_URL }
