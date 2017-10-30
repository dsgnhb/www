import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import Stats from './sections/Stats';
import Team from '../Team';

export default function About() {
  return (
    <div>
      <section id="stats-intro">
        <div className="container">
          <MainTitle subtitle="Über uns" title="Wir sind designhub&trade;">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren.
          </MainTitle>
        </div>
      </section>
      <div className="space" />
      <Stats />
      <Team />
    </div>
  );
}
