import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import LevelEntries from './Entries';

export default function Levels() {
  return (
    <div>
      <section id="leaderboard">
        <div className="container">
          <MainTitle title="Leaderboard" subtitle="Levels">
            Pro Nachricht auf unserem Discord erhälst du eine zufällige Menge XP zwischen 15 und 20. Um Spam zu vermeiden, kannst du nur einmal pro Minute XP bekommen. - Das heißt, je aktiver du bist,
            desto besser wirst du im Ranking platziert! Auf unserem Discord Server kannst du mit !rank deinen aktuellen Platz im Ranking sowie dein Level erfahren.
            <br />
            <br />
            <h3>Chest-System</h3>
            Jedes mal, wenn ihr eine gerade Levelanzahl erreicht, bekommst du automatisch eine neue Chest, die du mit !chest öffnen kannsst. Darin erwarten dich <b>*hust*</b> TOLLE <b>*hust*</b>{' '}
            Überraschungen, wie zb Gutschein-Codes auf den Kauf dein nächstes Design!
          </MainTitle>
          <LevelEntries />
        </div>
      </section>
    </div>
  );
}
