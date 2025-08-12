import '@/app/global.css';

import { Geist, Geist_Mono } from 'next/font/google';
import { baseUrl, createMetadata } from '@/lib/metadata';

import Analytics from '@/lib/analytics';
import { Body } from '@/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import Script from 'next/script';
import type { Viewport } from 'next';

const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const ILP_URL = process.env.ILP_URL;

export const metadata = createMetadata({
  title: {
    template: '%s | Grammarkup',
    default: 'Grammarkup'
  },
  description:
    'Grammarkup helps you understand english grammar through clean, simple lessons. No clutter. Just learning.',
  metadataBase: baseUrl,
  icons: {
    icon: [
      { url: '/static/favicon/favicon.ico', rel: 'shortcut icon' },
      { url: '/static/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/static/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/static/favicon/apple-touch-icon.png'
  },
  manifest: '/static/favicon/site.webmanifest',
  other: {
    'msapplication-TileColor': '#0694a2',
    'msapplication-config': '/static/favicon/browserconfig.xml',
    'google-site-verification': GOOGLE_SITE_VERIFICATION || '',
    monetization: ILP_URL || ''
  }
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
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <Script
          data-ad-client="ca-pub-7966864664516090"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          strategy="afterInteractive"
        />
      </head>
      <Body>
        <Provider>
          {children}
          <Analytics />
          {GA_TRACKING_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', { send_page_view: false });
              `}
              </Script>
            </>
          )}
        </Provider>
      </Body>
    </html>
  );
}
