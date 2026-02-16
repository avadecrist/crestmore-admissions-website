import { Metadata } from "next";
import AboutHeader from '../_ui/about/about-header';
import AboutStory from '../_ui/about/about-story';
import AboutCreators from '../_ui/about/about-creators';

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the creators behind Crestmore Admissions and learn the story behind the podcast.",
};

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