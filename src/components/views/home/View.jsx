import React from 'react';
import Header from './sections/Header';
import Intro from '../../general/misc/Intro';
import Features from './sections/Features';
import Team from '../Team';

export default function Home() {
    return (
        <div>
            <Header />
            <Intro id="intro" title="Hey!" subtitle="Wir sind designhub&trade;" discord>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren.
            </Intro>
            <Features />
            <div className="space" />
            <Team />
        </div>
    );
}
