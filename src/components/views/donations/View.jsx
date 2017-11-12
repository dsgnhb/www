import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to="/patreon" className="main">
                        Patreon - {' '}
                    </Link>
                    <Link to="/paypal" className="main">
                        PayPal
                    </Link>
                    <LastDonations />
                </div>
            </section>
        </div>
    );
}
