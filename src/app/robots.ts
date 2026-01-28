import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/', '/_next/static/', '/uploads/', '/og-portrait.jpg'],
        crawlDelay: 1,
      },
      {
        userAgent: ['facebookexternalhit', 'facebot', 'facebookplatform'],
        allow: ['/', '/uploads/', '/og-portrait.jpg'],
      },
      {
        userAgent: '*',
        allow: ['/', '/_next/static/', '/uploads/'],
        disallow: ['/private/'],
      },
    ],
    sitemap: 'https://reto-delosi/sitemap.xml',
  }
}