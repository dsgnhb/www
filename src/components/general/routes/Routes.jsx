import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../views/home/Home';
import About from '../../views/about/About';
import Branding from '../../views/branding/Branding';
import Contact from '../../views/Contact';
import Meme from '../../views/Meme';
import Donations from '../../views/donations/Donations';
import Levels from '../../views/levels/Levels';
import Partner from '../../views/Partner';
import TopDesign from '../../views/topdesign/View';
import Apply from '../../views/apply/Apply';
import Imprint from '../../views/Imprint';
import PrivacyPolicy from '../../views/PrivacyPolicy';
import NotFound from '../../views/NotFound';
import provideRedirect from '../providers/redirectProvider';
import provideTitle from '../providers/titleProvider';

export default class Routes extends Component {
    constructor(props) {
        super(props);

        this.webTitles = provideTitle();
        this.redirects = provideRedirect();

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
                <Route path="/dab" component={Meme} />
                <Route path="/donate" component={Donations} />
                <Route path="/levels" component={Levels} />
                <Route path="/partner" component={Partner} />
                <Route path="/topdesign" component={TopDesign} />
                <Route path="/apply" component={Apply} />
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
