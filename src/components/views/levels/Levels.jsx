import React, {Component} from 'react';
import MainTitle from '../../general/misc/titles/MainTitle';
import LevelEntries from './Entries';

export default class Levels extends Component {
    render() {
        return (
            <div>
                <section id="leaderboard">
                    <div className="container">
                        <MainTitle title="Leaderboard" subtitle="Levels">
                            Pro Nachricht auf unserem Discord erhälst du eine zufällige Menge XP zwischen 15 und 20. Um
                            Spam zu vermeiden, kannst du nur einmal pro Minute XP bekommen. - Das heißt, je aktiver du
                            bist, desto besser wirst du im Ranking platziert! Auf unserem Discord Server kannst du mit
                            !rank deinen aktuellen Platz im Ranking sowie dein Level erfahren.
                            <br />
                            <br />
                            <h3>Coins</h3>
                            Jedes mal, wenn du eine gerade Levelanzahl erreichst, bekommst du automatisch 100 und
                            zweimal dein aktuelles Level als Coins. Mit Coins kannst du sinnlose Commands wie !report
                            nutzen sowie dir z.B. für 50 Coins eine Überraschungskiste kaufen. Darin erwarten dich{' '}
                            <b>*hust*</b> TOLLE
                            <b> *hust*</b> Überraschungen, wie z.B. Gutschein-Codes auf den Kauf deines nächsten
                            Designs!
                        </MainTitle>
                        <LevelEntries />
                    </div>
                </section>
            </div>
        );
    }
}
