import PropTypes from 'prop-types';
import React, {Component} from 'react';
import SectionTitle from '../general/misc/titles/SectionTitle';

export default class PartnerInfo extends Component {
    static propTypes = {
        children: PropTypes.any,
        link: PropTypes.any,
        name: PropTypes.string,
        task: PropTypes.string
    };

    render() {
        return (
            <section id={this.props.name.toLowerCase()}>
                <div className="container">
                    <SectionTitle
                        subtitle={this.props.task}
                        title={this.props.name}
                        link={this.props.link}
                        linktitle="Hier geht's zur Website"
                    >
                        {this.props.children}
                    </SectionTitle>
                </div>
            </section>
        );
    }
}
