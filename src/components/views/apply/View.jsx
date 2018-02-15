import React from 'react';
import { MainTitle } from '../../general/misc/Titles';
import Job from './sections/Job';

export default function Apply() {
    // NOT IMPLEMENTED YET
    /*
    const data = new Map();
    data.set('name', {
        type: 'small',
        label: 'Dein Vor- & Nachname',
        placeholder: "Lukas's Teddy"
    });
    data.set('age', {
        type: 'number',
        label: 'Dein Alter',
        placeholder: '3'
    });
    data.set('mail', {
        type: 'small',
        label: 'E-Mail',
        placeholder: 'teddy@lukaas.de'
    });
    data.set('discord', {
        type: 'small',
        label: 'Discord',
        placeholder: 'teddy#0815'
    });
    data.set('twitter', {
        type: 'small',
        label: 'Twitter',
        placeholder: '@teddygommemode'
    });
    data.set('about-me', {
        type: 'big',
        label: 'Über mich',
        placeholder: ''
    });
    data.set('motivation', {
        type: 'big',
        label: 'Motivation',
        placeholder: ''
    });
    data.set('experience', {
        type: 'big',
        label: 'Erfahrungen',
        placeholder: ''
    });
    data.set('credentials', {
        type: 'big',
        label: 'Referenzen',
        placeholder: ''
    });
    */
    return (
        <div>
            <section id="apply">
                <div className="container">
                    <MainTitle subtitle="Bewerben" title="Werd' ein Teil von designhub" link="/discord" linktitle="Komm auf unseren Discord">
                        Wir sind designhub, ein junges, engagiertes Team aus ganz Deutschland! Zusammen arbeiten wir ständig
                        an neuen Ideen und Konzepten, um unsere Community durch z.B. Wettbewerbe und andere Aktivitäten noch stärker zu vereinen und zu unterstützen.
                    </MainTitle>
                </div>
            </section>

            <Job active={true} rank="Dev" skills="React, NodeJS und Java">
                Du beherschst JavaScript wie deine Muttersprache, träumst in Klassen und auch MySQL jagt dir keine Angst ein? Dann liebst du auch TypeScript und vertraust auf Travis CI?
                Du willst mithelfen, eine unvergleichliche Community aufzubauen? - <b >Dann bewirb' dich doch als Developer.</b> Wir suchen begeisterte Entwickler, die motiviert sind, sich weiter zu entwickeln und ihre kreative Ideen
                 in unsere Projekte einfließen zu lassen. Für die Arbeit an unserer Website, Discord-Bot und API setzten wir eine Arbeit mit NodeJS-Frameworken wie "express" oder "sequelize" sowie
                 den Umgang mit Frontend-Technologien (HTML5, CSS, React) voraus. Außerdem solltest du dich schonmal mit  Travis CI beschäftigt haben.

            </Job>
        </div>
    );
}