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
      <nav className={`font-serif mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6`}>
        {/* Logo / Brand */}
        <Link href='/' className='text-lg font-semibold'>
            Crestmore Podcast
        </Link>

        {/* DESKTOP NAV */}
        <div className='hidden items-center gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-lg font-medium text-neutral-700 hover:text-neutral-950'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className='inline-flex items-center justify-center rounded-xl p-2 md:hidden hover:bg-neutral-50 active:scale-[0.98]'
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label='Toggle menu'
        >
          {open ? (
            <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
            <path
                d='M6 6l12 12M18 6L6 18'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
            />
            </svg>
        ) : (
            <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
            <path
                d='M4 6h16M4 12h16M4 18h16'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
            />
            </svg>
        )}
        <span className='sr-only'>{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

    {/* MOBILE MENU */}
    <div className={`md:hidden`}>
        {/* should allow user to exit when clicking outside menu panel */}
        <button
        onClick={() => setOpen(false)}
        aria-label='Close menu'
        className={`fixed inset-0 z-[9998] transition-opacity duration-200 ease-out
        ${open ? 'opacity-100 pointer-events-auto bg-black/30' : 'opacity-0 pointer-events-none'}
        `}
        />
    
        <div className={`
            fixed right-0 top-[60px] z-[9999] w-1/3 bg-navy shadow-lg
            transition-transform transition-opacity duration-200 ease-out
            ${open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
            `}
            >
            {navLinks.map((link) => (
            <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className='block w-full px-4 py-2 text-right'
            >
                <span className='inline-block font-serif text-sm font-medium text-white px-3 py-1.5 border border-transparent rounded-md transition-colors hover:border-white/40 active:border-white/60'
                >
                {link.label}
                </span>
            </Link>
            ))}
        </div>
    </div>
    </header>
  );
}
