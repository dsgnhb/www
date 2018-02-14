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
                    <MainTitle subtitle="Bewerben" title="Werd' ein Teil von designhub">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                        accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                    </MainTitle>
                </div>
            </section>
            <Job active={true} rank="Dev" skills="React, NodeJS und Java">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
            </Job>
        </div>
    );
}
