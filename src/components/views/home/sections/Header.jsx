import React from 'react';
import {MainTitle} from '../../../general/misc/Titles';

export default function Header() {
    return (
        <header>
            <div id="hero">
                <div className="container flex-center">
                    <MainTitle title="designhub&trade;">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat.
                    </MainTitle>
                </div>
                <div className="mountains" />
                <div className="planet circle" />
            </div>
        </header>
    );
}
