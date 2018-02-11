import React from 'react';
import LinkDuo from '../../general/misc/LinkDuo';
import { MainTitle } from '../../general/misc/Titles';
import LastDonations from './sections/LastDonations';

export default function Donations() {
    return (
        <div>
            <section id="donations-intro">
                <div className="container">
                    <MainTitle subtitle="Danke." title="Donations">
                        <b>Werd’ doch ein Patreon!</b> Wenn du designhub magst und uns unterstützen möchtest, um das
                        Projekt aktiv zuhalten, freuen wir uns über deine Hilfe! Als Dankeschön erhälst du coole
                        Belohnungen. Außerdem erwähnen wir dich auf unserer Website und bieten dir 'nen extra Rang auf
                        unserem Discord an.
                    </MainTitle>
                    <LinkDuo to="https://www.patreon.com/designhub" className="main">
                        Patreon -{' '}
                    </LinkDuo>
                    <LinkDuo
                        to="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H6JB49DXTDP3Q"
                        className="main"
                    >
                        PayPal
                    </LinkDuo>
                    <div className="content">
                        <div className="flex-list member">
                            <div className="item">
                                <div className="icon">test</div>
                                <h3>Zugang zum VIP Channel</h3>
                                <p>Chille mit all den anderen wirklich coolen Personen in der VIP Lounge.</p>
                            </div>
                            <div className="item">
                                <h3>Dein eigener Emoji</h3>
                                <p>Spende mindestens 5€ und füge deinen eigenen Emoji dem Discord hinzu!</p>
                            </div>
                            <div className="item">
                                <h3>designhub GFX-Pack</h3>
                                <p>Wir gewähren dir exclusiven Zugriff auf das private designhub-Pack!.</p>
                            </div>
                            <div className="item">
                                <h3>Donator Rolle</h3>
                                <p>Zeige mit der @donator Rolle, dass du designhub unterstützt.</p>
                            </div>
                            <div className="item">
                                <h3>trololololol</h3>
                                <p>Nutze so oft /gommemode wie du willst ohne Coins zu verlieren :gomme:</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <LastDonations />
        </div>
    );
}
