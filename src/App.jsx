import React from 'react';
import {Router} from 'react-router-dom';
import PiwikReactRouter from 'piwik-react-router';
import {createBrowserHistory} from 'history';
import Typekit from 'react-typekit';
import Header from './components/general/Header';
import Routes from './components/general/Routes';
import Footer from './components/general/Footer';
import './files/css/App.css';

// pls make this better
var currentTime = new Date().getHours();
if (currentTime > 22 && currentTime < 6) {
    require('./files/css/night.css');
}

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.history = createBrowserHistory();

        this.piwik = PiwikReactRouter({
            url: 'analytics.florentinwalter.de',
            siteId: 1
        });
    }

    render() {
        return (
            <Router history={this.piwik.connectToHistory(this.history)}>
                <div>
                    <Typekit kitId="vtp0hqt" />
                    <Header />
                    <Routes />
                    <Footer />
                </div>
            </Router>
        );
    }
}
