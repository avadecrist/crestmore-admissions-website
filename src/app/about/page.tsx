'use client';

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