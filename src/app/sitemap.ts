import type { MetadataRoute } from 'next';
import { baseUrl } from '@/lib/metadata';
import { source } from '@/lib/source';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url('/')
    },
    ...source.getPages().map((page) => {
      return {
        url: url(page.url)
      } as MetadataRoute.Sitemap[number];
    })
  ];
}
