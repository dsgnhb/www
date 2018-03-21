import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import PiwikReactRouter from 'piwik-react-router';
import {createBrowserHistory} from 'history';
import Typekit from 'react-typekit';
import Header from './components/general/Header';
import Routes from './components/general/routes/Routes';
import Footer from './components/general/footer/Footer';
import NightMode from './components/general/NightMode.jsx';
import './files/css/App.css';
import './files/css/sweetalert2.css';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nightmode: {
                begin: 19,
                end: 8
            }
        };

        this.history = createBrowserHistory();

        this.piwik = PiwikReactRouter({
            url: 'analytics.florentinwalter.de',
            siteId: 1
        });
        this.nm_switcher = this.nm_switcher.bind(this);
    }

    componentDidMount() {
        let hour = new Date().getHours();
        let currentStatus = this.getLocalStorage();
        if (hour > this.state.nightmode.begin || hour < this.state.nightmode.end || currentStatus) {
            this.changeTheme(true);
        }
    }

    async nm_switcher(e) {
        e.preventDefault();
        let currentStatus = await this.getLocalStorage();
        await this.changeLocalStorage(!currentStatus);
        await this.changeTheme(!currentStatus);
        window.scrollTo(window.pageXOffset, window.pageYOffset);
    }
    getLocalStorage() {
        return new Promise((resolve, reject) => {
            const status = localStorage.getItem('nightmode.enabled') === 'true';
            resolve(status);
        });
    }

    changeTheme(status) {
        return new Promise((resolve, reject) => {
            this.setState({nightmode: {enabled: status}}, () => {
                resolve(true);
            });
        });
    }
    changeLocalStorage(status) {
        return new Promise(async (resolve, reject) => {
            await localStorage.setItem('nightmode.enabled', status);
            resolve(true);
        });
    }

    render() {
        return (
            <Router history={this.piwik.connectToHistory(this.history)}>
                <NightMode active={this.state.nightmode.enabled}>
                    <Typekit kitId="vtp0hqt" />
                    <Header />
                    <Routes />
                    <Footer handler={this.nm_switcher} enabled={this.state.nightmode.enabled === 'true'} />
                </NightMode>
            </Router>
        );
    }
}
