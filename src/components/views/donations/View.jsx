import React from 'react';
import { MainTitle } from '../../general/misc/Titles';
import LastDonations from './sections/LastDonations';
import Features from './sections/Features';

export default function Donations() {
    return (
        <div>
            <section id="donations-intro">
                <div className="container">
                    <MainTitle
                        subtitle="Donations"
                        title="Unterstütze uns!"
                        link="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H6JB49DXTDP3Q"
                        linktitle="Los geht's!"
                    >
                        Wenn du designhub magst und uns unterstützen möchtest, um das Projekt aktiv zuhalten, freuen wir
                        uns über deine Hilfe! Als Dankeschön erhälst du coole Belohnungen. So erwähnen wir dich zum Beispiel
                        auf unserer Website und bieten dir 'nen extra Rang auf unserem Discord an.
                    </MainTitle>
                </div>
            </section>
            <Features />
            <LastDonations />
        </div>
    );
}
