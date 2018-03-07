import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Role extends Component {
    static propTypes = {
        children: PropTypes.any,
        name: PropTypes.string
    };

    render() {
        return (
            <div className="flex-list icons left">
                <h3 className="part">{this.props.name}</h3>
                {this.props.children}
            </div>
        );
    }
}
