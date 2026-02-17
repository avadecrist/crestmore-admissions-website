'use client';
// import type { Metadata } from "next";
import { navigateToSection } from './lib/navigation';
import Image from 'next/image';
import Link from 'next/link';
import TimerSection from './_ui/components/temp-timer-section';
import { useEffect } from 'react';
import DonateSection from './_ui/components/donate-section';

// export const metadata: Metadata = {
//   title: "Crestmore Admissions Podcast",
//   description: "Officiate website for the Crestmore Admissions Podcast.",
// };

export default function Home() {

  const scrollToEpisodes = () => {
    navigateToSection('episodes'); // helper method
  };

  // smooth scroll to sections
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
      });
    }
  }, []); 


  return (
  <>
    {/* Hero Section */}
    <section id='hero' tabIndex={-1} className='py-10 md:py-20 bg-offwhite'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-12 md:flex-row md:gap-6 md:px-10'>
        {/* LEFT COLUMN */}
        <div className='w-full md:w-1/2 text-center'>

          <div className='mt-6'>
            <h1 className='text-navy'>Crestmore Admissions</h1>
          </div>

          <div className='w-full text-offblack mb-10'>
            <p>Working at <em>Crestmore Admissions</em> means being a punching bag for angry parents, 
            confused freshmen, and ridiculous policies. Although it's supposed to be a mindless 
            student job, the emotional labor is real, and it's slowly breaking them.</p>
          </div>

        {/* Buttons */}
          <div className='mt-6 flex justify-center'>
            <div className='flex flex-row gap-6'>
              <button
                type='button'
                onClick={scrollToEpisodes}
                className='flex h-12 w-full whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-navy px-6 text-offwhite transition-all duration-200 hover:bg-navy/[0.8] hover:scale-105 md:w-[158px]'
              >
                Listen Now
              <Image
                className='brightness-0 invert '
                src='/play.svg'
                alt='Play Icon'
                width={24}
                height={24}
              />
              </button>
              <Link
                className='flex h-12 w-full items-center justify-center rounded-lg border border-solid border-foreground/[.08] px-6 text-navy transition-all duration-200 hover:scale-105 hover:border-transparent hover:bg-foreground/[.04] md:w-[158px]'
                href='/contact'
              >
                Follow Us
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className='flex w-full md:w-1/2 flex-col items-center'>
          {/* Top label */}
          <h2 className='mb-4 self-start md:self-center md:-translate-x-35 text-navy'>
            Meet Lucy
          </h2>

          <div className='relative aspect-square w-[320px] sm:w-[380px] md:w-[420px] overflow-hidden rounded-full shadow-xl shadow-black/20'> {/* relative aspect-square w-full overflow-hidden rounded-full shadow-xl shadow-black/20'> */}
            <Image
              src='/hero.webp'
              alt='Creators of Crestmore Admissions Sitting At a Table'                
              fill
              priority
              sizes='(min-width: 768px) 50vw, 100vw'
              className='object-cover'
            />
          </div>

          {/* Bottom label */}
          <h2 className='mt-4 self-end md:self-center md:translate-x-35 text-navy'>
            &amp; Sam
          </h2>
        </div>
      </div>
    </section>  
    
    {/* Episodes Section */}
    <div className='py-10 md:py-20'>
      <section id='episodes' tabIndex={-1} className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center scroll-mt-24 pt-10'> 
        <div className='w-full border-b border-offblack pb-6 text-center'>
          <h2 className='text-navy'>Episodes</h2>
          <p className='text-offblack mt-2'>New episodes will drop every Friday, beginning February 27, 2026!</p>
        </div>

        {/* Placeholder timer before adding episodes */}
        <TimerSection />
        
      </section>

      {/* Border Divider */}
      <div className='h-[1px] bg-offblack mx-20 md:mx-48 lg:mx-75' />
    </div>


    {/* Testing donations section */}
    <DonateSection />

  </> 
  );
}

