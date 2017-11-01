import React from 'react';
import {MainTitle} from '../../../general/misc/Titles';

export default function Header() {
    return (
        <section id="intro">
            <div className="container">
                <MainTitle
                    subtitle="Hey!"
                    title="Wir sind Designhub&trade;"
                    link="/discord"
                    linktitle="Komm auf unseren Discord"
                >
                    Designhub bringt talentierte Designer und Developer zu einer großen Community zusammen. Komm jetzt
                    auf unseren Discord, um deine kreative Arbeit zu präsentieren, Neues zu entdecken oder halt
                    einfach nur um mit deinen nicht vorhandenen Freunden zu reden (und natürlich auch um zu spamen).
                </MainTitle>
            </div>
        </section>
    );
}
