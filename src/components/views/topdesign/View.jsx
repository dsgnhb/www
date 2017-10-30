import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import TopDesignEntries from './Entries';

export default function TopDesign() {
  return (
    <div>
      <section id="topdesign">
        <div className="container">
          <MainTitle subtitle="Top Design" title={getMonth()} link="/discord" linktitle="Komm auf unseren Discord">
            Stelle in unserem monatlichen Wettbewerb deine Design Skills unter Beweis und staube tolle Preise ab! Das Design mit den meisten Vots aus unserer Community erhält die Chance zu, auf
            unserem Twitter Account (@dsgnhb) vorgestellt zu werden und wird mit tollen Preisen belohnt.
            <br />
            <br />
            <h3>Teilnahme</h3>
            Erwähne in deinem, auf unserem Discord geteilten Design, einfach <b>#topdesign</b>, um an Top Design teilzunehmen. So wird deine Einsendung automatisch auf unserer Website angezeigt und
            kann von allen angesehen und bewertet werden.<br />
            <br />
            <h3>Voten/Liken</h3>
            Um für deinen Favoriten zu voten, schreibe lediglich <b>!vote #id</b> in den Discord-Chat. Ersetze hierbei #id durch die Nummer der Einsendung, die du auf unserer Website durch einen Hover
            auf das Design herausfinden kannst. Zusätzlich stehen dir noch die Commands <b>!topdesign</b>, <b>!posts</b>, <b>!delete</b> sowie <b>!help</b> zur Verfügung.
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
