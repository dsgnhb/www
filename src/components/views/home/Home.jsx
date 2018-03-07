import React, {Component} from 'react';
import Header from './sections/Header';
import Intro from './sections/Intro';
import Features from './sections/Features';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Intro />
                <Features />
            </div>
        );
    }
}
