import React from 'react';
import {Headline} from "../general/misc/Titles";

export default function Partner() {
    return (
        <div>
            <section id="partner">
                <div className="container">
                    <Headline title="Danke." subtitle="Partner">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren.
                    </Headline>
                    <a className="main prefix" href="#">
                        Falls Du uns auch unterstützen möchtest, kannst Du das hier tun!
                    </a>
                </div>
            </section>
            <PartnerInfo name="Signaltransmitter" task="Hosting" link="signaltransmitter">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren.
            </PartnerInfo>
            <PartnerInfo name="ShortTech" task="Redaktionelle Inhalte" link="shorttech">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren.
            </PartnerInfo>
            <PartnerInfo name="smashFM" task="Musik" link="smashfm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren.
            </PartnerInfo>
        </div>
    );
}

function PartnerInfo(props) {
    return (
        <section id={props.name.toLowerCase()}>
            <div className="container">
                <h3>{props.task}</h3>
                <h2>{props.name}</h2>
                <p>{props.children}</p>
                <a className="main" href={props.link}>Hier geht's zur Website!</a>
            </div>
        </section>
    );
}
