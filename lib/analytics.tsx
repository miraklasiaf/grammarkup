import { useRouter } from 'next/router'
import { useEffect } from 'react'

const GA_TRACKING_ID = process.env.GA_TRACKING_ID

export const trackPageview = (url: string) => {
  const _window = window as typeof window & { gtag: any }

  try {
    _window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_title: document.title
    })
  } catch (error) {
    console.error('Failed sending metrics', error)
  }
}

type TrackEventOptions = {
  action: any
  category: string
  label: string
  value: string
}

export const trackEvent = (options: TrackEventOptions) => {
  const { action, category, label, value } = options
  const _window = window as typeof window & { gtag: any }

  try {
    _window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    })
  } catch (error) {
    console.error('Failed sending metrics', error)
  }
}

export const useAnalytics = () => {
  const router = useRouter()

  useEffect(() => {
    function onRouteChangeComplete(url: string) {
      trackPageview(url)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])
}

export const GAScript = () => (
  <>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
      }}
    />
  </>
)
