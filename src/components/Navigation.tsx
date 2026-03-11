'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CATEGORIES } from '@/lib/feeds';
import { clsx } from 'clsx';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="pointer-events-none fixed left-1/2 top-5 z-50 flex w-full max-w-[1240px] -translate-x-1/2 justify-center px-4">
      <nav className="pointer-events-auto flex items-center gap-1 overflow-x-auto rounded-full border border-brand-glass/10 bg-brand-panel/80 p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {CATEGORIES.map((category) => {
          const isActive = pathname === category.urlPath;

          return (
            <Link
              key={category.id}
              href={category.urlPath}
              className={clsx(
                'whitespace-nowrap rounded-full px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.14em] transition-all duration-200',
                isActive
                  ? 'bg-[linear-gradient(135deg,rgba(125,249,255,0.18),rgba(199,255,110,0.16))] text-brand-glass shadow-[inset_0_1px_0_rgba(var(--color-brand-glass),0.16)]'
                  : 'text-brand-glass/56 hover:bg-brand-glass/6 hover:text-brand-glass'
              )}
            >
              {category.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
