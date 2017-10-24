import React from 'react';
import Intro from '../../general/misc/Intro';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import Gradients from './sections/Gradients';
import Fonts from './sections/Fonts';

export default function Branding() {
    return (
        <div>
            <Intro title="Branding" subtitle="Design Sachen">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat.
            </Intro>
            <Logo />
            <Colors />
            <Gradients />
            <div className="space" />
            <Fonts />
        </div>
    );
}
