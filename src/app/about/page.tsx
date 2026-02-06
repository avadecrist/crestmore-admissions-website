'use client';

import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import IconLink from '@/app/ui/socials/icon';
import AboutHeader from '../ui/about/about-header';
import AboutStory from '../ui/about/about-story';

export default function About() {
    return (
    <main>
        {/* HEADER */}
        <AboutHeader />

        {/* PROJECT PROCESS */}
        <AboutStory />

        {/* THE CREATORS */}
        <section className='py-10 md:py-20 bg-offwhite'>
            
        </section>

    </main>
    );
}