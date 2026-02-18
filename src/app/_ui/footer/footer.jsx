'use client';
import { useIsDarkMode } from '@/app/lib/useIsDarkMode';
import { navigateToSection } from '@/app/lib/navigation';
import ThemeToggle from '../components/toggle-theme';
import Link from 'next/link';
import Image from 'next/image';
import IconLink from '../socials/icon';
import { spotifyIconLinks, youtubeIconLinks, instaIconLinks, tiktokIconLinks } from '@/app/data/social-links';

export default function Footer() {
  const isDark = useIsDarkMode();
  
  const current_year = new Date().getFullYear();
    return (
      <footer className='pt-5 pb-2 bg-offwhite w-full relative'>
        {/* entire row */}
        <div className='max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-4 md:flex-row'>
          
          {/* Logo and Quick Links */}
          <div className='text-left text-offblack gap-4 flex flex-row items-center'>
              <Link 
                href='/#hero'
                onClick={(e) => {
                  if (window.location.pathname === '/') {
                    e.preventDefault();
                    navigateToSection('hero');
                  }
                }}
              >
                <Image 
                  src={isDark ? '/header-icon.png' : '/footer-logo.png'}
                  alt='Crestmore Admissions Logo' 
                  width={isDark ? 635 : 1740}
                  height={isDark ? 601 : 700}
                  className={isDark ? 'h-8 w-auto' : 'h-12 w-auto'}
                />
              </Link>

              <span>|</span>

              <Link href='/about' className='text-md hover:underline'>
                  About Us
              </Link>

              <Link href='/contact' className='text-md hover:underline'>
                  Contact Us
              </Link>

            </div>

            {/* Social Media Icons */}
            <div className='text-right flex flex-row gap-4 justify-end items-center mt-3'>
              {/* Linked Icon components */}
              {spotifyIconLinks.map((link) => (
                <IconLink
                  key={link.href}
                  href={link.href}
                  iconKey={link.iconKey}
                  label={link.label}
                  variant='icon'
                  className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
                />
              ))}
              {/* uncomment after making youtube channel */}
              {/* {youtubeIconLinks.map((link) => (
                <IconLink
                  key={link.href}
                  href={link.href}
                  iconKey={link.iconKey}
                  label={link.label}
                  variant='icon'
                  className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
                />
              ))} */}
              {instaIconLinks.map((link) => (
                <IconLink
                  key={link.href}
                  href={link.href}
                  iconKey={link.iconKey}
                  label={link.label}
                  variant='icon'
                  className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
                />
              ))}
              {tiktokIconLinks.map((link) => (
                <IconLink
                  key={link.href}
                  href={link.href}
                  iconKey={link.iconKey}
                  label={link.label}
                  variant='icon'
                  className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
                />
              ))}
          </div>

        </div>

        <div className='text-sm text-center text-offblack mt-4'>
          <h6 className='text-sm'>&copy; {current_year} Crestmore Productions</h6>
        </div>

        {/* toggle pinned to bottom-right for MOBILE */}
        <div className="absolute right-4 bottom-2 z-60 p-2 md:hidden">
          <ThemeToggle />
        </div>

      </footer>
    );
  
}
