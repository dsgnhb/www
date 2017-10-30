import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import Gradients from './sections/Gradients';
import Fonts from './sections/Fonts';

export default function Branding() {
  return (
    <div>
      <section id="branding-intro">
        <div className="container">
          <MainTitle subtitle="Branding" title="Design Sachen">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren.
          </MainTitle>
        </div>
      </section>
      <Logo />
      <Colors />
      <Gradients />
      <div className="space" />
      <Fonts />
    </div>
  );
}
