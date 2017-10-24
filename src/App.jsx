import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/general/Header';
import Routes from './components/general/Routes';
import Footer from './components/general/Footer';
import './files/css/App.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
