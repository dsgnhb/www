import React from 'react';
import LinkDuo from '../../general/misc/LinkDuo';
import {MainTitle} from '../../general/misc/Titles';
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
                    <LastDonations />
                </div>
            </section>
        </div>
    );
}
