'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TimerSection from './_ui/components/temp-timer-section';
import { useEffect } from 'react';

export default function Home() {
  // use DOM scroll for episodes and hero sections
  const scrollToEpisodes = () => {
    document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
    pathname === '/' && history.replaceState(null, '', '/#episodes');
  };

  /* since Next's Link doesn't handle hash changes well when already on the page. 
   * We also want to update the URL without a full page reload, so we use history.replaceState.
   */
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, []);

  const pathname = usePathname();

  return (
  <main>
    {/* Hero Section */}
    <section id='hero' className='py-10 md:py-20 bg-offwhite'>
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
                className='flex h-12 w-full whitespace-nowrap items-center justify-center gap-2 rounded-lg bg-navy px-6 text-background transition-all duration-200 hover:bg-[#314D82] dark:hover:bg-[#ccc] hover:scale-105 md:w-[158px]'
              >
                Listen Now
              <Image
                className='brightness-0 invert'
                src='/play.svg'
                alt='Play Button Icon'
                width={24}
                height={24}
              />
              </button>
              <Link
                className='flex h-12 w-full items-center justify-center rounded-lg border border-solid border-black/[.08] px-6 text-navy transition-all duration-200 hover:scale-105 hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
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
              src='/hero.png'
              alt='Creators of Crestmore Admissions Sitting At a Table'                
              fill
              priority
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
      <section id='episodes' className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center scroll-mt-24 pt-10'> 
        <div className='w-full border-b border-offblack pb-6 text-center'>
          <h2 className='text-navy'>Episodes</h2>
          <p className='text-navy mt-2'>New episodes will drop every Friday, beginning February 27, 2026!</p>
        </div>

        {/* Placeholder timer before adding episodes */}
        <TimerSection />
        
      </section>

      {/* Border Divider */}
      <div className='h-[1px] bg-offblack mx-20 md:mx-48 lg:mx-75' />
    </div>


    {/* Testing donations section */}
    <div className='pb-10 md:pb-20'>
     <section id='donate' className='mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center scroll-mt-24 pt-10 pb-10'>
      <div className='w-full border-b border-offblack pb-6 text-center'>
        <h2 className='text-navy'>Support the Podcast</h2>
        <p className='text-navy mt-2 max-w-2xl mx-auto'>
          This original Audio Fiction podcast series was entirely made by students.
          Your support helps cover production fees, hosting fees, and opens up more opportunities for student creators to bring their stories to life.
        </p>
      </div>

    {/* Donation Card */}
    <div className='mt-12 w-full max-w-xl bg-offwhite border border-offblack rounded-2xl shadow-sm p-8 text-center'>
      <h3 className='text-xl font-semibold text-navy'>
        Keep the Mics On 🎙️
      </h3>

      <p className='mt-4 text-navy text-sm'>
        Any contribution, big or small, makes a difference and allows us to progress our journey with Crestmore Admissions!
        Thank you for being a part of our community and helping us keep the mics on!
      </p>

      <a
        href='https://buy.stripe.com/test_5kQfZg6dc9EQb71aNy0sU00'
        target='_blank'
        rel='noopener noreferrer'
        className='mt-8 inline-block rounded-xl bg-navy px-8 py-3 text-white font-semibold hover:opacity-90 transition'
      >
        Donate Now
      </a>

      <p className='mt-4 text-xs text-navy opacity-70'>
        Secure payments powered by Stripe
      </p>
    </div>
   </section>
  </div>

  </main> 
  );
}

