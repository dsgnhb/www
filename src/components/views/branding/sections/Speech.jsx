import React from 'react';
import {SectionTitle} from '../../../general/misc/Titles';

export default function Logo() {
    return (
        <section id="speech">
            <div className="container">
                <SectionTitle subtitle="Sprache" title="1 perfect Speech from Nicigkeit her.">
                    Unsere Sprache ist vertrauenswürdig, humorvoll und verspielt - nicht selbstgerecht oder arrogant.
                    Wir nehmen uns selbst nicht zu ernst. Unser Ziel ist es, Coolness, Glaubwürdigkeit und Humor in
                    einer Sprache zu vereinen.
                </SectionTitle>
                <div className="content">
                    <div className="flex-list member">
                        <Rule
                            allowed="designhub, designhub™"
                            forbidden="DesignHub, Design Hub, Design hub, DeSiGnHuB"
                        />
                        <Rule allowed="Member" forbidden="Mitglied, User" />
                        <Rule allowed="Discord" forbidden="Guild, Discord Server, Server" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Rule(props) {
    return (
        <div className="item">
            <h4>Richtig</h4>
            <p>{props.allowed}</p>

            <h4>Falsch</h4>
            <p>{props.forbidden}</p>
        </div>
    );
}
