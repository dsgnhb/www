import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MainTitle from '../../general/misc/titles/MainTitle';
import SEO from '../../general/misc/SEO';

export default class Error extends Component {
    static propTypes = {
        children: PropTypes.any,
        code: PropTypes.any
    };

    render() {
        return (
            <section id="error">
                <SEO
                    title={`${this.props.code} Fehler`}
                    headline={`${this.props.code} Fehler`}
                    description="Huch, hier funktioniert irgendwas nicht :/"
                    path="/"
                />
                <div className="overlay flex-center-center">
                    <div className="container">
                        <MainTitle
                            title="Huch, hier funktioniert irgendwas nicht :/"
                            subtitle={`${this.props.code} Fehler`}
                            link="/"
                            linktitle="Hier gehts zurück zur Startseite"
                        >
                            {this.props.children}
                        </MainTitle>
                    </div>
                </div>
            </section>
        );
    }
}
