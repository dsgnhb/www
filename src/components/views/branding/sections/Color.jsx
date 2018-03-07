import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class Color extends Component {
    static propTypes = {
        children: PropTypes.any,
        hex: PropTypes.any,
        id: PropTypes.any,
        name: PropTypes.any
    };

    render() {
        return (
            <div className="item">
                <div className={`example ${this.props.id} flex-center-center`}>
                    <h4>{this.props.hex}</h4>
                </div>
                <h3>{this.props.name}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
