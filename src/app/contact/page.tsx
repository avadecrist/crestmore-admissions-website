import { Metadata } from "next";
import Image from 'next/image';
import EmbeddedSection from '../_ui/components/embedded-section';
import SocialEmbedFrame from '../_ui/components/social-embed';
import AboutCard from "../_ui/about/about-cards";
import LinksSection from "../_ui/episodes/links-section";

import { 
  chloeIconLinks,
  instaIconLinks,
  shairaIconLinks,
  tiktokIconLinks,
} from '@/app/_data/social-links';


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the creators of Crestmore Admissions.",
};

export default function Contact() {
    return (
        <main>
            <section id='contact-page' className='py-10 md:py-20'>
                {/* Header */}
                <div className='mx-auto max-w-sm md:max-w-7xl flex flex-col items-center'>
                  <h1 className='text-navy text-center'>Contact Us</h1>
                  {/* Border Line */}
                  <div className='w-full border-b border-offblack mt-10 mb-10' />
                </div>

                {/* Chloe and Shaira Blurb */}
                <div className='mx-auto max-w-sm md:max-w-7xl flex flex-col items-center mt-10 mb-20 px-4'>
                    <AboutCard
                        name=''
                        role='Creators of Crestmore Admissions'
                        imageSrc="/on-desk.jpg"
                        aboutTitle='Get in Touch'
                        paragraphs={[
                            "Chloe and Shaira are active collaborators open to projects of all kinds. To get in touch with them please visit their Linkedin profiles."
                        ]}
                        iconLinks={[...chloeIconLinks, ...shairaIconLinks]}
                    />
                </div>
            
            {/* Main Section */}
            <div className='mx-auto max-w-sm md:max-w-7xl flex flex-col items-center'>

                {/* Follow Us Section */}
                <div className='w-full pb-20'>
                    <h2 className='text-navy text-center m-5'>Follow Us on Social Media</h2>

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
                <div className='w-full border-t border-offblack pb-10'></div>
                
            </div>
            </section>
        </main>
    );
}