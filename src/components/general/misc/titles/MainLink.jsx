import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinkDuo from '../LinkDuo';

export default class MainLink extends Component {
    static propTypes = {
        children: PropTypes.any,
        link: PropTypes.any,
        linktitle: PropTypes.string,
        subtitle: PropTypes.string,
        title: PropTypes.string
    };

    render() {
        return (
            <LinkDuo to={this.props.href} className="main prefix">
                {this.props.children}
            </LinkDuo>
        );
    }
}
