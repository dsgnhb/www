import PropTypes from 'prop-types';
import React, {Component} from 'react';
export default class Rule extends Component {
    static propTypes = {
        allowed: PropTypes.any,
        forbidden: PropTypes.any
    };

    render() {
        return (
            <div className="item">
                <h4>Richtig</h4>
                <p>{this.props.allowed}</p>

                <h4>Falsch</h4>
                <p>{this.props.forbidden}</p>
            </div>
        );
    }
}
