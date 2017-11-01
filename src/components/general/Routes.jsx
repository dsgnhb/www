import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../views/home/View';
import About from '../views/about/View';
import Branding from '../views/branding/View';
import Contact from '../views/Contact';
import Donations from '../views/donations/View';
import Levels from '../views/levels/View';
import Partner from '../views/Partner';
import TopDesign from '../views/topdesign/View';
import Imprint from '../views/Imprint';
import PrivacyPolicy from '../views/PrivacyPolicy';

export default class Routes extends React.Component {

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        const redirects = [
            {
                name: 'discord',
                url: 'https://discordapp.com/invite/PGv5TR3'
            },
            {
                name: 'music',
                url: 'http://46.228.192.55:8087'
            },
            {
                name: 'rc',
                url: 'https://www.dropbox.com/sh/ecq8lku300b63ir/AABxOnsQoEg1SP26klmHEBsva?dl=0'
            },
            {
                name: 'signaltransmitter',
                url: 'https://signaltransmitter.de/ref/234ra69r31584c44'
            },
            {
                name: 'yt',
                url: 'https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA'
            },
            {
                name: 'github',
                url: 'https://github.com/dsgnhb'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/dsgnhb'
            },
            {
                name: 'twitter-support',
                url: 'https://twitter.com/messages/compose?recipient_id=2654452573'
            },
            {
                name: 'mail',
                url: 'mailto:info@dsgnhb.de'
            },
            {
                name: 'presskit',
                url: 'https://dl.dsgnhb.de'
            },
            {
                name: 'patreon',
                url: 'https://www.patreon.com/designhub'
            },
            {
                name: 'paypal',
                url: 'https://www.paypal.me/juttawalter/1'
            },
            {
                name: 'ShortTech',
                url: 'http://shorttech.de/?ref=designhub'
            },
            {
                name: 'smashFM',
                url: 'https://www.smashfm.de/?ref=designhub'
            }
        ];

        return (
            <div>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/brand" component={Branding} />
                <Route path="/contact" component={Contact} />
                <Route path="/donate" component={Donations} />
                <Route path="/levels" component={Levels} />
                <Route path="/partner" component={Partner} />
                <Route path="/topdesign" component={TopDesign} />
                <Route path="/imprint" component={Imprint} />
                <Route path="/privacypolicy" component={PrivacyPolicy} />

                {redirects.map(item => (
                    <Route
                        key={item.name}
                        path={'/' + item.name}
                        render={() => {
                            window.location = item.url;
                        }}
                    />
                ))}
            </div>
        );
    }
}
