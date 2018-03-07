import React, {Component} from 'react';
import MainTitle from '../../../general/misc/titles/MainTitle';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div id="hero">
                    <div className="container flex-center">
                        <MainTitle title="designhub">Der beste Discord der Welt!</MainTitle>
                    </div>
                    <div className="mountains" />
                    <div className="planet circle" />
                </div>
            </header>
        );
    }
}
