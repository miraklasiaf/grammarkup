import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

export function Wrapper(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        'border-fd-primary/10 prose-no-margin rounded-lg border bg-radial-[at_bottom] from-blue-500/20 p-4 dark:bg-black/20',
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
