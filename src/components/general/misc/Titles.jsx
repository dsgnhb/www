import React from 'react';
import {Link} from 'react-router-dom';

export function MainTitle(props) {
    let link = '';
    if (props.link && props.linktitle) {
        link = <MainLink href={props.link}>{props.linktitle}</MainLink>;
    }

    return (
        <div>
            <h3>{props.subtitle}</h3>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
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
        <Link to={props.href} className="main prefix">
            {props.children}
        </Link>
    );
}
