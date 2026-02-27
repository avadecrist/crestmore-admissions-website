'use client';
import Image from 'next/image'; 
import AboutCard from './about-cards';
import { useIsDarkMode } from '@/app/_lib/useIsDarkMode';

import {
  chloeIconLinks,
  shairaIconLinks,
  ashleyIconLinks,
} from '@/app/_data/social-links';

export default function AboutCreators() {
    const isDark = useIsDarkMode();
    return (
        <section>
            {/* Border Line */}
            <div className='pt-20 pb-10 flex justify-center'>
                <div className='w-2/3 border-b border-offblack/40' />
            </div>
            
            <div className='relative h-[35vh] min-h-[350px] md:h-[100vh] overflow-hidden px-4'>
                <Image
                    src='/chloe-shaira-bio.JPG'
                    alt='Crestmore Productions'
                    fill
                    priority
                    className='object-cover md:object-[50%_40%]'
                /> 
            </div>
        

            <div className='relative mx-auto py-10'>
                {/* Cord that overlaps the heading */}
                {!isDark && (
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
                    w-[90%] max-w-[475px]
                    opacity-100
                    '
                />
                )}
                
                {/* H2 Header */}
                <h2 className='relative z-10 text-center text-navy tracking-wide'>
                    MEET THE CREATORS
                </h2>

            </div>

            <div className='w-full mx-auto text-start text-offblack flex flex-col gap-5 pb-15 px-10 md:px-20 lg:px-40'>
                <p>
                        Chloe and Shaira met working at their on-campus jobs at Chapman University and hit it 
                        off immediately! Both being screenwriters, they took Michael Weiss’s “Writing for Evolving 
                        Platforms” course where they were introduced to Audio Fiction, specifically “The Bright 
                        Sessions” written by Lauren Shippen. With many fun anecdotes from their on-campus jobs 
                        they decided to team up to create Crestmore Admissions, an original comedy Audio Fiction 
                        show.
                </p>
                <p>
                    They co-wrote and co-directed all 6 episodes of season one and recruited their friends 
                    and classmates to bring it to life in the studio. The show is produced by Chloe and sound 
                    designed by Ashley Uhrig, whom Chloe met through the Chapman Women in Film Club. As writers,                         Chloe and Shaira wanted to get their work off the page in a low-budget accessible way using 
                    their university resources, and here we are!
                </p>
            </div>

            {/* CREATOR CARDS */}
            <AboutCard
                name='Chloe Avant'
                role='Co-Writer / Co-Director / Producer'
                imageSrc='/chloe-bio.webp'
                aboutTitle='About Chloe'
                paragraphs={[
                    'Chloe is a screenwriter, director, and producer originally from Denver, Colorado with a passion for dark-comedy and coming-of-age storeis.',
                    'She holds a BFA in Writing for Film and Television from Chapman University’s Dodge College in Film and Media Arts and is pursuing a career in Film and Television Development in Los Angeles, California.',
                ]}
                iconLinks={chloeIconLinks}
            />
            <AboutCard
                name='Shaira Yousuf'
                role='Co-Writer / Co-Director'
                imageSrc='/shaira-bio.webp'
                aboutTitle='About Shaira'
                paragraphs={[
                    'Shaira is a senior Screenwriting major at Chapman University’s Dodge College of Film and Media Arts, with a Creative and Cultural Industries minor.',
                    'She is passionate about using storytelling as a force for social change, bringing untold narratives to life through empathy, creativity, and a sense of purpose.',
                    'Shaira hopes to graduate college and work in Hollywood in creative development and continue writing.',
                ]}
                iconLinks={shairaIconLinks}
                variant='swapped'
            />
            <AboutCard
                name='Ashley Uhrig'
                role='Editor / Sound Designer'
                imageSrc='/ashley-bio.webp'
                aboutTitle='About Ashley'
                paragraphs={[
                    'Ashley Jae Uhrig is a film student originally from Moscow, Idaho. She is currently pursuing a degree in Creative Producing at Chapman University’s Dodge College of Film and Media Arts. She specializes in post-production/editing but enjoys all aspects of film production.',
                ]}
                iconLinks={ashleyIconLinks}
            />

            {/* DONATE SECTION */}
        </section>
    );
}