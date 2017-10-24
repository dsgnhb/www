import React from 'react';
import {Headline} from "../Misc";
import DiscordLink from "../../../general/misc/DiscordLink";

export default function Intro() {
    return (
        <section id="intro">
            <div className="container">
                <Headline title="Wir sind designhub&trade;" subtitle="Hey!">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet
                    clita kasd gubergren.
                </Headline>
                <DiscordLink />
            </div>
        </section>
    );
}
