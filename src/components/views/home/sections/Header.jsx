import React from 'react';
import {MainTitle} from '../../../general/misc/Titles';

export default function Header() {
    return (
        <header>
            <div id="hero">
                <div className="container flex-center">
                    <MainTitle title="designhub">Der beste Discord der Welt!</MainTitle>
                </div>
                <div className="mountains" />
                <div className="planet circle" />
            </div>
        </header>
    );
}
