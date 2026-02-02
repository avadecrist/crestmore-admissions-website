'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Home() {
  // use DOM scroll for episodes, not parallax scrollTo
  const scrollToEpisodes = () => {
    document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
    pathname === '/' && history.replaceState(null, '', '/#episodes');
  };

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
            <p>This is a description of what the Podcast <em>Crestmore Admissions</em> is about. 
            This is a description of what the Podcast is about. This is a description of what the Podcast 
            is about.</p>
          </div>

        {/* Buttons */}
          <div className='mt-6 flex justify-center'>
            <div className='flex flex-col gap-4 md:flex-row md:gap-6'>
            <button
              type='button'
              onClick={scrollToEpisodes}
              className='flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-navy px-5 text-background transition-colors hover:bg-[#314D82] dark:hover:bg-[#ccc] md:w-[158px]'
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
            className='flex h-12 w-full items-center justify-center rounded-lg border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
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
    <div className='py-10 px-20 md:py-20 px-40'>
      <section id='episodes' className='flex flex-col items-center scroll-mt-24 pt-10 pb-10'> 
        <div className='w-full border-b border-offblack pb-6 text-center'>
          <h2 className='text-navy'>Episodes</h2>
          <p className='text-navy mt-2'>New episodes will drop every Friday, beginning February 27, 2026!</p>
        </div>

        {/* Placeholder timer before adding episodes */}
        <div className='py-15'>
          <p> insert timer here</p>
        </div>
      </section>
    </div>
    
  </main> 
  );
}
