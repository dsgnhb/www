import React from 'react';
import {MainTitle} from '../general/misc/Titles';

function Error(props) {
    return (
        <section id="error">
            <div className="overlay flex-center-center">
                <div className="container">
                    <MainTitle
                        title="Huch, hier funktioniert irgendwas nicht :/"
                        subtitle={`${props.code} Fehler`}
                        link="/"
                        linktitle="Hier gehts zurück zur Startseite"
                    >
                        {props.children}
                    </MainTitle>
                </div>
            </div>
        </section>
    );
}

export function NotFound() {
    return (
        <Error code="404">
            Die Seite konnte nicht gefunden werden. Vielleicht hast Du Dich vertippt? Wenn nicht haben wir wohl einen
            Fehler gemacht. Tja, passiert halt auch den Besten. Wäre cool, wenn Du uns auf den Fehler aufmerksam machst.
            Danke.
        </Error>
    );
}
