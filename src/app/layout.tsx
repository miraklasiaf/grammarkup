import '@/app/global.css';

import { Geist, Geist_Mono } from 'next/font/google';
import { baseUrl, createMetadata } from '@/lib/metadata';

import { Body } from '@/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import type { Viewport } from 'next';

export const metadata = createMetadata({
  title: {
    template: '%s | Grammarkup',
    default: 'Grammarkup'
  },
  description:
    'Grammarkup helps you understand grammar through clean, simple lessons. No clutter. Just learning.',
  metadataBase: baseUrl
});

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin']
});

const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin']
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <Body>
        <Provider>{children}</Provider>
      </Body>
    </html>
  );
}
