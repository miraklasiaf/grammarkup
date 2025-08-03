'use client';

import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import { TooltipProvider } from '@radix-ui/react-tooltip';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <TooltipProvider>{children}</TooltipProvider>
    </RootProvider>
  );
}
