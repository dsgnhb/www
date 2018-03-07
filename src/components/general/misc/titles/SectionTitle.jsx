import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MainLink from './MainLink';

export default class SectionTitle extends Component {
    static propTypes = {
        children: PropTypes.any,
        link: PropTypes.any,
        linktitle: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string
    };

    render() {
        let link = '';
        if (this.props.link && this.props.linktitle) {
            link = <MainLink href={this.props.link}>{this.props.linktitle}</MainLink>;
        }

        return (
            <div>
                <h3>{this.props.subtitle}</h3>
                <h2>{this.props.title}</h2>
                <p>{this.props.children}</p>
                {link}
            </div>
        );
    }
}
