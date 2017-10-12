import React from 'react';
import { Route } from 'react-router-dom';
import Donations from '../views/Donations';
import Home from '../views/Home';
import Levels from '../views/Levels';
import TopDesign from '../views/TopDesign';

export default function Routes() {
  const redirects = [
    {
      name: 'discord',
      url: 'https://discordapp.com/invite/PGv5TR3'
    },
    {
      name: 'music',
      url: 'http://46.228.192.55:8087'
    },
    {
      name: 'rc',
      url: 'https://www.dropbox.com/sh/ecq8lku300b63ir/AABxOnsQoEg1SP26klmHEBsva?dl=0'
    },
    {
      name: 'signaltransmitter',
      url: 'https://signaltransmitter.de/ref/234ra69r31584c44'
    },
    {
      name: 'yt',
      url: 'https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA'
    }
  ];

  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/topdesign" component={TopDesign} />
      <Route path="/levels" component={Levels} />
      <Route path="/donate" component={Donations} />

      {redirects.map(item => (
        <Route
          path={'/' + item.name}
          render={() => {
            window.location = item.url;
          }}
        />
      ))}
    </div>
  );
}
