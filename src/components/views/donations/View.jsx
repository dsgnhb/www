import React from 'react';
import {Link} from 'react-router-dom';
import {MainTitle} from '../../general/misc/Titles';
import LastDonations from './sections/LastDonations';

export default function Donations() {
  return (
    <div>
      <section id="donations-intro">
        <div className="container">
          <MainTitle subtitle="Danke." title="Donations">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren.
          </MainTitle>
          <Link to="/patreon" className="main">
            Patreon - {' '}
          </Link>
          <Link to="/paypal" className="main">
            PayPal
          </Link>
          <LastDonations />
        </div>
      </section>
    </div>
  );
}
