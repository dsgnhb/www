import React from 'react';
import { SectionTitle } from '../../../general/misc/Titles';

export default function Job(props) {
    if (props.active) {
        console.log(props.fields);
        return (
            <section id="apply-form">
                <div className="container">
                    <SectionTitle subtitle={props.rank} title={props.skills}>
                        {props.children}
                    </SectionTitle>
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


export function Form(props) {
    return (
        <form action="">
            <Field type="small" name="name" label="Dein Vor- & Nachname">
                Lukas's Teddybär
            </Field>
            <Field type="number" name="age" label="Dein Alter">
                3
            </Field>
            <Field type="small" name="mail" label="E-Mail">
                teddy@lukaas.de
            </Field>
            <Field type="small" name="discord" label="Discord">
                teddy#0815
            </Field>
            <Field type="small" name="twitter" label="Twitter">
                @teddygommemode
            </Field>
            <Field type="big" name="about-me" label="Über mich" />
            <Field type="big" name="motivation" label="Motivation" />
            <Field type="big" name="experience" label="Erfahrungen" />
            <Field type="big" name="credentials" label="Referenzen" />
            <button type="submit">Senden</button>
        </form>
    );
}

export function Field(props) {
    let input;
    switch (props.type) {
        case 'small':
            input = (
                <input type="text" name={props.name} id={`form-${props.id}`} placeholder={props.children} required />
            );
            break;
        case 'number':
            input = (
                <input
                    type="number"
                    name={props.name}
                    id={`form-${props.id}`}
                    min="14"
                    max="100"
                    placeholder={props.children}
                    required
                />
            );
            break;
        case 'big':
            input = (
                <textarea
                    name={props.name}
                    id={`form-${props.id}`}
                    cols="30"
                    rows="6"
                    placeholder={props.children}
                    required
                />
            );
            break;
        default:
            input = (
                <input type="text" name={props.name} id={`form-${props.id}`} placeholder={props.children} required />
            );
            break;
    }
    return (
        <div>
            <label htmlFor="name">{props.label}</label>
            {input}
        </div>
    );
}
