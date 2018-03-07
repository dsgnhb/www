import PropTypes from 'prop-types';
import React, {Component} from 'react';
export default class Donation extends Component {
    static propTypes = {
        children: PropTypes.any,
        name: PropTypes.string,
        url: PropTypes.any
    };

    render() {
        return (
            <div className="item">
                <h3>{this.props.name}</h3>
                <a href={this.props.url}>{this.props.children}</a>
            </div>
        );
    }
}
