import type { MetadataRoute } from 'next'

const BASE_URL = 'https://v0-anbumathi-chezhian-2203.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
