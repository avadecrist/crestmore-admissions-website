'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Episodes', href: '/#episodes' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

type NavLinksProps = {
  onNavigate?: () => void; // useful for closing mobile menu after click
};

export default function NavLinks({ onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        const isEpisodes = link.label === 'Episodes';
        const isHome = link.label === 'Home';

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => {
              // mobile menu close etc
              onNavigate?.();

              // Force hash changes if already on 'Home' or 'Episodes' to trigger scrollIntoView
              if (isEpisodes && pathname === '/') {
                e.preventDefault();
                router.push('/#episodes');
              }
            
              if (link.label === 'Home' && pathname === '/') {
                e.preventDefault();
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', '/#hero');
              }
              if (link.label === 'Episodes' && pathname === '/') {
                e.preventDefault();
                document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
                history.replaceState(null, '', '/#episodes');
              }

            }}
            className={clsx(
              'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100',
              isActive && 'bg-gray-100',
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
