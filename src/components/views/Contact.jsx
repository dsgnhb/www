import React, {Component} from 'react';
import MainTitle from '../general/misc/titles/MainTitle';
import LinkDuo from '../general/misc/LinkDuo';
import SEO from '../general/misc/SEO';

export default class Contact extends Component {
    render() {
        return (
            <section id="contact">
                <SEO
                    title="Contact"
                    headline="Kontakt"
                    description="Du hast noch Fragen? Erreiche uns schnell direkt über Discord oder 'zwitscher' uns was via Twitter!"
                    path="/contact"
                />
                <div className="container">
                    <MainTitle subtitle="Kontakt" title="Schreib mir doch mal ;) äh oke">
                        Du hast noch Fragen? Erreiche uns schnell direkt über Discord oder 'zwitscher' uns was via
                        Twitter! Wir freuen uns über jede Nachricht und jedes neue, glückliche Mitglied auf unserem
                        Server. Gerne auch auf YouTube abonnieren (für 'ne Custom URL).
                    </MainTitle>
                    <LinkDuo to="https://twitter.com/messages/compose?recipient_id=2654452573" className="main">
                        Twitter -{' '}
                    </LinkDuo>
                    <LinkDuo to="https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA" className="main">
                        YouTube -{' '}
                    </LinkDuo>
                    <LinkDuo to="https://discordapp.com/invite/PGv5TR3" className="main">
                        Discord -{' '}
                    </LinkDuo>
                    <LinkDuo to="mailto:info@designhub.fun" className="main">
                        Mail
                    </LinkDuo>
                </div>
            </section>
        );
    }
}
