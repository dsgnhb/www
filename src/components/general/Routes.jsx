import React from 'react';
import {Route, Switch} from 'react-router-dom';
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
import {NotFound} from '../views/Error';

export default class Routes extends React.Component {
    constructor(props) {
        super(props);

        this.webTitles = new Map();
        this.webTitles.set('/about', 'Über uns');
        this.webTitles.set('/brand', 'Branding');
        this.webTitles.set('/contact', 'Kontakt');
        this.webTitles.set('/donate', 'Unterstütze uns');
        this.webTitles.set('/imprint', 'Impressum');
        this.webTitles.set('/levels', 'Leaderboard');
        this.webTitles.set('/partner', 'Partner');
        this.webTitles.set('/privacypolicy', 'Datenschutzerklärung');
        this.webTitles.set('/topdesign', 'TopDesign');

        this.redirects = new Map();
        this.redirects.set('/discord', 'https://discordapp.com/invite/PGv5TR3');
        this.redirects.set('/github', 'https://github.com/dsgnhb');
        this.redirects.set('/mail', 'mailto:info@dsgnhb.de');
        this.redirects.set('/music', 'http://46.228.192.55:8087');
        this.redirects.set('/patreon', 'https://www.patreon.com/designhub');
        this.redirects.set(
            '/paypal',
            'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H6JB49DXTDP3Q'
        );
        this.redirects.set('/presskit', 'https://dl.dsgnhb.de');
        this.redirects.set('/rc', 'https://www.dropbox.com/sh/ecq8lku300b63ir/AABxOnsQoEg1SP26klmHEBsva?dl=0');
        this.redirects.set('/shorttech', 'http://shorttech.de/?ref=designhub');
        this.redirects.set('/signaltransmitter', 'https://signaltransmitter.de/ref/234ra69r31584c44');
        this.redirects.set('/smashfm', 'https://www.smashFM.de/?ref=designhub');
        this.redirects.set('/twitter', 'https://twitter.com/dsgnhb');
        this.redirects.set('/twitter-support', 'https://twitter.com/messages/compose?recipient_id=2654452573');
        this.redirects.set('/yt', 'https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA');

        this.checkRedirects = this.checkRedirects.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    componentDidUpdate() {
        this.checkRedirects();
        this.setTitle();

        window.scrollTo(0, 0);
    }

    render() {
        this.checkRedirects();
        this.setTitle();

        return (
            <Switch>
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
                <Route component={NotFound} />
            </Switch>
        );
    }

    checkRedirects() {
        if (this.redirects.get(window.location.pathname) !== undefined) {
            window.location = this.redirects.get(window.location.pathname);
        }
    }

    setTitle() {
        let webTitle = this.webTitles.get(window.location.pathname);

        document.title = `designhub.${webTitle === undefined ? '' : ' | ' + webTitle}`;
    }
}
