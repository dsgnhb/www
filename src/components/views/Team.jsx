import React from 'react';
import {SectionTitle} from '../general/misc/Titles';

export default function Team() {
    return (
        <section id="team">
            <div className="container">
                <SectionTitle id="Team" title="Irgendwas mit designhub Team">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd
                    gubergren.
                </SectionTitle>
                <div className="content">
                    <Role name="Owner">
                        <TeamMember name="Flo" activity="alles">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="Lukas" activity="alles was keinen Spaß macht">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                    </Role>
                    <Role name="Design">
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="Flo" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                    </Role>
                    <Role name="Dev">
                        <TeamMember name="Fin" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
                        </TeamMember>
                        <TeamMember name="LukvonStrom" activity="Web Developer">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy erat
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
            <p>
                {props.children}
            </p>
        </div>
    );
}
