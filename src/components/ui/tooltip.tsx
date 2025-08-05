'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { Info } from 'lucide-react';
import { cn } from '@/lib/cn';

const Tooltip = ({
  content,
  side = 'top',
  align = 'center',
  sideOffset = 4,
  className,
  ...props
}: {
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        <Info className="-mt-0.5 inline h-4 w-4" />
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={cn(
            'bg-fd-popover text-popover-fd-foreground z-50 max-w-xs rounded-md px-3 py-1.5 shadow-md outline-none',
            'data-[state=delayed-open]:animate-fd-popover-in data-[state=closed]:animate-fd-popover-out',
            'origin-[--radix-tooltip-content-transform-origin]',
            className,
          )}
          {...props}
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-fd-popover" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
};

export { Tooltip };
