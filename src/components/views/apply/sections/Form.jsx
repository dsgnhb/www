import Field from './Field';
import React from 'react';
//false = no crash lol
import Recaptcha from 'react-google-invisible-recaptcha';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.capta = {value: ''};
        this.recapta = {value: null};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
    }

    onResolved() {
        this.recapta.value = this.recaptcha.getResponse();
    }

    postData(url, data) {
        // Default options are marked with *
        return fetch(url, {
            body: JSON.stringify(data),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        })
            .then(response => response.json()) // parses response to JSON
    }

    handleSubmit(event) {
        if ('' === this.capta.value) {
            alert('Fail!');
            this.recaptcha.reset();
            return;
        } else {
            this.recaptcha.execute();
        }

        let values = {
            'about': this['about'].value,
            'age': this['age'].value,
            'discord': this['discord'].value,
            'mail': this['mail'].value,
            'motivation': this['motivation'].value,
            'name': this['name'].value,
            'experiences': this['experiences'].value,
            'references': this['references'].value,
            'twitter': this['twitter'].value,
            'g-recaptcha-response': this.recapta.value,
        };

        console.log(values);
        this.btn.setAttribute('disabled', 'disabled');

        this.postData('http://api.dsgnhb.de/apply', values)
            .then(data => {
                console.log(data)
                // WIP display Validation Errors
            })
            .catch(error => console.error(error));

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field type="small" name="name" label="Dein Vor- & Nachname" r={input => (this.name = input)}>
                    Lukas' Teddybär
                </Field>
                <Field type="number" name="age" label="Dein Alter" r={input => (this.age = input)}>
                    3
                </Field>
                <Field type="small" name="mail" label="E-Mail" r={input => (this.mail = input)}>
                    teddy@lukaas.de
                </Field>
                <Field type="small" name="discord" label="Discord" r={input => (this.discord = input)}>
                    teddy#0815
                </Field>
                <Field type="small" name="twitter" label="Twitter" r={input => (this.twitter = input)}>
                    @teddygommemode
                </Field>
                <Field type="big" name="about-me" label="Über mich" r={input => (this.about = input)} />
                <Field type="big" name="motivation" label="Motivation" r={input => (this.motivation = input)} />
                <Field type="big" name="experience" label="Erfahrungen" r={input => (this.experiences = input)} />
                <Field type="big" name="credentials" label="Referenzen" r={input => (this.references = input)} />

                <button
                    ref={btn => {
                        this.btn = btn;
                    }}
                    type="submit">
                    Senden
                </button>
                {
                <Recaptcha
                    ref={ref => (this.recaptcha = ref)}
                    sitekey="PLS INSERT ME :("
                    onResolved={this.onResolved}
                />}
            </form>
        );
    }
}
