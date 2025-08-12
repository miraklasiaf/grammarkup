'use client';

import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { Info } from 'lucide-react';
import { cn } from '@/lib/cn';

type TooltipProps = {
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;

export const Tooltip = ({
  content,
  side = 'top',
  align = 'center',
  sideOffset = 4,
  className,
  ...props
}: TooltipProps) => {
  const [isTouch, setIsTouch] = React.useState(false);
  const [isPinned, setIsPinned] = React.useState(false);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  // Detect input method changes (touch ↔ mouse)
  React.useEffect(() => {
    const checkTouch = () =>
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);

    checkTouch();
    window.addEventListener('resize', checkTouch);
    window.addEventListener('orientationchange', checkTouch);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('orientationchange', checkTouch);
    };
  }, []);

  // Close pinned tooltip when clicking outside
  React.useEffect(() => {
    if (!isPinned) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsPinned(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isPinned]);

  // Close pinned tooltip when scrolling
  React.useEffect(() => {
    if (!isPinned) return;

    const handleScroll = () => setIsPinned(false);

    window.addEventListener('scroll', handleScroll, true); // true to capture inside scrollable containers
    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isPinned]);

  const sharedClasses = cn(
    'bg-fd-popover text-popover-fd-foreground z-50 max-w-xs rounded-md px-3 py-1.5 shadow-md outline-none',
    'origin-[--radix-tooltip-content-transform-origin]',
    'animate-fd-popover-in data-[state=closed]:animate-fd-popover-out',
    className
  );

  const arrowClass = 'fill-fd-popover';

  // === MOBILE (Touch) → Popover ===
  if (isTouch) {
    return (
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>
          <button type="button" aria-label="Show information">
            <Info className="-mt-0.5 inline h-4 w-4" />
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side={side}
            align={align}
            sideOffset={sideOffset}
            className={sharedClasses}
          >
            {content}
            <PopoverPrimitive.Arrow className={arrowClass} />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }

  // === DESKTOP (Hover + Click Pinning) → Tooltip ===
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root open={isPinned ? true : undefined} delayDuration={150}>
        <TooltipPrimitive.Trigger asChild>
          <button
            ref={triggerRef}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsPinned((prev) => !prev);
            }}
            aria-label="Show information"
          >
            <Info className="-mt-0.5 inline h-4 w-4" />
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={sideOffset}
            className={sharedClasses}
            {...props}
          >
            {content}
            <TooltipPrimitive.Arrow className={arrowClass} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
