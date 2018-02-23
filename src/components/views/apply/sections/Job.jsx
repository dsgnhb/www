import React from 'react';
import {SectionTitle} from '../../../general/misc/Titles';
import Form from './Form';


export default function Job(props) {
    if (props.active) {
        return (
            <section id="apply-form">
                <div className="container">
                    <SectionTitle
                        subtitle={props.rank}
                        title={props.skills}
                        link={props.link}
                        linktitle={props.linktitle}
                    >
                        {props.children}
                    </SectionTitle>
                    <p className="main prefix">Wir freuen uns auf deine Bewerbung!</p>

                    <div className="content">
                        <Form />
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section id="apply-form">
                <div className="container">
                    <p>Aktuell keine Bewerbunsgphase.</p>
                </div>
            </section>
        );
    }
}
