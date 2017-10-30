import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import TopDesignEntries from './Entries';

export default function TopDesign() {
  return (
    <div>
      <section id="topdesign">
        <div className="container">
          <MainTitle subtitle="Top Design" title={getMonth()} link="/discord" linktitle="Komm auf unseren Discord">
            Lorem ipsum dolor sit amet, lukas ist doof.
          </MainTitle>
        </div>
        <TopDesignEntries />
      </section>
    </div>
  );
}

function getMonth() {
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  return months[new Date().getMonth()];
}
