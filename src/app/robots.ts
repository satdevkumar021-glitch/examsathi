import type { MetadataRoute } from 'next';

// NEXT_PUBLIC_SITE_URL is the production origin (e.g. https://examsathi.in). It is read at build time.
// When unset, no Sitemap line is published rather than a wrong one.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? '').replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
