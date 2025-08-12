import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';

import { Blank } from '@/components/ui/blank';
import { Callout } from 'fumadocs-ui/components/callout';
import { Tooltip } from '@/components/ui/tooltip';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import { source } from '@/lib/source';
import { createMetadata } from '@/lib/metadata';
import { type ComponentProps, type FC } from 'react';

export const revalidate = false;

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
            Blank,
            Tooltip,
            blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await props.params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const description =
    page.data.description ??
    'Grammarkup helps you understand english grammar through clean, simple lessons. No clutter. Just learning.';

  const image = {
    url: ['/og', ...slug, 'image.png'].join('/'),
    width: 1200,
    height: 630
  };

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/learn/${page.slugs.join('/')}`,
      images: [image]
    },
    twitter: {
      images: [image]
    }
  });
}
