import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import isExternal from 'is-url-external';

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
    render() {
        return isExternal(this.props.to) ? (
            // eslint-disable-next-line
            <a target="_blank" href={this.props.to} {...this.props} />
        ) : (
            <Link {...this.props} />
        );
    }
}
