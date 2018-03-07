import React, {Component} from 'react';
import Error from './Error';

export default class NotFound extends Component {
    render() {
        return (
            <Error code="404">
                Die Seite konnte nicht gefunden werden. Vielleicht hast Du Dich vertippt? Wenn nicht haben wir wohl
                einen Fehler gemacht. Tja, passiert halt auch den Besten. Wäre cool, wenn Du uns auf den Fehler
                aufmerksam machst. Danke.
            </Error>
        );
    }
}
