import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../views/home/View';
import About from '../views/about/View';
import Branding from '../views/branding/View';
import Contact from '../views/Contact';
import Donations from '../views/donations/View';
import Levels from '../views/levels/View';
import Partner from "../views/Partner";

export default function Routes() {

    const redirects = [
        {
            name: "discord",
            url: "https://discordapp.com/invite/PGv5TR3"
        },
        {
            name: "music",
            url: "http://46.228.192.55:8087"
        },
        {
            name: "rc",
            url: "https://www.dropbox.com/sh/ecq8lku300b63ir/AABxOnsQoEg1SP26klmHEBsva?dl=0"
        },
        {
            name: "signaltransmitter",
            url: "https://signaltransmitter.de/ref/234ra69r31584c44"
        },
        {
            name: "yt",
            url: "https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA"
        },
        {
            name: "github",
            url: "https://github.com/dsgnhb"
        },
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

            {
                redirects.map((item) => (
                    <Route
                        key={item.name}
                        path={'/' + item.name}
                        render={() => {
                            window.location = item.url;
                        }}
                    />
                ))
            }
        </div>
    );
}
