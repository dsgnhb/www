import React from 'react';

export default function Intro(props) {
    let extra = "";
    let text = props.children;

    if (props.text) {
        extra = props.children;
        text = props.text;
    }

    return (
        <section id={props.id}>
            <div className="container">
                <h3>{props.title}</h3>
                <h1>{props.subtitle}</h1>
                <p>
                    {text}
                </p>
                {extra}
            </div>
        </section>
    );
}
