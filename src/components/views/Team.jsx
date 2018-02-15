import React from 'react';
import {SectionTitle} from '../general/misc/Titles';
import LinkDuo from '../general/misc/LinkDuo';

export default function Team() {
    return (
        <section id="team">
            <div className="container">
                <SectionTitle subtitle="Team" title="Irgendwas mit designhub Team">
                    Das ist unser Team. Zusammen arbeiten wir ständig an neuen Ideen und Konzepten, um unsere Community
                    durch z.B. Wettbewerbe und andere Aktivitäten noch stärker zu vereinen und zu unterstützen. Du
                    kannst gespannt bleiben!
                </SectionTitle>
                <div className="content">
                    <Role name="Owner">
                        <TeamMember name="Flo" activity="alles" link="https://flooo.me">
                            Wir wollten das eigentlich professionell machen, dann kam Lukas.
                        </TeamMember>
                        <TeamMember
                            name="Lukas"
                            activity="Bestimmer über alles (rein theoretisch) und Musikbot-DJ"
                            link="https://lukaas.de"
                        >
                            ich verbrenne dein Dorf - auch wenn da Villager drinnen sind. das is mir jz egal.
                        </TeamMember>
                    </Role>
                    <Role name="Design">
                        <TeamMember name="Tim" activity="Designer / App-Developer">
                            Guckt vielleicht ein bisschen zu viel Netflix.
                        </TeamMember>
                        <TeamMember name="Brian" activity="Fotograf, Mediengestalter">
                            16, Herford, Deutschland
                        </TeamMember>
                        <TeamMember name="Matthias" activity="Icon Designer und so">
                            Meine Mama hat mich lieb.
                        </TeamMember>
                    </Role>
                    <Role name="Dev">
                        <TeamMember name="LukvonStrom" activity="Backend-Developer">
                            17, Mache so Dinge im Interwebs und nebenbei ein bisschen Schule :^)
                        </TeamMember>
                        <TeamMember name="Alex" activity="Server-Wieder-Richtig-Macher">
                            $ su -hack && rm -rf / --no-preserve-root
                        </TeamMember>
                    </Role>
                    <Role name="Content">
                        <TeamMember
                            name="Tobi"
                            activity="Professioneller Texteüberleger und Nichtfreiwillig-Arbeiter und Meme-Designer und TopDesign-Verlierer"
                        >
                            Was denn hier los?!
                        </TeamMember>
                    </Role>
                </div>
            </div>
        </section>
    );
}

function Role(props) {
    return (
        <div className="flex-list icons left">
            <h3 className="part">{props.name}</h3>
            {props.children}
        </div>
    );
}

export function TeamMember(props) {
    if (props.link) {
        return (
            <div className="item">
                <div className={`icon ${props.id}`} />
                <LinkDuo to={props.link}>
                    <h3>{props.name}</h3>
                </LinkDuo>
                <h4>{props.activity}</h4>
                <p>{props.children}</p>
            </div>
        );
    } else {
        return (
            <div className="item">
                <div className={`icon ${props.id}`} />
                <h3>{props.name}</h3>
                <h4>{props.activity}</h4>
                <p>{props.children}</p>
            </div>
        );
    }
}
