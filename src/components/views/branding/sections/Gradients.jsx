import React from 'react';
import {SectionTitle} from "../../../general/misc/Titles";

export default function Gradients() {
    return (
        <section id="gradients">
            <div className="container">
                <SectionTitle id="Verläufe" title="Smoooooth af">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat.
                </SectionTitle>
                <div className="content">
                    <div className="flex-list icons">
                        <Gradient id="one" from="#478CBE" to="#59E4DA" name="Blau-T&uuml;rkis">
                            Lorem Ipsum
                        </Gradient>
                        <Gradient id="two" from="#ECD95B" to="#EF5F52" name="Gelb-Orange">
                            Lorem Ipsum
                        </Gradient>
                        <Gradient id="three" from="#BCF265" to="#75DFA1" name="Gr&uuml;n-Blau">
                            Lorem Ipsum
                        </Gradient>
                        <Gradient id="four" from="#C1C1C1" to="#767676" name="Grau-Grau">
                            Lorem Ipsum
                        </Gradient>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Gradient(props) {
    return (
        <div className="item">
            <div className={`example ${props.id} flex-center-center`}>
                <h4>
                    {props.from}<br />{props.to}
                </h4>
            </div>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
