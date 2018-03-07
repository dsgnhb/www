import PropTypes from 'prop-types';
import React, {Component} from 'react';
export default class Feature extends Component {
    static propTypes = {
        children: PropTypes.any,
        id: PropTypes.any,
        name: PropTypes.any
    };

    render() {
        return (
            <div className="item">
                <div className={`icon ${this.props.id}`} />
                <h3>{this.props.name}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
