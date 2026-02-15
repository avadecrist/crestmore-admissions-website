'use client';

import AboutHeader from '../_ui/about/about-header';
import AboutStory from '../_ui/about/about-story';
import AboutCreators from '../_ui/about/about-creators';

export default function About() {
    return (
    <>
        {/* HEADER */}
        <AboutHeader />

        {/* PROJECT PROCESS */}
        <AboutStory />

        {/* THE CREATORS */}
        <AboutCreators />
        
    </>
    );
}