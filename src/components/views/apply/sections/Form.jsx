import Field from './Field';
import React, {Component} from 'react';
//false = no crash lol
import Recaptcha from 'react-google-invisible-recaptcha';
import SweetAlert from 'sweetalert2-react';
import fetcher from '../../../general/providers/fetcher';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onResolved = this.onResolved.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            error_enabled: false,
            error_header: 'Hi, Bug',
            error_message: 'yo bro, u not seein dis',
            error_type: 'success',
            about: 'hi i bims',
            age: 15,
            discord: 'Teddy#1234',
            mail: 'teddy@lukaas.de',
            motivation: 'sehr hoch, immer',
            name: "Lukas' Teddybär",
            experiences: 'krasse Erfahrungen',
            references: 'Meine Referenzen sind krass.',
            twitter: '@teddygommemode'
        };
    }

    onResolved() {
        this.btn.setAttribute('disabled', 'true');
        this.setState({'g-recaptcha-response': this.recaptcha.getResponse()});

        this.postData()
            .then(data => {
                console.log(data);
                if (data.status === 'inserted') {
                    this.btn.innerHTML = 'Gesendet';
                    this.setState({
                        error_enabled: true,
                        error_header: 'Gesendet',
                        error_message: 'Deine Bewerbung wurde erfolgreich versendet!',
                        error_type: 'success'
                    });
                } else {
                    this.setState({
                        error_enabled: true,
                        error_header: 'Error',
                        error_message: data.message,
                        error_type: 'error'
                    });
                    this.btn.removeAttribute('disabled');
                }
            })
            .catch(error => console.error(error));
    }

    postData() {
        let data = {
            about: this.state.about,
            age: this.state.age,
            discord: this.state.discord,
            mail: this.state.mail,
            motivation: this.state.motivation,
            name: this.state.name,
            experiences: this.state.experiences,
            references: this.state.references,
            twitter: this.state.twitter,
            'g-recaptcha-response': this.state['g-recaptcha-response']
        };
        return fetcher('apply', {
            body: JSON.stringify(data),
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer'
        }).then(response => response.json());
    }

    handleInputChange(event) {
        let value = event.target.value;
        let name = event.target.name;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        this.recaptcha.execute();

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field
                    type="small"
                    name="name"
                    label="Dein Vor- & Nachname"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                />
                <Field
                    type="number"
                    name="age"
                    label="Dein Alter"
                    onChange={this.handleInputChange}
                    value={this.state.age}
                />
                <Field
                    type="small"
                    name="mail"
                    label="E-Mail"
                    onChange={this.handleInputChange}
                    value={this.state.mail}
                />
                <Field
                    type="small"
                    name="discord"
                    label="Discord"
                    onChange={this.handleInputChange}
                    value={this.state.discord}
                />
                <Field
                    type="small"
                    name="twitter"
                    label="Twitter"
                    onChange={this.handleInputChange}
                    value={this.state.twitter}
                />
                <Field
                    type="big"
                    name="about"
                    label="Über mich"
                    onChange={this.handleInputChange}
                    value={this.state.about}
                />
                <Field
                    type="big"
                    name="motivation"
                    label="Motivation"
                    onChange={this.handleInputChange}
                    value={this.state.motivation}
                />
                <Field
                    type="big"
                    name="experiences"
                    label="Erfahrungen"
                    onChange={this.handleInputChange}
                    value={this.state.experiences}
                />
                <Field
                    type="big"
                    name="references"
                    label="Referenzen"
                    onChange={this.handleInputChange}
                    value={this.state.references}
                />
                <div>
                    <button
                        ref={btn => {
                            this.btn = btn;
                        }}
                        type="submit"
                    >
                        Senden
                    </button>
                    <SweetAlert
                        show={this.state.error_enabled}
                        title={this.state.error_header}
                        text={this.state.error_message}
                        type={this.state.error_type}
                        onConfirm={() => this.setState({error_enabled: false})}
                    />
                </div>
                <Recaptcha
                    ref={ref => (this.recaptcha = ref)}
                    sitekey="6LeuMkgUAAAAALG6ATYfXGKYa_I_XhTr7uKM5X8L"
                    onResolved={this.onResolved}
                />
            </form>
        );
    }
}
