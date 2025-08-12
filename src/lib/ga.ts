export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || '';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackPageview = (url: string) => {
  if (!GA_TRACKING_ID || !window.gtag) return;
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
    page_title: document.title
  });
};

type TrackEventOptions = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const trackEvent = ({ action, category, label, value }: TrackEventOptions) => {
  if (!GA_TRACKING_ID || !window.gtag) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
