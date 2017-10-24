import React from 'react';
import Header from './sections/Header';
import Intro from './sections/Intro';
import Features from './sections/Features';
import Team from './sections/Team';
import JoinSection from '../../general/misc/JoinSection';
import Footer from '../../general/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <Intro />
            <Features />
            <div className="space" />
            <Team />
            <JoinSection />
            <Footer />
        </div>
    );
}
