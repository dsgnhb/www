import React from 'react';
import { Router } from 'react-router-dom';
import PiwikReactRouter from 'piwik-react-router';
import { createBrowserHistory } from 'history';
import Typekit from 'react-typekit';
import Header from './components/general/Header';
import Routes from './components/general/Routes';
import Footer from './components/general/Footer';
import NightMode from './components/general/NightMode.jsx';
import './files/css/App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        //TODO: make this adjustable
        this.nightmode = {
            enabled: true,
            forced: false,
            begin: 19,
            end: 8
        };

        let hour = new Date().getHours();

        if (
            this.nightmode.forced ||
            ((hour > this.nightmode.begin || hour < this.nightmode.end) && this.nightmode.enabled)
        ) {
            this.actual = true;
        }

        this.history = createBrowserHistory();

        this.piwik = PiwikReactRouter({
            url: 'analytics.florentinwalter.de',
            siteId: 1
        });
    }

    render() {
        return (
            <Router history={this.piwik.connectToHistory(this.history)}>
                <NightMode active={this.actual}>
                    <Typekit kitId="vtp0hqt" />
                    <Header />
                    <Routes />
                    <Footer />
                </NightMode>
            </Router>
        );
    }
}
