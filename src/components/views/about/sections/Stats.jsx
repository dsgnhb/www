import React from 'react';

export default function Stats() {
    return (
        <section id="stats">
            <div className="container flex-list icons">
                <Fact color="blue" data="300+" name="Member">
                    Das werden dann halt einfach auch noch jeden Tag mehr.
                </Fact>
                <Fact color="orange" data="70+" name="Nachrichten pro Tag">
                    Das's ganz schön viel Spam und bestimmt auch ein paar Gomme-Smileys.
                </Fact>
                <Fact color="green" data="10" name="Teammitglieder">
                    Alle 10 cool, also fast alle, bis auf Lukas halt.
                </Fact>
            </div>
        </section>
    );
}

function Fact(props) {
    return (
        <div className="item">
            <h3 className={`fact gradient text ${props.color}`}>{props.data}</h3>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
