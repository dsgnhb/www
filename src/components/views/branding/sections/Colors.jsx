import React from 'react';
import {SectionTitle} from "../../../general/misc/Titles";

export default function Colors() {
    return (
        <section id="colors">
            <div className="container">
                <SectionTitle id="Farben" title="Zapp. Zap. Matsch. Plasch. lol">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat.
                </SectionTitle>
                <div className="content">
                    <div className="flex-list icons">
                        <Color id="one" hex="#ffffff" name="Wei&szlig;">
                            Für Titel auf dunklem Hintergrund.
                        </Color>
                        <Color id="two" hex="#eeeeee" name="Hellgrau;">
                            Für Texte auf dunklem Hintergrund.
                        </Color>
                        <Color id="three" hex="#ffffff" name="Dunkelgrau">
                            Für Titel auf hellem Hintergrund.
                        </Color>
                        <Color id="four" hex="#ffffff" name="Dunkelgrau">
                            Für Titel auf hellem Hintergrund.
                        </Color>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Color(props) {
    return (
        <div className="item">
            <div className={`example ${props.id} flex-center-center`}>
                <h4>{props.hex}</h4>
            </div>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
