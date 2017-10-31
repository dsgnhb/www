import React from 'react';
import {SectionTitle} from '../general/misc/Titles';

export default function Team() {
    return (
        <section id="team">
            <div className="container">
                <SectionTitle subtitle="Team" title="Irgendwas mit designhub Team">
                    Das ist unser Team. Zusammen arbeiten wir arbeiten ständig an neuen Ideen und Konzepten, um unsere
                    Community durch z.B. Wettbewerbe und andere Aktivitäten noch stärker zu vereinen und zu
                    unterstützen. Du kannst gespannt bleiben!
                </SectionTitle>
                <div className="content">
                    <Role name="Owner">
                        <TeamMember name="Flo" activity="alles">
                            Tschüss, gerne auch auf Youtube abonnieren und 'n Like da lassen.
                        </TeamMember>
                        <TeamMember name="Lukas" activity="alles was keinen Spaß macht">
                            Bei mir ist nichts billig sondern alles MEGA OP
                        </TeamMember>
                    </Role>
                    <Role name="Design">
                        <TeamMember name="bubblespuggy" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </TeamMember>
                        <TeamMember name="Brian" activity="Fotograf, Mediengestalter">
                            Call me when you need me.
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </TeamMember>
                    </Role>
                    <Role name="Dev">
                        <TeamMember name="Fin" activity="Developer">
                            Wenn was nicht funktioniert, schreite ich zur Tat.
                        </TeamMember>
                        <TeamMember name="LukvonStrom" activity="Web Backend Developer">
                            Ich refactore das kurz mal... ups jetzt isses kaputt. Es ist ein Standard, das muss so!!!
                        </TeamMember>
                        <TeamMember name="CreepPlays" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                        </TeamMember>
                    </Role>
                    <Role name="Content">
                        <TeamMember name="Tobi" activity="Professioneller Texteüberleger und Nichtfreiwillig-Arbeiter">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
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
