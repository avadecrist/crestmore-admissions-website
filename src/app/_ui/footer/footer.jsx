'use client';
import { Component } from 'react';
import Link from 'next/link';
import IconLink from '../socials/icon';
import { spotifyIconLinks, youtubeIconLinks, instaIconLinks, tiktokIconLinks } from '@/app/data/social-links';

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <footer className='pt-5 pb-2 bg-offwhite border-top'>
        {/* entire row */}
        <div className='px-15 flex flex-col items-center justify-between flex-col gap-4 md:flex-row'>
          
          {/* Logo and Quick Links */}
          <div className='text-left text-offblack gap-4 flex flex-row items-center'>
              <Link href='/'>
                  <img src='/footer-logo.png' alt='Crestmore Admissions Logo' className='h-12 w-auto'/>
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
              {youtubeIconLinks.map((link) => (
                <IconLink
                  key={link.href}
                  href={link.href}
                  iconKey={link.iconKey}
                  label={link.label}
                  variant='icon'
                  className='text-beige bg-navy hover:bg-navy/90 rounded-lg p-1'
                />
              ))}
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
      </footer>
    );
  }
}
export default Footer;
