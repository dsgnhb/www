import React from 'react';

export function Headline(props) {
    let subtitle = '';

    if (props.subtitle) {
        subtitle = <h3>{props.subtitle}</h3>;
    }

    return (
        <div>
            {subtitle}
            <h1>{props.title}</h1>
            <p>
                {props.children}
            </p>
        </div>
    );
}

export function SectionTitle(props) {
    return (
        <div>
            <h3>{props.id}</h3>
            <h2>{props.title}</h2>
            <p>
                {props.children}
            </p>
        </div>
    );
}
