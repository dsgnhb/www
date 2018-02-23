import React from 'react';
import {MainTitle} from '../../general/misc/Titles';
import Job from './sections/Job';

export default function Apply() {
    return (
        <div>
            <section id="apply">
                <div className="container">
                    <MainTitle
                        subtitle="Bewerben"
                        title="Werd' ein Teil von designhub"
                        link="/discord"
                        linktitle="Komm auf unseren Discord"
                    >
                        Wir sind designhub, ein junges, engagiertes Team aus ganz Deutschland! Zusammen arbeiten wir
                        ständig an neuen Ideen und Konzepten, um unsere Community durch z.B. Wettbewerbe und andere
                        Aktivitäten noch stärker zu vereinen und zu unterstützen.
                    </MainTitle>
                </div>
            </section>

            <Job active={true} rank="Dev" skills="React und NodeJS ">
                Du beherschst JavaScript wie deine Muttersprache, träumst in Klassen und auch MySQL jagt dir keine Angst
                ein? Dann liebst du auch TypeScript und vertraust auf Travis CI? Du willst mithelfen, eine
                unvergleichliche Community aufzubauen? - <b>Dann bewirb' dich doch als Developer.</b> Wir suchen
                begeisterte Entwickler, die motiviert sind, sich weiter zu entwickeln und ihre kreative Ideen in unsere
                Projekte einfließen zu lassen. Für die Arbeit an unserer Website, Discord-Bot und API setzten wir eine
                Arbeit mit NodeJS-Frameworken wie "express" oder "sequelize" sowie den Umgang mit Frontend-Technologien
                (HTML5, CSS, React) voraus. Außerdem solltest du dich schonmal mit Travis CI beschäftigt haben.
            </Job>
        </div>
    );
}
