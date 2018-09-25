import React, {Component} from 'react';
import Donation from './Donation';

export default class LastDonations extends Component {
    render() {
        return (
            <section id="lastdonations">
                <div className="container">
                    <h3>Letzte Donations</h3>
                    <h2>Vielen Dank für Eure Unterstützung!</h2>
                    <div className="content">
                        <div className="flex-list member">
                            <Donation name="Teax" url="https://twitter.com/teaxofficial">
                                twitter.com/teaxofficial
                            </Donation>
                            <Donation name="Bukii" url="https://twitter.com/pensivecauselov">
                                twitter.com/pensivecauselov
                            </Donation>
                            <Donation name="Kai" url="https://twitter.com/KaiSchallenberg">
                                twitter.com/KaiSchallenberg
                            </Donation>
                            <Donation name="tobimori" url="https://tobimori.de">
                                tobimori.de
                            </Donation>
                            <Donation name="Lennart" url="https://lenaaart.de">
                                lenaaart.de
                            </Donation>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
