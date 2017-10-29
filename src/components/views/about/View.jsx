import React from 'react';
import Intro from '../../general/misc/Intro';
import Stats from './sections/Stats';
import Team from '../Team';

export default function About() {
    return (
        <div>
            <Intro id="stats-intro" title="Über uns" subtitle="Wir sind designhub&trade;">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
            </Intro>
            <div className="space" />
            <Stats />
            <Team />
        </div>
    );
}
