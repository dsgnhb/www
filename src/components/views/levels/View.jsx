import React from 'react';
import {Headline} from "../../general/misc/Titles";
import LevelEntries from "./Entries";

export default function Levels() {
    return (
        <div>
            <section id="leaderboard">
                <div className="container">
                    <Headline title="Leaderboard" subtitle="Levels">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren.
                    </Headline>
                    <LevelEntries />
                </div>
            </section>
        </div>
    );
}
