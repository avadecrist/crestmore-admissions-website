import { Metadata } from "next";
import Image from 'next/image';
import EmbeddedSection from '../_ui/components/embedded-section';

import { //for testing
  instaIconLinks,
  tiktokIconLinks,
} from '@/app/data/social-links';
import SocialEmbedFrame from '../_ui/components/social-embed';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the creators of Crestmore Admissions.",
};

export default function Contact() {
    return (
        <main>
            <section id='contact-header' className='mx-auto bg-offwhite lg:px-40 md:px-30 sm:px-20'>
                <div className='relative h-[35vh] min-h-[300px] md:h-[70vh] overflow-hidden px-4'>
                    {/* Layer 1: background image */}
                    <Image
                        src='/on-desk.jpg'
                        alt='Crestmore Productions Co-Directors'
                        fill
                        priority
                        className='object-cover object-[50%_34%] md:object-[50%_35%] opacity-50'
                        />
        
                    {/* Header Text */}
                    <div className='absolute top-11/16 left-1/2 transform -translate-x-1/2  text-center text-navy'>
                        <h1 className='md:text-8xl whitespace-nowrap'>Contact Us</h1>
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <section id='contact-main' className='mx-auto max-w-sm md:max-w-7xl flex flex-col items-center'>
                {/* Border Line */}
                <div className='w-full border-b border-black mt-10' />


                <div className='w-full py-20'>
                    {/* Headers */}
                    <h2 className='text-offblack text-center mb-20'>Stay in the Loop!</h2>
                    <h3 className='text-navy text-center mb-5'>Follow Us on Social Media</h3>

                    {/* Social Media Info */}
                    <div className='flex flex-col items-center gap-6 md:flex-row md:justify-center'>
                        <EmbeddedSection
                            title="Shaira"
                            iconLinks={instaIconLinks}
                            embeddedContent={
                              <SocialEmbedFrame
                                src="https://www.instagram.com/crestmoreadmissions/embed"
                                title="Instagram post"
                                aspect="4/5"
                              />
                            }
                        />

                        <EmbeddedSection
                            title="Tiktok"
                            iconLinks={tiktokIconLinks}
                            embeddedContent={
                              <SocialEmbedFrame
                                src="https://www.tiktok.com/embed/@crestmoreadmissions"
                                title="TikTok video"
                                aspect="4/5"
                              />
                            }
                        />
                    </div>

                </div>
                

                {/* Bottom Border Line */}
                <div className='w-full border-t border-black pb-10'></div>
                
            </section>
        </main>
    );
}