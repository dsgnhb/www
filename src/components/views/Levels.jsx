import React from 'react'
import LevelEntries from './levels/Entries'
import Text from '../general/misc/Text'
import DiscordLink from '../general/misc/DiscordLink'

export default function Levels() {
  return (
    <div>
      <div id="intro">
        <div className="content">
          <Text>
            Pro Nachricht auf unserem Discord erhälst du eine zufällige Menge XP zwischen 15 und 20. Um Spam zu vermeiden, kannst du nur einmal pro Minute XP bekommen. - Das heißt, je aktiver du bist,
            desto besser wirst du im Ranking platziert!
          </Text>

          <Text title="Chest-System">
            Jedes mal, wenn ihr eine gerade Levelanzahl erreicht, bekommst du automatisch eine neue Chest, die du mit <strong>!chest</strong> öffnen kannsst. Darin erwarten dich{' '}
            <strong>*hust*</strong>
            TOLLE <strong>*hust*</strong> Überraschungen, wie zb Gutschein-Codes auf den Kauf dein nächstes Designs!
          </Text>

          <Text title="Designhub Discord">
            Auf unserem Discord Server kannst du mit <strong>!rank</strong> deinen aktuellen Platz im Ranking sowie dein Level erfahren.
          </Text>
          <DiscordLink />
        </div>
      </div>
      <LevelEntries />
    </div>
  )
}
