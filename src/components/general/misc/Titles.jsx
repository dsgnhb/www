import React from 'react';
import LinkDuo from './LinkDuo';

export function MainTitle(props) {
    let link = '';
    if (props.link && props.linktitle) {
        link = <MainLink href={props.link}>{props.linktitle}</MainLink>;
    }

    return (
        <div>
            <h3>{props.subtitle}</h3>
            <h1>{props.title}</h1>
            <div className="text">{props.children}</div>
            {link}
        </div>
    );
}

export function SectionTitle(props) {
    let link = '';
    if (props.link && props.linktitle) {
        link = <MainLink href={props.link}>{props.linktitle}</MainLink>;
    }

    return (
        <div>
            <h3>{props.subtitle}</h3>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            {link}
        </div>
    );
}

export function MainLink(props) {
    return (
        <LinkDuo to={props.href} className="main prefix">
            {props.children}
        </LinkDuo>
    );
}
