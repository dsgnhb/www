import React from 'react';

export default function Stats() {
    return (
        <section id="stats">
            <div className="container flex-list icons">
                <Fact id="one" data="250+" name="Member">
                    Das werden dann halt einfach auch noch jeden Tag mehr.
                </Fact>
                <Fact id="two" data="572" name="Nachrichten pro Tag">
                    Das's ganz schön viel Spam und bestimmt auch ein paar Gomme-Smileys.
                </Fact>
                <Fact id="three" data="1234" name="Irgndne Statistik">
                    0000 0001 0011 0010 0110 0111 0101 0100 1100 1101
                </Fact>
            </div>
        </section>
    );
}

function Fact(props) {
    return (
        <div className="item">
            <h3 className={`fact color ${props.id}`}>{props.data}</h3>
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
