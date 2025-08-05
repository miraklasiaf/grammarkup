import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';

export default function HomePage() {
  const gridColor = 'color-mix(in oklab, var(--color-fd-primary) 10%, transparent)';

  return (
    <>
      <div
        className="absolute inset-x-0 top-[360px] h-[250px] max-md:hidden"
        style={{
          background: `repeating-linear-gradient(to right, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, ${gridColor}, ${gridColor} 1px,transparent 1px,transparent 50px)`
        }}
      />
      <main className="relative z-2 container max-w-[1100px] px-2 py-4 lg:py-8">
        <div
          style={{
            background:
              'repeating-linear-gradient(to bottom, transparent, color-mix(in oklab, var(--color-fd-primary) 1%, transparent) 500px, transparent 1000px)'
          }}
        >
          <div className="relative">
            <Hero />
          </div>
        </div>
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="bg-fd-background/80 relative z-2 flex flex-col overflow-hidden border-x border-t px-4 pt-12 pb-8 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden">
      <div
        className="absolute inset-0 z-[-1] hidden blur-2xl dark:block"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, white, transparent)',
          background:
            'repeating-linear-gradient(65deg, var(--color-blue-500), var(--color-blue-500) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)'
        }}
      />
      <div
        className="absolute inset-0 z-[-1] blur-2xl dark:hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, white, transparent)',
          background:
            'repeating-linear-gradient(65deg, var(--color-purple-300), var(--color-purple-300) 12px, color-mix(in oklab, var(--color-blue-600) 30%, transparent) 20px, transparent 200px)'
        }}
      />
      <h1 className="mb-8 text-4xl font-medium md:hidden">Learn Grammar Clearly</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        Learn english grammar clearly
      </h1>
      <p className="text-fd-muted-foreground mb-8 md:max-w-[80%] md:text-xl">
        Grammarkup helps you understand english grammar through clean, simple lessons. No
        clutter. Just learning.
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/learn/beginner"
          className={cn(buttonVariants({ size: 'lg', className: 'rounded-full' }))}
        >
          Getting Started
        </Link>
      </div>
    </div>
  );
}
