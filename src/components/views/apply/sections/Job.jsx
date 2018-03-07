import PropTypes from 'prop-types';
import React, {Component} from 'react';
import SectionTitle from '../../../general/misc/titles/SectionTitle';
import Form from './Form';

export default class Job extends Component {
    static propTypes = {
        active: PropTypes.any,
        children: PropTypes.any,
        link: PropTypes.any,
        linktitle: PropTypes.string,
        rank: PropTypes.any,
        skills: PropTypes.any
    };

    render() {
        if (this.props.active) {
            return (
                <section id="apply-form">
                    <div className="container">
                        <SectionTitle
                            subtitle={this.props.rank}
                            title={this.props.skills}
                            link={this.props.link}
                            linktitle={this.props.linktitle}
                        >
                            {this.props.children}
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
}
