import '@/app/global.css';

import { baseUrl, createMetadata } from '@/lib/metadata';

import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';

const inter = Inter({
  subsets: ['latin']
});

export const metadata = createMetadata({
  title: {
    template: '%s | Grammarkup',
    default: 'Grammarkup'
  },
  description:
    'Grammarkup helps you understand grammar through clean, simple lessons. No clutter. Just learning.',
  metadataBase: baseUrl
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
