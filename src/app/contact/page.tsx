import Image from 'next/image';
import EmbeddedSection from '../_ui/components/embedded-section';

import { //for testing
  instaIconLinks,
  tiktokIconLinks,
} from '@/app/data/social-links';
import SocialEmbedFrame from '../_ui/components/social-embed';

export default function Contact() {
    return (
        <main>
            <section id='contact-header' className='mx-auto bg-offwhite px-12 md:px-40'>
                <div className='relative h-[30vh] min-h-[200px] md:h-[75vh] overflow-hidden px-4'>
                    {/* Layer 1: background image */}
                    <Image
                        src='/on-desk.png'
                        alt='Crestmore Productions'
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
                    <h1 className='text-offblack text-center mb-20'>Stay in the Loop!</h1>
                    <h3 className='text-navy text-center mb-5'>Follow Us on Social Media</h3>

                    {/* Social Media Info */}
                    <div className='flex flex-col items-center gap-6 md:flex-row md:justify-center'>
                        <EmbeddedSection
                            title="Shaira"
                            iconLinks={instaIconLinks}
                            embeddedContent={
                              <SocialEmbedFrame
                                src="https://www.instagram.com/p/C30iJSaPSdg/embed"
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