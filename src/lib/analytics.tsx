'use client';

import { trackPageview } from '@/lib/ga';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Analytics(): null {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    const url =
      typeof window !== 'undefined'
        ? window.location.pathname + window.location.search
        : pathname;

    trackPageview(url);
  }, [pathname]);

  return null;
}
