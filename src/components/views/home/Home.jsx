import React, {Component} from 'react';
import Header from './sections/Header';
import Intro from './sections/Intro';
import Features from './sections/Features';
import SEO from '../../general/misc/SEO';

export default class Home extends Component {
    render() {
        return (
            <div>
                <SEO
                    headline="designhub - Der beste Discord der Welt!"
                    description="Komm jetzt auf unseren Discord, um deine kreative Arbeit zu präsentieren und Neues zu entdecken!."
                    path="/"
                />
                <Header />
                <Intro />
                <Features />
            </div>
        );
    }
}
