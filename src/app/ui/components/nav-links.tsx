'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
  { label: 'Home', href: '/' },
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

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => {
              // mobile menu close etc
              onNavigate?.();

              // If you're already on home, Next sometimes won't "re-navigate" for hash changes
              // so we force it.
              if (isEpisodes && pathname === '/') {
                e.preventDefault();
                router.push('/#episodes');
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
