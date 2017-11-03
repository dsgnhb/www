import React from 'react';
import {SectionTitle} from '../general/misc/Titles';

export default function Team() {
    return (
        <section id="team">
            <div className="container">
                <SectionTitle subtitle="Team" title="Irgendwas mit designhub Team">
                    Das ist unser Team. Zusammen arbeiten wir ständig an neuen Ideen und Konzepten, um unsere Community
                    durch z.B. Wettbewerbe und andere Aktivitäten noch stärker zu vereinen und zu
                    unterstützen. Du kannst gespannt bleiben!
                </SectionTitle>
                <div className="content">
                    <Role name="Owner">
                        <TeamMember name="Flo" activity="alles">
                            Wir wollten das eigentlich professionell machen, dann kam Lukas.
                        </TeamMember>
                        <TeamMember name="Lukas" activity="Bestimmer über alles (rein theoretisch)">
                            ich verbrenne dein Dorf - auch wenn da Villager drinnen sind. das is mir jz egal.
                        </TeamMember>
                    </Role>
                    <Role name="Design">
                        <TeamMember name="bubblespuggy" activity="Grafik Designer">
                            :gomme:
                        </TeamMember>
                        <TeamMember name="Brian" activity="Fotograf, Mediengestalter">
                            16, Herford, Deutschland
                        </TeamMember>
                        <TeamMember name="reaxoz" activity="Grafik Designer">
                            Habe gestern im Bus einem Blinden meinen Platz angeboten.
                        </TeamMember>
                        <TeamMember name="RadeArtz" activity="Motion Designer">
                            Inaktiv auf YouTube, trotzdem gerne bestellen.
                        </TeamMember>
                    </Role>
                    <Role name="Dev">
                        <TeamMember name="Fin" activity="Developer">
                            Wenn was nicht funktioniert, schreite ich zur Tat.
                        </TeamMember>
                        <TeamMember name="LukvonStrom" activity="Developer">
                            Mache so Dinge im Interwebs. Es ist ein Standard, das muss so! Folgt mir auf Twitter.
                        </TeamMember>
                        <TeamMember name="CreepPlays" activity="Developer">
                            $ su -hack && rm -rf / --no-preserve-root
                        </TeamMember>
                    </Role>
                    <Role name="Content">
                        <TeamMember name="Tobi" activity="Professioneller Texteüberleger und Nichtfreiwillig-Arbeiter">
                            Was den hier los?!
                        </TeamMember>
                        <TeamMember name="Teax" activity="Developer, (Web)Designer">
                            Meine Mama hat mich lieb.
                        </TeamMember>
                    </Role>
                </div>
            </div>
        </section>
    );
}

function Role(props) {
    return (
        <div className="flex-list member">
            <h3 className="part">{props.name}</h3>
            {props.children}
        </div>
    );
}

function TeamMember(props) {
    return (
        <div className="item">
            <h3>{props.name}</h3>
            <h4>{props.activity}</h4>
            <p>{props.children}</p>
        </div>
    );
}
