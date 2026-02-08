'use client';

import { FaSpotify, FaYoutube, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';
import IconLink from '@/app/ui/socials/icon';
import AboutHeader from '../ui/about/about-header';
import AboutStory from '../ui/about/about-story';
import AboutCreators from '../ui/about/about-creators';

export default function About() {
    return (
    <main>
        {/* HEADER */}
        <AboutHeader />

        {/* PROJECT PROCESS */}
        <AboutStory />

        {/* THE CREATORS */}
        <AboutCreators />
        

    </main>
    );
}