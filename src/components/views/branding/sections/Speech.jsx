import React, {Component} from 'react';
import SectionTitle from '../../../general/misc/titles/SectionTitle';
import Rule from './Rule';

export default class Logo extends Component {
    render() {
        return (
            <section id="speech">
                <div className="container">
                    <SectionTitle subtitle="Sprache" title="1 perfect Speech from Nicigkeit her.">
                        Unsere Sprache ist vertrauenswürdig, humorvoll und verspielt - nicht selbstgerecht oder
                        arrogant. Wir nehmen uns selbst nicht zu ernst. Unser Ziel ist es, Coolness, Glaubwürdigkeit und
                        Humor in einer Sprache zu vereinen.
                    </SectionTitle>
                    <div className="content">
                        <div className="flex-list member">
                            <Rule
                                allowed="designhub"
                                forbidden="dsgnhb, DesignHub, Design Hub, Design hub, DeSiGnHuB"
                            />
                            <Rule allowed="Member" forbidden="Mitglied, User, Benutzer" />
                            <Rule allowed="Discord" forbidden="Guild, Discord Server, Server" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
