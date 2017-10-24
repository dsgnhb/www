import React from 'react';
import Intro from './sections/Intro';
import Stats from './sections/Stats';
import Team from '../Team';

export default function About() {
    return (
        <div>
            <Intro />
            <div className="space" />
            <Stats />
            <Team />
        </div>
    );
}
