import React, {Component} from 'react';
import LinkDuo from '../../../general/misc/LinkDuo';
import SectionTitle from '../../../general/misc/titles/SectionTitle';

export default class Logo extends Component {
    render() {
        return (
            <section id="logo">
                <div className="container">
                    <SectionTitle subtitle="Logo" title="Unser Logo halt.">
                        Kombiniere Logos oder Teile davon nicht mit anderen Logos, Firmennamen, Marken oder allgemeinen
                        Begriffen. Bitte bearbeite, ändere, verzerre, färbe & rekonstruiere unser Logo nicht.
                    </SectionTitle>
                </div>
                <div className="content">
                    <div className="container flex">
                        <div className="logo dark" />
                        <div>
                            <h3>Master Logo</h3>
                            <LinkDuo
                                to="https://www.dropbox.com/sh/rmhmrnj6po7u47m/AABqkrqkWrM30CbRv1ezIDQ5a?dl=0"
                                className="main prefix"
                            >
                                Download Press Kit
                            </LinkDuo>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
