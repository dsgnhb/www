import React from 'react';
import {Link} from 'react-router-dom';
import {MainTitle} from '../general/misc/Titles';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <MainTitle subtitle="Kontakt" title="Schreib mir doch mal ;) äh oke">
          Du hast noch Fragen? Erreiche uns schnell direkt über Discord oder 'zwitscher' uns was via Twitter! Wir freuen uns über jede Nachricht und jedes neue, glückliche Mitglied auf unserem Server.
          Gerne auch auf YouTube abonnieren (für 'ne Custom URL).
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
