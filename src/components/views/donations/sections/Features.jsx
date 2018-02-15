import React from 'react';

export default function Features() {
    return (
        <section id="donations-features">
            <div className="container flex-list icons left">
                <Category id="vip" name="Zugang zum VIP Channel">
                    Chille mit all den anderen wirklich Coolen in der VIP Lounge.
                </Category>
                <Category id="emoi" name="Dein eigener Emoji">
                    Füge ab einer Spende von 5€ deinen eigenen Emoji zu unserem Discord hinzu.
                </Category>
                <Category id="gfx" name="designhub GFX-Pack">
                    Wir gewähren dir exklusiven Zugriff auf das private designhub-Pack.
                </Category>
                <Category id="gommemode" name="Trololololol!">
                    Nutze so oft /gommemode wie du willst ohne Coins zu verlieren :gomme:
                </Category>
                <Category id="name" name="Du, auf unserer Website">
                    Präsentiere dich mit einer Verlinkung zu deinem Social-Media auf unserer Website.
                </Category>
                <Category id="donatorrole" name="Donator Rolle">
                    Zeige mit dem @donator-Rang, dass du designhub unterstützt.
                </Category>
            </div>
        </section>
    );
}

export function Category(props) {
    return (
        <div className="item">
            <div className={`icon ${props.id}`} />
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
