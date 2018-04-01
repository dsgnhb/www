import React, {Component} from 'react';
import MainTitle from '../../general/misc/titles/MainTitle';
import Stats from './sections/stats/Stats';
import Team from './sections/team/Team';
import SEO from '../../general/misc/SEO';

export default class About extends Component {
    render() {
        return (
            <div>
                <SEO
                    title="Über uns"
                    headline="Wir sind designhub"
                    description="Komm jetzt auf unseren Discord, um deine kreative Arbeit zu präsentieren und Neues zu entdecken!"
                    path="/about"
                />
                <section id="stats-intro">
                    <div className="container">
                        <MainTitle
                            subtitle="Über uns"
                            title="Wir sind designhub"
                            link="https://discordapp.com/invite/PGv5TR3"
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
}
