import PropTypes from 'prop-types';
import React, {Component} from 'react';
export default class Gradient extends Component {
    static propTypes = {
        children: PropTypes.any,
        color: PropTypes.any,
        from: PropTypes.any,
        name: PropTypes.any,
        to: PropTypes.any
    };

    render() {
        return (
            <div className="item">
                <div className={`example gradient ${this.props.color} flex-center-center`}>
                    <h4>
                        {this.props.from}
                        <br />
                        {this.props.to}
                    </h4>
                </div>
                <h3>{this.props.name}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
