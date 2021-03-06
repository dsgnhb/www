import React, {Component} from 'react';
import Feature from './Feature';

export default class Features extends Component {
    render() {
        return (
            <section id="donations-features">
                <div className="container flex-list icons left">
                    <Feature id="vip" name="Zugang zum VIP Channel">
                        Chille mit all den anderen wirklich Coolen in der VIP Lounge.
                    </Feature>
                    <Feature id="emoji" name="Dein eigener Emoji">
                        Füge ab einer Spende von 5€ deinen eigenen Emoji zu unserem Discord hinzu.
                    </Feature>
                    <Feature id="gfx" name="designhub GFX-Pack">
                        Wir gewähren dir exklusiven Zugriff auf das private designhub-Pack.
                    </Feature>
                    <Feature id="gomme" name="Trololololol!">
                        Nutze so oft /gommemode wie du willst ohne Coins zu verlieren :gomme:
                    </Feature>
                    <Feature id="name" name="Du, auf unserer Website">
                        Präsentiere dich mit einer Verlinkung zu deinem Social-Media auf unserer Website.
                    </Feature>
                    <Feature id="donatorrole" name="Donator Rolle">
                        Zeige mit dem @donator-Rang, dass du designhub unterstützt.
                    </Feature>
                </div>
            </section>
        );
    }
}
