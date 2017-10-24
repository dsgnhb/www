import React from 'react';

export function Headline(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>
                {props.children}
            </p>
        </div>
    );
}
