import dynamic from 'next/dynamic';
import Image from 'next/image';
import { SHOW_RELEASE_DATE } from '@/app/_lib/constants'; 
// only render CountdownTimer on client side to avoid ssr hydration error
const CountdownTimer = dynamic(
  () => import('@/app/_ui/components/countdown-timer'),
  { ssr: false }
);

export default function TimerSection() {

  return ( 
    <>
    <div className='w-full border-b border-offblack pb-6 text-center'>
      <h2 className='text-navy'>Episodes</h2>
      <p className='text-offblack mt-2'>Episodes will drop every Friday, starting February 27th!</p>
    </div>

    <section className='py-20 px-10 mx-auto sm:px-12 md:px-6 max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12'>
    {/* Left Column/Top Row */}
    <Image
      src='/cover-art.JPEG'
      alt='Cover Art for Crestmore Admissions Podcast'
      width={1165}
      height={1175}
      className='h-auto w-full max-w-[180px] sm:max-w-[220px] md:max-w-[300px] rounded-lg object-cover'
    />

    {/* Right Column/Bottom Row */}
    <div className='w-full flex flex-col items-start gap-6'>
      <h3 className='text-offblack w-full text-center'>
        Episode One Released in...
      </h3>

      <CountdownTimer expiryTimestamp={SHOW_RELEASE_DATE} />
      
    </div>
  </section>
  </>
  );
}
