import React from 'react';

export default function Stats() {
    return (
        <section id="stats">
            <div className="container flex-list icons">
                <Fact id="one" data="200+" name="Member">
                    Lorem ipsum dolor sit amet, consetetur sadipscing lolkas stinkt, sed diam nonumy erat
                </Fact>
                <Fact id="two" data="437" name="Nachrichten pro Tag">
                    Lorem ipsum dolor sit amet, consetetur sadipscing lolkas stinkt, sed diam nonumy erat
                </Fact>
                <Fact id="three" data="1234" name="Irgndne Statistik">
                    Lorem ipsum dolor sit amet, consetetur sadipscing lolkas stinkt, sed diam nonumy erat
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
