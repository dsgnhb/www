import React from 'react';
import {SectionTitle} from '../../../general/misc/Titles';

export default function Gradients() {
    return (
        <section id="gradients">
            <div className="container">
                <SectionTitle subtitle="Verläufe" title="Smoooooth af">
                    Bunte, lebendige Verläufe stehen in hohem Kontrast mit der übrigen schwarz-weißen Farbgestaltung und
                    heben wichtige Inhalte besonders hervor.
                </SectionTitle>
                <div className="content">
                    <div className="flex-list icons">
                        <Gradient color="blue" from="#478CBE" to="#59E4DA" name="Blau-T&uuml;rkis" />
                        <Gradient color="orange" from="#ECD95B" to="#EF5F52" name="Gelb-Orange" />
                        <Gradient color="green" from="#BCF265" to="#75DFA1" name="Gr&uuml;n-Blau" />
                        <Gradient color="gray" from="#C1C1C1" to="#767676" name="Grau-Grau" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Gradient(props) {
    return (
        <div className="item">
            <div className={`example gradient ${props.color} flex-center-center`}>
                <h4>
                    {props.from}
                    <br />
                    {props.to}
                </h4>
            </div>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
