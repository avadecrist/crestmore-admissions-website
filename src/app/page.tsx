'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Parallax, ParallaxLayer, type IParallax } from '@react-spring/parallax';
import { useEffect, useRef } from 'react';

export default function Home() {
  const parallaxRef = useRef<IParallax>(null);
  // use DOM scroll for episodes, not parallax scrollTo
  const scrollToEpisodes = () => {
    document.getElementById('episodes')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const maybeScroll = () => {
      if (window.location.hash === '#episodes') {
        // wait a tick so Parallax is mounted/layout is ready
        requestAnimationFrame(scrollToEpisodes);
      }
    };

    maybeScroll(); // handles landing on "/#episodes"
    window.addEventListener('hashchange', maybeScroll);

    return () => window.removeEventListener('hashchange', maybeScroll);
  }, []);

  return (
  <main>
    {/* PARALLAX HERO AREA (visual effect only, not the scroll container) */}
    <div className="relative overflow-visible min-h-screen">
      <Parallax ref={parallaxRef} pages={1} enabled={false}>

    <ParallaxLayer offset={0} speed={0.2}>
    
    <section className='py-10 md:py-16'>
      <div className='mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 md:flex-row md:px-6'>
        {/* LEFT COLUMN */}
        <div className='w-full md:w-1/2 text-center'>

          <div className='mt-6'>
            <div className='text-navy'>
              <h1 className='text-navy'>Crestmore Admissions</h1>
            </div>
          </div>

          <div className='w-full text-offblack mb-10'>
            <p>This is a description of what the Podcast <em>Crestmore Admissions</em> is about. 
            This is a description of what the Podcast is about. This is a description of what the Podcast 
            is about.</p>
          </div>

        {/* Buttons */}
          <div className='flex flex-col gap-5 text-base font-medium sm:flex-row'>
            <button
              type="button"
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

        {/* RIGHT COLUMN */}
        <div className='flex w-full items-center justify-center md:w-1/2'>
          <Image
            src='/hero.png'
            alt='Creators of Crestmore Admissions Sitting At a Table'
            width={600}
            height={600}
            priority
            className='w-[320px] md:w-[480px] lg:w-[600px] h-auto rounded-full shadow-2xl'
          />
        </div>
      </div>
    </section>
    </ParallaxLayer>
    </Parallax>
    </div>
    
    {/* normal page flow (no parallax) */}
    <section id="episodes" className="scroll-mt-24 pt-10 pb-10"> 
      {/* <div className='mx-auto max-w-7xl px-4 md:px-6'> */}
        <h2 className="text-navy">Episodes</h2>
        {/* Placeholder while you add episodes */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border p-4">Episode Card Placeholder</div>
            <div className="rounded-xl border p-4">Episode Card Placeholder</div>
            <div className="rounded-xl border p-4">Episode Card Placeholder</div>
          </div>
        {/* </div> */}
      </section>
    
  </main> 
  );
}



// <div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
    //   <main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
    //     <Image
    //       className='dark:invert'
    //       src='/next.svg'
    //       alt='Next.js logo'
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className='flex flex-col items-center gap-6 text-center sm:items-start sm:text-left'>
    //       <h1 className='max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50'>
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className='max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
    //         Looking for a starting point or more instructions? Head over to{' '}
    //         <a
    //           href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    //           className='font-medium text-zinc-950 dark:text-zinc-50'
    //         >
    //           Templates
    //         </a>{' '}
    //         or the{' '}
    //         <a
    //           href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    //           className='font-medium text-zinc-950 dark:text-zinc-50'
    //         >
    //           Learning
    //         </a>{' '}
    //         center.
    //       </p>
    //     </div>

    //     <div>
    //       <h1 className='font-extrabold'>Testing H1 Font</h1>
    //       <h2>Testing H2 Font</h2>
    //       <h3>Testing H3 Font</h3>
    //       <h4>Testing H4 Font</h4>
    //       <h5>Testing H5 Font</h5>
    //       <h6>Testing H6 Font</h6>
    //       <p>This is a paragraph to test the Alegreya Sans font.</p>
    //     </div>

    //     <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
    //       <a
    //         className='flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]'
    //         href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         <Image
    //           className='dark:invert'
    //           src='/vercel.svg'
    //           alt='Vercel logomark'
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
    //         href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
    //         target='_blank'
    //         rel='noopener noreferrer'
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>