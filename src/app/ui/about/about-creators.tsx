import Image from 'next/image';
import AboutCard from './about-cards';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import {
  chloeIconLinks,
  shairaIconLinks,
  ashleyIconLinks,
} from '@/app/data/social-links';

export default function AboutCreators() {
    return (
        <section>
            {/* Border Line */}
            <div className="pt-20 pb-10 flex justify-center">
                <div className="w-2/3 border-b border-black/40" />
            </div>

            <div className='relative h-[35vh] min-h-[350px] md:h-[100vh] overflow-hidden px-4'>
                <Image
                    src='/creators-smiling.jpg'
                    alt='Crestmore Productions'
                    fill
                    priority
                    className='object-cover md:object-[50%_40%]'
                /> 
            </div>

            <div className='relative mx-auto py-10'>
                {/* Cord that overlaps the heading */}
                <Image
                    src='/coiled-cord-divider.png'
                    alt='Phone with Coiled Cord Attached to Phone Box'
                    width={762}
                    height={81}
                    priority
                    className='
                    pointer-events-none
                    absolute left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/4
                    z-0
                    w-[520px] md:w-[475px]
                    opacity-100
                    '
                />

                {/* H2 Header */}
                <h2 className='relative z-10 text-center text-navy tracking-wide'>
                    MEET THE CREATORS
                </h2>
            </div>

            {/* CREATOR CARDS */}
            <AboutCard
                name="Chloe Avant and Shaira Yousuf"
                role="Producer / Co-Directors & Co-Writers"
                imageSrc="/chloe-shaira-bio.JPG"
                aboutTitle="About Chloe and Shaira"
                paragraphs={[
                    "Chloe and Shaira met working at their on-campus jobs at Chapman University and hit it off immediately! Both being screenwriters, they took Michael Weiss’s “Writing for Evolving Platforms” course where they were introduced to Audio Fiction, specifically “The Bright Sessions” written by Lauren Shippen. With many fun anecdotes from their on-campus jobs they decided to team up to create Crestmore Admissions, an original comedy Audio Fiction show.",
                    "They co-wrote and co-directed all 6 episodes of season one and recruited their friends and classmates to bring it to life in the studio. The show is produced by Chloe and sound designed by Ashley Uhrig, whom Chloe met through the Chapman Women in Film Club. As writers, Chloe and Shaira wanted to get their work off the page in a low-budget accessible way using their university resources, and here we are!",
                ]}
                iconLinks={[...chloeIconLinks, ...shairaIconLinks]}
            />
            <AboutCard
                name="Ashley Uhrig"
                role="Sound Designer"
                imageSrc="/creators-smiling.JPG"
                aboutTitle="About Ashley"
                paragraphs={[
                    "Ashley Jae Uhrig is a film student originally from Moscow, Idaho. She is currently pursuing a degree in Creative Producing at Chapman University’s Dodge College of Film and Media Arts. She specializes in post-production/editing but enjoys all aspects of film production",
                ]}
                iconLinks={ashleyIconLinks}
                variant='swapped'
            />

            {/* DONATE SECTION */}
        </section>
    );
}