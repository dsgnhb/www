import React from 'react';
import Text from '../general/misc/Text';
import DiscordLink from '../general/misc/DiscordLink';
import TopDesignEntries from './topdesign/Entries';

export default function TopDesign() {
  return (
    <div>
      <div id="intro">
        <div className="content">
          <Text>
            Schick‘ jetzt deine besten Designs des Monats ein, um die Chance zu erhalten, auf unserem Twitter Account (@dsgnhb) vorgestellt zu werden. Das Design mit den meisten Votes gewinnt und
            erhält den @dsgnhb-Rang auf dem Discord-Server.
          </Text>
          <Text title="Teilnahme">
            Füge zu deinem, auf unserem Discord geteilten Design einfach den Kommentar
            <strong>#topdesign</strong>
            hinzu, um an Top Design teilzunehmen. So wird deine Einsendung automatisch auf unserer Website angezeigt und kann von jedem angesehen und bewertet werden.
          </Text>
          <Text title="Voten/Liken">
            Um für ein Design zu voten, schreibe lediglich <strong>!vote #id</strong> in den Discord-Chat. Ersetze hierbei #id durch die Nummer der Einsendung, die du auf unserer Website durch einen
            Klick auf das Design herausfinden kannst.<br /> Zusätzlich stehen dir noch die Commands
            <strong>!topdesign</strong>, <strong>!posts</strong>, <strong>!delete</strong> sowie
            <strong>!help</strong> zur Verfügung.
          </Text>
          <DiscordLink />
        </div>
      </div>
      <div id="topdesign">
        <TopDesignEntries />
      </div>
    </div>
  );
}
