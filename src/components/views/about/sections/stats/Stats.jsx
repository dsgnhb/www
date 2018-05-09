import React, {Component} from 'react';
import Fact from './Fact';

export default class Stats extends Component {
    render() {
        return (
            <section id="stats">
                <div className="container flex-list icons">
                    <Fact color="blue" data="300+" name="Member">
                        Das werden dann halt einfach auch noch jeden Tag mehr.
                    </Fact>
                    <Fact color="orange" data="70+" name="Nachrichten pro Tag">
                        Das's ganz schön viel Spam und bestimmt auch ein paar Gomme-Smileys.
                    </Fact>
                    <Fact color="green" data="10" name="Teammitglieder">
                        Alle 10 sind cool, also fast alle, bis auf... Lukas und Flo halt. Aber Tobi ist der coolste von
                        allen!
                    </Fact>
                </div>
            </section>
        );
    }
}
