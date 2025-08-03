import type { Metadata } from 'next';
import {
  PageArticle,
  PageBreadcrumb,
  PageFooter,
  PageLastUpdate,
  PageRoot,
  PageTOC,
  PageTOCItems,
  PageTOCPopover,
  PageTOCPopoverContent,
  PageTOCPopoverItems,
  PageTOCPopoverTrigger,
  PageTOCTitle
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { type ComponentProps, type FC, type ReactElement } from 'react';
import * as Twoslash from 'fumadocs-twoslash/ui';
import { Callout } from 'fumadocs-ui/components/callout';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { createMetadata } from '@/lib/metadata';
import { source } from '@/lib/source';
import { Wrapper } from '@/components/preview/wrapper';
import { Mermaid } from '@/components/mdx/mermaid';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card';
import { Tooltip } from '@/components/ui/tooltip';
import { Blank } from '@/components/ui/blank';
import Link from 'fumadocs-core/link';
import { AutoTypeTable } from 'fumadocs-typescript/ui';
import { createGenerator } from 'fumadocs-typescript';
import { getMDXComponents } from '@/mdx-components';
import * as path from 'node:path';
import { Banner } from 'fumadocs-ui/components/banner';

const generator = createGenerator();

export const revalidate = false;

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<ReactElement> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const { body: Mdx, toc, lastModified } = await page.data.load();

  return (
    <PageRoot
      toc={{
        toc,
        single: false
      }}
    >
      {toc.length > 0 && (
        <PageTOCPopover>
          <PageTOCPopoverTrigger />
          <PageTOCPopoverContent>
            <PageTOCPopoverItems />
          </PageTOCPopoverContent>
        </PageTOCPopover>
      )}
      <PageArticle>
        <PageBreadcrumb />
        <h1 className="text-3xl font-semibold">{page.data.title}</h1>
        <p className="text-lg text-fd-muted-foreground">{page.data.description}</p>
        <div className="prose flex-1 text-fd-foreground/80">
          <Mdx
            components={getMDXComponents({
              ...Twoslash,
              a: ({ href, ...props }) => {
                const found = source.getPageByHref(href ?? '', {
                  dir: path.dirname(page.path)
                });

                if (!found) return <Link href={href} {...props} />;

                return (
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href={
                          found.hash ? `${found.page.url}#${found.hash}` : found.page.url
                        }
                        {...props}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="text-sm">
                      <p className="font-medium">{found.page.data.title}</p>
                      <p className="text-fd-muted-foreground">
                        {found.page.data.description}
                      </p>
                    </HoverCardContent>
                  </HoverCard>
                );
              },
              Banner,
              Mermaid,
              TypeTable,
              Blank,
              Tooltip,
              AutoTypeTable: (props) => (
                <AutoTypeTable generator={generator} {...props} />
              ),
              Wrapper,
              blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>
            })}
          />
        </div>
        {lastModified && <PageLastUpdate date={lastModified} />}
        <PageFooter />
      </PageArticle>
      {toc.length > 0 && (
        <PageTOC>
          <PageTOCTitle />
          <PageTOCItems variant="clerk" />
        </PageTOC>
      )}
    </PageRoot>
  );
}

// function DocsCategory({ url }: { url: string }) {
//   return (
//     <Cards>
//       {getPageTreePeers(source.pageTree, url).map((peer) => (
//         <Card key={peer.url} title={peer.name} href={peer.url}>
//           {peer.description}
//         </Card>
//       ))}
//     </Cards>
//   );
// }

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug = [] } = await props.params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const description =
    page.data.description ?? 'The library for building documentation sites';

  const image = {
    url: ['/og', ...slug, 'image.png'].join('/'),
    width: 1200,
    height: 630
  };

  return createMetadata({
    title: page.data.title,
    description,
    openGraph: {
      url: `/docs/${page.slugs.join('/')}`,
      images: [image]
    },
    twitter: {
      images: [image]
    }
  });
}

export function generateStaticParams() {
  return source.generateParams();
}
