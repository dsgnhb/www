import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../views/home/Home';
import About from '../../views/about/About';
import Branding from '../../views/branding/Branding';
import Contact from '../../views/Contact';
import Meme from '../../views/Meme';
import Donations from '../../views/donations/Donations';
import Levels from '../../views/levels/Levels';
import Partner from '../../views/partner/Partner';
import TopDesign from '../../views/topdesign/TopDesign';
import Apply from '../../views/apply/Apply';
import LegalDisclosure from '../../views/LegalDisclosure';
import PrivacyPolicy from '../../views/PrivacyPolicy';
import NotFound from '../../views/error/errors/NotFound';
import provideRedirect from '../providers/redirectProvider';

export default class Routes extends Component {
    constructor(props) {
        super(props);

        this.redirects = provideRedirect();

        this.checkRedirects = this.checkRedirects.bind(this);
    }

    componentDidUpdate() {
        this.checkRedirects();

        window.scrollTo(0, 0);
    }

    render() {
        this.checkRedirects();
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/brand" component={Branding} />
                <Route path="/contact" component={Contact} />
                <Route path="/dab" component={Meme} />
                <Route path="/donate" component={Donations} />
                <Route path="/levels" component={Levels} />
                <Route path="/partner" component={Partner} />
                <Route path="/topdesign" component={TopDesign} />
                <Route path="/apply" component={Apply} />
                <Route path="/legaldisclosure" component={LegalDisclosure} />
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
}
