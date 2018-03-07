import React, {Component} from 'react';
import MainLink from '../misc/titles/MainLink';

export default class Join extends Component {
    render() {
        return (
            <section id="join" className="flex-center-center">
                <div className="icon" />
                <h3>Bereit, die Hölle zu entdecken?</h3>
                <MainLink href="https://discordapp.com/invite/PGv5TR3">Komm auf unseren Discord</MainLink>
            </section>
        );
    }
}
