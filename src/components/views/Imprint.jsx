import React from 'react';
import {MainTitle} from '../general/misc/Titles';

export default function Imprint() {
    return (
        <div>
            <section id="imprint-intro">
                <div className="container">
                    <MainTitle
                        title="Impressum"
                        link="/privacypolicy"
                        linktitle="Was wir mit deinen Daten so alles machen 😏 (Datenschutzerklärung)"
                    />
                </div>
            </section>
            <section id="imprint-contact">
                <div className="container">
                    <h3>Angaben gemäß § 5 TMG:</h3>
                    <p>
                        Florentin Walter<br />
                        Breslauerstraße 12<br />
                        63927 Bürgstadt
                    </p>
                    <h3>Kontakt:</h3>
                    <p>
                        Telefon: +49 176 47397970<br />
                        E-Mail: <a href="mailto:info@dsgnhb.de">info@dsgnhb.de</a>
                    </p>
                    <p>Geltende Domains: designhub.fun, dsgnhb.de, flooo.me, store.flooo.me</p>
                </div>
            </section>
            <section id="imprint-liability">
                <div className="container">
                    <h3> Haftung für Inhalte</h3>
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                        Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                        der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                    <h3>Haftung für Links</h3>
                    <p>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                        erkennbar.
                    </p>
                    <p>
                        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Links umgehend entfernen.
                    </p>
                    <h3>Urheberrecht</h3>
                    <p>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                        nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                        als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.
                    </p>
                    <p>
                        Quelle: <a href="https://e-recht24.de">e-recht24.de</a>
                    </p>
                </div>
            </section>
        </div>
    );
}
