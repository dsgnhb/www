import React, {Component} from 'react';
import LinkDuo from '../../general/misc/LinkDuo';
import MainTitle from '../../general/misc/titles/MainTitle';
import PartnerInfo from './PartnerInfo';
import SEO from '../../general/misc/SEO';

export default class Partner extends Component {
    render() {
        return (
            <div>
                <SEO
                    title="Partner"
                    headline="Unsere Partner"
                    description="Dank unserer Partner, die uns stets unterstützen, können wir das Projekt aktiv halten. Hier findest du alle Informationen rund um sämtliche aktuelle Partnerschaften."
                    path="/partner"
                />
                <section id="partner">
                    <div className="container">
                        <MainTitle
                            title="Danke."
                            subtitle="Partner"
                            link="/donate"
                            linktitle="Falls Du uns auch unterstützen möchtest, kannst Du das hier tun!"
                        >
                            Dank unserer Partner, die uns stets unterstützen, können wir das Projekt aktiv halten. Hier
                            findest du alle Informationen rund um sämtliche aktuelle Partnerschaften. Solltest du das
                            Interesse haben, ebenfalls eine Zusammenarbeit mit uns in Erwägung zu ziehen, schreib' uns
                            ne Mail unter{' '}
                            <LinkDuo to="mailto:info@designhub.fun" className="main">
                                info@designhub.fun
                            </LinkDuo>
                            .
                        </MainTitle>
                    </div>
                </section>
                <PartnerInfo
                    name="Signaltransmitter"
                    task="Hosting"
                    link="https://signaltransmitter.de/ref/234ra69r31584c44"
                >
                    Alle Bots auf unserem Discord werden von den Jungs von Signaltransmitter gehostet. Du suchst einen
                    guten Hoster für deine Projekte und Ideen? Da empfehlen wir ganz klar Signaltransmitter!
                </PartnerInfo>
                <PartnerInfo name="ShortTech" task="Redaktionelle Inhalte" link="http://shorttech.de/?ref=designhub">
                    Rund um Redaktionelle Inhalte ist das Team von ShortTech stets unser Ansprechpartner. In ihrem Blog
                    sowie auf Twitter erfährst du alles rund um die Welt der Technik!
                </PartnerInfo>
                <PartnerInfo name="smashFM" task="Musik" link="https://www.smashFM.de/?ref=designhub">
                    Smash! Egal wann, egal wo! Dort hörst du nicht nur die aktuellsten Lieder, sondern auch Klassiker
                    aus vergangenen Zeiten. Von Charts über Dance bis hin zu Chillout ist bei denen alles dabei.
                </PartnerInfo>
            </div>
        );
    }
}
