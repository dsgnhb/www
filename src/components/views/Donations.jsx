import React from 'react';
import Text from '../general/misc/Text';
import DiscordLink from '../general/misc/DiscordLink';
import '../../files/css/twemoji.css';

export default function Donations() {
    return (
        <div id="intro">
            <div className="content">
                <Text>
                    Hiermit finanzieren wir <strong>Domains</strong>, ein bisschen <strong>Web-Hosting</strong> und
                    alles andere, was halt sonst noch so Geld kostet. - <em>Und kostenlose Mega-Op Sachen für die Admins
                    natürlich.</em>
                    <i className="twa twa-lg twa-smirk" />
                </Text>
                <Text>
                    Falls du uns unterstützen und das Projekt aufrecht erhalten möchtest, freuen wir uns über jede
                    Hilfe!
                </Text>
                <DiscordLink />
            </div>
        </div>
    );
}