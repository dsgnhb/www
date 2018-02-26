import React from 'react';

export default function LastDonations() {
    return (
        <section id="lastdonations">
            <div className="container">
                <h3>Letzte Donations</h3>
                <h2>Vielen Dank für Eure Unterstützung!</h2>
                <div className="content">
                    <div className="flex-list member">
                        <Donation name="Teax" url="https://twitter.com/teaxofficial">
                            twitter.com/teaxofficial
                        </Donation>
                        <Donation name="Bukii" url="https://twitter.com/pensivecauselov">
                            twitter.com/pensivecauselov
                        </Donation>
                        <Donation name="Kai" url="https://twitter.com/KaiSchallenberg">
                            twitter.com/KaiSchallenberg
                        </Donation>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Donation(props) {
    return (
        <div className="item">
            <h3>{props.name}</h3>
            <a href={props.url}>{props.children}</a>
        </div>
    );
}
