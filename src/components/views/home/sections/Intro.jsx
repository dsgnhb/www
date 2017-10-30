import React from 'react';
import {MainTitle} from '../../../general/misc/Titles';

export default function Header() {
  return (
    <section id="intro">
      <div className="container">
        <MainTitle subtitle="Hey!" title="Wir sind Designhub&trade;" link="/discord" linktitle="Komm auf unseren Discord">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
          duo dolores et ea rebum. Stet clita kasd gubergren.
        </MainTitle>
      </div>
    </section>
  );
}
