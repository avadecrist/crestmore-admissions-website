'use client';
import type { SpotifyEpisodeData } from '@/app/_lib/spotify';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoPlay } from 'react-icons/go';
import { navigateToSection } from '@/app/_lib/navigation';
import TimerSection from '@/app/_ui/components/temp-timer-section';
import DonateSection from '@/app/_ui/components/donate-section';
import EpisodesSection from '@/app/_ui/episodes/episodes-section';

type HomeClientProps = {
  episodes: SpotifyEpisodeData[]; // replace with your Episode type if you have it
};

export default function HomeClient({ episodes }: HomeClientProps) {

  const scrollToEpisodes = () => {
    navigateToSection('episodes');
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
        <div className='mx-auto flex max-w-7xl flex-col items-center gap-8 px-12 lg:flex-row md:gap-8 md:px-10'>
          {/* LEFT COLUMN */}
          <div className='w-full lg:w-1/2 text-center'>
            <div className='mt-6'>
              <h1 className='text-navy'>Crestmore Admissions</h1>
            </div>

            <div className='w-full text-offblack mb-10'>
              <p>
                For Lucy and Sam, working at <b>Crestmore Admissions</b> means being a punching bag
                for confused prospective students and angry parents. Although it&apos;s <em>supposed</em>{' '}
                to be a mindless student job, the emotional labor is real, and it&apos;s slowly breaking
                them...
              </p>
            </div>

            {/* Buttons */}
            <div className='mt-6 flex justify-center'>
              <div className='flex w-full max-w-sm gap-6'>
                <button
                  type='button'
                  onClick={scrollToEpisodes}
                  className='flex-1 flex h-12 w-full px-6 whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-navy text-offwhite transition-all duration-200 hover:bg-navy/[0.8] hover:scale-105 md:w-[158px]'
                >
                  Listen Now
                  <GoPlay className='text-offwhite h-5 w-5' />
                </button>

                <Link
                  className='flex-1 flex h-12 w-full px-6 items-center justify-center rounded-lg border border-solid border-foreground/[.08] text-navy transition-all duration-200 hover:scale-105 hover:border-transparent hover:bg-foreground/[.04] md:w-[158px]'
                  href='/contact'
                >
                  Follow Us
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className='flex w-full md:w-1/2 flex-col items-center'>
            <h2 className='mb-4 self-start md:self-center md:-translate-x-35 text-navy'>Meet Lucy</h2>

            <div className='relative aspect-square w-[320px] sm:w-[380px] md:w-[420px] overflow-hidden rounded-full shadow-xl shadow-black/20'>
              <Image
                src='/hero.webp'
                alt='Creators of Crestmore Admissions Sitting At a Table'
                fill
                priority
                sizes='(min-width: 768px) 50vw, 100vw'
                className='object-cover'
              />
            </div>

            <h2 className='mt-4 self-end md:self-center md:translate-x-35 text-navy'>&amp; Sam</h2>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <div className='py-10 md:py-20'>
        <section
          id='episodes'
          tabIndex={-1}
          className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center scroll-mt-24 pt-10'
        >
          <div className='w-full border-b border-offblack pb-6 text-center'>
            <h2 className='text-navy'>Episodes</h2>
            <p className='text-offblack mt-2'>Episodes will drop every Friday, starting February 27th!</p>
          </div>

          <TimerSection />
          <EpisodesSection episodes={episodes} />
        </section>

        <div className='h-[1px] bg-offblack mx-20 md:mx-48 lg:mx-75' />
      </div>

      <DonateSection />
    </>
  );
}