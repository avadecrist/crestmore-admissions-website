'use client';
import { Component } from 'react';
import Link from 'next/link';
import { FaSpotify } from 'react-icons/fa';
import IconLink from '@/app/ui/socials/icon';

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <footer className="py-5 bg-offwhite border-top">
        {/* entire row */}
        <div className="px-5 flex flex-row items-center justify-between">
          
          {/* Logo and Quick Links */}
          <div className="px-3 text-left text-offblack gap-4 flex flex-row items-center">
              <Link href="/">
                  <img src="/footer-logo.png" alt="Crestmore Admissions Logo" className="h-12 w-auto"/>
              </Link>
              <span>|</span>
              <Link href="/about" className="text-md hover:underline">
                  About Us
              </Link>
              <Link href="/contact" className="text-md hover:underline">
                  Contact Us
              </Link>

            </div>

            {/* Social Media Icons */}
              <div className="text-right flex flex-row justify-end items-center mt-3">
              {/* Linked Icon components */}
            <img src="/tiktok.svg" alt="TikTok Icon" className="h-6 w-6 inline-block mx-2"/>
            <img src="/tiktok.svg" alt="TikTok Icon" className="h-6 w-6 inline-block mx-2"/>
            <img src="/tiktok.svg" alt="TikTok Icon" className="h-6 w-6 inline-block mx-2"/>
            <IconLink
              href="/episodes"
              icon={FaSpotify}
              label="Spotify"
              variant="icon"
            />
          </div>

        </div>

        {/* <div className="text-sm text-center text-offblack mt-4">
          <h6 className="text-sm">&copy; {current_year} Crestmore Productions</h6>
        </div> */}
      </footer>
    );
  }
}
export default Footer;
