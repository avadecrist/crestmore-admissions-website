'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import NavLinks from './nav-links';
import { clsx } from 'clsx';
import CountdownTimer from './countdown-timer';
import { navigateToSection } from '@/app/lib/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const launchDate = new Date(Date.UTC(2026, 1, 27, 19, 0, 0));

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur`}>
      <nav className={`font-serif mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6`}>
        {/* Logo */}
        <Link 
          href='/#hero'
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              navigateToSection('hero');
            }
          }}
          className='text-lg font-semibold transition-all duration-200 hover:scale-105 h'
        >
          <Image 
            src="/header-icon.png" 
            alt="Crestmore Admissions Icon" 
            width={635}
            height={601}
            className="h-8 w-auto"
          />
        </Link>

        {/* Temp Countdown Timer */}
        <CountdownTimer expiryTimestamp={launchDate} variant='small'/>

        {/* DESKTOP NAV */}
        <div className='hidden items-center gap-6 md:flex'>
          <NavLinks />
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="inline-flex items-center justify-center rounded-xl p-2 md:hidden hover:bg-neutral-50 active:scale-[0.98]"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
         {open ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
         ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
         )}
         <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

    {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t bg-background md:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
          <NavLinks onNavigate={() => setOpen(false)} />
        </div>
      </div>
      
    </header>
  );
}