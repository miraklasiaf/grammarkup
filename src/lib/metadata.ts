import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://grammarkup.vercel.app',
      images: '/banner.png',
      siteName: 'Grammarkup',
      ...override.openGraph
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@miraklasiaf',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/banner.png',
      ...override.twitter
    },
    alternates: {
      types: {
        'application/rss+xml': [
          {
            title: 'Grammarkup Blog',
            url: 'https://fumadocs.dev/blog/rss.xml'
          }
        ]
      },
      ...override.alternates
    }
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development' || !process.env.VERCEL_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL}`);
