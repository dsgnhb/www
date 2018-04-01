import React, {Component} from 'react';
import MainTitle from '../../general/misc/titles/MainTitle';
import LastDonations from './sections/LastDonations';
import Features from './sections/Features';
import SEO from '../../general/misc/SEO';

export default class Donation extends Component {
    render() {
        return (
            <div>
                <SEO
                    title="Donations"
                    headline="Unterstütze uns!"
                    description="Wenn du designhub magst und uns unterstützen möchtest, um das Projekt aktiv zuhalten, freuen wir uns über deine Hilfe!"
                    path="/donate"
                />
                <section id="donations-intro">
                    <div className="container">
                        <MainTitle
                            subtitle="Donations"
                            title="Unterstütze uns!"
                            link="https://www.paypal.me/juttawalter/1"
                            linktitle="Los geht's!"
                        >
                            Wenn du designhub magst und uns unterstützen möchtest, um das Projekt aktiv zuhalten, freuen
                            wir uns über deine Hilfe! Als Dankeschön erhälst du coole Belohnungen. So erwähnen wir dich
                            zum Beispiel auf unserer Website und bieten dir 'nen extra Rang auf unserem Discord an.
                        </MainTitle>
                    </div>
                </section>
                <Features />
                <LastDonations />
            </div>
        );
    }
}
