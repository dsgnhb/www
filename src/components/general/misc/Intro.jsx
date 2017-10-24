import React from 'react';
import DiscordLink from "./DiscordLink";

export default function Intro(props) {
    let discord = "";

    if (props.discord) {
        discord = <DiscordLink />
    }

    return (
        <section id={props.id}>
            <div className="container">
                <h3>{props.title}</h3>
                <h1>{props.subtitle}</h1>
                <p>
                    {props.children}
                </p>
                {discord}
            </div>
        </section>
    );
}
