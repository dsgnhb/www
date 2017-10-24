import React from 'react';

export default function Text(props) {
    let title = "";
    let subtitle = "";
    if (props.title) {
        title = <h1>{props.title}</h1>;
    }
    if (props.subtitle) {
        subtitle = <h3>{props.subtitle}</h3>
    }

    return (
        <div>
            {subtitle}
            {title}
            <p>
                {props.children}
            </p>
        </div>
    );
}
