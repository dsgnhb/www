import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import Stats from './sections/Stats';
import Team from '../Team';

export default function About() {
    return (
        <div>
            <section id="stats-intro">
                <div className="container">
                    <MainTitle
                        subtitle="Über uns"
                        title="Wir sind designhub&trade;"
                        link="/discord"
                        linktitle="Viel Spaß auf unserem Server!"
                    >
                        Designhub bringt talentierte Designer und Developer zu einer großen Community zusammen. Komm
                        jetzt auf unseren Discord, um deine kreative Arbeit zu präsentieren, Neues zu entdecken oder
                        halt einfach nur um mit deinen nicht vorhandenen Freunden zu reden (und natürlich auch um zu
                        spamen).
                    </MainTitle>
                </div>
            </section>
            <div className="space" />
            <Stats />
            <Team />
        </div>
    );
}
