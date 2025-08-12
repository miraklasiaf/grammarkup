import type { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: 'https://grammarkup.vercel.app',
      images: '/static/img/banner.png',
      siteName: 'Grammarkup',
      ...override.openGraph
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@miraklasiaf',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/static/img/banner.png',
      ...override.twitter
    },
    alternates: {
      types: {
        'application/rss+xml': [
          {
            title: 'Grammarkup Blog',
            url: 'https://grammarkup.vercel.app/blog/rss.xml'
          }
        ]
      },
      ...override.alternates
    }
  };
}

export const baseUrl = new URL(`https://grammarkup.vercel.app`);
