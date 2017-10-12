import React from 'react';
import Text from '../general/misc/Text';
import DiscordLink from '../general/misc/DiscordLink';

export default function Home() {
  return (
    <div id="intro">
      <div className="content">
        <Text title="Wir sind designhub!">
          - eine Community, bestehend aus einer <strong>Vielzahl von Designern und Entwicklern</strong>, mit dem Ziel, diese untereinander zu verbinden und zu unterstützten, indem wir sie zu einer
          großen Community zusammenbringen. Für dieses Netzwerk stellen wir ein Forum sowie einen eigenen <strong>Discord-Server mit etwa 200 Mitgliedern </strong> zur Verfügung, die in erster Linie
          für den gegenseitigen Austausch zwischen Designern und zur Lösung von Problemen sowie Hilfestellungen dienen.
        </Text>
        <DiscordLink />
      </div>
    </div>
  );
}
