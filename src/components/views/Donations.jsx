import React from 'react';
import Text from '../general/misc/Text';
import DiscordLink from '../general/misc/DiscordLink';
import PopUp from '../general/misc/PopUp';
import '../../files/css/twemoji.css';
import paypal from '../../files/img/PayPal.png';
import psc from '../../files/img/CardPayment.png';

export default class Donations extends React.Component {

    constructor(props) {
        super(props);

        this.openPSC = this.openPSC.bind(this);

    }

    openPSC(e) {
        e.preventDefault();
        this.child.openNav();
    }

    render() {
        return (
            <div>
                <PopUp
                    ref={instance => {
                        this.child = instance
                    }}
                    id="psc"
                    title="Vielen Dank für deine Unterstützung mit PaysafeCard!"
                >
                    Da wir für Deine Spenden lieber auf ein komplexes Zahlungssystem mit hohen Gebühren/Abgaben
                    verzichten, kontaktiere einfach
                    <b>Flo (flo#3087)</b>
                    auf unserem Discord per Direktnachricht.
                </PopUp>
                <div id="intro">
                    <div className="content">
                        <Text>
                            Hiermit finanzieren wir <strong>Domains</strong>, ein bisschen <strong>Web-Hosting</strong>
                            und
                            alles andere, was halt sonst noch so Geld kostet. - <em>Und kostenlose Mega-Op Sachen für
                            die
                            Admins
                            natürlich.</em>
                            <i className="twa twa-lg twa-smirk" />
                        </Text>
                        <Text>
                            Falls du uns unterstützen und das Projekt aufrecht erhalten möchtest, freuen wir uns über
                            jede
                            Hilfe!
                        </Text>
                        <DiscordLink />
                    </div>
                </div>
                <div id="donate">
                    <div className="content">
                        <div className="methods">
                            <div>
                                <a href="https://www.paypal.me/juttawalter/1" target="_blank" rel="noopener noreferrer">
                                    <img className="icon" src={paypal} alt="PayPal Icon" />
                                    <br />
                                    <span>PayPal</span>
                                </a>
                            </div>
                            <div>
                                <div className="pointer" onClick={this.openPSC}>
                                    <img className="icon" src={psc} alt="PaysafeCard Icon" />
                                    <br />
                                    <span>PaySafeCard</span>
                                </div>
                            </div>
                        </div>
                        <Text title="Letzte Donations">
                            Vielen Dank an:<br />
                            - <a href="https://www.gommehd.net">@Teax</a><br />
                            - <a href="https://twitter.com/pensivecauselov">@Bukki</a>
                        </Text>
                    </div>
                </div>
            </div>
        );
    }
}