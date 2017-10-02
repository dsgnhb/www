import React from 'react';
import {Route} from 'react-router-dom';
import Donations from '../views/Donations';
import Home from '../views/Home';
import Levels from '../views/Levels';
import TopDesign from '../views/TopDesign';

export default function Routes() {
    return (
        <div>
            <Route path="/" component={Home} exact />
            <Route path="/topdesign" component={TopDesign} />
            <Route path="/levels" component={Levels} />
            <Route path="/donate" component={Donations} />
        </div>
    );
}