import React from 'react';
import DiscordLink from './DiscordLink';

export default function JoinSection() {
    return (
        <section id="join" className="flex-center-center">
            <div className="icon" />
            <h3>Bereit, die Höhle zu entdecken?</h3>
            <DiscordLink />
        </section>
    );
}
