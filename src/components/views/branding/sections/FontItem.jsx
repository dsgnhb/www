import PropTypes from 'prop-types';
import React, {Component} from 'react';
export default class FontItem extends Component {
    static propTypes = {
        children: PropTypes.any,
        id: PropTypes.any,
        name: PropTypes.any,
        weight: PropTypes.any
    };

    render() {
        return (
            <div className="item">
                <div className={`example ${this.props.id}`}>
                    <h4>Aa Zz</h4>
                </div>
                <h3>{this.props.name}</h3>
                <h4>{this.props.weight}</h4>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
