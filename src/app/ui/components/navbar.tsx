'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Episodes', href: '/episodes' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur`}>
      <nav className={`mx-auto flex max-w-8xl items-center justify-between px-4 py-3 md:px-6`}>
        {/* Logo / Brand */}
        <Link href="/" className="text-lg font-semibold">
            Crestmore Podcast
        </Link>

        {/* DESKTOP NAV */}
        <div className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium text-neutral-700 hover:text-neutral-950'
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='/contact'
            className='rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800'
          >
            Subscribe
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className='inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium md:hidden'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label='Toggle menu'
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
        <div className='mx-auto max-w-6xl px-4 pb-4'>
          <div className='rounded-2xl border bg-white p-3 shadow-sm'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='block rounded-xl px-3 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50'
              >
                {link.label}
              </Link>
            ))}
            <Link
              href='/contact'
              onClick={() => setOpen(false)}
              className='mt-2 block rounded-xl bg-neutral-900 px-3 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800'
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
