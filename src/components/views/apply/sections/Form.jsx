import Field from "./Field";
import React from "react";

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        let values = ['about', 'age', 'discord', 'mail', 'motivation', 'name', 'experiences', 'references', 'twitter'].map(i => {return this[i].value});
        console.log(values);
        this.btn.setAttribute("disabled", "disabled");

        // The Send Logic is unimplemented yet, it is WIP

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field type="small" name="name" label="Dein Vor- & Nachname" r={(input) => this.name = input}>
                    Lukas' Teddybär
                </Field>
                <Field type="number" name="age" label="Dein Alter" r={(input) => this.age = input}>
                    3
                </Field>
                <Field type="small" name="mail" label="E-Mail" r={(input) => this.mail = input}>
                    teddy@lukaas.de
                </Field>
                <Field type="small" name="discord" label="Discord" r={(input) => this.discord = input}>
                    teddy#0815
                </Field>
                <Field type="small" name="twitter" label="Twitter" r={(input) => this.twitter = input}>
                    @teddygommemode
                </Field>
                <Field type="big" name="about-me" label="Über mich" r={(input) => this.about = input}/>
                <Field type="big" name="motivation" label="Motivation" r={(input) => this.motivation = input}/>
                <Field type="big" name="experience" label="Erfahrungen" r={(input) => this.experiences = input}/>
                <Field type="big" name="credentials" label="Referenzen" r={(input) => this.references = input}/>
                <button ref={btn => { this.btn = btn; }}  type="submit" >Senden</button>
            </form>
        );
    }

}