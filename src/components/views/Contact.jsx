import React from 'react';
import {Link} from 'react-router-dom';
import {MainTitle} from '../general/misc/Titles';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <MainTitle subtitle="Kontakt" title="Schreib mir doch mal ;) äh oke">
          Du hast noch Fragen? Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
        </MainTitle>
        <Link to="/twitter-support" className="main">
          Twitter -{' '}
        </Link>
        <Link to="/yt" className="main">
          YouTube -{' '}
        </Link>
        <Link to="/discord" className="main">
          Discord -{' '}
        </Link>
        <Link to="/mail" className="main">
          Mail
        </Link>
      </div>
    </section>
  );
}
