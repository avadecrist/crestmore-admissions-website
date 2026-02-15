'use client';
import { navigateToSection } from '@/app/lib/navigation';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

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
  const [hash, setHash] = useState(''); //i.e '' | '#hero' | '#episodes' | etc.

  useEffect(() => {  
    const update = () => setHash(window.location.hash || '');
    update();

    window.addEventListener('hashchange', update);
    window.addEventListener('popstate', update); // back/forward + replaceState history updates

    return () => {
      window.removeEventListener('hashchange', update);
      window.removeEventListener('popstate', update);
    };
  }, [pathname]); // re-run on pathname change to reset hash for non-homepage routes
  
  return (
    <>
      {navLinks.map((link) => {
        const onHomePage = pathname === '/';
        const isHashLink = link.href.startsWith('/#');
        const targetId = isHashLink ? link.href.split('#')[1] : null; // 'hero' | 'episodes'
        const targetHash = targetId ? `#${targetId}` : '';

        // Episodes active only when hash === '#episodes'
        // Home active for everything else on the homepage (including '/', '#hero')
        let isActive = false;
        if (!isHashLink) {
          isActive = pathname === link.href;
        } else if (onHomePage) {
          if (link.label === 'Episodes') isActive = hash === '#episodes';
          if (link.label === 'Home') isActive = hash === '' || hash === '#hero'; // default on home
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={(e) => {
              // mobile menu close etc
              onNavigate?.();

              // if we're already on the homepage, handle hash links with smooth scroll + URL update
              if (onHomePage && isHashLink && targetId) {
                e.preventDefault();
                navigateToSection(targetId);
                setHash(`#${targetId}`); // ensures active state updates immediately
                return;
              }
              // else, let Next navigate normally
              router.push(link.href);

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
