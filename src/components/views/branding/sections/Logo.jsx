import React from 'react';
import {Link} from 'react-router-dom';
import {SectionTitle} from '../../../general/misc/Titles';

export default function Logo() {
  return (
    <section id="logo">
      <div className="container">
        <SectionTitle subtitle="Logo" title="Unser Logo halt.">
          Kombiniere Logos oder Teile davon nicht mit anderen Logos, Firmennamen, Marken oder allgemeinen Begriffen. Bitte bearbeite, ändere, verzerre, färbe & rekonstruiere unser Logo nicht.
        </SectionTitle>
      </div>
      <div className="content">
        <div className="container flex">
          <div className="logo dark" />
          <div>
            <h3>Master Logo</h3>
            <Link to="/presskit" class="main prefix">
              Download Press Kit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
