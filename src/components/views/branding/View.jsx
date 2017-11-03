import React from 'react';
import {Link} from 'react-router-dom';
import {MainTitle} from '../../general/misc/Titles';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import Gradients from './sections/Gradients';
import Fonts from './sections/Fonts';
import Speech from './sections/Speech';

export default function Branding() {
    return (
        <div>
            <section id="branding-intro">
                <div className="container">
                    <MainTitle subtitle="Branding" title="Design Sachen">
                        Mit der Einhaltung dieser Richtlinien hilfst du uns sicherzustellen, dass unsere
                        Markenressourcen einheitlich und im selben Stil genutzt werden. Denke daran, dass designhub™
                        kontinuierlich
                        wächst und sich weiterentwickelt. So kann es ohne Weiteres passieren, dass wir diese Richtlinien
                        von Zeit zu Zeit ändern. Falls du noch mehr suchst, kannst du dir{' '}
                        <Link to="/presskit">hier</Link> unser Press Kit mit Icons, Banner, Videos und mehr
                        herunterladen.
                    </MainTitle>
                </div>
            </section>
            <Logo />
            <Colors />
            <Gradients />
            <Fonts />
            <Speech />
        </div>
    );
}
