'use client';
import Image from 'next/image';

export default function AboutHeader() {
    return (
        <section id='about-hero' className='bg-offwhite'>
            <div className='relative h-[35vh] min-h-[300px] md:h-[70vh] overflow-hidden px-4'>
            {/* Layer 1: background image */}
                <Image
                src='/meet-creators.JPG'
                alt='Crestmore Productions'
                fill
                priority
                className='object-cover object-[50%_70%] md:object-[50%_60%] opacity-50'
                />

                {/* Header Text */}
                <div className='absolute top-5/8 left-1/2 transform -translate-x-1/2 text-center text-navy'>
                    <h1 className='text-6xl md:text-8xl -mb-2'>About Us</h1>
                    <h2 className='text-2xl md:text-3xl'>Crestmore Productions</h2>
                </div>
            </div>

            {/* Coiled phone divider */}
            <div className='relative timeline-container w-full flex flex-row items-center justify-between pt-2 pb-10 overflow-hidden'>
                {/* LEFT Coiled phone cord image */}
                <div className='relative translate-x-[-50%]'>
                    <Image
                    src='/coiled-cord-divider.png'
                    alt='End of coiled phone cord attached to phone box'
                    width={508}
                    height={54}
                    className='mx-auto w-[340px] md:w-[508px]'
                    />
                </div>

                {/* RIGHT Coiled phone cord image */}
                <div className='relative translate-x-[50%]'>
                    <Image
                    src='/coiled-cord-divider.png'
                    alt='Start of coiled phone cord attached to phone'
                    width={508}
                    height={54}
                    className='mx-auto w-[340px] md:w-[508px]'
                    />
                </div>
            </div>
        </section>
    );
}